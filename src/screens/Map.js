import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import Svg, { Path } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const mapWidth = width * 0.9 * 0.95; 
const mapHeight = height * 0.6 * 0.95;

const getCoord = (percentX, percentY) => {
  return {
    x: (percentX / 100) * mapWidth,
    y: (percentY / 100) * mapHeight,
  };
};

export default function Map() {
  const hippo = getCoord(20, 10);
  const elephant = getCoord(50, 25);
  const giraffe = getCoord(70, 60);
  const frog = getCoord(30, 70);
  const restaurant = getCoord(15, 40);
  const bathroom = getCoord(85, 35);
  const visitor = getCoord(50, 85);

  return (
    <View style={styles.page}>
      <Header />
      <Text style={styles.title}>Mapa Interativo</Text>
      <View style={styles.mapContainer}>
        <View style={styles.mapArea}>
          {/* Curvas entre ícones */}
          <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
            <Path
              d={`M${hippo.x},${hippo.y} Q${(hippo.x + elephant.x) / 2},${hippo.y - 40} ${elephant.x},${elephant.y}`}
              stroke="#4e342e"
              strokeWidth={3}
              fill="none"
            />
            <Path
              d={`M${elephant.x},${elephant.y} Q${(elephant.x + giraffe.x) / 2},${elephant.y + 40} ${giraffe.x},${giraffe.y}`}
              stroke="#4e342e"
              strokeWidth={3}
              fill="none"
            />
            <Path
              d={`M${giraffe.x},${giraffe.y} Q${(giraffe.x + frog.x) / 2},${giraffe.y + 30} ${frog.x},${frog.y}`}
              stroke="#4e342e"
              strokeWidth={3}
              fill="none"
            />
            <Path
              d={`M${frog.x},${frog.y} Q${(frog.x + restaurant.x) / 2},${frog.y - 60} ${restaurant.x},${restaurant.y}`}
              stroke="#4e342e"
              strokeWidth={3}
              fill="none"
            />
            <Path
              d={`M${restaurant.x},${restaurant.y} Q${(restaurant.x + bathroom.x) / 2},${bathroom.y + 60} ${bathroom.x},${bathroom.y}`}
              stroke="#4e342e"
              strokeWidth={3}
              fill="none"
            />
            <Path
              d={`M${bathroom.x},${bathroom.y} Q${(bathroom.x + visitor.x) / 2},${visitor.y} ${visitor.x},${visitor.y}`}
              stroke="#4e342e"
              strokeWidth={3}
              fill="none"
            />
          </Svg>

          {/* Ícones e posições */}
          <View style={[styles.iconWrap, { top: "10%", left: "20%" }]}>
            <FontAwesome5 name="hippo" size={24} color="#6a1b9a" />
          </View>
          <View style={[styles.iconWrap, { top: "25%", left: "50%" }]}>
            <FontAwesome5 name="elephant" size={24} color="#4e342e" />
          </View>
          <View style={[styles.iconWrap, { top: "60%", left: "70%" }]}>
            <MaterialCommunityIcons name="giraffe" size={24} color="#f9a825" />
          </View>
          <View style={[styles.iconWrap, { top: "70%", left: "30%" }]}>
            <FontAwesome5 name="frog" size={22} color="#2e7d32" />
          </View>
          <View style={[styles.iconWrap, { top: "40%", left: "15%" }]}>
            <Ionicons name="restaurant" size={22} color="#d84315" />
          </View>
          <View style={[styles.iconWrap, { top: "35%", left: "85%" }]}>
            <Ionicons name="ios-water" size={20} color="#0277bd" />
          </View>
          <View style={[styles.iconWrap, { top: "85%", left: "50%" }]}>
            <Ionicons name="person-circle" size={26} color="#1e88e5" />
            <Text style={styles.markerLabel}>Você está aqui</Text>
          </View>
        </View>
      </View>
      <Text style={styles.footerText}>
        Toque nos ícones para mais informações (em breve)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#00796b",
    marginBottom: 20,
  },
  mapContainer: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "#c8e6c9",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mapArea: {
    width: "95%",
    height: "95%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#388e3c",
    backgroundColor: "#a5d6a7",
    position: "relative",
  },
  iconWrap: {
    position: "absolute",
    alignItems: "center",
  },
  markerLabel: {
    marginTop: 2,
    fontSize: 10,
    color: "#1e88e5",
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: "#004d40",
    fontStyle: "italic",
  },
});
