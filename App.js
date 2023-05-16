import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FilterScreen from './FilterScreen';

const RecipeCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const [showFilter, setShowFilter] = useState(false); // initierar med att inte visa filter-vyn
  const recipes = [
    { id: 1, title: 'Recept 1', image: require('./assets/images/recipe1.jpg') },
    { id: 2, title: 'Recept 2', image: require('./assets/images/recipe2.jpg') },
    { id: 3, title: 'Recept 3', image: require('./assets/images/recipe1.jpg') },
  ];

  const handleFilterPress = () => {
    setShowFilter(true); // visar filter-vyn
  };

  if (showFilter) {
    return <FilterScreen setShowFilter={setShowFilter} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingMenu}>FOOD COURSE</Text>
          <TouchableOpacity onPress={handleFilterPress} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            source={require('./assets/images/recipe1.jpg')}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.headerText}>Welcome to Food Course!</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: 'lightgreen',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingMenu: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 10,
    marginBottom: 15,
    shadowColor: '#000',
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
    width: '100%',
    height: 170,
    marginBottom: 15,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
