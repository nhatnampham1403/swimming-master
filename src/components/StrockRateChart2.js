import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {BarChart, LineChart} from "react-native-chart-kit";

const StrockRateChart2 = ({lengths})=>{
    return (
        <View>
            <Text style={styles.header}>STROCK RATE</Text>
            <BarChart
                data={{
                    datasets: [
                        {
                            data: lengths.map(length => length.total_strokes),
                        },
                    ],
                    config: { barWidth: 0.1 },

                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={''}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 1,
                    },
                    barPercentage: 0.2,
                }}
                style={{
                    marginVertical: 1,
                    borderRadius: 1,
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

export default StrockRateChart2;
