import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = [
    {
      id: "1",
      name: "ootd_everyday",
      handle: "@ootd_everyday",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: "2",
      name: "frenchie_fry39",
      handle: "@frenchie_fry39",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: "3",
      name: "paisley.print.48",
      handle: "@paisley.print.48",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: "4",
      name: "lil_wyatt838",
      handle: "@lil_wyatt838",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: "5",
      name: "pia.ina.pod",
      handle: "@pia.ina.pod",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  const renderItem = ({ item }: { item: (typeof searchResults)[0] }) => (
    <TouchableOpacity style={styles.searchItem}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemHandle}>{item.handle}</Text>
      </View>
      <TouchableOpacity style={styles.followBtn}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      {/* Search Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <Feather name="search" size={18} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search users, posts..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Search Results */}
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    marginLeft: 8,
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

  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#F0F0F0",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#DDD",
    marginRight: 12,
  },

  itemContent: {
    flex: 1,
  },

  itemName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
  },

  itemHandle: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
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
