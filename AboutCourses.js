import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AboutCourses = ({ recipe, setSelectedRecipe }) => {
  useEffect(() => {
    // Här kan du lägga till kod för att hantera logiken för den nya vyn
    // som ska visas när man väljer ett receptkort i App.js.
    // Du kan hämta ytterligare information om receptet från API:er eller använda den befintliga informationen i 'recipe' för att visa detaljerna på vyn.
    // Du kan använda lämpliga React Native-komponenter för att bygga upp vyn för AboutCourses.
    // För att återgå till föregående vy kan du använda 'setSelectedRecipe' och sätta det till null.
  }, []);

  const handleBackPress = () => {
    setSelectedRecipe(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>TILLBAKA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 10,
    padding: 10,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default AboutCourses;
