import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

const animals = [
  {
    id: 1,
    name: "Onça-Pintada",
    scientificName: "Panthera onca",
    description:
      "Maior felino das Américas, a onça-pintada é um animal solitário e territorial. Possui mandíbulas extremamente fortes, capazes de quebrar cascos de tartarugas.",
    image: require("../assets/images/onca.jpg"),
    credit: "Foto: Mateus Ribeiro",
    habitat: "Florestas tropicais, savanas e áreas alagadas",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 2,
    name: "Arara-Azul",
    scientificName: "Anodorhynchus hyacinthinus",
    description:
      "A arara-azul é a maior espécie de arara do mundo, podendo atingir até 1 metro de comprimento. São animais sociais que vivem em bandos.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hyacinth_Macaw_in_the_Rainforest.jpg",
    credit: "Foto: John C. Cannon (Wikimedia Commons)",
    habitat: "Cerrado e Pantanal",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 3,
    name: "Tatu-Bola",
    scientificName: "Tolypeutes tricinctus",
    description:
      "Conhecido por sua capacidade de se enrolar completamente quando ameaçado, formando uma bola impermeável a predadores.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tolypeutes_tricinctus.jpg",
    credit: "Foto: Rafael Carvalho (Wikimedia Commons)",
    habitat: "Caatinga e Cerrado",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 4,
    name: "Lobo-Guará",
    scientificName: "Chrysocyon brachyurus",
    description:
      "Maior canídeo da América do Sul, possui pernas longas adaptadas para caminhar em campos com vegetação alta. Alimenta-se principalmente de frutos.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Maned_wolf_by_Kamal_Abdullah.jpg",
    credit: "Foto: Kamal Abdullah (Wikimedia Commons)",
    habitat: "Cerrado",
    conservationStatus: "Quase ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 5,
    name: "Tamanduá-Bandeira",
    scientificName: "Myrmecophaga tridactyla",
    description:
      "Possui língua comprida e pegajosa para capturar formigas e cupins. Pode consumir até 30.000 insetos por dia.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Myrmecophaga_tridactyla_Luc_Viatour_2.jpg",
    credit: "Foto: Luc Viatour (Wikimedia Commons)",
    habitat: "Cerrado, Pantanal e Florestas",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
 
];

const animalTypes = [
  { label: "Mamíferos", value: "mamíferos" },
  { label: "Aves", value: "aves" },
  { label: "Invertebrados", value: "invertebrados" },
  { label: "Répteis", value: "répteis" },
  { label: "Anfíbios", value: "anfíbios" },
  { label: "Peixes", value: "peixes" },
];

const AnimalCard = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.scientificName}>{item.scientificName}</Text>

    <View style={styles.imageContainer}>
      {item.image ? (
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      ) : item.imageUrl ? (
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>Imagem não disponível</Text>
        </View>
      )}
    </View>

    <Text style={styles.credit}>{item.credit}</Text>

    <View style={styles.infoBox}>
      <Text style={styles.label}>Habitat:</Text>
      <Text style={styles.text}>{item.habitat}</Text>

      <Text style={styles.label}>Status de Conservação:</Text>
      <Text style={styles.text}>{item.conservationStatus}</Text>
    </View>

    <Text style={styles.description}>{item.description}</Text>

    <Text
      style={styles.link}
      onPress={() => Linking.openURL("https://www.zoo.df.gov.br")}
    >
      Saiba mais no site do Zoológico de Brasília
    </Text>
  </View>
);

const ZooAnimalsScreen = () => {
  const [selectedType, setSelectedType] = useState("mamíferos");

  const filteredAnimals = animals.filter(
    (animal) => animal.type === selectedType
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>Animais do Zoológico de Brasília</Text>

      {}
      <View style={styles.filterContainer}>
        {animalTypes.map(({ label, value }) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.filterButton,
              selectedType === value && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedType(value)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedType === value && styles.filterButtonTextActive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {}
      <FlatList
        data={filteredAnimals}
        renderItem={({ item }) => <AnimalCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "rgb(46, 139, 87)",
    paddingTop: 140,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  filterButton: {
    backgroundColor: "#e0e5e8",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
  },
  filterButtonActive: {
    backgroundColor: "rgb(46, 139, 87)",
  },
  filterButtonText: {
    color: "#3b593b",
    fontWeight: "600",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#d9e6d2",
    borderRadius: 14,
    padding: 15,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 25,
    width: "45%", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    minHeight: 360,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3b593b",
    marginBottom: 6,
    marginTop: 25,
  },
  scientificName: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#5a755a",
    marginBottom: 15,
  },
  imageContainer: {
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#e6f0e6",
    borderRadius: 12,
  },
  image: {
    width: "95%",
    height: "95%",
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: "100%",
    height: 260,
    backgroundColor: "#c4d6c1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 14,
  },
  placeholderText: {
    color: "#7a8c7a",
    fontSize: 16,
  },
  credit: {
    fontSize: 12,
    color: "#678067",
    textAlign: "right",
    marginBottom: 15,
    fontStyle: "italic",
  },
  infoBox: {
    backgroundColor: "#a5bda0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontWeight: "700",
    color: "#3b593b",
    marginBottom: 5,
  },
  text: {
    color: "#3b593b",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#3b593b",
    lineHeight: 24,
    marginBottom: 12,
  },
  link: {
    color: "rgb(46, 139, 87)",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },
});

export default ZooAnimalsScreen;
