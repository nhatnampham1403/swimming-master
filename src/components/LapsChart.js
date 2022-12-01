import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Dimensions, TouchableOpacity, Alert
} from 'react-native';
import {BarChart} from "react-native-chart-kit";
import {FontAwesome} from "@expo/vector-icons";

const LapsChart = ({activity}) => {

    const data = activity.sessions[0].laps.map(lap => lap.total_timer_time);
    return (
        <View>
            <View style={styles.containerTitle}>
                <View style={styles.containerTitleStart}>
                    <Text style={styles.text}>Thời gian bơi mỗi vòng (tính theo giây)</Text>
                </View>
                <View style={styles.containerTitleEnd}>
                    <TouchableOpacity onPress={() => Alert.alert(
                        "Lap - Số vòng là gì?",
                        `Người bơi có thể sử dụng thuật ngữ này để đại diện cho "qua lại" – hai lần độ dài. Garmin tránh sử dụng thuật ngữ bơi này vì nó rất dễ bị nhầm lẫn giữa khái niệm số vòng trong hoạt động chạy bộ và đạp xe ,và có thể gây nhầm lẫn với việc sử dụng nút Lap.`,
                        [
                            {
                                text   : "OK",
                                onPress: () => console.log("OK Pressed")
                            }
                        ]
                    )}>
                        <FontAwesome name="question-circle-o" size={24}
                                     color="#4E4B66"/>
                    </TouchableOpacity>
                </View>
            </View>
            <BarChart
                data={{
                    datasets: [
                        {
                            data: data,
                        },

                    ],
                    config  : {barWidth: 1},

                }}
                maxValue={500}
                minValue={0}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                    backgroundColor       : 'white',
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo  : 'white',
                    decimalPlaces         : 0,
                    color                 : (opacity = 1) => `#1B9BAA`,
                    labelColor            : (opacity = 1) => `#77838F`,
                    style                 : {
                        borderRadius: 1,
                    },
                    barPercentage         : 0.8,
                }}
                style={{
                    marginVertical: 1,
                    borderRadius  : 1,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex         : 1,
        flexDirection: 'row',
    },
    containerTitle     : {
        flexDirection: 'row',
    },
    containerTitleStart: {
        flex          : 1,
        flexDirection : 'row',
        justifyContent: 'flex-start',
    },
    containerTitleEnd  : {
        flex          : 1,
        flexDirection : 'row',
        justifyContent: 'flex-end',
    },
    header: {
        color         : '#1E2022',
        fontSize : 14,
    },
    button   : {
        flex           : 1,
        height         : 50,
        alignItems     : 'center',
        justifyContent : 'center',
        backgroundColor: 'red',
        borderWidth    : 0.5,
        borderColor    : 'black',

    }
})

export default LapsChart;
