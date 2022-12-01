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

const DetailLearnAdvance = ({ navigation }) => {
  const titleLearn = navigation.getParam("titleLearn");
  const numberLearn = navigation.getParam("numberLearn");
  const time = navigation.getParam("time");
  const img = navigation.getParam("img");
  const content = navigation.getParam("content");

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

          <View style={{ marginTop: 28 }}>
            <Text style={{ alignSelf: "center", fontSize: 14 }}>{content}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailLearnAdvance;
