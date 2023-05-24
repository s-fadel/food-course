import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import FilterScreen from './FilterScreen';


const AboutCourses = ({ navigation, route }) => {
  const { recipe } = route.params;
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


  const recipes = [
    {
      id: 1,
      title: "Klassiska kokosbollar",
      category: "Förrätter",
      description:
        "Försvinnande god klassiker. Lite starkt kaffe i smeten gör dem mer vuxna!",
      details: [
        "✓ Pasta med köttfärsås",
        "✓ Grekisk sallad",
        "✓ Carbonara",
        "✓ Tacos",
      ],
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Recept 2",
      category: "Huvudrätt",
      description: "Detaljer för kort 2",
      details: ["Detalj 1", "Detalj 2"],
      aboutText: "Denna text beskriver recept 2.",
    },
    {
      id: 3,
      title: "Recept 3",
      category: "Dessert",
      description: "Detaljer för kort 3",
      details: ["Detalj 1", "Detalj 2", "Detalj 3"],
      aboutText: "Detta är information om recept 3.",
    },
  ];

  const selectedRecipe = recipes.find((r) => r.id === recipe.id);

  if (!selectedRecipe) {
    return null; // Handle invalid recipe ID
  }

  const { title, description, details, aboutText, category } = selectedRecipe;

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

          <Image source={recipe.image} style={styles.image} />

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
});

export default AboutCourses;
