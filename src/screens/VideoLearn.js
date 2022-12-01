import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoLearn = ({ navigation }) => {
  const video1 = navigation.getParam('video1');
  const title1 = navigation.getParam('title1');
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
          source={video1}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <Text style={styles.videoTitle}>{title1}</Text>
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

export default VideoLearn;
