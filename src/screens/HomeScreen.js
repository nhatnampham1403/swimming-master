import React, {useCallback, useContext, useState} from "react";

import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
} from "react-native";
import {Avatar} from "@rneui/themed";
import {Context as AuthContext} from "../context/AuthContext";
import AchivementIndex from "../components/AchivementIndex";
import LastActivities from "../components/LastActivities";
import {Context as ActivityContext} from "../context/ActivityContext";
import {Context as SwimContext} from "../context/SwimContext";
import {NavigationEvents} from "react-navigation";
import Spinner from "react-native-loading-spinner-overlay";

const HomeScreen = ({navigation}) => {
    const {
        state,
        getLastActivities
    } = useContext(ActivityContext);
    const {signout} = useContext(AuthContext);
    let swimContext = useContext(SwimContext);
    const {fetchMaxLevel} = swimContext;

    async function fetch() {
        try {
            setIsLoading(true);
            await getLastActivities();
            await fetchMaxLevel();
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);

    }

    console.log("maxLevel", swimContext.state.maxLevel);
    const [isLoading, setIsLoading] = useState(false);
    return (<>
        <NavigationEvents onWillFocus={fetch}/>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textTitle}>{"Dành cho bạn"}</Text>

                {swimContext.state.maxLevel === 0 && <TouchableOpacity
                    onPress={() => navigation.navigate(/*"BeginLearn"*/"BeginLearnScreen")}
                >
                    <View style={styles.containerImage}>
                        <ImageBackground
                            style={styles.image}
                            source={require('../../assets/storage/imgs/img1.jpg')}
                        >
                            <View style={styles.containerLabel}>
                                <Text style={styles.label}>Beginner</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>}

                {swimContext.state.maxLevel === 1 && <TouchableOpacity
                    onPress={() => navigation.navigate(/*"IntermediateLearn"*/"IntermediateLearnScreen")}
                >
                    <View style={styles.containerImage}>
                        <ImageBackground
                            style={styles.image}
                            source={require('../../assets/storage/imgs/img2.jpg')}
                        >
                            <View style={styles.containerLabel}>
                                <Text style={styles.label}>Intermediate</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>}
                {swimContext.state.maxLevel >= 2 && <TouchableOpacity
                    onPress={() => navigation.navigate(/*"AdvanceLearn"*/"AdvanceLearnScreen")}
                >
                    <View style={styles.containerImage}>
                        <ImageBackground
                            style={styles.image}
                            source={require('../../assets/storage/imgs/img3.jpg')}
                        >
                            <View style={styles.containerLabel}>
                                <Text style={styles.label}>Advance</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>}
                <Text style={styles.textTitle}>{"Hoạt động của bạn"}</Text>

                <View style={styles.containerActivity}>
                    <View style={styles.mainContainer}>
                        <LastActivities activities={state}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            return navigation.navigate("Activities");
                        }}
                    >
                        <View style={styles.containerButton}>
                            <View style={styles.containerTextButton}>
                                <Text style={styles.textButton}>Xem chi
                                    tiết</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signout}>
                        <View style={{
                            ...styles.containerButton,
                            marginTop: 100
                        }}>
                            <View style={styles.containerTextButton}>
                                <Text style={styles.textButton}>Signout</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/*<View
                        style={{
                            flexDirection : "row",
                            justifyContent: "space-around"
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("BeginLearnScreen")}
                        >
                            <View>
                                <Image
                                    source={require("../../assets/storage/imgs/img1.jpg")}
                                    style={{
                                        width : 100,
                                        height: 40
                                    }}
                                />
                                <Text
                                    style={{textAlign: "center"}}>Beginner</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("IntermediateLearnScreen")}
                        >
                            <View>
                                <Image
                                    source={require("../../assets/storage/imgs/img2.jpg")}
                                    style={{
                                        width : 100,
                                        height: 40
                                    }}
                                />
                                <Text
                                    style={{textAlign: "center"}}>Intermediate</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("AdvanceLearnScreen")}
                        >
                            <View>
                                <Image
                                    source={require("../../assets/storage/imgs/img3.jpg")}
                                    style={{
                                        width : 100,
                                        height: 40
                                    }}
                                />
                                <Text
                                    style={{textAlign: "center"}}>Advance</Text>
                            </View>
                        </TouchableOpacity>
                    </View>*/}
                </View>
                <Spinner
                    visible={isLoading}
                    textContent={'Hãy chờ...'}
                    textStyle={styles.spinnerTextStyle}
                />
            </View>
        </ScrollView>
    </>);
};

HomeScreen.navigationOptions = () => {
    return {
        headerTitle: "",
        headerLeft : () => {
            return (<View style={{flexDirection: "row"}}>
                <Avatar
                    source={require("../../assets/avatar1.jpg")}
                    size="small"
                    rounded
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.1}
                />
                <View>
                    <Text style={styles.textHeader}>
                        Chào {useContext(AuthContext).state.username}
                    </Text>
                    <Text style={styles.textHeaderSmall}>
                        Hôm nay {new Date().toLocaleDateString("en-GB")}
                    </Text>
                </View>
            </View>);
        },
    };
};

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF',
    },
    tcontainerImage : {
        alignItems: 'center',
    },
    image           : {
        width       : "100%",
        height      : 200,
        borderRadius: 10,
    },
    label           : {
        fontSize  : 12,
        fontWeight: '700',
        color     : 'white',
    },
    containerLabel  : {
        marginLeft     : 10,
        marginTop      : 10,
        alignSelf      : 'flex-start',
        backgroundColor: '#145BB6',
        padding        : 5,
        borderRadius   : 5,
    },

    textHeader         : {
        fontSize   : 18,
        color      : "#FFFFFF",
        fontWeight : "bold",
        paddingLeft: 5,
    },
    textTitle          : {
        color         : "#145BB6",
        fontSize      : 14,
        fontWeight    : "bold",
        marginTop     : 30,
        marginBottom  : 20,
        justifyContent: "flex-start",
    },
    textHeaderSmall    : {
        fontSize   : 14,
        color      : "#FFFFFF",
        paddingLeft: 5,
    },
    containerTextButton: {
        borderColor   : "blue",
        borderWidth   : 1,
        width         : 200, // height     : 40,
        justifyContent: "center",
        alignItems    : "center",
        padding       : 5,
        paddingLeft   : 10,
        paddingRight  : 10,
    },
    containerButton    : {
        justifyContent: "center",
        alignItems    : "center",
        padding       : 20,
    },
    textButton         : {
        fontSize: 14,
        color   : "black", // width: 200,
        // padding: 5,
        // paddingLeft: 10,
        // paddingRight: 10,
        // borderWidth: 1,
        // justifyContent: "center",
        // alignItems    : "center",
    },
    containerActivity  : {},
    container          : {
        padding: 10,
    },
});

export default HomeScreen;
