import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoCourses = ({ route }) => {
  const { recipe } = route.params;
  const [expandedCard, setExpandedCard] = useState(null);
  const [longPressActivated, setLongPressActivated] = useState(undefined);
  const [selectedVideo, setSelectedVideo] = useState(undefined);
  const [isVideoWatched, setIsVideoWatched] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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

  const onStateChange = (state) => {
    if (state === "ended") {
      setIsVideoWatched((prevIsVideoWatched) => ({
        ...prevIsVideoWatched,
        [selectedVideo]: true,
      }));
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
          key={videoCourse.courseTitle} 
          style={({ pressed }) => [
            styles.card,
            { opacity: pressed ? 0.5 : 1 }, 
          ]}
          onPress={() => {
            handleCardPress(videoCourse.courseId);
            setLongPressActivated(false);
            setSelectedVideo(null);
          }}
          onLongPress={() => {
            setLongPressActivated(true);
            setModalVisible(true);
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
            <Modal visible={modalVisible}>
              <View style={{ marginTop: 50 }}>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={styles.closeButton}
                >
                 <AntDesign name="close" size={24} color="black" style={styles.closeButtonIcon}/>
                </Pressable>
              </View>
              <View style={{ marginTop: 50 }}>
                <YoutubePlayer
                  height={300}
                  play={true}
                  videoId={videoCourse.courseTutorialUrl}
                  onChangeState={onStateChange}
                />
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={styles.cancelButton}
                >
                  <Text style={styles.buttonText}>
                    {isWatched ? "DONE" : "CANCEL"}
                  </Text>
                </Pressable>
              </View>
            </Modal>
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
    color: "black",
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 12,
    
  },
  closeButtonIcon: {
   fontSize: 30,
    
  },
  cancelButton: {
    backgroundColor: '#93bf85',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VideoCourses;
