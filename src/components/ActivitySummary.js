import React, {useContext} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "./Spacer";
import {Avatar} from "@rneui/themed";
import {seconds2mmss} from "../helper/Date";

function getSpeed(session) {
    let totalLengths = 0;
    for (const lap of session.laps) {
        totalLengths += lap.num_lengths;
    }
    const timePerLength = session.total_timer_time / totalLengths;
    return <>{seconds2mmss(Math.floor(timePerLength))}p/{session?.pool_length}m</>;
}

const ActivitySummary = ({activity}) => {
    const getDisplayDate = (date) => {
        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        let compDate = date;
        compDate.setHours(0);
        compDate.setMinutes(0);
        compDate.setSeconds(0);
        compDate.setMilliseconds(0);
        let diff = today.getTime() - compDate.getTime();
        if (compDate.getTime() === today.getTime()) {
            return "Hôm nay";
        } else if (diff <= (24 * 60 * 60 * 1000)) {
            return "Hôm qua";
        } else {
            return compDate.toLocaleDateString('vi', {weekday: 'long',}) + ', ' + compDate.toLocaleDateString('en-GB');
        }
    }
    const session = activity.sessions[0];
    const isoDate = session?.timestamp;
    const date = new Date(isoDate);
    const dateString = getDisplayDate(date);
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Avatar
                    source={require("../../assets/avatar1.jpg")}
                    size="small"
                    rounded
                    activeOpacity={0.1}

                />
                <View style={styles.containerHeaderText}>
                    <Text
                        style={styles.textHugeBold}>{useContext(AuthContext).state.username}</Text>
                    <Text
                        style={styles.textNormal}>{dateString} ({activity.type} activity)</Text>
                </View>
            </View>
            <View style={styles.containerIndexRow}>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons name="heart" size={24}
                                                color="white"/>
                    </View>
                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Nhịp tim
                        </Text>
                        <Text
                            style={styles.textSmall}>{session?.avg_heart_rate}
                        </Text>

                    </View>
                </View><View style={styles.containerIndexCell}>
                <View>
                    <MaterialCommunityIcons name="swim" size={24}
                                            color="white"/>
                </View>
                <View>
                    <Text
                        style={styles.textSmall}>Khoảng cách
                    </Text>
                    <Text
                        style={styles.textSmall}>{session?.total_distance}km
                    </Text>

                </View>
            </View>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons name="clock-time-four-outline"
                                                size={24}
                                                color="white"/>
                    </View>

                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Thời gian
                        </Text>
                        <Text
                            style={styles.textSmall}>{seconds2mmss(Math.floor(session?.total_timer_time))}
                        </Text>
                    </View>
                </View>
            </View>
            <Spacer/>
            <View style={styles.containerIndexRow}>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons name="eye" size={24}
                                                color="white"/>
                    </View>
                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Vận tốc
                        </Text>
                        {
                            console.log("session?.enhanced_avg_speed", session?.enhanced_avg_speed)
                        }
                        <Text
                            style={styles.textSmall}>{getSpeed(session)}
                        </Text>

                    </View>
                </View>
                <View style={styles.containerIndexCell}>
                    <View>
                        <FontAwesome5 name="burn"
                                      size={24}
                                      color="white"/>
                    </View>

                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Calories
                        </Text>
                        <Text
                            style={styles.textSmall}>{session?.total_calories}
                        </Text>
                    </View>
                </View>
                <View style={styles.containerIndexCell}>
                    <View>
                        <MaterialCommunityIcons
                            name="pool" size={24} color="white"/>
                    </View>
                    <View style={styles.containerIndexCellText}>
                        <Text
                            style={styles.textSmall}>Bể bơi
                        </Text><Text
                        style={styles.textSmall}>{session?.pool_length}m</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container             : {
        backgroundColor: '#145BB6',
        marginTop      : 10,
        paddingBottom  : 10,
        paddingTop     : 10,
        borderRadius   : 15,
    },
    containerIndexCell    : {
        flexDirection : 'row',
        justifyContent: 'flex-start',
        width         : '30%',
    },
    containerIndexCellText: {
        paddingLeft: 5,
    },
    containerIndexRow     : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems    : 'center',
        marginLeft    : 10,
    },
    containerRow          : {
        flexDirection: 'row',
    },
    containerHeader       : {
        flexDirection: 'row',
        marginLeft   : 10,
        marginBottom : 50,
    },
    containerHeaderText   : {
        marginLeft: 5,
    },
    image                 : {
        width       : 250,
        height      : 120,
        borderRadius: 4,
    },
    video                 : {
        width : 100,
        height: 100,
    },
    textHuge              : {
        fontSize: 18,
        color   : 'white',
    },
    textHugeBold          : {
        fontSize  : 18,
        color     : 'white',
        fontWeight: 'bold',

    },
    textBig               : {
        fontSize: 16,
        color   : 'white',
    },
    textBigBold           : {
        fontSize  : 16,
        color     : 'white',
        fontWeight: 'bold',

    },
    textNormal            : {
        fontSize: 14,
        color   : 'white',
    },
    textNormalBold        : {
        fontSize  : 14,
        color     : 'white',
        fontWeight: 'bold',
    },
    textSmall             : {
        fontSize: 12,
        color   : 'white',
    }

});

export default ActivitySummary;
