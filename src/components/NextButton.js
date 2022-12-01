import React from 'react'
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";

const NextButton = ({
                        navigation,
                        nextScreen,
                        onSubmit
                    }) => {
    return (// <Button title="Next"
        <Button title="Tiếp tục"
                buttonStyle={styles.button}
                containerStyle={styles.containerButton}
                onPress={() => {
                    if (onSubmit) {
                        onSubmit();
                    }
                    navigation.navigate(nextScreen);
                }}>
        </Button>)
};
const styles = StyleSheet.create({
    button         : {
        width          : 250, // height         : 60,
        backgroundColor: "#145BB6",
        borderRadius   : 10,
    },
    containerButton: {
        position: 'absolute',
        bottom  : 20,
    },

})

export default NextButton;

