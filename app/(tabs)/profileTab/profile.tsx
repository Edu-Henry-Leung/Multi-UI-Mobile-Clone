import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const router = useRouter();
  const [bio, setBio] = useState("SAIT Student");
  const [posts] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    },
  ]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.username}>samir_k ▼</Text>
          <Text style={styles.menuIcon}>☰</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/images/speed-brainrot.png")}
          />
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{posts.length}</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>340</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>180</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>

        {/* Name + Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.name}>Samir Karki</Text>
          <TextInput
            style={styles.bio}
            value={bio}
            onChangeText={setBio}
            onBlur={() => console.log("Saved:", bio)}
            multiline
            placeholder="Write a bio..."
            placeholderTextColor="#AAA"
          />
        </View>

        {/* Buttons Row */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => router.push("/(tabs)/profileTab/edit-profile")}
          >
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareBtn}>
            <Text style={styles.buttonText}>Share profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn}>
            <Text style={styles.buttonText}>add friend</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabBar}>
          <Text style={styles.activeTab}>▦</Text>
          <Text style={styles.inactiveTab}>▶</Text>
          <Text style={styles.inactiveTab}>More+</Text>
        </View>

        {/* Grid */}
        <View style={styles.grid}>
          {posts.map((item) => (
            <Image
              key={item.id}
              source={{ uri: item.image }}
              style={styles.gridItem}
              resizeMode="cover"
            />
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E6E6",
  },

  username: {
    fontSize: 16,
    fontWeight: "600",
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 12,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
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
    marginTop: 2,
  },

  bioSection: {
    paddingHorizontal: 16,
    marginTop: 8,
  },

  name: {
    fontWeight: "700",
    fontSize: 14,
    color: "#111",
  },

  bio: {
    marginTop: 2,
    fontSize: 13,
    color: "#444",
  },

  buttonRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 12,
  },

  editBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: "center",
    marginRight: 6,
  },

  shareBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: "center",
    marginLeft: 6,
  },

  buttonText: {
    fontWeight: "600",
    fontSize: 13,
  },

  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEE",
    paddingVertical: 10,
    marginTop: 15,
  },

  activeTab: {
    fontWeight: "700",
    fontSize: 16,
  },

  inactiveTab: {
    color: "#999",
    fontSize: 16,
  },

  emptyState: {
    alignItems: "center",
    marginTop: 40,
  },

  emptyTitle: {
    fontWeight: "600",
    fontSize: 16,
  },

  emptySub: {
    marginTop: 4,
    color: "#666",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  gridItem: {
    width: "33.33%",
    height: 120,
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

  menuIcon: {
    position: "absolute",
    right: 8,
    fontSize: 22,
    color: "#111",
    fontWeight: "600",
  },
});
