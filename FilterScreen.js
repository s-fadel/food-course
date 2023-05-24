import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";

const FilterScreen = ({ setShowFilter, onSelectCategory, navigation }) => {
  const Stack = createStackNavigator()
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleFilterPress = () => {
    if (selectedOption) {
      onSelectCategory(selectedOption);
      setShowFilter(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingFilterMenu}>FILTER RECIPE</Text>
        <TouchableOpacity onPress={() => setShowFilter(false)} style={styles.closeButton}>
        <Icon name="close" size={25} color={"white"} />
      </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => handleOptionPress("Förrätter")}
          style={[
            styles.optionButton,
            selectedOption === "Förrätter" && styles.selectedOption,
          ]}
        >
          {selectedOption === "Förrätter" ? (
            <Icon name="check-circle" size={25} color={"white"} />
          ) : (
            <Icon name="radio-button-unchecked" size={25} color={"white"} />
          )}
          <Text style={styles.optionText}>FÖRRÄTTER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleOptionPress("Huvudrätt")}
          style={[
            styles.optionButton,
            selectedOption === "Huvudrätt" && styles.selectedOption,
          ]}
        >
          {selectedOption === "Huvudrätt" ? (
            <Icon name="check-circle" size={25} color={"white"} />
          ) : (
            <Icon name="radio-button-unchecked" size={25} color={"white"} />
          )}
          <Text style={styles.optionText}>HUVUDRÄTT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleOptionPress("Dessert")}
          style={[
            styles.optionButton,
            selectedOption === "Dessert" && styles.selectedOption,
          ]}
        >
          {selectedOption === "Dessert" ? (
            <Icon name="check-circle" size={25} color={"white"} />
          ) : (
            <Icon name="radio-button-unchecked" size={25} color={"white"} />
          )}
          <Text style={styles.optionText}>DESSERT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, !selectedOption && styles.disabledButton]}
          onPress={handleFilterPress}
          disabled={!selectedOption}
        >
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
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  headingFilterMenu: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
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
    color: "white",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    borderStyle: "solid",
    backgroundColor: "white",
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
  disabledButton: {
    opacity: 0.5,
  },
});

export default FilterScreen;
