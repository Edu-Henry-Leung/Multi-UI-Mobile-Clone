import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const router = useRouter();
  const [posts, setPosts] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.username}>samir_k</Text>
        </View>

        {/* Profile Info Row */}
        <View style={styles.profileRow}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/speed-brainrot.png")}
          />

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{posts.length}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>340</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>180</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.name}>Samir Karki</Text>
          <Text style={styles.bio}>SAIT Student</Text>
        </View>

        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => router.push("/edit-profile")}
        >
          <Text style={styles.editBtnText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Add Post Button */}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => setPosts([...posts, { id: posts.length + 1 }])}
        >
          <Text style={styles.addBtnText}>Add Post</Text>
        </TouchableOpacity>

        {/* Dynamic Grid */}
        <View style={styles.grid}>
          {posts.map((item) => (
            <View key={item.id} style={styles.gridItem} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E6E6",
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#DDD",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  bioSection: {
    paddingHorizontal: 16,
  },
  name: {
    fontWeight: "700",
    fontSize: 13,
  },
  bio: {
    fontSize: 12,
    marginTop: 4,
  },
  editBtn: {
    marginHorizontal: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  editBtnText: {
    fontWeight: "600",
  },

  addBtn: {
    marginHorizontal: 16,
    marginTop: 10,
    backgroundColor: "#111",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  addBtnText: {
    color: "#FFF",
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  gridItem: {
    width: "33.33%",
    height: 120,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#EEE",
  },
  backBtn: {
    position: "absolute",
    left: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 32,
    color: "#111",
    fontWeight: "300",
    marginTop: -4,
  },
});
