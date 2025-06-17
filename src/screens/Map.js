import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Platform,
  Animated,
  Easing,
} from "react-native";
import Header from "../components/Header";
import mapZoo from "../assets/images/mapaZoo.jpg";
import styled from "styled-components/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LeafIcon = styled(Ionicons)`
margin-right: ${['ios', 'android'].includes(Platform.OS) ? 7 : 10}px;
  margin-left: ${['ios', 'android'].includes(Platform.OS) ? 7 : 10}px;
  margin-top: ${['ios', 'android'].includes(Platform.OS) ? 90 : 40}px;
`;

export default function Map() {
  const imageWidth = width * 4;
  const containerWidth = width * 0.9;
  const scrollViewRef = useRef(null);

  const initialOffset = (imageWidth - width) / 2;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 900,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: initialOffset,
          y: 0,
          animated: false,
        });
      }
    }, 100);
  }, []);

  return (
    <View style={styles.page}>
      <Header />
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >

        <View style={styles.titleContainer}>
                      <Text style={styles.title}>
                        Mapa do Zoológico
                      </Text>
                    </View>

        {Platform.OS !== "web" && (
          <Text style={styles.subtitle}>
            Arraste para explorar o mapa completo do Zoológico de Brasília.
          </Text>
        )}

        <View style={styles.mapContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            maximumZoomScale={3}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
              paddingHorizontal: 0,
            }}
          >
            <Image source={require("../assets/images/mapaZoo.jpg")} 
              style={[
                styles.mapImage,
                Platform.OS === "web"
                  ? { width: 3000, height: 600 }
                  : { width: imageWidth },
              ]}
              resizeMode="contain"
            />
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f0f9f6",
    paddingTop: 70,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2e7d32", 
    marginBottom: 10,
    paddingTop: Platform.OS === "ios" ? 100 : 50,
    letterSpacing: 1.2,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    alignItems: "center",
  },
   titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  mapContainer: {
    width: Platform.OS === "web" ? 700 : width * 1,
    height: Platform.OS === "web" ? 500 : height * 0.6,
    borderRadius: 20,

    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  mapImage: {
  width: Platform.OS === "web" ? "100%" : undefined,
    height: Platform.OS === "web" ? 500 : height * 0.4,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 15,
    marginHorizontal: 20,
  },
});
