import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ResultDetail from "./WorkoutVideoDetail";
import {withNavigation} from "react-navigation";
import Spacer from "./Spacer";

const WorkoutVideoList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Spacer/>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <ResultDetail result={item}/>
                    );
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
        color: 'white',

    },
    container: {
        // marginTop:20,
        marginBottom: 10,

    }
});

export default withNavigation(WorkoutVideoList);
