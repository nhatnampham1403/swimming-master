import React, {useContext, useState} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground, TouchableHighlight
} from 'react-native';
import NextButton from "../components/NextButton";
import {Context as SwimContext} from "../context/SwimContext";
import {Avatar} from "@rneui/themed";

const Quest03SkillLevelScreen = ({navigation}) => {
    const {
        state,
        setLevel
    } = useContext(SwimContext);
    const [level, levelOnpress] = useState(null);
    React.useRef(null);
    const touchProps1 = {
        style: level === 0 ? styles.touched : styles.untouched,
    }
    const touchProps2 = {
        style: level === 1 ? styles.touched : styles.untouched,
    }
    const touchProps3 = {
        style: level === 2 ? styles.touched : styles.untouched,
    }
    return (<View style={styles.container}>
        <ImageBackground
            style={styles.image}
            source={require('../../assets/manswim.jpeg')}
        >
            <View style={styles.containerPaper}>
                <Avatar containerStyle={styles.avatar}
                        source={require("../../assets/goswim.png")}
                        size="xlarge"
                        rounded
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.1}

                />
                <Text style={styles.textBold}>Trình độ bơi của bạn đang ở cấp độ
                    nào?</Text>
                <Text style={styles.textRegular}>Chúng tôi sẽ giúp bạn đưa ra
                    những bài tập phù hợp với thể trạng và kinh nghiệm bơi của
                    bạn.</Text>
                <TouchableHighlight {...touchProps1} onPress={() => {
                    levelOnpress(0);
                    console.log("level", level);
                }}>
                    <View>
                        <Text style={styles.textBold}>Mới bắt đầu</Text>
                        <Text style={styles.textRegular}>Tôi mới bắt đầu tập
                            luyện bơi lội và muốn học cách cấu trúc một bài tập
                            bơi.</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight {...touchProps2} onPress={() => {
                    levelOnpress(1);
                    console.log("level", level);
                }}>
                    <View>
                        <Text style={styles.textBold}>Trung bình</Text>
                        <Text style={styles.textRegular}>Tôi tập bơi khá thường
                            xuyên và muốn cải thiện thêm cấp độ bài tập của
                            mình.</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight {...touchProps3} onPress={() => {
                    levelOnpress(2);
                    console.log("level", level);
                }}>
                    <View>
                        <Text style={styles.textBold}>Nâng cao</Text>
                        <Text style={styles.textRegular}>Tôi bơi khá tốt và sẵn
                            sàng để tập những bài tập nâng cao hơn.</Text>
                    </View>
                </TouchableHighlight>

                <NextButton nextScreen='mainFlow'
                            navigation={navigation}
                            onSubmit={()=>setLevel(level)}>
                </NextButton>

            </View>

        </ImageBackground>
    </View>)
};

/*Quest03SkillLevelScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}*/

const styles = StyleSheet.create({
    avatar: {
        position: 'absolute',
        top     : -70,
    },

    untouched: {
        backgroundColor: '#FFFFFF',
        opacity        : 0.5,
        justifyContent : "center",
        alignItems     : 'center',
        width          : '90%',
        height         : 50,
        marginTop      : 30,
    },

    touched: {
        backgroundColor: '#145BB6',
        opacity        : 0.5,
        justifyContent : "center",
        alignItems     : 'center',
        width          : '90%',
        height         : 50,
        marginTop      : 30,
    },

    container     : {
        flex     : 1,
        marginTop: 50,
    },
    containerPaper: {
        width          : '95%',
        height         : '80%',
        justifyContent : 'center',
        backgroundColor: 'white',
        opacity        : 0.9,
        borderRadius   : 20,
        alignItems     : 'center',
    },
    image         : {
        flex          : 1,
        justifyContent: 'center',
        alignItems    : 'center',
    },

    textBold   : {
        fontSize         : 14,
        fontWeight       : 'bold',
        textAlign        : 'center',
        textAlignVertical: "center",
        marginLeft       : 80,
        marginRight      : 80,
    },
    textButton : {
        fontSize  : 20,
        fontWeight: 'bold',
    },
    textRegular: {
        fontSize   : 14,
        textAlign  : 'center',
        marginLeft : 40,
        marginRight: 40,

    },
    textLink   : {
        fontSize   : 12,
        fontWeight : 'bold',
        color      : 'white',
        textAlign  : 'center',
        marginTop  : 100,
        marginLeft : 80,
        marginRight: 80,
    },

})

export default Quest03SkillLevelScreen;
