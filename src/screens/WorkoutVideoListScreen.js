import React from 'react';
import {StyleSheet, View} from 'react-native';
import ResultsList from "../components/WorkoutVideoList";

const WorkoutVideoListScreen = ({navigation}) => {
    const videos = [
        {
            id: 1,
            url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name: 'Freestyle',
            playableDurationMillis: 10000,
        },
        {
            id: 2,
            url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name: 'Butterfly',
            playableDurationMillis: 10000,

        },
        {
            id: 3,
            url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            name: 'Backstroke',
            playableDurationMillis: 10000,
        },
    ];
    return (
        <View style={styles.container}>
            <ResultsList results={videos}
                         title="EXAMPLE WORKOUTS"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: 'midnightblue',
        flexDirection: 'column',
        alignItems: 'center',
    }, textBig: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 20,
        marginBottom: 20,

    }, textNormal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,

    }, textHuge: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,

    }, textLink: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 80,
        marginRight: 80,

    }, textUpper: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 80,
        marginRight: 80,

    }, buttonGroupContainer: {
        backgroundColor: "blue", color: "yellow", textAlign: "center", // paddingVertical : 5,
        marginBottom: 10, width: 300,
    }, video: {
        width: 100, height: 100,
    }, buttonContainer: {
        flex: 1,
        backgroundColor: "blue",
        flexDirection: 'column',
        alignItems: 'center',
    }, button: {
        width: 250,
        height: 60,
        marginBottom: 20,
        backgroundColor: "mediumturquoise",

    },

})

export default WorkoutVideoListScreen;
