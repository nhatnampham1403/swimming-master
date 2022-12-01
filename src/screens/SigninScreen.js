import React, {useContext, useState} from 'react'

import {View, StyleSheet, ImageBackground} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";
import Spacer from "../components/Spacer";
import {Avatar, Button, Input, Text} from "@rneui/themed";

const SigninScreen = () => {
    const {
        state,
        signin,
        clearErrorMessage
    } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return <View style={styles.container}>
        <ImageBackground
            style={styles.image}
            source={require('../../assets/manswim.jpeg')}
        >
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <View style={styles.containerPaper}>
                <Avatar
                    source={require("../../assets/goswim.png")}
                    size="xlarge"
                    rounded
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.1}

                />
                <Spacer/>
                <Input
                    label="Enter username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer/>
                <Input
                    secureTextEntry
                    label="Enter password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {state.errorMessage ? <Text
                    style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                <Spacer>
                    {/*<Button title={"Sign In"}*/}
                    <Button containerStyle={styles.button} color="#145BB6"
                            title={"Đăng nhập"}
                            onPress={() => signin({
                                username,
                                password
                            })}/>
                </Spacer>
                <NavLink
                    routeName="Signup"
                    text="Do not have an account? Sign up instead"
                />
            </View>
        </ImageBackground>
    </View>
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container     : {
        flex     : 1,
        marginTop: 50,
    },
    containerPaper: {
        width          : '95%',
        height         : '80%',
        justifyContent : 'center',
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
    errorMessage  : {
        fontSize  : 16,
        color     : 'red',
        marginLeft: 15,
    },
    button        : {
        color       : "#145BB6",
        width       : 250,
        borderRadius: 10,
    },

})

export default SigninScreen;
