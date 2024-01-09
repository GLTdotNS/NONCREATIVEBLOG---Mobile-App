import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { styles } from "../styles/styles.js";

export const Runes = ({ navigation }) => {
  const [runicSymbol, setRunicSymbol] = useState("Canis Lupus");
  const [displayResult, setDisplayResult] = useState("ᚲᚨᚾᛁᛊ ᛚᚢᛈᚢᛊ");
  const [latinOrEF, setLatinOrEf] = useState("Latin");
  const convertFunctionLatinToEF = (input) => {
    const runicToLatinMap = {
      A: "ᚨ",
      B: "ᛒ",
      C: "ᚲ",
      D: "ᛞ",
      E: "ᛖ",
      F: "ᚠ",
      G: "ᚷ",
      H: "ᚺ",
      I: "ᛁ",
      J: "ᛃ",
      K: "ᚲ",
      L: "ᛚ",
      M: "ᛗ",
      N: "ᚾ",
      O: "ᛟ",
      P: "ᛈ",
      Q: "ᚳ",
      R: "ᚱ",
      S: "ᛊ",
      T: "ᛏ",
      U: "ᚢ",
      V: "ᚢ",
      W: "ᚹ",
      X: "ᚦ",
      Y: "ᛇ",
      Z: "ᛉ",
      TH: "ᚦ",
      NG: "ᛝ",

      " ": "  ",
    };

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const element = input[i].toUpperCase();
      let char = runicToLatinMap[element] || element;
      if (i + 1 < input.length) {
        const nextTwoChars = input.substr(i, 2).toUpperCase();
        if (runicToLatinMap[nextTwoChars]) {
          char = runicToLatinMap[nextTwoChars];
          i += 2;
        }
      }
      result += char;
    }

    setDisplayResult(result);
  };
  const convertFunctionEFtoLatin = (input) => {
    const elderToLatinMap = {
      ᚨ: "A",
      ᛒ: "B",
      ᚲ: "C",
      ᛞ: "D",
      ᛖ: "E",
      ᚠ: "F",
      ᚷ: "G",
      ᚺ: "H",
      ᛁ: "I",
      ᛃ: "J",
      ᛚ: "K",
      ᛗ: "M",
      ᚾ: "N",
      ᛟ: "O",
      ᛈ: "P",
      ᚳ: "Q",
      ᚱ: "R",
      ᛊ: "S",
      ᛏ: "T",
      ᚢ: "U",
      ᚹ: "W",
      ᚦ: "X",
      ᛇ: "Y",
      ᛉ: "Z",

      ᚦ: "TH",
      ᛝ: "NG",
      " ": " ",
    };

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const element = input[i].toUpperCase();
      let char = elderToLatinMap[element] || element;
      if (i + 1 < input.length) {
        const nextTwoChars = input.substr(i, 2).toUpperCase();
        if (elderToLatinMap[nextTwoChars]) {
          char = elderToLatinMap[nextTwoChars];
          i += 2;
        }
      }
      result += char;
    }

    setDisplayResult(result);
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://i.ytimg.com/vi/4fIQ40Gp5rw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzjhI5DgYFUpxZTZvVuxM4upZWYQ",
        }}
        style={{ width: "100%", height: 300 }}
      />

      <View style={styles.details}>
        <Text
          style={{
            textAlign: "justify",
            fontSize: 16,
            color: "white",
          }}
        >
          Протогерманската писменост е една от най - старите познати на
          човечеството , като първите сведения за нея датират от 160 години
          преди христа , но за първата руническа азбука се сочи Elder Furthark ,
          която е използвана между II и VII век. Тя е широко разпространена сред
          германските народи и най - вече в Скандинавия . За произхода и се
          говори , че Бог Один след като слязъл от дървото на живота Игдрасил
          получил руни , които му шепнели и надарили с мъдрост. Самата дума руна
          означава "шепот" / "мистериозен шепот"/. С навлизането на
          християнството в Европа руните са били изместени от латиницата , но
          руните са използвани и до днес - за декорация , за изготвянето на
          амулети , медальони и други украшения . Всяка една от руните има
          своето значение , както и всяка една от тях отговаря на звук или буква
          от латинската азбука. В таблицата по - долу можете да се запознаете
          със Elder Furthark и значението на руните , които съставляват
          азбуката. В случай , че изпитвате трудност да си преведете стар
          рунически надпис или искате да превърнете латински бувки в рунически
          занци , то използвайте нашия
        </Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.headerRow]}>
            <Text style={styles.headerCell}>Elder Futhark</Text>
            <Text style={styles.headerCell}>Латиница</Text>
            <Text style={styles.headerCell}>Наименование</Text>
            <Text style={styles.headerCell}>Значение</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>ᚨ</Text>
            <Text style={styles.cell}>A</Text>
            <Text style={styles.cell}>Ansuz</Text>
            <Text style={styles.cell}>
              Один и предците богове, въздух, комуникация
            </Text>
          </View>
          {/* Повторете горните два реда за всяка руна */}
        </View>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 40,
              color: "white",
              fontWeight: "bold",
            }}
          >
            КОНВЕРТОР
          </Text>
          <Text
            style={{
              color: "rgb(75, 166, 231)",
              fontSize: 40,
              borderBottomWidth: 1,
              borderBottomColor: "silver",
              marginBottom: 12,
            }}
          >
            {displayResult}
          </Text>
          <TextInput
            style={{
              backgroundColor: "white",
              padding: "5%",
              width: 300,
              borderRadius: 5,
              marginBottom: 15,
            }}
            placeholder="Въведете текст"
            value={runicSymbol}
            onChangeText={(text) => setRunicSymbol(text)}
          />

          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "#1a1a1a",
              width: "60%",
              padding: "4%",
              height: "50px !important",
              alignItems: "center",
            }}
            onPress={() => {
              if (latinOrEF == "Latin") {
                convertFunctionLatinToEF(runicSymbol);
              } else {
                convertFunctionEFtoLatin(runicSymbol);
              }
            }}
          >
            <Text
              style={{
                color: "#b0903d",
              }}
            >
              Конвертирай
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
