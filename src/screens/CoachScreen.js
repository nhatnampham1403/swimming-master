import React from 'react'

import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import ResultsList from "../components/WorkoutVideoList";

const videos = [
    {
        id                    : 1,
        url                   : 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        name                  : 'Freestyle',
        playableDurationMillis: 10000,
    },
    {
        id                    : 2,
        url                   : 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        name                  : 'Butterfly',
        playableDurationMillis: 10000,

    },
    {
        id                    : 3,
        url                   : 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        name                  : 'Backstroke',
        playableDurationMillis: 10000,
    },
];
const CoachScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your plan</Text>
            <View style={styles.containerImage}>
                <ImageBackground
                    style={styles.image}
                    source={require('../../assets/manswim.jpeg')}
                >
                    <Text style={styles.label}>START YOUR PLAN</Text>
                </ImageBackground>
            </View>
            <View>
                <ResultsList results={videos}
                             title="EXAMPLE WORKOUTS"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image         : {
        width       : 350,
        height      : 200,
        margin      : 30,
        borderRadius: 10,
    },
    title         : {
        fontSize    : 28,
        fontWeight  : 'bold',
        color       : 'white',
        margin      : 20,
        alignContent: 'flex-end',

    },
    label         : {
        fontSize    : 20,
        fontWeight  : 'bold',
        marginLeft      : 20,
        marginTop : 10,
        alignSelf : 'flex-start'

    },
    container     : {
        backgroundColor: 'midnightblue',
        flexDirection  : 'column',
    },
    containerImage: {
        backgroundColor: 'darkblue',
        flexDirection  : 'column',
        alignItems     : 'center',
    }
})

export default CoachScreen;
