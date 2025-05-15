import React, { useRef, useState } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    text: "A ajuda que precisa para combater os seus vícios",
    img: require("../assets/img/chippy.jpg"),
  },
  {
    id: "2",
    text: "Com a ajuda da Inteligência Artificial integrada no nosso chip",
    img: require("../assets/img/chippy2.jpg"),
  },
  {
    id: "3",
    text: "Aprenda a reduzir o seu tempo de ecrã de forma saudável",
    img: require("../assets/img/chippy3.jpg"),
  },
];

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Orbitron: require("../assets/fonts/Orbitron/Orbitron-Regular.ttf"),
    OrbitronBold: require("../assets/fonts/Orbitron/Orbitron-Bold.ttf"),
  });

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate("Terms"); // <-- vai para o ecrã de termos
    }
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/img/header.jpg")}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <View style={styles.sliderContainer}>
        <Animated.FlatList
          data={slides}
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image
                source={item.img}
                style={styles.chipImage}
                resizeMode="contain"
              />
              <Text style={styles.description}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[styles.indicator, { opacity }]}
            />
          );
        })}
      </View>

      <TouchableOpacity onPress={handleNext}>
        <Text style={styles.nextText}>
          {currentIndex === slides.length - 1
            ? "Aceitar termos e condições"
            : "Avançar"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerImage: {
    width: 250,
    height: 50,
    marginTop: 10,
    alignSelf: "flex-start",
    opacity: 1,
  },
  sliderContainer: {
    flex: 1,
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  chipImage: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 30,
  },
  description: {
    fontFamily: "Orbitron",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#521D80",
    marginHorizontal: 5,
  },
  nextText: {
    color: "#C655FF",
    fontSize: 14,
    marginBottom: 20,
    fontStyle: "italic",
    fontWeight: "100",
    alignSelf: "flex-end",
    marginRight: 30,
  },
});
