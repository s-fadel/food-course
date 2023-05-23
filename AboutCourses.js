import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const AboutCourses = ({ setSelectedRecipe, recipe }) => {
  useEffect(() => {
    return () => {
      setSelectedRecipe(null); // Clear the selected recipe when unmounting the component
    };
  }, []);

  const handleBackButton = () => {
    setSelectedRecipe(null); // Clear the selected recipe to go back to HomeScreen
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Text style={styles.backButtonText}>Tillbaka</Text>
        </TouchableOpacity>

        <Image source={recipe.image} style={styles.image} />

        <Text style={styles.heading}>Rubrik</Text>

        {recipe.id === 1 && (
           <View style={styles.card1}>
           <Text style={styles.cardText}>Detaljer för kort 1</Text>
           <Text style={styles.checkItem}>✓ Pasta med köttfärsås</Text>
           <Text style={styles.checkItem}>✓ Grekisk sallad</Text>
           <Text style={styles.checkItem}>✓ Carbonara</Text>
           <Text style={styles.checkItem}>✓ Tacos</Text>
         </View>
        )}

        {recipe.id === 2 && (
          <View style={styles.card2}>
            <Text style={styles.cardText}>Detaljer för kort 2</Text>
          </View>
        )}
         {recipe.id === 3 && (
          <View style={styles.card3}>
            <Text style={styles.cardText}>Detaljer för kort 3</Text>
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
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },
  card1: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
  },
  card2: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
  },
  card3: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
  },
  cardText: {
    color: "black",
    paddingBottom: 20,
    fontSize: 16,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 15,
  },
});

export default AboutCourses;
