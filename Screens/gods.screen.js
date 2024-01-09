import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Image,
  Keyboard,
} from "react-native";
import { client, urlFor } from "../lib/sanity";

import { Entypo } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";

import { styles } from "../styles/styles.js";

export const Gods = ({ navigation }) => {
  const [clicked, setClicked] = useState(false);
  const [gods, setGods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc){
              description,
              rowTitle,
              body,
              title,
              "category": categories[0]->title,
              "type": categories[1]->title,
              mainImage{
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
  }

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
          <View
            style={
              clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
            }
          >
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
            {clicked && (
              <Entypo
                name="cross"
                size={20}
                color="silver"
                style={{ padding: 12 }}
                onPress={() => {
                  setSearchTerm("");
                }}
              />
            )}
            {clicked && (
              <TouchableOpacity
                style={styles.searchButton}
                onPress={() => {
                  Keyboard.dismiss();
                  setClicked(false);
                  setSearchTerm("");
                }}
              >
                <Text style={styles.buttonText}>Затвори</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>

      {clicked ? (
        <View style={styles.searchPage}>
          {filtered
            .filter((p) => p.category === "TheGods")
            .map((card) => (
              <TouchableOpacity key={card.title} style={styles.searchPageCard}>
                <Text
                  style={{ color: "#262626" }}
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
      ) : (
        <>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 30,
                color: "silver",
                borderBottomWidth: 1,
                borderBottomColor: "#636363",
                width: "90%",
                textAlign: "left",
                marginTop: "15%",
              }}
            >
              <Text style={{ backgroundColor: "#636363" }}>Ауси</Text>
            </Text>
            {gods
              ?.filter((p) => p.type === "Aesir")
              .map((card) => (
                <TouchableOpacity
                  key={card.title}
                  style={{
                    display: "flex",
                    width: "90%",
                    marginTop: "5%",
                    backgroundColor: "#333",
                    padding: "3%",
                  }}
                >
                  <Text style={styles.title}>{card.rowTitle}</Text>

                  <Image
                    source={{ uri: urlFor(card.mainImage).url() }}
                    style={{
                      flex: 1,
                      aspectRatio: 1,
                      resizeMode: "cover",

                      zIndex: 1000,
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <Text style={styles.description}>
                    {card.description.slice(0, 200) + "..."}
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
                  <Button
                    title="Прочети"
                    color={"#262626"}
                    onPress={() =>
                      navigation.navigate("Post", {
                        uri: urlFor(card.mainImage).url(),
                        description: card.description,
                        rowTitle: card.rowTitle,
                        body: card,
                        title: card.title,
                      })
                    }
                  />
                </TouchableOpacity>
              ))}
          </View>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 30,
                color: "silver",
                borderBottomWidth: 1,
                borderBottomColor: "#636363",
                width: "90%",
                textAlign: "left",
                marginTop: "15%",
              }}
            >
              <Text style={{ backgroundColor: "#636363" }}>Вани</Text>
            </Text>
            {gods
              ?.filter((p) => p.type === "Vani")
              .map((card) => (
                <TouchableOpacity
                  key={card.title}
                  style={{
                    display: "flex",
                    width: "90%",
                    marginTop: "5%",
                    backgroundColor: "#333",
                    padding: "3%",
                  }}
                >
                  <Text style={styles.title}>{card.rowTitle}</Text>

                  <Image
                    source={{ uri: urlFor(card.mainImage).url() }}
                    style={{
                      flex: 1,
                      aspectRatio: 1,
                      resizeMode: "cover",

                      zIndex: 1000,
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <Text style={styles.description}>
                    {card.description.slice(0, 200) + "..."}
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
                  <Button
                    title="Прочети"
                    color={"#262626"}
                    onPress={() =>
                      navigation.navigate("Post", {
                        uri: urlFor(card.mainImage).url(),
                        description: card.description,
                        rowTitle: card.rowTitle,
                        body: card,
                        title: card.title,
                      })
                    }
                  />
                </TouchableOpacity>
              ))}
          </View>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 30,
                color: "silver",
                borderBottomWidth: 1,
                borderBottomColor: "#636363",
                width: "90%",
                textAlign: "left",
                marginTop: "15%",
              }}
            >
              <Text style={{ backgroundColor: "#636363" }}>Гиганти</Text>
            </Text>
            {gods
              ?.filter((p) => p.type === "Giants")
              .map((card) => (
                <TouchableOpacity
                  key={card.title}
                  style={{
                    display: "flex",
                    width: "90%",
                    marginTop: "5%",
                    backgroundColor: "#333",
                    padding: "3%",
                  }}
                >
                  <Text style={styles.title}>{card.rowTitle}</Text>

                  <Image
                    source={{ uri: urlFor(card.mainImage).url() }}
                    style={{
                      flex: 1,
                      aspectRatio: 1,
                      resizeMode: "cover",

                      zIndex: 1000,
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <Text style={styles.description}>
                    {card.description.slice(0, 200) + "..."}
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
                  <Button
                    title="Прочети"
                    color={"#262626"}
                    onPress={() =>
                      navigation.navigate("Post", {
                        uri: urlFor(card.mainImage).url(),
                        description: card.description,
                        rowTitle: card.rowTitle,
                        body: card,
                        title: card.title,
                      })
                    }
                  />
                </TouchableOpacity>
              ))}
          </View>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 30,
                color: "silver",
                borderBottomWidth: 1,
                borderBottomColor: "#636363",
                width: "90%",
                textAlign: "left",
                marginTop: "15%",
              }}
            >
              <Text style={{ backgroundColor: "#636363" }}>Създания</Text>
            </Text>
            {gods
              ?.filter((p) => p.type === "Creatures")
              .map((card) => (
                <TouchableOpacity
                  key={card.title}
                  style={{
                    display: "flex",
                    width: "90%",

                    backgroundColor: "#333",
                    padding: "3%",
                    marginBottom: "5%",
                  }}
                >
                  <Text style={styles.title}>{card.rowTitle}</Text>

                  <Image
                    source={{ uri: urlFor(card.mainImage).url() }}
                    style={{
                      flex: 1,
                      aspectRatio: 1,
                      resizeMode: "cover",

                      zIndex: 1000,
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <Text style={styles.description}>
                    {card.description.slice(0, 200) + "..."}
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
                  <Button
                    title="Прочети"
                    color={"#262626"}
                    onPress={() =>
                      navigation.navigate("Post", {
                        uri: urlFor(card.mainImage).url(),
                        description: card.description,
                        rowTitle: card.rowTitle,
                        body: card,
                        title: card.title,
                      })
                    }
                  />
                </TouchableOpacity>
              ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};
