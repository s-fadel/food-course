import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FilterScreen = ({ setShowFilter }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowFilter(false)} style={styles.closeButton}>
        <Icon name="times" size={25} />
      </TouchableOpacity>
      <Text style={styles.text}>This is the Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
  text: {
    fontSize: 20,
    fontWeight: 'medium',
  },
  closeButton: {
    position: 'absolute',
    top: 70,
    right: 35,
  },
});

export default FilterScreen;
