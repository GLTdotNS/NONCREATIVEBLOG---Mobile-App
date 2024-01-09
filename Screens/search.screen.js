import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { client, urlFor } from "../lib/sanity";

import { Feather } from "@expo/vector-icons";

import { styles } from "../styles/styles.js";

export const Search = ({ navigation }) => {
  const [clicked, setClicked] = useState(false);
  const [gods, setGods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
            description,
            rowTitle,
            body,
            title,
            "category": categories[0]->title,
            "type": categories[1]->title,
            mainImage {
              asset->{
                _id,
                url
              }
            },
            slug,
            publishedAt,
            "name": author->name,
          }`;
        const gods = await client.fetch(query);
        const filteredPosts = gods.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFiltered(filteredPosts);
        setGods(gods);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback
          keyboardShouldPersistTaps="handled"
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
          }}
        >
          <View style={styles.container}>
            <View style={styles.searchBar__clicked}>
              <Feather
                name="search"
                size={20}
                color="silver"
                style={{ marginLeft: 1 }}
              />

              <TextInput
                style={styles.searchInput}
                placeholder="Потърси"
                placeholderTextColor={"silver"}
                value={searchTerm}
                onChangeText={setSearchTerm}
                onSubmitEditing={() => {
                  setClicked(true);
                }}
                onFocus={() => {
                  setClicked(true);
                }}
              />

              <TouchableOpacity
                style={styles.searchButton}
                onPress={() => {
                  setSearchTerm("");
                }}
              >
                <Text style={styles.buttonText}>Изчисти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.searchPage}>
          {filtered.map((card) => (
            <TouchableOpacity key={card.title} style={styles.searchPageCard}>
              <Text
                style={{ color: "silver" }}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.navigate("Post", {
                    uri: urlFor(card.mainImage).url(),
                    description: card.description,
                    rowTitle: card.rowTitle,
                    body: card,
                    title: card.title,
                  });
                }}
              >
                {card.title}
              </Text>

              <Text
                style={{
                  color: "silver",
                  marginTop: "3%",
                  marginBottom: "5%",
                }}
              >
                by {card.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
};
