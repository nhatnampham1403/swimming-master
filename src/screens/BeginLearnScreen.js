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
import ArchivementTable from "../components/ArchivementTable";
import { NavigationEvents } from "react-navigation";
import Spacer from "../components/Spacer";
import { learn } from "../data/learn";

const BeginLearnScreen = ({ navigation }) => {
  const { state, fetchArchivements } = useContext(ArchivementContext);

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
                      navigation.navigate("DetailLearn", {
                        level: data.level,
                        titleLearn: data.titleLearn,
                        numberLearn: data.numberLearn,
                        time: data.time,
                        img: data.img,
                        img1: data.img1,
                        img2: data.img2,
                        img3: data.img3,
                        video1: data.video1,
                        video2: data.video2,
                        video3: data.video3,
                        title1: data.title1,
                        title2: data.title2,
                        title3: data.title3,
                        timevideo1: data.timevideo1,
                        timevideo2: data.timevideo2,
                        timevideo3: data.timevideo3,
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
                          style={{ justifyContent: "center", marginLeft: 23 }}
                        >
                          <Text
                            style={{
                              fontSize: 18,
                              color: "#145BB6",
                              fontWeight: "700",
                              lineHeight: 21,
                              letterSpacing: -0.32,
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

export default BeginLearnScreen;
