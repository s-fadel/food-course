import "react-native-gesture-handler";
import 'react-native-reanimated';
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import AboutCourses from './AboutCourses';
import FilterScreen from './FilterScreen';
import VideoCourses from './VideoCourses';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutCourses" component={AboutCourses} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="VideoCourses" component={VideoCourses} />

      </Stack.Navigator>
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
