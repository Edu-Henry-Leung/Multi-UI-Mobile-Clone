import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Test Data to utilize Dynamic Content rendering for the Home Screen with the stories and posts.
// User Stories
const storyProfileImages = [
  {
    id: "0",
    name: "Your Story",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "1",
    name: "paisley.print.48",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "ootd_everyday",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "pia.ina.pod",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "4",
    name: "frenchie_fry39",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "5",
    name: "lil_wyatt838",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

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
    likes: 4,
    caption: "This shot looks so monochrome lol!",
  },
];

const HomePage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* The header for instagram. */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Instagram</Text>
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* The user stories below the header. */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storyContainer}
      >
        {storyProfileImages.map((story) => (
          <View key={story.id} style={styles.story}>
            <Image source={{ uri: story.avatar }} style={styles.storyAvatar} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* The posts that go below the stories on the home page. */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.userInfo}>
              {/* User Infos */}
              <Image
                source={{ uri: item.profileImage }}
                style={styles.profileImage}
              />
              <Text style={styles.userName}>{item.username}</Text>
              <TouchableOpacity
                style={styles.moreBtn}
                onPress={() => router.push("/(tabs)/homeTab/postDetails")}
              >
                <Text style={styles.moreText}>⋯</Text>
              </TouchableOpacity>
            </View>
            {/* Post Image */}
            <Image source={{ uri: item.postImage }} style={styles.postImage} />
            {/* Likes, comments, shares and Captions */}
            <View style={styles.postDetails}>
              <View style={styles.postIcons}>
                <View style={styles.postIconsLeft}>
                  <TouchableOpacity>
                    <Ionicons name="heart-outline" size={20} />
                  </TouchableOpacity>
                  {"  "}
                  <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={20} />
                  </TouchableOpacity>
                  {"  "}
                  <TouchableOpacity>
                    <Ionicons name="paper-plane-outline" size={20} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.postBookmark}>
                  <Ionicons name="bookmark-outline" size={20} />
                </TouchableOpacity>
              </View>
              <Text style={[styles.likesText, styles.bold]}>
                {item.likes} likes
              </Text>

              <Text style={styles.caption}>
                <Text style={styles.bold}>{item.username}</Text> {item.caption}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Billabong",
  },
  storyContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  story: {
    alignItems: "center",
    marginRight: 15,
    width: 90,
  },
  storyAvatar: {
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
  postIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postIconsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  postBookmark: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingLeft: "auto",
  },
  likesText: {
    fontSize: 14,
  },
  caption: {
    marginTop: 5,
  },
  bold: {
    fontWeight: "bold",
    marginRight: 5,
  },
  moreBtn: {
    width: 36,
    height: 36,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: "auto",
  },
  moreText: {
    fontSize: 20,
    color: "#111",
    fontWeight: "700",
  },
});
