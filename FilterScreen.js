import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FilterScreen = ({ setShowFilter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingFilterMenu}>FILTER RECIPE</Text>
        <TouchableOpacity
          onPress={() => setShowFilter(false)}
          style={styles.closeButton}
        >
          <Icon name="times" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  headingFilterMenu: {
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {},
});

export default FilterScreen;
