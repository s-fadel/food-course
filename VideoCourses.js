import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { WebView } from "react-native-webview";
import { AntDesign } from "@expo/vector-icons";

const VideoCourses = ({ route }) => {
  const { recipes, recipe } = route.params;
  const [expandedCard, setExpandedCard] = useState(null);
  const [longPressActivated, setLongPressActivated] = useState(undefined);
  const [selectedVideo, setSelectedVideo] = useState(undefined);
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [isVideoWatched, setIsVideoWatched] = useState({});

  useEffect(() => {
    if (isVideoPlayed && selectedVideo) {
      setTimeout(() => {
        setIsVideoWatched((prevIsVideoWatched) => ({
          ...prevIsVideoWatched,
          [selectedVideo]: true,
        }));
      }, 3000);
    }
  }, [isVideoPlayed, selectedVideo]);

  const LockIcon = () => (
    <AntDesign name="lock" size={22} color="black" style={styles.lockIcon} />
  );

  const UnlockIcon = () => (
    <AntDesign name="unlock" size={22} color="green" style={styles.lockIcon} />
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

    return recipe.videoCourses.map((videoCourse) => {
      const isWatched = isVideoWatched[videoCourse.courseId] || false;

      return (
        <Pressable
          key={videoCourse.courseTitle} // Lägg till en unik nyckel för varje kurs
          style={({ pressed }) => [
            styles.card,
            { opacity: pressed ? 0.5 : 1 }, // Ändra utseendet när den är tryckt
          ]}
          onPress={() => {
            handleCardPress(videoCourse.courseId);
            setLongPressActivated(false);
            setSelectedVideo(null);
          }}
          onLongPress={() => {
            setLongPressActivated(true);
            setIsVideoPlayed(true);
            setSelectedVideo(videoCourse.courseId);
          }}
        >
          {isWatched ? <UnlockIcon /> : <LockIcon />}
          <Text style={styles.cardTitle}>{videoCourse.courseTitle}</Text>
          {expandedCard === videoCourse.courseId && (
            <Text style={styles.cardDescription}>
              {videoCourse.courseContent}
            </Text>
          )}
          {longPressActivated && videoCourse.courseId === selectedVideo ? (
            <View>
              <WebView
                source={{ uri: videoCourse.courseTutorialUrl }}
                style={styles.youtubeLink}
              />
            </View>
          ) : null}
        </Pressable>
      );
    });
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
  youtubeLink: {
    marginTop: 16,
    height: 200,
    width: "100%",
  },
  cardDescription: {
    margin: 10,
    padding: 5,
    color: "blue",
  },
});

export default VideoCourses;
