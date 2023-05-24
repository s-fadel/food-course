import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";

const AboutCourses = ({ navigation, route }) => {
  const { recipe, recipes } = route.params;
  const [isSectionExpanded, setIsSectionExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSectionToggle = () => {
    setIsSectionExpanded(!isSectionExpanded);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const selectedRecipe = recipes.find((r) => r.id === recipe.id);

  if (!selectedRecipe) {
    return null;
  }

  const { title, description, details, aboutText, category, videoUrl } = selectedRecipe;

  return (
    <View style={styles.container}>
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

          <View style={styles.card}>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.cardText}>{description}</Text>
            {details.map((item, index) => (
              <Text key={index} style={styles.checkItem}>
                {item}
              </Text>
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
  card1: {
    backgroundColor: "blue",
    padding: 10,
    paddingTop: 0,
  },
  card2: {
    backgroundColor: "blue",
    padding: 10,
    paddingTop: 0,
  },
  card3: {
    backgroundColor: "blue",
    padding: 10,
    paddingTop: 0,
  },
  cardText: {
    color: "black",
    paddingBottom: 20,
    fontSize: 16,
  },
  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 16,
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
