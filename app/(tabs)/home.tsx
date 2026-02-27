import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Test Data to utilize Dynamic Content rendering for the Home Screen with the stories and posts.
// User Stories
const storyProfileImages = [
  {
    id: "1",
    name: "paisley.print.48",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "ootd_everyday",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "pia.ina.pod",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "4",
    name: "frenchie_fry39",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "5",
    name: "lil_wyatt838",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "6",
    name: "User6",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Random Posts that can't be interacted with.

const posts = [
  {
    id: "1",
    username: "ootd_everyday",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    postImage:
      "https://images.pexels.com/photos/30237034/pexels-photo-30237034/free-photo-of-chateau-de-le-lude-in-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 8,
    caption: "Fresh shot on a sunny day!",
  },
  {
    id: "2",
    username: "pia.ina.pod",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    postImage:
      "https://images.pexels.com/photos/15062488/pexels-photo-15062488/free-photo-of-snow-near-castle-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 7,
    caption: "This shot looks so monochrome lol!",
  },
];

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* The header for instagram. */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
          }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Instagram</Text>
      </View>

      {/* The user stories below the header. */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storyContainer}
      >
        {storyProfileImages.map((story) => (
          <View key={story.id} style={styles.story}>
            <Image source={{ uri: story.image }} style={styles.storyImage} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* The posts that go below the stories.*/}
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.userInfo}>
              {/* user Info */}
              <Image
                source={{ uri: item.profileImage }}
                style={styles.profileImage}
              />
              <Text style={styles.userName}>{item.username}</Text>
            </View>
            {/* Post Image */}
            <Image source={{ uri: item.postImage }} style={styles.postImage} />
            {/* Likes and Captions */}
            <View style={styles.postDetails}>
              <Text style={styles.likes}>{item.likes} likes</Text>
              <Text style={styles.caption}>
                <Text style={styles.bold}>{item.username}</Text>
                {item.caption}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#d6249f",
    resizeMode: "cover",
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storyContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  story: {
    alignItems: "center",
    marginRight: 15,
    width: 90,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#d6249f",
    resizeMode: "cover",
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#333",
    width: 85,
    overflow: "hidden",
    paddingBottom: 15,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
  postDetails: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
  },
  caption: {
    marginTop: 5,
  },
  bold: {
    fontWeight: "bold",
    marginRight: 5,
  },
});
