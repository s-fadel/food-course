import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FilterScreen = ({ setShowFilter }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingFilterMenu}>FILTER RECIPE</Text>
        <TouchableOpacity
          onPress={() => setShowFilter(false)}
          style={styles.closeButton}
        >
          <Icon name="times" size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => handleOptionPress("Förrätter")}
          style={[styles.optionButton, selectedOption === "Förrätter"]}
        >
          {selectedOption === "Förrätter" ? (
            <View style={styles.circleSelected} />
          ) : (
            <View style={styles.circle} />
          )}
          <Text style={styles.optionText}>FÖRRÄTTER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleOptionPress("Huvudrätt")}
          style={[styles.optionButton, selectedOption === "Huvudrätt"]}
        >
          {selectedOption === "Huvudrätt" ? (
            <View style={styles.circleSelected} />
          ) : (
            <View style={styles.circle} />
          )}
          <Text style={styles.optionText}>HUVUDRÄTTER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleOptionPress("Dessert")}
          style={[styles.optionButton, selectedOption === "Dessert"]}
        >
          {selectedOption === "Dessert" ? (
            <View style={styles.circleSelected} />
          ) : (
            <View style={styles.circle} />
          )}
          <Text style={styles.optionText}>DESSERT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>FILTERA</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#93bf85",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  headingFilterMenu: {
    fontSize: 20,
    fontWeight: "900",
    color: 'white',
    letterSpacing: 2,

    
  },
  closeButton: {},
  optionContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  selectedOption: {
    marginTop: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 10,
  },
  circleSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
    marginRight: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: 'white',

  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 30,

  },
  button: {
    borderStyle: 'solid',
   backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  
});

export default FilterScreen;
