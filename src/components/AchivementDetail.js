import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import {Icon} from "react-native-elements";

const AchivementDetail = ({achivement}) => {
    return (
        <View style={styles.container}>
            <Text>{achivement.type}</Text>
            <Icon
                raised
                name="plus-circle"
                type="feather"
                color='#517fa4'
                size="10"
                onPress={() => console.log('hello')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems    : 'center',
        marginLeft    : 10,
    },
    image    : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    video    : {
        width : 100,
        height: 100,
    },
    text     : {
        fontSize: 16,
        weight  : 'bold',
        color   : 'purple',
    },
    button     : {
        fontSize: 16,
        weight  : 'bold',
        color   : 'blue',
        foregroundColor : 'blue',
    },
});

export default AchivementDetail;
