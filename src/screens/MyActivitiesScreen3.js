import React, {useCallback, useContext, useState} from 'react'

import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import {Context as ActivityContext} from "../context/ActivityContext";
import LastActivities from "../components/LastActivities";
import {NavigationEvents} from "react-navigation";
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import {Buffer} from "buffer";
import {Ionicons} from "@expo/vector-icons";
import {
    Item,
    HeaderButton,
    HeaderButtons,
} from "react-navigation-header-buttons";
import Quest02SkillLevelScreen from "./Quest02SkillLevelScreen";
import {HeaderTitle} from "react-navigation-stack";
import {Avatar} from "@rneui/themed";
import {Context as AuthContext} from "../context/AuthContext";
import AchivementIndex from "../components/AchivementIndex";
import {
    Context as ActivitySummaryContext
} from "../context/ActivitySummaryContext";
import Spinner from "react-native-loading-spinner-overlay/src";


const MyActivitiesScreen3 = ({navigation}) => {

    const {
        state,
        fetchMonthActivities,
    } = useContext(ActivityContext);
    const {
        fetchMonthActivitiesSummary,
    } = useContext(ActivitySummaryContext);
    const fetch = async () => {
        setIsLoading(true);
        try {
            await fetchMonthActivities();
            await fetchMonthActivitiesSummary();
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);

    }
    const [isLoading, setIsLoading] = useState(false);
    return <>
        <NavigationEvents onWillFocus={fetch}/>
        <View style={styles.container}>
            <ScrollView>
                <AchivementIndex
                    result={useContext(ActivitySummaryContext).state}
                    dateString={"Tháng này (Garmin activities)"}
                    username={useContext(AuthContext).state.username}/>

                <View>
                    <View style={styles.mainContainer}>
                        <LastActivities activities={state}
                                        title="Last Activities"/>
                    </View>
                </View>
            </ScrollView>
            <Spinner
                visible={isLoading}
                textContent={'Hãy chờ...'}
                textStyle={styles.spinnerTextStyle}
            />
        </View>
    < />
};

MyActivitiesScreen3.navigationOptions = (navData) => {
    return {
        headerTitle: "",
        headerLeft : () => {
            return (
                <View style={{flexDirection: "row"}}>

                    <Avatar
                        source={require("../../assets/goswim.png")}
                        size="small"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.1}

                    />
                    <View>
                        <Text
                            style={styles.textHeader}>Chào {useContext(AuthContext).state.username}</Text>
                        <Text style={styles.textHeaderSmall}>Hôm
                            nay {new Date().toLocaleDateString('en-GB')}</Text>
                    </View>
                </View>
            );
        },
    };
};


const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF',
    },
    ttextHeader     : {
        fontSize   : 18,
        color      : '#FFFFFF',
        fontWeight : 'bold',
        paddingLeft: 5,
    },
    textHeaderSmall : {
        fontSize   : 14,
        color      : '#FFFFFF',
        paddingLeft: 5,
    },
    container       : {
        padding: 10,
        // flex           : 8,
        // flexDirection  : 'column',
        // alignItems     : 'center',
    },
    mainContainer   : {
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
        padding        : 15,
        // borderRadius   : 25,
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
        color       : "yellow",
        textAlign   : "center", // paddingVertical : 5,
        marginBottom: 10,
        width       : 300,
    },
    video               : {
        width : 100,
        height: 100,
    },
    buttonContainer     : {
        flex         : 1,
        flexDirection: 'column',
        alignItems   : 'center',
    },
    button              : {
        width          : 250,
        height         : 60,
        marginBottom   : 20,
        backgroundColor: "mediumturquoise",

    },

})


export default MyActivitiesScreen3;
