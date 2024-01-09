import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { client, urlFor } from "../lib/sanity";

import { styles } from "../styles/styles.js";

export const Cosmology = ({ navigation }) => {
  const [cosmology, setCosmology] = useState([]);
  const [loading, setLoading] = useState(true);
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
        const recipes = await client.fetch(query);
        setCosmology(recipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {cosmology
          ?.filter((p) => p.category == "Cosmology")
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
                style={{ color: "silver", marginTop: "3%", marginBottom: "5%" }}
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
            textAlign: "center",
            marginTop: "15%",
          }}
        >
          <Text>Деветте свята</Text>
        </Text>

        {cosmology
          ?.filter((p) => p.category == "Worlds")
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
                style={{ color: "silver", marginTop: "3%", marginBottom: "5%" }}
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
    </ScrollView>
  );
};
