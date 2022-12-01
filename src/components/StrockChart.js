import React from 'react'

import {
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import {seconds2mmss} from "../helper/Date";
import {FontAwesome} from "@expo/vector-icons";

const StrockChart = ({activity})=>{
    function getStrockAndTime() {
        const total_timer_times = [];
        const timer_times = [];
        const strokesForLaps = [];
        for (const lap of activity.sessions[0].laps) {
            const totalTimeEachLap = lap.lengths.reduce((acc, length) => acc + Math.floor(length.total_timer_time), 0);
            const strokesForLap = lap.lengths.reduce((acc, length) => acc + length.total_strokes, 0);
            total_timer_times.push(totalTimeEachLap);
            strokesForLaps.push(strokesForLap);
        }
        timer_times.push(0);
        for (let i = 1; i < total_timer_times.length; i++) {
            const seconds = timer_times[i - 1] + Math.floor(total_timer_times[i]);
            timer_times.push(seconds);
        }
        const timer_times_str = timer_times.map(timer_time => seconds2mmss(timer_time));
        const strokesForMinutes = [];
        for (let i = 0; i < total_timer_times.length; i++) {
            const strokesForMinute = Math.floor(strokesForLaps[i] * 60 / total_timer_times[i]);
            strokesForMinutes.push(strokesForMinute);
        }
        return {
            timer_times_str,
            strokesForMinutes
        };
    }

    const {
        timer_times_str,
        strokesForMinutes
    } = getStrockAndTime();
    return (
        <View>
            <View style={styles.containerTitle}>
                <View style={styles.containerTitleStart}>
                    <Text style={styles.text}>Số sải tay/ mỗi phút - Average Stroke Rater</Text>
                </View>
                <View style={styles.containerTitleEnd}>
                    <TouchableOpacity onPress={() => Alert.alert(
                        "Average Stroke Rate",
                        `Total Stroke là tổng số sải tay bạn đã thực hiện trong cả buổi tập. Average Stroke Rate là số sải tay bạn thực hiện được trong mỗi phút. Maximum Stroke Rate cũng là số sải tay bạn thực hiện được trong mỗi phút nhưng đây là con số kỷ lục cao nhất của bạn. Cuối cùng Average Strokes là số sải tay tính trên từng khoảng cách riêng biệt.`,
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

            <LineChart
                data={{
                    labels: timer_times_str,
                    datasets: [
                        {
                            data: strokesForMinutes
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor       : "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo  : "white",
                    decimalPlaces         : 0, // optional, defaults to 2dp
                    color                 : (opacity = 1) => `#6683FE`,
                    labelColor            : (opacity = 1) => `#77838F`,
                    style                 : {
                        borderRadius: 16
                    },
                    propsForDots          : {
                        r          : "0",
                        strokeWidth: "0",
                        stroke     : "green",
                    }
                }}
                bezier
                style={{
                    marginVertical: 1,
                    // borderRadius: 16
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
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

export default StrockChart;
