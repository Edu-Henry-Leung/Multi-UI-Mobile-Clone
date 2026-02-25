import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const onPressAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn}>
          <Text style={styles.headerIcon}>‹</Text>
        </TouchableOpacity>

        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerSmall}>OOTD_EVERYDAY</Text>
          <Text style={styles.headerTitle}>Posts</Text>
        </View>

        <View style={styles.headerIconBtn} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Post Card */}
        <View style={styles.card}>
          {/* Post Top row */}
          <View style={styles.postTop}>
            <View style={styles.userRow}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://randomuser.me/api/portraits/men/2.jpg",
                }}
              />
              <View>
                <Text style={styles.username}>ootd_everyday</Text>
                <Text style={styles.subText}>via frenchie_fry39</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreBtn}>
              <Text style={styles.moreText}>⋯</Text>
            </TouchableOpacity>
          </View>

          {/* Main Photo */}
          <Image
            style={styles.mainImage}
            source={{
              uri: "https://images.pexels.com/photos/30237034/pexels-photo-30237034/free-photo-of-chateau-de-le-lude-in-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            resizeMode="cover"
          />

          {/* Action Row */}
          <View style={styles.actionsRow}>
            <View style={styles.actionsLeft}>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionIcon}>♡</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionIcon}>💬</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionIcon}>✈︎</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionIcon}>🔖</Text>
            </TouchableOpacity>
          </View>

          {/* Likes */}
          <Text style={styles.likesText}>
            <Image
              style={styles.likesAvatar}
              source={{
                uri: "https://randomuser.me/api/portraits/men/2.jpg",
              }}
            />
            <Image
              style={styles.likesAvatar}
              source={{
                uri: "https://randomuser.me/api/portraits/men/2.jpg",
              }}
            />
            <Image
              style={styles.likesAvatar}
              source={{
                uri: "https://randomuser.me/api/portraits/men/2.jpg",
              }}
            />
            {"  "}Liked by paisley.print.48 and 7 others
          </Text>

          {/* Caption */}
          <View style={styles.captionRow}>
            <Text style={styles.username}>frenchie_fry39 </Text>
            <Text style={styles.captionText}>Fresh shot on a sunny day!</Text>
          </View>

          {/* Comments */}
          <Text style={styles.viewComments}>View all 12 comments</Text>

          <View style={styles.commentRow}>
            <Text style={styles.commentUser}>lil_wyatt838 </Text>
            <Text style={styles.commentText}>Awesome totes!!</Text>
          </View>
          <View style={styles.commentRow}>
            <Text style={styles.commentUser}>pia.ina.pod </Text>
            <Text style={styles.commentText}>Gorg. Love it!</Text>
            <Text style={styles.heart}> ♥</Text>
          </View>

          <Text style={styles.timeText}>1 day ago</Text>
        </View>

        {/* Bottom Alert Button */}
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={onPressAlert}
          activeOpacity={0.9}
        >
          <Text style={styles.alertBtnText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Entypo name="video" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user-circle-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 58,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E6E6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: {
    fontSize: 22,
    color: "#111",
    fontWeight: "600",
  },
  headerTitleWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerSmall: {
    fontSize: 11,
    color: "#777",
    letterSpacing: 0.6,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginTop: 2,
  },

  scrollContent: {
    paddingBottom: 0,
  },

  card: {
    backgroundColor: "#FFF",
  },

  postTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#DDD",
  },
  username: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
  },
  subText: {
    fontSize: 11,
    color: "#777",
    marginTop: 2,
  },
  moreBtn: {
    width: 36,
    height: 36,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  moreText: {
    fontSize: 20,
    color: "#111",
    fontWeight: "700",
  },

  mainImage: {
    width: "100%",
    height: 360,
    backgroundColor: "#EEE",
  },

  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  actionsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    fontSize: 18,
    color: "#111",
  },

  likesAvatar: {
    width: 12,
    height: 12,
    borderRadius: 17,
  },

  likesText: {
    paddingHorizontal: 14,
    marginTop: 2,
    fontSize: 12,
    color: "#111",
    fontWeight: "600",
  },

  captionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
    marginTop: 6,
  },
  captionText: {
    fontSize: 12,
    color: "#111",
  },

  viewComments: {
    paddingHorizontal: 14,
    marginTop: 6,
    fontSize: 12,
    color: "#888",
  },

  commentRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
    marginTop: 4,
    alignItems: "center",
  },
  commentUser: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111",
  },
  commentText: {
    fontSize: 12,
    color: "#111",
  },
  heart: {
    fontSize: 12,
    color: "#D11A2A",
  },

  timeText: {
    paddingHorizontal: 14,
    marginTop: 8,
    marginBottom: 12,
    fontSize: 10,
    color: "#999",
  },

  alertBtn: {
    marginHorizontal: 14,
    marginTop: 18,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  alertBtnText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    backgroundColor: "#FFF",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E6E6E6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navItem: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
