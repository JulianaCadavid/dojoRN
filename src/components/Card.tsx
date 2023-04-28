import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { styles } from "../styles/styles";

const CardComponent = () => {
  const [data, setData] = useState<Character[]>([]);

  const handlePress = () => {
    Linking.openURL("https://www.netflix.com/ad/title/80014749");
  };

  interface Character {
    id: string;
    name: string;
    gender: string;
    species: string;
    image: string;
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.cardcontainer}>
      {data.map((character) => (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Image style={styles.image} source={{ uri: character.image }} />
          <Text style={styles.text}>{character.name}</Text>
          <Text style={styles.text}>{character.gender}</Text>
          <Text style={styles.text}>{character.species}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CardComponent;
