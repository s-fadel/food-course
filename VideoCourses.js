import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const VideoCourses = ({ route }) => {
  const { recipes, recipe } = route.params;
  const [expandedCard, setExpandedCard] = useState(null);

  const LockIcon = () => (
    <Feather name="lock" size={22} color="black" style={styles.lockIcon} />
  );

  const handleCardPress = (courseId) => {
    if (expandedCard === courseId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(courseId);
    }
  };

  const pressableCourseContent = () => {
    if (!recipe) {
      return null;
    }

    return recipe.videoCourses.map((videoCourse) => (
        <Pressable
          key={videoCourse.courseTitle} // Lägg till en unik nyckel för varje kurs
          style={({ pressed }) => [
            styles.card,
            { opacity: pressed ? 0.5 : 1 } // Ändra utseendet när den är tryckt
          ]}
          onPress={() => handleCardPress(videoCourse.courseId)}
        >
          <LockIcon />
          <Text style={styles.cardTitle}>{videoCourse.courseTitle}</Text>
          {expandedCard === videoCourse.courseId && (
            <Text style={styles.cardDescription}>{videoCourse.courseContent}</Text>
          )}
        </Pressable>
      ));
  };

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Video Tutorial</Text>
      <View style={styles.cardContainer}>{pressableCourseContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 16,
  },
  card: {
    width: "90%",
    minHeight: 80,
    backgroundColor: "white",
    borderRadius: 10,
    paddingBottom: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lockIcon: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 7,
  },
});

export default VideoCourses;
