import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { styles } from "../styles/styles.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export const HomeScreen = () => {
  const navigation = useNavigation();
  const cards = [
    {
      id: 1,
      title: "БОГОВЕ И СЪЗДАНИЯ",
      description: "Боговете и създанията в Скандинавската митология",
      page: "GODS",
    },
    {
      id: 2,
      title: "КОСМОЛОГИЯ",
      description: "Космологията на нордическите племена",
      page: "COSMOLOGY",
    },
    {
      id: 3,
      title: "РУНИ",
      description: "Старият Футарк",
      page: "РУНИ",
    },
    {
      id: 3,
      title: "САГИ",
      description: "Поеми и разкази",
      page: "Sagas",
    },
  ];
  const { height: screenHeight } = Dimensions.get("window"); // Взема височината на екрана
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#262626",
      }}
    >
      <ImageBackground
        source={{
          uri: "https://miro.medium.com/v2/resize:fit:1024/1*9WeJrBj6pp-qnGjRGg2NUw.png",
        }}
        style={{
          flex: 1,
          alignItems: "center",
          resizeMode: "cover",
          justifyContent: "center",
          width: "100%",
          height: screenHeight,
        }}
      >
        <View style={{ alignItems: "center" }}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={() => navigation.navigate(`${card.page}`)}
            >
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.description}>{card.description}</Text>
              <View style={{ position: "absolute", right: 16, top: 25 }}>
                <AntDesign name="rightcircle" size={24} color="silver" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
