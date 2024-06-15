import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, FlatList, Touchable, TouchableOpacity } from "react-native";
import { fetchsearchSongs } from "../Config/Api";
import { useAudioPlayer } from "../components/AudioPlayerProvider";
import { useNavigation } from "@react-navigation/native";

interface Song {
  [x: string]: string | undefined;
  title: string;
  songimageUrl: string;
  artist: { name: string };
}

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Song[]>([]);

  const { currentSong, playSong, stopSong } = useAudioPlayer();
  const navigation = useNavigation();

  const fetchData = async (query: string) => {
    try {
      const result = await fetchsearchSongs(query);
      setSearchResults(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      fetchData(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const renderItem = ({ item }: { item: Song }) => (
    
    <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10, alignItems: "center", marginLeft: 20 }} onPress={() => {
        playSong(item);
        navigation.navigate('Player');
      }}>
      <Image source={{ uri: item.songimageUrl }} style={styles.image} />
      <View>
        <Text style={styles.resultText}>
          {item.title}
        </Text>
        <Text style={styles.resultText2}>
          {item.artist && item.artist.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <Text style={styles.search}>Search</Text>
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  searchBar: {
    width: "75%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginStart: 10,
  },
  resultText: {
    color: "white",
    fontSize: 16,
    marginVertical: 0,
  },
  image: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 10,
    marginRight: 20,
  },
  search: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  resultText2: {
    color: "gray",
    fontSize: 14,
    marginVertical: 0,
  },
});

export default SearchScreen;

