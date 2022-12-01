import React from 'react'

import {
    View, StyleSheet, Text, TouchableOpacity, Dimensions, Alert
} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import {FontAwesome} from "@expo/vector-icons";

const HeartRateChart = ({activity}) => {
    const data = [];
    for (const lap of activity.sessions[0].laps) {
        for (const record of lap.records) {
            data.push(record.heart_rate);
        }
    }
    return (<View>
        <View style={styles.containerTitle}>
            <View style={styles.containerTitleStart}>
                <Text style={styles.text}>Nhịp tim</Text>
            </View>
            <View style={styles.containerTitleEnd}>
                <TouchableOpacity onPress={() => Alert.alert(
                    "Nhịp tim - Heart rate",
                    `Nhịp tim là thước đo tuyệt vời để đánh giá mức độ nỗ lực và thể lực chung của bạn. Một số vận động viên thích sử dụng các vùng nhịp tim để hướng dẫn việc tập luyện của họ. Trong phương thức đào tạo này, mục tiêu của bạn là duy trì trong một vùng nhịp tim cụ thể hơn là theo một tốc độ cụ thể hoặc thời gian chia nhỏ. `,
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
                datasets: [
                    {
                        data: data,
                    }
                ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={20} // optional, defaults to 1
            chartConfig={{
                backgroundColor       : "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo  : "white",
                decimalPlaces         : 0, // optional, defaults to 2dp
                color                 : (opacity = 1) => `rgba(30, 32, 34, ${opacity})`,
                labelColor            : (opacity = 1) => `#77838F`,
                style                 : {
                    borderRadius: 11
                },
                propsForDots          : {
                    r          : "0",
                    strokeWidth: "0",
                    stroke     : "green",
                }
            }}
            bezier
            style={{
                marginVertical: 1, // borderRadius: 16
            }}
        />
    </View>);
};

const styles = StyleSheet.create({
    container          : {
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
    header             : {
        color   : '#1E2022',
        fontSize: '14px',
    },
    text               : {
        color   : '#1E2022',
        fontSize: 14,

    },
    button             : {
        flex           : 1,
        height         : 50,
        alignItems     : 'center',
        justifyContent : 'center',
        backgroundColor: 'red',
        borderWidth    : 0.5,
        borderColor    : 'black',

    }
})

export default HeartRateChart;
