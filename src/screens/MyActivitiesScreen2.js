import React, {useCallback, useContext, useState} from 'react'

import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import {Context as ActivityContext} from "../context/ActivityContext";
import {
    Context as ActivitySummaryContext
} from "../context/ActivitySummaryContext";
import LastActivities from "../components/LastActivities";
import {NavigationEvents} from "react-navigation";
import {Avatar} from "@rneui/themed";
import {Context as AuthContext} from "../context/AuthContext";
import AchivementIndex from "../components/AchivementIndex";
import Spinner from "react-native-loading-spinner-overlay/src";


const MyActivitiesScreen2 = ({navigation}) => {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);


    const {
        state,
        fetchWeekActivities,
        addActivities,
    } = useContext(ActivityContext);

    const {
        fetchWeekActivitiesSummary,
    } = useContext(ActivitySummaryContext);

    // const arIndex = {
    //     "avg_heart_rate"    : "115 bpm",
    //     "enhanced_avg_speed": "2p:50m",
    //     "total_calories"    : "288 calories",
    //     "total_distance"    : "0.0016 km",
    //     "total_timer_time"  : "00:34 phút"
    // };
    const fetch = async () => {
        try {
            setIsLoading(true);
            await fetchWeekActivities();
            await fetchWeekActivitiesSummary();
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
                    dateString={"Tuần này (Garmin activities)"}
                    username={useContext(AuthContext).state.username}/>

                <View style={styles.mainContainer}>
                    <LastActivities activities={state} title="Last Activities"/>
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

MyActivitiesScreen2.navigationOptions = (navData) => {
    return {
        headerTitle: "",
        headerLeft : () => {
            return (
                <View style={{flexDirection: "row"}}>

                    <Avatar
                        source={require("../../assets/goswim.png")}
                        size="small"
                        rounded
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
        padding      : 10,
        flex         : 8,
        flexDirection: 'column',
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

})


export default MyActivitiesScreen2;
