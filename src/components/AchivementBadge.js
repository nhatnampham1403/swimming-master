import React from 'react';
import {
    View,
    StyleSheet,
    Text, Image,
} from 'react-native';
import {Icon} from "react-native-elements";

const AchivementBadge = ({result, blurRadiuses}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{"All badges"}</Text>
            <View style={styles.containerMedal}>
            <Image style={styles.badge} source={require('../../assets/level1Medal.png')} blurRadius={blurRadiuses[0]}/>
            <Image style={styles.badge} source={require('../../assets/level2Medal.png')} blurRadius={blurRadiuses[1]}/>
            <Image style={styles.badge} source={require('../../assets/level3Medal.png')} blurRadius={blurRadiuses[2]}/>
            <Image style={styles.badge} source={require('../../assets/level4Medal.png')} blurRadius={blurRadiuses[3]}/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMedal: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems    : 'center',
    },
    container: {
        width: '100%',
        // height: 200,
        // justifyContent: 'space-between',
        // alignItems    : 'center',
        margin    : 10,
    },
    image    : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    badge    : {
        width       : 40,
        height      : 60,
        margin: 10,
    },
    video    : {
        width : 100,
        height: 100,
    },
    text     : {
        fontSize: 20,
        color   : '#145BB6',
    },
    button     : {
        fontSize: 16,
        weight  : 'bold',
        color   : 'blue',
        foregroundColor : 'blue',
    },
});

export default AchivementBadge;
