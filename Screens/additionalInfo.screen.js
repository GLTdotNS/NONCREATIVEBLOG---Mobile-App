import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";

import {
  useFonts,
  MetalMania_400Regular,
} from "@expo-google-fonts/metal-mania";

export const AdditionalInfo = () => {
  let [fontsLoaded] = useFonts({
    MetalMania_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View>
        <ImageBackground
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: "center",
            width: "100%",
            height: 300,
          }}
          source={{
            uri: "https://www.noncreativeblog.net/_next/static/media/background.7e984235.jpg",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              lineHeight: 84,

              fontFamily: "MetalMania_400Regular",
            }}
          >
            NONCREATIVEBLOG
          </Text>
        </ImageBackground>
      </View>
    );
  }
};
