import React from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {Video} from "expo-av";

const ResultsDetail = ({result}) => {
    const video = React.useRef(null);
    return (<View style={styles.container}>

        <TouchableOpacity onPress={() => {
            console.log(result.url);
            video?.current?.presentFullscreenPlayer();
        }}>

            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: result.url,
                }}
                onPress={() => {
                    video?.current?.presentFullscreenPlayer();
                }}
                useNativeControls={false}
                resizeMode="contain"
                isLooping
                // playableDurationMillis={result.playableDurationMillis}
                // onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </TouchableOpacity>
        <Text style={styles.text}>{result.name}</Text>

    </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection : 'column',
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
        color   : 'white',
    }
});

export default ResultsDetail;
