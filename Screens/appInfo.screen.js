import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from "react-native";

import logo from "../assets/fulllogo_transparent.png";

import { styles } from "../styles/styles.js";

export const AppInfoScreen = () => {
  const handleContactPress = () => {
    const contactInfo = "mailto:noncreativeblog@gmail.com";
    Linking.openURL(contactInfo);
  };
  const handlePrivacyPolicyPress = () => {
    const websiteURL = "https://www.noncreativeblog.net/privacy";
    Linking.openURL(websiteURL);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
        <Text style={styles.version}>Версия: v1.0(Beta)</Text>
        <Text style={styles.h1}>Основна информация</Text>

        <Text style={styles.text}>
          Тук ще намерите разкази за боговете и героите на скандинавската
          митология, както и за техните битки и епични приключения. Ще се
          запознаете с космологията на нордическите племена и техните вярвания.
          Какво всъщност е било за тях живота , семейството и родината !
        </Text>

        <Text style={styles.h1}>Мисия</Text>

        <Text style={styles.text}>
          Ние сме отдадени на проследяването на най - дълбоките аспекти на този
          древен свят, предоставяйки обширна информация за боговете, героите и
          разказите, които правят този епос толкова вълнуващ и богат.
        </Text>
        <Text style={styles.text}>
          Ако искате да помогнете за развитието на каузата, можете да направите
          дарение чрез PayPal или банков превод . Можете да споделите сайта в
          социалните мрежи. Можете да пишете коментари и отзиви за сайта или
          приложението.
        </Text>
        <Text style={styles.text}></Text>
        <Button
          onPress={() =>
            Linking.openURL("https://www.noncreativeblog.net/donate")
          }
          style={styles.contactButton}
          title="Дарение"
        />
        <Text style={styles.h1}>Сподели с нас</Text>
        <Text style={styles.text}>
          Ние работим усилено, за да направим приложението още по-добро. Ако
          имате предложения, срещате проблеми или искате да бъдете автор, моля,
          свържете се с нас.
        </Text>

        <Button
          onPress={handleContactPress}
          style={styles.contactButton}
          title="Свържете се с нас"
        />

        <Text style={styles.h1}>Поверителност</Text>
        <Text style={styles.text}>
          Това мобилно проложение използва бисквитки, за да ви осигури по -
          добро потребителско изживяване. Като го използвате, Вие приемате
          нашата политика за поверителност.
        </Text>

        <TouchableOpacity
          onPress={handlePrivacyPolicyPress}
          style={{ width: "100%" }}
        >
          <Text style={{ color: "blue", padding: "2%", textAlign: "center" }}>
            Политика за поверителност
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
