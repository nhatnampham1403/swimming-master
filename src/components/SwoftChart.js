import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Dimensions, TouchableOpacity, Alert
} from 'react-native';
import {BarChart} from "react-native-chart-kit";
import {FontAwesome} from "@expo/vector-icons";

const SwoftChart = ({activity}) => {
    const lengths=[];
    for (const lap of activity.sessions[0].laps) {
        lengths.push(...lap.lengths);
    }
    const data = lengths.map(length => length.total_timer_time + length.total_strokes);
    // console.log("data",data);
    return (
        <View>
            <View style={styles.containerTitle}>
                <View style={styles.containerTitleStart}>
                    <Text style={styles.text}>{`Số sải tay - SWOLF (/${activity.sessions[0].pool_length}m)`}</Text>
                </View>
                <View style={styles.containerTitleEnd}>
                    <TouchableOpacity onPress={() => Alert.alert(
                        "SWOLF là gì?",
                        `SWOLF = T (thời gian bơi, tính bằng giây) + M (số chu kỳ tay quạt)

Ví dụ, bạn bơi 50m hết 40 giây (T = 40) và cần 30 chu kỳ tay để bơi hết chiều dài đó (M = 30). 
Vậy điểm số SWOLF = 40 + 30 = 70`,
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
                yAxisLabel={''}
                chartConfig={{
                    backgroundColor       : 'white',
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo  : 'white',
                    decimalPlaces         : 0,
                    color                 : (opacity = 1) => `#5D7AF2`,
                    labelColor            : (opacity = 1) => `#77838F`,
                    style                 : {
                        borderRadius: 1,
                    },
                    barPercentage         : 0.3,
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

export default SwoftChart;
