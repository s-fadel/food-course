import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FilterScreen from "./FilterScreen";
import AboutCourses from "./AboutCourses";

const RecipeCard = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const recipes = [
    {
      id: 1,
      image: require("./assets/images/recipe1.jpg"),
      videoUrl: ('https://www.youtube.com/embed/CltUZnoUDFM?start=15&autoplay=0'),
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
      image: require("./assets/images/recipe1.jpg"),
      videoUrl: ('https://www.youtube.com/embed/TOYYHImHNNk?start=15&autoplay=0'),
      title: "Recept 2",
      category: "Huvudrätt",
      description: "Detaljer för kort 2",
      details: ["Detalj 1", "Detalj 2"],
      aboutText: "Denna text beskriver recept 2.",
    },
    {
      id: 3,
      image: require("./assets/images/recipe1.jpg"),
      videoUrl: ('https://www.youtube.com/watch?v=CltUZnoUDFM&t=15s'),
      title: "Recept 3",
      category: "Dessert",
      description: "Detaljer för kort 3",
      details: ["Detalj 1", "Detalj 2", "Detalj 3"],
      aboutText: "Detta är information om recept 3.",
    },
  ];

  const handleFilterPress = () => {
    setShowFilter(true);
  };
  
  const handleRecipePress = (recipe) => {
    navigation.navigate("AboutCourses", { recipe, recipes });
  };
  
  const handleClearFilter = () => {
    setSelectedCategory(null);
  };
 
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowFilter(false);
  };

  if (showFilter) {
    return (
        <FilterScreen
        setShowFilter={setShowFilter}
        onSelectCategory={handleCategorySelect}
        navigation={HomeScreen} 
      />
    );
  }

  if (selectedRecipe) {
    return (
      <AboutCourses
        recipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
    );
  }

  let filteredRecipes = recipes;
  if (selectedCategory) {
    filteredRecipes = recipes.filter((recipe) => recipe.category === selectedCategory);
  }


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingMenu}>FOOD COURSE</Text>
        <TouchableOpacity onPress={handleFilterPress} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>FILTER</Text>
        </TouchableOpacity>
        {selectedCategory && (
          <TouchableOpacity onPress={handleClearFilter} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>RENSA FILTER</Text>
          </TouchableOpacity>
        )}
      </View>
        <View style={styles.headerImageContainer}>
          <Image
            source={require("./assets/images/recipe1.jpg")}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.headerText}>Welcome to Food Course!</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              onPress={() => handleRecipePress(recipe)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  filterButton: {
    backgroundColor: "#93bf85",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  headingMenu: {
    flex: 1,
    fontSize: 20,
    fontWeight: "900",
    color: "#000000",
    letterSpacing: 2,
  },
  headerImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: 170,
    marginBottom: 15,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
