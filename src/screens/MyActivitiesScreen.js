import React, {useContext, useState} from 'react'

import {
    View,
    StyleSheet,
    ScrollView,
    Modal,
    Image,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} from 'react-native';
import {Context as ArchivementContext} from "../context/ArchivementContext";
import {Context as ActivityContext} from "../context/ActivityContext";
import {NavigationEvents} from "react-navigation";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import {Buffer} from "buffer";
import ArchivementTable from "../components/ArchivementTable";
import AchivementBadge from "../components/AchivementBadge";
import LastActivities from "../components/LastActivities";
import {Text} from "@rneui/base";
import Spinner from 'react-native-loading-spinner-overlay';


const MyActivitiesScreen = ({navigation}) => {
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [modal3Visible, setModal3Visible] = useState(false);
    const [modal4Visible, setModal4Visible] = useState(false);

    let activityContext = useContext(ActivityContext);
    const {
        fetchDayActivities,
        addActivities,
    } = activityContext;

    let archivementContext = useContext(ArchivementContext);
    const {
        state,
        fetchArchivements,
        fetchLevel,
    } = archivementContext;

    function getBlurRadiuses(level) {
        switch (level) {
            case 0:
                return [
                    4,
                    4,
                    4,
                    4
                ];
            case 1:
                return [
                    0,
                    4,
                    4,
                    4
                ];
            case 2:
                return [
                    0,
                    0,
                    4,
                    4,
                ];
            case 3:
                return [
                    0,
                    0,
                    0,
                    4
                ];
            case 4:
                return [
                    0,
                    0,
                    0,
                    0,
                ];

        }
        return [
            4,
            4,
            4,
            4,
        ];
    }

    const handleDocumentSelection = async () => {
        // console.log('handleDocumentSelection');
        let result = await DocumentPicker.getDocumentAsync({});
        // alert(result.uri);
        // console.log(result);
        const b64string = await FileSystem.readAsStringAsync(result.uri, {encoding: FileSystem.EncodingType.Base64});
        const content = Buffer.from(b64string, 'base64');
        // console.log(content);

        // Create a FitParser instance (options argument is optional)
        const FitParser = require('fit-file-parser').default;
        const fitParser = new FitParser({
            force             : true,
            speedUnit         : 'km/h',
            lengthUnit        : 'km',
            temperatureUnit   : 'kelvin',
            elapsedRecordField: true,
            mode              : 'cascade',
        });

        // Parse your file
        fitParser.parse(content, async function (error, data) {
            // Handle result of parse method
            if (error) {
                console.error(error);
            } else {
                // console.log(JSON.stringify(data));
                Alert.alert(
                    "Thông báo",
                    `Nhập dữ liệu từ file FIT thành công!`,
                    [
                        {
                            text   : "OK",
                            onPress: () => console.log("OK Pressed")
                        }
                    ]
                );
                const newLevel = await addActivities(data.activity);
                await fetch();

                if (newLevel) {
                    switch (newLevel) {
                        case 1:
                            setModal1Visible(true);
                            break;
                        case 2:
                            setModal2Visible(true);
                            break;
                        case 3:
                            setModal3Visible(true);
                            break;
                        case 4:
                            setModal4Visible(true);
                            break;
                    }
                    // await fetch();

                }
            }

        });
        // hideMenu();
    }
    const fetch = async () => {
        setIsLoading(true);
        try {
            await fetchArchivements();
            await fetchLevel();
            await fetchDayActivities();
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    const [isLoading, setIsLoading] = useState(false);
    return <View>

        <NavigationEvents onWillFocus={fetch}/>
        <ScrollView>
            <View>
                <View style={styles.mainContainer}>
                    <LastActivities activities={activityContext.state} title="Last Activities"/>
                </View>
                <AchivementBadge blurRadiuses={getBlurRadiuses(state.level)}/>
                {/*<View style={styles.containerActivity}>*/}
                    <ArchivementTable title="Thành tích cá nhân"
                                      results={state.archivements}
                                      onImportPress={handleDocumentSelection}/>
                {/*</View>*/}

            </View>
        </ScrollView>
        <Modal animationType={"slide"} transparent={false}
               visible={modal1Visible}>
            <View style={styles.modal}>
                <Image
                    style={{
                        width : 120,
                        height: 160
                    }}
                    source={require('../../assets/level1Medal.png')}
                />
                <Text style={styles.text}>Bạn đã bơi 20km và vượt qua
                    level 1 để dành được huy chương đầu tiên</Text>

                <TouchableHighlight style={styles.touchableButton}
                                    onPress={() => setModal1Visible(false)}>
                    <Text style={styles.text}>OK</Text>
                </TouchableHighlight>
            </View>
        </Modal>
        {/*2*/}
        <Modal animationType={"slide"} transparent={false}
               visible={modal2Visible}>
            <View style={styles.modal}>
                <Image
                    style={{
                        width : 120,
                        height: 160
                    }}
                    source={require('../../assets/level2Medal.png')}
                />
                <Text style={styles.text}>Bạn cần bơi 50km để dành được
                    huy chương level 2</Text>

                <TouchableHighlight style={styles.touchableButton}
                                    onPress={() => setModal2Visible(false)}>
                    <Text style={styles.text}>OK</Text>
                </TouchableHighlight>
            </View>
        </Modal>
        {/*3*/}
        <Modal animationType={"slide"} transparent={false}
               visible={modal3Visible}>
            <View style={styles.modal}>
                <Image
                    style={{
                        width : 120,
                        height: 180
                    }}
                    source={require('../../assets/level3Medal.png')}
                />
                <Text style={styles.text}>Bạn cần bơi 100km để dành được
                    huy chương level 3</Text>

                {/*<TouchableHighlight style={styles.touchableButton}
                                    onPress={() => setModal3Visible(false)}>
                    <Text style={styles.text}>OK</Text>
                </TouchableHighlight>*/}
            </View>
        </Modal>
        {/*4*/}
        <Modal animationType={"slide"} transparent={false}
               visible={modal4Visible}>
            <View style={styles.modal}>
                <Image
                    style={{
                        width : 140,
                        height: 160
                    }}
                    source={require('../../assets/level4Medal.png')}
                />
                <Text style={styles.text}>Bạn cần bơi 150km để dành được
                    huy chương level 4</Text>

                <TouchableHighlight style={styles.touchableButton}
                                    onPress={() => setModal4Visible(false)}>
                    <Text style={styles.text}>OK</Text>
                </TouchableHighlight>
            </View>
        </Modal>
        {/*<TouchableHighlight style={styles.touchableButton}*/}
        {/*                    onPress={() => {*/}
        {/*                        setModal1Visible(true)*/}
        {/*                    }}>*/}
        {/*    <Text style={styles.text}>Open Modal</Text>*/}
        {/*</TouchableHighlight>*/}
        {/*<ActivityIndicator size="small" color="#0000ff" animating={isLoading} />*/}
        <Spinner
            visible={isLoading}
            textContent={'Hãy chờ...'}
            textStyle={styles.spinnerTextStyle}
        />
    </View>
};


const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF',
    },
    textHeader     : {
        fontSize   : 18,
        color      : '#FFFFFF',
        fontWeight : 'bold',
        paddingLeft: 5,
    },
    textHeaderSmall: {
        fontSize   : 14,
        color      : '#FFFFFF',
        paddingLeft: 5,
    },
    container      : {
        // flex           : 8,
        // flexDirection  : 'column',
        // alignItems     : 'center',
    },
    mainContainer  : {
        padding   : 10,
        alignItems: 'center',
    },

    menuContainer      : {
        height    : '10%',
        alignItems: 'flex-start',
        margin    : 10,
    },
    menuButtonContainer: {
        flexDirection: 'row',
        height       : '10%',
        alignItems   : 'flex-start',
        margin       : 10,
    },
    menuButton         : {
        fontSize       : 24,
        fontWeight     : 'bold',
        color          : 'white',
        backgroundColor: 'green',
        padding        : 15, // borderRadius   : 25,
        // overflow       : 'hidden',

    },
    icon               : {
        // color          : 'white',
        backgroundColor: 'green',
        padding        : 15,
        borderRadius   : 25,
        overflow       : 'hidden',

    },

    textBig             : {
        fontSize    : 18,
        fontWeight  : 'bold',
        color       : 'white',
        textAlign   : 'center',
        marginLeft  : 80,
        marginRight : 80,
        marginTop   : 20,
        marginBottom: 20,

    },
    textNormal          : {
        fontSize   : 14,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textHuge            : {
        fontSize   : 40,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textLink            : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,

    },
    textUpper           : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'green',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,

    },
    buttonGroupContainer: {
        backgroundColor: "blue",
        color          : "yellow",
        textAlign      : "center", // paddingVertical : 5,
        marginBottom   : 10,
        width          : 300,
    },
    video               : {
        width : 100,
        height: 100,
    },
    buttonContainer     : {
        flex           : 1,
        backgroundColor: "blue",
        flexDirection  : 'column',
        alignItems     : 'center',
    },
    button              : {
        width          : 250,
        height         : 60,
        marginBottom   : 20,
        backgroundColor: "mediumturquoise",

    },

    /*container: {
        flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20
    },*/
    modal          : {
        flex           : 1,
        alignItems     : 'center',
        backgroundColor: '#5D7AF2',
        justifyContent : 'center',
        padding        : 10,
    },
    text           : {
        color     : '#fff',
        fontSize  : 20,
        textAlign : 'center',
        fontWeight: 'bold',
    },
    touchableButton: {
        width          : '70%',
        padding        : 10,
        backgroundColor: '#5D7AF2',
        borderColor    : 'white',
        borderWidth    : 1,
        marginBottom   : 10,
        marginTop      : 30,
    },
})


export default MyActivitiesScreen;
