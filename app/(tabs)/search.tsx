import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;
const photoSize = (screenWidth - 2) / 3;

export default function Search() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const photoResults = [
    {
      id: "1",
      photo: "https://picsum.photos/400/400?random=1",
    },
    {
      id: "2",
      photo: "https://picsum.photos/400/400?random=2",
    },
    {
      id: "3",
      photo: "https://picsum.photos/400/400?random=3",
    },
    {
      id: "4",
      photo: "https://picsum.photos/400/400?random=4",
    },
    {
      id: "5",
      photo: "https://picsum.photos/400/400?random=5",
    },
    {
      id: "6",
      photo: "https://picsum.photos/400/400?random=6",
    },
    {
      id: "7",
      photo: "https://picsum.photos/400/400?random=7",
    },
    {
      id: "8",
      photo: "https://picsum.photos/400/400?random=8",
    },
    {
      id: "9",
      photo: "https://picsum.photos/400/400?random=9",
    },
    {
      id: "10",
      photo: "https://picsum.photos/400/400?random=10",
    },
    {
      id: "11",
      photo: "https://picsum.photos/400/400?random=11",
    },
    {
      id: "12",
      photo: "https://picsum.photos/400/400?random=12",
    },
  ];

  const renderItem = ({ item }: { item: (typeof photoResults)[0] }) => (
    <TouchableOpacity style={styles.photoItem}>
      <Image style={styles.photo} source={{ uri: item.photo }} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      {/* Search Header */}
      <View style={styles.header}>
        <View style={styles.searchInputContainer}>
          <Feather name="search" size={18} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search photos..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Photo Grid */}
      <FlatList
        data={photoResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContent}
      />
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E6E6",
  },

  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    fontSize: 22,
    color: "#111",
    fontWeight: "600",
  },

  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 36,
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
    gap: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#111",
  },

  listContent: {
    paddingTop: 8,
  },

  photoItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 0,
  },

  photo: {
    width: "100%",
    height: "100%",
    backgroundColor: "#DDD",
  },

  followBtn: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },

  followText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111",
  },
});
