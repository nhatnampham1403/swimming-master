import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const DetailLearn = ({ navigation }) => {
  const level = navigation.getParam("level");
  const titleLearn = navigation.getParam("titleLearn");
  const numberLearn = navigation.getParam("numberLearn");
  const time = navigation.getParam("time");
  const img = navigation.getParam("img");
  const img1 = navigation.getParam("img1");
  const img2 = navigation.getParam("img2");
  const img3 = navigation.getParam("img3");
  const video1 = navigation.getParam("video1");
  const video2 = navigation.getParam("video2");
  const video3 = navigation.getParam("video3");
  const title1 = navigation.getParam("title1");
  const title2 = navigation.getParam("title2");
  const title3 = navigation.getParam("title3");
  const timevideo1 = navigation.getParam("timevideo1");
  const timevideo2 = navigation.getParam("timevideo2");
  const timevideo3 = navigation.getParam("timevideo3");
  const kcal = navigation.getParam("kcal");

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{ width: "100%", height: 329 }}>
            <Image style={{ width: "100%", height: 280 }} source={img} />
            <Text
              style={{
                marginTop: 12,
                marginLeft: 20,
                fontSize: 18,
                fontWeight: "700",
                color: "#145BB6",
                lineHeight: 21,
              }}
            >
              {titleLearn}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 25,
              marginTop: 19,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="heart-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: "#989898",
                    marginBottom: 4,
                  }}
                >
                  Level
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 16,
                    color: "#145BB6",
                  }}
                >
                  {level}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="time-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: "#989898",
                  }}
                >
                  Time
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="share-outline" size={20} />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: "#989898",
                    marginBottom: 4,
                  }}
                >
                  Số bài tập
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    lineHeight: 16,
                    color: "#145BB6",
                  }}
                >
                  {numberLearn}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 28 }}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("VideoLearn", {
                    video1,
                    title1,
                  })
                }
              >
                <View
                  style={{
                    height: 107,
                    width: 376,
                    marginHorizontal: "5%",
                    marginBottom: 23,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={img1}
                      style={{ width: 188, height: 107, borderRadius: 8 }}
                    />
                    <View style={{ justifyContent: "center", marginLeft: 23 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#145BB6",
                          fontWeight: "700",
                          lineHeight: 21,
                          letterSpacing: -0.32,
                        }}
                      >
                        {title1}
                      </Text>
                      <View style={{ flexDirection: "row", marginTop: 3 }}>
                        <Text
                          style={{
                            fontSize: 12,
                            lineHeight: 21,
                            letterSpacing: -0.32,
                          }}
                        >
                          {timevideo1}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("VideoLearn1", {
                    video2,
                    title2,
                  })
                }
              >
                <View
                  style={{
                    height: 107,
                    width: 376,
                    marginHorizontal: "5%",
                    marginBottom: 23,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={img2}
                      style={{ width: 188, height: 107, borderRadius: 8 }}
                    />
                    <View style={{ justifyContent: "center", marginLeft: 23 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#145BB6",
                          fontWeight: "700",
                          lineHeight: 21,
                          letterSpacing: -0.32,
                        }}
                      >
                        {title2}
                      </Text>
                      <View style={{ flexDirection: "row", marginTop: 3 }}>
                        <Text
                          style={{
                            fontSize: 12,
                            lineHeight: 21,
                            letterSpacing: -0.32,
                          }}
                        >
                          {timevideo2}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("VideoLearn2", {
                    video3,
                    title3,
                  })
                }
              >
                <View
                  style={{
                    height: 107,
                    width: 376,
                    marginHorizontal: "5%",
                    marginBottom: 23,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={img3}
                      style={{ width: 188, height: 107, borderRadius: 8 }}
                    />
                    <View style={{ justifyContent: "center", marginLeft: 23 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#145BB6",
                          fontWeight: "700",
                          lineHeight: 21,
                          letterSpacing: -0.32,
                        }}
                      >
                        {title3}
                      </Text>
                      <View style={{ flexDirection: "row", marginTop: 3 }}>
                        <Text
                          style={{
                            fontSize: 12,
                            lineHeight: 21,
                            letterSpacing: -0.32,
                          }}
                        >
                          {timevideo3}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailLearn;
