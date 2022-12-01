import React from 'react'

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonGroup = ({buttons, callback})=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text>One</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    button: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
        borderWidth: 0.5,
        borderColor: 'black',

    }
})

export default ButtonGroup;
