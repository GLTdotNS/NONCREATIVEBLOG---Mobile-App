import React from "react";
import {
  View,
  Text,
  Linking,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerToggleButton,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { styles } from "./styles/styles.js";
import logo from "./assets/fulllogo_transparent.png";

import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Screens/home.screen.js";
import { Sagas } from "./Screens/sagas.screen.js";
import { AppInfoScreen } from "./Screens/appInfo.screen.js";
import { Gods } from "./Screens/gods.screen.js";
import { Cosmology } from "./Screens/cosmology.screen.js";
import { Runes } from "./Screens/runes.screen.js";
import { AdditionalInfo } from "./Screens/additionalInfo.screen.js";
import { Search } from "./Screens/search.screen.js";

const PostScreen = ({ navigation, route }) => {
  const { body, uri, title } = route.params;

  return (
    <ScrollView
      style={{
        flexGrow: 1,
      }}
    >
      <Image
        source={{ uri: uri }}
        style={{
          flex: 1,
          aspectRatio: 1,
          resizeMode: "cover",

          zIndex: 1000,
          width: "100%",
          height: "auto",
        }}
      />

      <View
        style={{
          flex: 1,
          padding: "5%",
          backgroundColor: "#262626",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: "15%",
            color: "silver",
          }}
        >
          {" "}
          {title}
        </Text>

        {body.body.map((block, index) => {
          if (block._type === "image") {
            if (block.asset) {
              return (
                <>
                  <Image
                    key={index}
                    source={{
                      uri: `https://cdn.sanity.io/images/6kqgsbl2/production/${block.asset?._ref
                        .replace("image-", "")
                        .replace("-jpg", "")}.jpg`,
                    }}
                    style={{ flex: 1, aspectRatio: 1, resizeMode: "cover" }}
                  />
                  {block.caption ? (
                    <Text style={styles.caption}>{block.caption}</Text>
                  ) : (
                    ""
                  )}
                </>
              );
            } else {
              return null;
            }
          } else if (block._type === "block") {
            if (block.style === "blockquote") {
              return (
                <View
                  key={index}
                  style={{
                    width: "100%",
                    marginTop: "2%",
                    padding: 22,
                    backgroundColor: "#333",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "silver",
                      flex: 1,
                      lineHeight: 24,
                    }}
                  >
                    {block.children.map((child, childIndex) => (
                      <Text key={childIndex}> {child.text} </Text>
                    ))}
                  </Text>
                </View>
              );
            }
            if (block.listItem === "bullet") {
              return (
                <View key={index} style={{ marginTop: "2%" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "silver",
                      flex: 1,
                      lineHeight: 24,
                    }}
                  >
                    {block.children.map((child, childIndex) => (
                      <Text key={childIndex}>{`\u2022 ${child.text}`} </Text>
                    ))}
                  </Text>
                </View>
              );
            }
            return (
              <Text
                style={{
                  fontSize: 15,
                  color: "silver",
                  flex: 1,
                  lineHeight: 24,
                }}
                key={index}
              >
                {block.children.map((child, childIndex) => {
                  if (
                    child._type === "span" &&
                    child.marks &&
                    child.marks.includes("strong")
                  ) {
                    return (
                      <Text key={childIndex} style={{ fontWeight: "bold" }}>
                        {child.text}
                      </Text>
                    );
                  } else {
                    return child.text;
                  }
                })}
              </Text>
            );
          }

          return null;
        })}
      </View>
    </ScrollView>
  );
};

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <AdditionalInfo />
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "gray",
      }}
    />
    <DrawerItemList {...props} />
    <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }} />

    <DrawerItem
      label="Свържи се с нас"
      onPress={() => Linking.openURL("mailto:noncreativeblog@gmail.com")}
      icon={({ focused, color, size }) => (
        <MaterialIcons name="email" size={24} color="white" />
      )}
      labelStyle={{ color: "white" }}
      iconContainerStyle={{ marginRight: 0 }}
    />
    <DrawerItem
      label="Оцени приложението"
      onPress={() => Linking.openURL("https://canislupus.dev")}
      icon={({ focused, color, size }) => (
        <MaterialIcons name="star-rate" size={24} color="white" />
      )}
      labelStyle={{ color: "white" }}
      iconContainerStyle={{ marginRight: 0 }}
    />
    <DrawerItem
      label="Официален сайт"
      onPress={() => Linking.openURL("https://www.noncreativeblog.net")}
      icon={({ focused, color, size }) => (
        <MaterialCommunityIcons name="web" size={24} color="white" />
      )}
      labelStyle={{ color: "white" }}
      iconContainerStyle={{ marginRight: 0 }}
    />
    <DrawerItem
      label="Фейсбук страница"
      onPress={() => alert("Все още не е налична")}
      icon={({ focused, color, size }) => (
        <AntDesign name="facebook-square" size={24} color="white" />
      )}
      labelStyle={{ color: "white" }}
      iconContainerStyle={{ marginRight: 0 }}
    />

    <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }} />
    <DrawerItem
      label="Разработчик"
      onPress={() => Linking.openURL("https://canislupus.dev")}
      icon={({ focused, color, size }) => (
        <AntDesign name="codesquareo" size={24} color="white" />
      )}
      labelStyle={{ color: "white" }}
      iconContainerStyle={{ marginRight: 0 }}
    />
    <DrawerItem
      label="Open source"
      onPress={() => alert("Кодът се рефактурира")}
      icon={({ focused, color, size }) => (
        <MaterialCommunityIcons name="source-branch" size={24} color="white" />
      )}
      labelStyle={{ color: "white" }}
      iconContainerStyle={{ marginRight: 0 }}
    />
    <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }} />
    <View
      style={{
        padding: 16,
        backgroundColor: "#333",
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>
        App version - v1.0(Beta)
      </Text>
    </View>
  </DrawerContentScrollView>
);

const HomeNavigator = ({ navigation, route }) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: "#333",
        },
        headerStyle: {
          backgroundColor: "#262626",
        },
        headerTitleAlign: "center",
        headerTintColor: "silver",
        drawerActiveTintColor: "silver",
        drawerInactiveTintColor: "white",
        drawerPosition: "left",
        headerRight: () => (
          <Feather
            style={{
              marginRight: 15,
            }}
            name="search"
            size={20}
            color="white"
            onPress={() => navigation.navigate("Search")}
          />
        ),
        headerLeft: () => <DrawerToggleButton tintColor="silver" />,
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="BLOG"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image source={logo} style={{ width: 50, height: 50 }} />
          ),
          drawerLabel: "НАЧАЛО",
          drawerIcon: ({ focused, color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Информация"
        component={AppInfoScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Entypo name="info" size={24} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="Търсене"
        component={Search}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Feather name="search" size={24} color="white" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const Stack = createStackNavigator();
function App({ navigation }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animationEnabled: false,
          }}
        >
          <Stack.Screen
            name="НАЧАЛО"
            component={HomeNavigator}
            options={{ headerShown: false, title: `НАЧАЛО` }}
          />

          <Stack.Screen
            name="GODS"
            component={Gods}
            options={{
              title: `Богове & създания`,
              headerStyle: {
                backgroundColor: "#262626",
                borderBottomWidth: 0,
                shadowColor: "#262626",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Post"
            options={{
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#333",
                borderBottomWidth: 0,
                shadowColor: "white",
              },
              headerTintColor: "white",
            }}
            component={PostScreen}
          />
          <Stack.Screen
            name="РУНИ"
            component={Runes}
            options={{
              title: `РУНИ`,
              headerStyle: {
                backgroundColor: "#262626",
                borderBottomWidth: 0,
                shadowColor: "#262626",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="COSMOLOGY"
            component={Cosmology}
            options={{
              title: `Космология`,
              headerStyle: {
                backgroundColor: "#262626",
                borderBottomWidth: 0,
                shadowColor: "#262626",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Sagas"
            component={Sagas}
            options={{
              title: `Саги`,
              headerStyle: {
                backgroundColor: "#262626",
                borderBottomWidth: 0,
                shadowColor: "#262626",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: `Търсене`,
              headerStyle: {
                backgroundColor: "#262626",
                borderBottomWidth: 0,
                shadowColor: "#262626",
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={"#333"} />
    </>
  );
}

export default App;
