import React, { useContext } from 'react';
import { Context as ArchivementContext } from '../context/ArchivementContext';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { NavigationEvents } from 'react-navigation';

const AdvanceLearnScreen = ({ navigation }) => {
  const { state, fetchArchivements } = useContext(ArchivementContext);
  const learn = [
    {
      id: 1,
      titleLearn: 'ADVANCED-LEVEL 60-MINUTE ENDURANCE WORKOUT',
      time: 'Theory',
      img: require('../../assets/storage/imgs/advance1.jpg'),
      content: [
        'Warm up with 300 yards freestyle swim, 200 yards pull with buoy, and 100 yards kick with board.\n \n   ',
        '- 3 x 300 yards freestyle (broken up per below) with 40 seconds rest in between laps. \n \n     ',
        '+ 25 yards easy; 25 yards fast.\n \n     ',
        '+ 50 yards easy; 50 yards fast.\n \n     ',
        '+ 75 yards easy; 75 yards fast \n \n \n',
        '- 3 x 300 yards freestyle (broken up per below) with 40 seconds rest in between laps. \n \n     ',
        '+ 25 yards easy; 25 yards fast.\n \n     ',
        '+ 50 yards easy; 50 yards fast.\n \n     ',
        '+ 75 yards easy; 75 yards fast \n \n \n',
        '- 3 x 300 yards freestyle (broken up per below) with 40 seconds rest in between laps. \n \n',
        '- 3 x 300 yards freestyle (broken up per below) with 40 seconds rest in between laps. \n \n     ',
        '+ 25 yards easy; 25 yards fast.\n \n     ',
        '+ 50 yards easy; 50 yards fast.\n \n     ',
        '+ 75 yards easy; 75 yards fast \n \n \n',
        '- 3 x 300 yards freestyle (broken up per below) with 40 seconds rest in between laps. \n \n     ',
        '+ 25 yards easy; 25 yards fast.\n \n     ',
        '+ 50 yards easy; 50 yards fast.\n \n     ',
        '+ 75 yards easy; 75 yards fast \n \n \n',
        'Cool down with 200 yards easy swimming.',
      ],
    },
    {
      id: 2,
      titleLearn: 'ADVANCED HIIT WORKOUT',
      time: 'Theory',
      img: require('../../assets/storage/imgs/advance2.jpg'),
      content: [
        'If you’re familiar with and confident doing all four swim strokes (freestyle, backstroke, breaststroke, and butterfly), this workout is for you. You’ll give all-out efforts and recover between laps. Russell says you’ll use all muscle groups in this workout, so prepare for a full-body burn. Grab a kickboard, a pull buoy, and aqua weights for this one.\n \n',
        'Warm up with 2 minutes easy freestyle, then 4 x 25 yards alternating easy swim and sprint swim.\n \n   ',
        '+ 200 yards freestyle at medium pace. \n \n   ',
        '+ 40 seconds rest\n \n   ',
        '+ 50 yards easy; 50 yards fast.\n \n   ',
        '+ 6 x 25 yards freestyle at hard pace with 25 seconds rest in between laps. \n \n   ',
        '+ 150 yards alternate freestyle and backstroke at a medium pace.\n \n   ',
        '+ 40 seconds rest.\n \n   ',
        '+ 4 x 25 yards kicking hard with 30 seconds rest in between laps.\n \n   ',
        '+ 200 yards freestyle medium with pull buoy.\n \n   ',
        '+ 40 seconds rest.\n \n   ',
        '+ 4 x 25 yards freestyle hard with pull buoy with 30 seconds rest in between laps. \n \n   ',
        '+ 150 yards alternate freestyle and breaststroke medium.\n \n   ',
        '+ 40 seconds rest.\n \n   ',
        '+ 2 x 25 yards butterfly hard with 50 seconds rest in between laps. \n \n   ',
        '+ 2 x 25 yards backstroke hard with 40 seconds rest in between laps.\n \n   ',
        '+ 2 x 25 yards breaststroke hard with 45 seconds rest in between laps.\n \n   ',
        '+ 100 yards alternate breaststroke and backstroke easy. \n \n   ',
        '+ 1 min rest.\n \n   ',
        '+ 100 yards walking lunges in pool, with weights starting at your side and lifting up to shoulder height for a forward raise and lateral raise (alternating) at the top of each lunge (begin with foam weights, and move up in one pound increments as you get stronger).\n \n   ',
        '+ 20 seconds rest. \n \n   ',
        '+ 60 seconds high knees in place.\n \n   ',
        '+ 20 seconds rest.\n \n   ',
        '+ 100 yards walk backward and use aqua weights for shoulder press (straight overhead, palms face each other).\n \n   ',
        '+ 60 seconds squat with biceps curl.\n \n   ',
        '+ 20 seconds rest.\n \n   ',
        '+ 60 seconds squat with tricep extension.\n \n   ',
        '+ 20 seconds rest.\n \n   ',
        '+ 60 second squat with rows.\n \n   ',
        '+ 20 seconds rest.\n \n   ',
        '+ 60 seconds high knees in place.\n \n   ',
        '+ 60 second rest.\n \n   ',
        '+ Repeat from the lunges for 3–4 rounds. \n \n \n',
      ],
    },
    {
      id: 3,
      titleLearn: 'THE BUILD-ENDURANCE PLAN FOR EXPERIENCED SWIMMERS',
      time: 'Theory',
      img: require('../../assets/storage/imgs/advance3.jpg'),
      content: [
        'For this workout, you’ll focus on low-intensity steady state training (or LISS). That means you’ll swim a longer distance while working at about 60 percent to 70 percent of your max heart rate (HRM), says Russell. (You may want to try using a waterproof fitness tracker to keep tabs on this.)\n \n   ',
        '+ 4 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps. \n \n   ',
        '+ 3 x 75 yards freestyle (70 percent HRM) with 30 seconds rest in between laps.\n \n   ',
        '+ 3 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps.\n \n   ',
        '+ 3 x 75 yards freestyle (70 percent HRM) with 30 seconds rest in between laps. \n \n   ',
        '+ 2 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps. \n \n \n',
      ],
    },
  ];
  return (
    <>
      <NavigationEvents onWillFocus={fetchArchivements} />
      <View>
        <ScrollView>
          <View style={{ marginTop: 24 }}>
            <View>
              {learn.map((data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate('DetailLearnAdvance', {
                        titleLearn: data.titleLearn,
                        time: data.time,
                        img: data.img,
                        content: data.content,
                      })
                    }
                  >
                    <View
                      style={{
                        height: 107,
                        width: 376,
                        borderWidth: 0.2,
                        marginHorizontal: '5%',
                        marginBottom: 23,
                        borderRadius: 10,
                      }}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <Image
                          source={data.img}
                          style={{ width: 188, height: 107, borderRadius: 8 }}
                        />
                        <View
                          style={{ justifyContent: 'center', marginLeft: 15 }}
                        >
                          <Text
                            style={{
                              fontSize: 14,
                              color: '#145BB6',
                              fontWeight: '700',
                              lineHeight: 21,
                              letterSpacing: -0.32,
                              height: 80,
                              width: 180,
                            }}
                          >
                            {data.titleLearn}
                          </Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 21,
                                letterSpacing: -0.32,
                              }}
                            >
                              {data.time}
                            </Text>
                            <Text
                              style={{
                                marginLeft: 12,
                                fontSize: 12,
                                lineHeight: 21,
                                letterSpacing: -0.32,
                              }}
                            >
                              {data.numberLearn}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default AdvanceLearnScreen;
