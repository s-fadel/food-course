import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  PanResponder,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";
import { AntDesign } from "@expo/vector-icons";

const AboutCourses = ({ navigation, route }) => {
  const { recipe, recipes } = route.params;
  const [isSectionExpanded, setIsSectionExpanded] = useState(false);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      const { dx, dy } = gestureState;
      return Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5;
    },
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx < -100) {
        navigation.navigate("VideoCourses", { recipe, recipes });
      }
    },
  });

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSectionToggle = () => {
    setIsSectionExpanded(!isSectionExpanded);
  };

  if (!recipe) {
    return null;
  }

  const { title, description, details, aboutText, videoUrl } = recipe;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <TouchableOpacity
            onPress={handleBackButton}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>Tillbaka</Text>
          </TouchableOpacity>

          <WebView
            source={{
              uri: videoUrl,
            }}
            style={styles.youtubeLink}
          />

          <View>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.cardText}>{description}</Text>
            {details.map((item, index) => (
              <View key={index} style={styles.checkItem}>
                <AntDesign name="check" size={22} color="green" />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.aboutSection}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <TouchableOpacity
              onPress={handleSectionToggle}
              style={styles.aboutHeader}
            >
              <Text style={styles.aboutHeaderText}>Läs mer</Text>
              <Icon
                name={isSectionExpanded ? "angle-down" : "angle-up"}
                size={18}
                style={styles.aboutHeaderArrow}
              />
            </TouchableOpacity>
            {isSectionExpanded && (
              <View style={styles.aboutContent}>
                <Text style={styles.aboutText}>{aboutText}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButton: {
    position: "absolute",
  },
  backButtonText: {
    fontSize: 16,
    color: "black",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 40,
    alignSelf: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 25,
    marginBottom: 20,
  },
  cardText: {
    color: "black",
    paddingBottom: 20,
    fontSize: 16,
  },
  checkItem: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  itemText: {
    marginLeft: 10,
  },
  aboutSection: {
    marginTop: 20,
  },
  aboutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
  aboutHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  aboutHeaderArrow: {
    fontSize: 18,
    transform: [{ rotate: "180deg" }],
  },
  aboutContent: {
    marginTop: 10,
  },
  aboutText: {
    fontSize: 16,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  youtubeLink: {
    height: 200,
    width: "100%",
  },
});

export default AboutCourses;
