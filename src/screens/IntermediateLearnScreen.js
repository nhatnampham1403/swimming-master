import React, { useContext } from "react";
import { Context as ArchivementContext } from "../context/ArchivementContext";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { NavigationEvents } from "react-navigation";

const IntermediateLearnScreen = ({ navigation }) => {
  const { state, fetchArchivements } = useContext(ArchivementContext);
  const learn = [
    {
      id: 1,
      titleLearn: "THE INTERMEDIATE EFFICIENCY WORKOUT",
      time: "Theory",
      img: require("../../assets/storage/imgs/advance1.jpg"),
      content: [
        "The goal of counting your strokes in this workout: to take fewer and fewer to get across the pool. Focus on making each arm circle as efficient as possible by picturing yourself placing your hand in your pocket under water and then letting your fingertips drag along the surface (elbow high) as you bring the arm forward. Make sure your hands don’t go extra-wide, which can strain the shoulder, says Martinez. \n \n",
        "Warm up with 300 yards freestyle swim, 200 yards pull with buoy, 100 yards kick with board.\n \n   ",
        "+ 3 x 50 yards freestyle with 20 seconds rest in between laps. \n \n     ",
        "+ 3 x 100 yards counting your strokes per length with 25 seconds rest in between laps (aim to take one fewer stroke each round)\n \n     ",
        "+ 3 x 50 yards kick with board with 20 seconds rest in between laps.\n \n     ",
        "+ 10 x 50 yards alternating sprint freestyle (odds) and sprint stroke count (evens) with 25 seconds rest in between laps\n \n \n",
        "Cool down with 100 yards freestyle easy.",
      ],
    },
    {
      id: 2,
      titleLearn: "INTERMEDIATE -LEVEL 60-MINUTE ENDURANCE WORKOUT",
      time: "Theory",
      img: require("../../assets/storage/imgs/advance2.jpg"),
      content: [
        "Another from Martinez, this distance-focused workout adds breaststroke to the swim mix (along with freestyle). It should take about an hour.\n \n",
        "Warm up with 200 yards freestyle swim, 100 yards pull with buoy, and 100 yards kick with board.\n \n   ",
        "- 3 x 200 yards freestyle (broken up per below) with 60 seconds rest in between laps. \n \n   ",
        "+ 25 yards easy; 25 yards fast\n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n  ",
        "+ 50 yards easy; 50 yards fast. \n \n  ",
        "- 2 x 150 yards breaststroke (broken up per below) with 45 seconds rest in between laps.\n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n   ",
        "- 1 x 50 yards first half fast freestyle; second half fast breaststroke with 45 seconds rest after.\n \n   ",
        "- 2 x 150 yards breaststroke (broken up per below) with 60 seconds rest in between laps. \n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n   ",
        "+ 25 yards easy; 25 yards fast. \n \n   ",
        "- 3 x 200 yards freestyle (broken up per below) with 50 seconds rest in between laps.\n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n   ",
        "+ 25 yards easy; 25 yards fast.\n \n   ",
        "+ 50 yards easy; 50 yards fast. \n \n   ",
        "Cool down with 150 yards easy swimming.",
      ],
    },
    {
      id: 3,
      titleLearn: "THE BUILD-ENDURANCE PLAN FOR EXPERIENCED SWIMMERS",
      time: "Theory",
      img: require("../../assets/storage/imgs/advance3.jpg"),
      content: [
        "For this workout, you’ll focus on low-intensity steady state training (or LISS). That means you’ll swim a longer distance while working at about 60 percent to 70 percent of your max heart rate (HRM), says Russell. (You may want to try using a waterproof fitness tracker to keep tabs on this.)\n \n   ",
        "+ 4 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps. \n \n   ",
        "+ 3 x 75 yards freestyle (70 percent HRM) with 30 seconds rest in between laps.\n \n   ",
        "+ 3 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps.\n \n   ",
        "+ 3 x 75 yards freestyle (70 percent HRM) with 30 seconds rest in between laps. \n \n   ",
        "+ 2 x 100 yards freestyle (65 percent HRM) with 30 seconds rest in between laps. \n \n \n",
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
                      navigation.navigate("DetailLearnIntermediate", {
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
                        marginHorizontal: "5%",
                        marginBottom: 23,
                        borderRadius: 10,
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={data.img}
                          style={{ width: 188, height: 107, borderRadius: 8 }}
                        />
                        <View
                          style={{ justifyContent: "center", marginLeft: 15 }}
                        >
                          <Text
                            style={{
                              fontSize: 14,
                              color: "#145BB6",
                              fontWeight: "700",
                              lineHeight: 21,
                              letterSpacing: -0.32,
                              height: 80,
                              width: 180,
                            }}
                          >
                            {data.titleLearn}
                          </Text>
                          <View style={{ flexDirection: "row", marginTop: 3 }}>
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

export default IntermediateLearnScreen;
