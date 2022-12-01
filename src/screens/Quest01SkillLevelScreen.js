import React, {useContext, useState} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground, TouchableHighlight
} from 'react-native';
import NextButton from "../components/NextButton";
import {Context as SwimContext} from "../context/SwimContext";
import {Avatar} from "@rneui/themed";

const Quest01SkillLevelScreen = ({navigation}) => {
    const {
        state,
        setGender
    } = useContext(SwimContext);
    const [gender, genderOnPress] = useState('');
    React.useRef(null);
    const touchProps1 = {
        style: gender === 'Male' ? styles.touched : styles.untouched,
    }
    const touchProps2 = {
        style: gender === 'Female' ? styles.touched : styles.untouched,
    }
    const touchProps3 = {
        style: gender === 'Non-binary' ? styles.touched : styles.untouched,
    }
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

                <Text style={styles.textBold}>How do you identify
                    yourself?</Text>
                <Text style={styles.textRegular}>We ask this to make sure your
                    journey is fun, healthy and balanced</Text>
                <TouchableHighlight {...touchProps1} onPress={() => {
                    genderOnPress('Male');
                }}>
                    <Text style={styles.textButton}>Male</Text>
                </TouchableHighlight>
                <TouchableHighlight {...touchProps2}
                                    onPress={() => {
                                        genderOnPress('Female');
                                    }}>
                    <Text style={styles.textButton}>Female</Text>
                </TouchableHighlight>
                <TouchableHighlight {...touchProps3}
                                    onPress={() => {
                                        genderOnPress('Non-binary');
                                    }}>
                    <Text style={styles.textButton}>Non-binary</Text>
                </TouchableHighlight>
                <NextButton nextScreen='Quest02SkillLevel'
                            navigation={navigation}
                onSubmit={()=>setGender(gender)}>
                </NextButton>
            </View>

        </ImageBackground>
    </View>)
};

Quest01SkillLevelScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    containerPaper: {
        width          : '95%',
        height         : '80%',
        justifyContent : 'center',
        backgroundColor: 'white',
        opacity        : 0.9,
        borderRadius   : 20,
        alignItems     : 'center',
    },
    avatar   : {
        position: 'absolute',
        top     : -70,
    },
    container: {
        flex     : 1,
        marginTop: 50,
    },
    untouched: {
        backgroundColor: '#FFFFFF',
        opacity        : 0.5,
        justifyContent : "center",
        alignItems     : 'center',
        width          : '90%',
        height         : 50,
        marginTop      : 30,
    },

    touched        : {
        backgroundColor: '#145BB6',
        opacity        : 0.5,
        justifyContent : "center",
        alignItems     : 'center',
        width          : '90%',
        height         : 50,
        marginTop      : 30,
    },
    image          : {
        flex          : 1,
        justifyContent: 'center',
        alignItems    : 'center',
        // resizeMode : 'stretch'
    },
    containerButton: {
        backgroundColor: 'lightgray',
        justifyContent : "center",
        alignItems     : 'center',
        width          : '90%',
        height         : 50,
        marginTop      : 10,
    },

    textBold   : {
        fontSize         : 14,
        fontWeight       : 'bold',
        textAlign        : 'center',
        textAlignVertical: "center",
        marginLeft       : 80,
        marginRight      : 80,
    },
    textButton : {
        fontSize  : 20,
        fontWeight: 'bold',
    },
    textRegular: {
        fontSize   : 14,
        textAlign  : 'center',
        marginLeft : 40,
        marginRight: 40,

    },
    textLink   : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,
    },
})

export default Quest01SkillLevelScreen;
