import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoLearn1 = ({ navigation }) => {
  const video2 = navigation.getParam('video2');
  const title2 = navigation.getParam('title2');
  const kcal = navigation.getParam('kcal');

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecordVideo, setStatusSecondVideo] = React.useState({});

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ height: 400, backgroundColor: 'grey', width: '100%' }}>
        <Video
          ref={video}
          style={styles.video}
          source={video2}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <Text style={styles.videoTitle}>{title2}</Text>
      <Text style={styles.author}>{kcal}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#646464',
  },
  author: {
    fontSize: 14,
    color: '#646464',
    marginTop: 20,
  },
  video: {
    alignSelf: 'center',
    width: 420,
    height: 400,
  },
});

export default VideoLearn1;
