import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const AboutCourses = ({ setSelectedRecipe, recipe }) => {
    const [isSectionExpanded, setIsSectionExpanded] = useState(false);
  
    useEffect(() => {
      return () => {
        setSelectedRecipe(null); // Clear the selected recipe when unmounting the component
      };
    }, []);
  
    const handleBackButton = () => {
      setSelectedRecipe(null); // Clear the selected recipe to go back to HomeScreen
    };
  
    const handleSectionToggle = () => {
      setIsSectionExpanded(!isSectionExpanded);
    };
  

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Text style={styles.backButtonText}>Tillbaka</Text>
        </TouchableOpacity>

        <Image source={recipe.image} style={styles.image} />

        {recipe.id === 1 && (
          <View style={styles.card1}>
            <Text style={styles.heading}>Klassiska kokosbollar</Text>
            <Text style={styles.cardText}>
              Försvinnande god klassiker. Lite starkt kaffe i smeten gör dem mer
              vuxna!
            </Text>
            <Text style={styles.checkItem}>✓ Pasta med köttfärsås</Text>
            <Text style={styles.checkItem}>✓ Grekisk sallad</Text>
            <Text style={styles.checkItem}>✓ Carbonara</Text>
            <Text style={styles.checkItem}>✓ Tacos</Text>
          </View>
        )}

        {recipe.id === 2 && (
          <View style={styles.card2}>
            <Text style={styles.heading}>Klassiska kokosbollar</Text>
            <Text style={styles.cardText}>Detaljer för kort 2</Text>
          </View>
        )}
        {recipe.id === 3 && (
          <View style={styles.card3}>
            <Text style={styles.heading}>Klassiska kokosbollar</Text>
            <Text style={styles.cardText}>Detaljer för kort 3</Text>
          </View>
        )}
      </View>
      <View style={styles.aboutSection}>
        <TouchableOpacity onPress={handleSectionToggle} style={styles.aboutHeader}>
          <Text style={styles.aboutHeaderText}>Om oss</Text>
          <Icon name={isSectionExpanded ? "angle-down" :  "angle-up"} size={18} style={styles.aboutHeaderArrow} /></TouchableOpacity>
        {isSectionExpanded && (
          <View style={styles.aboutContent}>
            <Text style={styles.aboutText}>Det var en gång en tjej som heter Stephanie</Text>
          </View>
        )}
      </View>
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
    top: 60,
  },
  backButtonText: {
    fontSize: 16,
    color: "black",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 100,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  aboutHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutHeaderArrow: {
    fontSize: 18,
    transform: [{ rotate: '180deg' }],
  },
  aboutContent: {
    marginTop: 10,
  },
  aboutText: {
    fontSize: 16,
  },
});

export default AboutCourses;
