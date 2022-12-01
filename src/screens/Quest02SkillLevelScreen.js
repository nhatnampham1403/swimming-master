import React, {useContext, useState} from 'react'

import {View, StyleSheet, Text, TextInput, ImageBackground} from 'react-native';
import {Avatar, CheckBox, Icon} from "@rneui/themed";
import NextButton from "../components/NextButton";
import {Context as SwimContext} from "../context/SwimContext";

const Quest02SkillLevelScreen = ({navigation}) => {
    const {
        setHeight,
        setWeight,
    } = useContext(SwimContext);
    return (<View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../../assets/manswim.jpeg')}
            >
                <View style={styles.containerPaper}>
                    <Avatar containerStyle={styles.avatar}
                            source={require("../../assets/goswim.png")}
                            size="xlarge"
                            rounded
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.1}

                    />
                    <Text style={styles.textBold}>Chiều cao và cân nặng</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Chiều cao (cm)'}
                        onChangeText={value => setHeight(value)}/>
                    <TextInput
                        style={styles.input}
                        placeholder={'Cân nặng (kg)'}
                        onChangeText={value => setWeight(value)}/>
                    <NextButton
                        nextScreen='Quest03SkillLevel'
                        navigation={navigation}
                    />

                </View>
            </ImageBackground>
        </View>

    );
};

Quest02SkillLevelScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}


const styles = StyleSheet.create({
    avatar: {
        position: 'absolute',
        top     : -70,
    },

    textBold      : {
        fontSize         : 14,
        fontWeight       : 'bold',
        textAlign        : 'center',
        textAlignVertical: "center",
        marginTop        : 100,
        marginBottom     : 50,
        marginLeft       : 80,
        marginRight      : 80,
    },
    input         : {
        width          : '90%',
        height         : 40,
        margin         : 12, // borderWidth: 1,
        backgroundColor: 'lightgray',
        borderRadius   : 10,
        padding        : 10,
    },
    container     : {
        flex     : 1,
        marginTop: 50,
    },
    containerPaper: {
        width : '95%',
        height: '80%',
        // justifyContent : 'center',
        backgroundColor: 'white',
        opacity        : 0.9,
        borderRadius   : 20,
        alignItems     : 'center',
    },
    image         : {
        flex          : 1,
        justifyContent: 'center',
        alignItems    : 'center',
    },

    textBig   : {
        fontSize    : 18,
        fontWeight  : 'bold',
        color       : 'white',
        textAlign   : 'center',
        marginLeft  : 80,
        marginRight : 80,
        marginTop   : 20,
        marginBottom: 20,

    },
    textNormal: {
        fontSize   : 14,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textHuge  : {
        fontSize   : 40,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginLeft : 80,
        marginRight: 80,

    },
    textUpper : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'green',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,

    },
})

export default Quest02SkillLevelScreen;
