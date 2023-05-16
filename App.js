import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
  ];

  const handleFilterPress = () => {
    setShowFilter(true); // visar filter-vyn
  };

  if (showFilter) {
    return <FilterScreen setShowFilter={setShowFilter} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.headingMenu}>FOOD COURSE</Text>
        <TouchableOpacity onPress={handleFilterPress} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
