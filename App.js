import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';

const App = () => {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Home />
    </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
