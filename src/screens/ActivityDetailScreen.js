import React from 'react'

import {View, StyleSheet, ScrollView} from 'react-native';
import HeartRateChart from "../components/HeartRateChart";
import StrockChart from "../components/StrockChart";
import LapsChart from "../components/LapsChart";
import SwoftChart from "../components/SwoftChart";

const ActivityDetailScreen = ({navigation}) => {
    const activity = navigation.getParam('activity');

    return (
        <>
            <View>
                <ScrollView>
                    <HeartRateChart activity={activity}/>

                    <LapsChart activity={activity}/>
                    <SwoftChart activity={activity}/>
                    <StrockChart activity={activity}/>
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({})

export default ActivityDetailScreen;
