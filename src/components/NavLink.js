import React, {useContext, useState} from 'react'

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from "react-native-elements";
import Spacer from "../components/Spacer";
import {withNavigation} from "react-navigation";

const NavLink = ({
                     navigation,
                     text,
                     routeName
                 }) => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    container   : {
        // flex          : 1,
        // justifyContent: 'center',
        // marginBottom  : 200
    },
    errorMessage: {
        fontSize  : 16,
        color     : 'red',
        marginLeft: 15,
    },
    link        : {
        color: 'blue',
    }

})

export default withNavigation(NavLink);
