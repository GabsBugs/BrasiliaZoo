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
import { Platform } from "react-native";

const animals = [
  {
    id: 1,
    name: "Adax",
    scientificName: "Addax nasomaculatus",
    description:
      "Antílope do deserto altamente adaptado ao calor, com chifres espiralados. Extremamente ameaçado de extinção.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-6-7-e1709219581775-768x751.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Desertos e semiáridos do Saara",
    conservationStatus: "Criticamente em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 2,
    name: "Anta",
    scientificName: "Tapirus terrestris",
    description:
      "Maior mamífero terrestre da América do Sul; solitária e dispersora de sementes.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-27-2-e1709219878376-768x751.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais, áreas alagadas e matas ciliares",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 3,
    name: "Ariranha",
    scientificName: "Pteronura brasiliensis",
    description:
      "Maior mustelídeo do mundo; vive em grupos familiares e é bastante barulhenta.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/ariranha-alimentacao-1024x683-1-e1712172922420.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Rios e lagos da Amazônia e Pantanal",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 4,
    name: "Babuíno-sagrado",
    scientificName: "Papio hamadryas",
    description:
      "Primata africano com fortes laços sociais e pelagem característica nos machos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/babuino.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Savanas e áreas rochosas da África Oriental",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 5,
    name: "Bugio-de-mãos-ruivas",
    scientificName: "Alouatta belzebul",
    description:
      "Bugio típico da Amazônia; vocalizações altas e coloração alaranjada nas mãos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-6-8-e1709227786267-768x751.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 6,
    name: "Bugio-preto",
    scientificName: "Alouatta caraya",
    description:
      "Conhecido pelos longos gritos ao amanhecer, típico do Centro‑Oeste brasileiro.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Figura-1-Bugio-preto-Alouatta-caraya-macho-adulto-cativo-do-Parque-Zoobotanico-Arruda-e1710512119367.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Matas ciliares e florestas subtropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 7,
    name: "Bugio-ruivo",
    scientificName: "Alouatta puruensis",
    description:
      "Endêmico da Amazônia peruana, pelagem avermelhada e vocalização potente.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-03-13-at-10.55.25-e1710338288406-768x705.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 8,
    name: "Cachorro-do-mato",
    scientificName: "Cerdocyon thous",
    description:
      "Canídeo de porte médio, onívoro, adaptável a diferentes ambientes.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-03-14-at-14.50.03-e1710441621399-768x708.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado, Caatinga e bordas de floresta",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 9,
    name: "Cachorro-do-mato‑vinagre",
    scientificName: "Speothos venaticus",
    description:
      "Pequeno canídeo social, costuma viver em bandos e caçar em grupo.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-03-13-at-11.00.06-e1710338730173-768x749.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e cerrados úmidos",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 10,
    name: "Cateto",
    scientificName: "Pecari tajacu",
    description:
      "Pequeno suídeo silvestre, vive em grupos familiares, hábitos diurnos.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/046_MarcellaLasneaux_cateto-2-300x200-1.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, cerrados e caatinga",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 11,
    name: "Cervo‑dama",
    scientificName: "Dama dama",
    description:
      "Introduzido no Brasil, cervídeo de porte médio, manchas claras no dorso.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Cervo-Dama-Marcella-Lasneaux-2-e1710441973606-768x682.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos e florestas temperadas",
    conservationStatus: "Pouco preocupante (IUCN), em cativeiro",
    type: "mamíferos",
  },
  {
    id: 12,
    name: "Cervo‑do‑Pantanal",
    scientificName: "Blastocerus dichotomus",
    description:
      "Maior cervídeo da América do Sul; vive em áreas alagadas do Pantanal.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/WhatsApp-Image-2024-04-02-at-11.29.54.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Pantanal e várzeas alagadas",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 13,
    name: "Cervo‑nobre",
    scientificName: "Cervus elaphus",
    description:
      "Espécie de cervídeo amplamente distribuída no hemisfério norte.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Cervo-nobre-tiago-severo-1-e1710442477406-768x616.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas temperadas e matagais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 14,
    name: "Cuxiú-marrom",
    scientificName: "Chiropotes sagulatus",
    description:
      "Macaco morador de grandes altitudes na Amazônia, cara rosa e cauda preênsil.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/8c35a66b-foto-leonardo-viana-1536x1024-1-960x640-1-e1710442871334.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 15,
    name: "Elefante‑africano",
    scientificName: "Loxodonta africana",
    description: "Maior mamífero terrestre com tromba longa e grandes orelhas.",
    image: require("../assets/images/elefante.jpg"),
    credit: "Foto: Mateus Ribeiro",
    habitat: "Savanas e florestas africanas",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 16,
    name: "Furão",
    scientificName: "Galictis cuja",
    description:
      "Mustelídeo sul-americano, cauda longa, ágil e com dieta variada.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-16-5-e1710443422670-768x753.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, cerrados e campos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 17,
    name: "Gato-do-mato-pequeno",
    scientificName: "Leopardus gutulus",
    description:
      "Felino de pequeno porte, discreto, marcado por listras faciais.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-03-13-at-11.06.59-e1710443978232-768x708.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e subtropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 18,
    name: "Gato-mourisco",
    scientificName: "Herpailurus yagouaroundi",
    description: "Felino ágil, hábito noturno, pelagem marcada por manchas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/gato_mourisco_.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e cerrados",
    conservationStatus: "Quase ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 19,
    name: "Gato-palheiro",
    scientificName: "Leopardus colocolo",
    description:
      "Felino de áreas abertas e montanhosas, também chamado gato-andino.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/Gato-palheiro-e1710523833134.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, cerrados e zonas andinas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 20,
    name: "Hipopótamo",
    scientificName: "Hippopotamus amphibius",
    description:
      "Mamífero semi-aquático, vive em grandes manadas nos rios africanos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Hipopotamo-Marcella-Lasneaux-7-e1710445223544-768x684.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Rios, lagos e pântanos africanos",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 21,
    name: "Lêmure-da-cauda-anelada",
    scientificName: "Lemur catta",
    description:
      "Primate de Madagascar, vive em grupos, cauda listrada característica.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-9-3-1-e1710445412557-768x749.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas secas de Madagascar",
    conservationStatus: "Ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 22,
    name: "Lhama",
    scientificName: "Lama glama",
    description:
      "Camelídeo domestico andino, utilizado como animal de carga e companhia.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-50-1-e1710446088645-768x733.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Altiplanos andinos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 23,
    name: "Lobo-Guará",
    scientificName: "Chrysocyon brachyurus",
    description:
      "Mamífero de pernas longas e pelagem avermelhada, o lobo-guará é solitário e crepuscular, alimentando-se de pequenos animais e frutas como a lobeira.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2023-11-29-at-14.45.25-e1710523137499.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado, campos abertos e áreas de savana",
    conservationStatus: "Quase ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 24,
    name: "Lontra",
    scientificName: "Lontra longicaudis",
    description:
      "Mamífero aquático com corpo alongado e pelagem impermeável, excelente nadadora e caçadora de peixes.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-15-3-e1710445658934-768x724.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Rios, lagos e florestas ribeirinhas",
    conservationStatus: "Quase ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 25,
    name: "Macaco-Aranha-de-Cara-Preta",
    scientificName: "Ateles chamek",
    description:
      "Primata ágil de cauda preênsil e cara escura. Vive em bandos nas copas das árvores da floresta amazônica.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/okjkn-768x769.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 26,
    name: "Macaco-Aranha-de-Cara-Vermelha",
    scientificName: "Ateles paniscus",
    description:
      "Primata amazônico com pelagem preta e rosto avermelhado. Extremamente ágil e social.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-57-1-1-e1710446587984-768x750.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 27,
    name: "Macaco-Aranha-de-Testa-Branca",
    scientificName: "Ateles marginatus",
    description:
      "Primata arborícola ameaçado de extinção, reconhecível pela testa branca e hábitos sociais.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-24-3-e1710446443707-768x774.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 28,
    name: "Macaco-Barrigudo",
    scientificName: "Lagothrix cana",
    description:
      "Primata robusto da Amazônia com corpo cinza e cauda preênsil. Vive em grupos sociais e se alimenta de frutas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-03-14-at-17.09.13.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 29,
    name: "Macaco-Caiarara",
    scientificName: "Cebus albifrons",
    description:
      "Espécie de macaco-prego com face mais clara, muito inteligente e adaptável a vários habitats.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/MACACO-PREGO-KAAPORI-Cebus-kaapori-5.2-e1710508745435-768x679.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e áreas perturbadas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 30,
    name: "Macaco-da-Noite",
    scientificName: "Aotus nigriceps",
    description:
      "Único primata sul-americano de hábitos noturnos, com olhos grandes adaptados à escuridão.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Macaco-da-noite.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica",
    conservationStatus: "Quase ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 31,
    name: "Macaco-Japonês",
    scientificName: "Macaca fuscata",
    description:
      "Espécie nativa do Japão, conhecida por suportar baixas temperaturas e usar fontes termais.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/macacos-japones-e1710512422741.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Montanhas e florestas do Japão",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 32,
    name: "Macaco-Prego",
    scientificName: "Sapajus libidinosus",
    description:
      "Primata muito inteligente que usa ferramentas para quebrar frutos e acessar alimentos difíceis.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-20-5-e1710512612319-768x728.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e cerrado",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 33,
    name: "Mico-de-Cheiro",
    scientificName: "Saimiri boliviensis",
    description:
      "Pequeno primata ágil e curioso, com pelagem amarelada e face branca.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Mico-de-Cheiro-e1710513344518.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 34,
    name: "Mico-Leão-De-Cara-Dourada",
    scientificName: "Leontopithecus chrysomelas",
    description:
      "Espécie de mico endêmica da Bahia, com pelagem negra e face dourada. Vive em pequenos grupos familiares.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-02-27-at-14.53.31-e1709131065299-768x750.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Mata Atlântica",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 35,
    name: "Mico-Leão-De-Cara-Dourada",
    scientificName: "Leontopithecus chrysomelas",
    description:
      "Primata de pelagem laranja brilhante, endêmico da Mata Atlântica. Ícone da conservação no Brasil.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-02-27-at-12.23.06-e1709131762421-768x716.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Mata Atlântica",
    conservationStatus: "Em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 36,
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
    id: 37,
    name: "Quati",
    scientificName: "Nasua nasua",
    description:
      "Mamífero onívoro e sociável, com focinho alongado e cauda listrada. Vive em grupos e é muito curioso.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Quati-e1710514020524-768x663.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, cerrados e áreas urbanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 38,
    name: "Raposa-do-Campo",
    scientificName: "Lycalopex vetulus",
    description:
      "Pequeno canídeo endêmico do Cerrado, com pelagem acinzentada e hábitos noturnos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-03-13-at-10.56.20-e1710514297500-768x756.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado brasileiro",
    conservationStatus: "Quase ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 39,
    name: "Rinoceronte-Branco-do-Sul",
    scientificName: "Ceratotherium simum",
    description:
      "Segundo maior mamífero terrestre, com corpo robusto e dois chifres. Herbívoro e ameaçado pela caça ilegal.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-18-2-e1710514549141-768x806.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Savanas e pastagens da África",
    conservationStatus: "Quase ameaçado (IUCN)",
    type: "mamíferos",
  },
  {
    id: 40,
    name: "Sauim-de-Coleira",
    scientificName: "Saguinus bicolor",
    description:
      "Pequeno primata endêmico de Manaus, com corpo escuro e colar branco ao redor do pescoço.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-16-4-e1710515670972-768x753.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas de terra firme na Amazônia",
    conservationStatus: "Criticamente em perigo (IUCN)",
    type: "mamíferos",
  },
  {
    id: 41,
    name: "Suçuarana",
    scientificName: "Puma concolor",
    description:
      "Grande felino de ampla distribuição nas Américas. Ágil, silenciosa e solitária, também conhecida como onça-parda.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-4-3-e1710515833755-768x852.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Montanhas, florestas, cerrado e desertos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 42,
    name: "Suricato",
    scientificName: "Suricata suricatta",
    description:
      "Mamífero social africano conhecido por ficar em pé para vigiar predadores. Vive em grupos organizados.",
    image: require("../assets/images/suricato.jpg"),
    credit: "Foto: Mateus Ribeiro",
    habitat: "Savanas e desertos do sul da África",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 43,
    name: "Tamanduá-Bandeira",
    scientificName: "Myrmecophaga tridactyla",
    description:
      "Grande mamífero com focinho longo e cauda peluda. Alimenta-se principalmente de formigas e cupins.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-49-Copia-e1710516075835-768x762.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado, pantanal e florestas tropicais",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 44,
    name: "Tamanduá-Mirim",
    scientificName: "Tamandua tetradactyla",
    description:
      "Espécie menor de tamanduá, com hábito arborícola e focinho longo. Se alimenta de insetos.",
    image: require("../assets/images/tamandua-mirim.jpeg"),
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, cerrados e matas ribeirinhas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 45,
    name: "Tatu-Bola",
    scientificName: "Tolypeutes tricinctus",
    description:
      "Tatu brasileiro que se enrola completamente como defesa. Símbolo da Copa do Mundo de 2014.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-19-4-e1710516576567-768x705.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Caatinga e Cerrado",
    conservationStatus: "Vulnerável (IUCN)",
    type: "mamíferos",
  },
  {
    id: 46,
    name: "Tatu-de-Rabo-Mole",
    scientificName: "Cabassous unicinctus",
    description:
      "Pequeno tatu com rabo mole e corpo escamoso. Vive solitário e é pouco visto na natureza.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/05/tatu-do-rabo-mole.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e cerrados",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 47,
    name: "Veado-Catingueiro",
    scientificName: "Mazama gouazoubira",
    description:
      "Veado de pequeno porte, adaptado a ambientes secos. É ágil e de hábitos discretos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-03-14-at-15.49.37.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado, caatinga e matas secas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },
  {
    id: 48,
    name: "Zebra",
    scientificName: "Equus quagga",
    description:
      "Herbívoro africano reconhecido por suas listras únicas. Vive em savanas e pastagens.",
    image: require("../assets/images/zebra.jpg"),
    credit: "Foto: Mateus Ribeiro",
    habitat: "Savanas e planícies africanas",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "mamíferos",
  },
  {
    id: 49,
    name: "Zogue-Zogue",
    scientificName: "Plecturocebus cupreus",
    description:
      "Pequeno primata amazônico, de cauda espessa e comportamento social. Vive em pares monogâmicos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zogue-Zogue-e1710522906581.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "mamíferos",
  },

  {
    id: 50,
    name: "Águia-chilena",
    scientificName: "Geranoaetus melanoleucus",
    description:
      "Ave de rapina de grande porte, com plumagem cinza e peito branco. Possui voo imponente e visão aguçada.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/11d70b07b65fceefe71ea26566d613ef-e1710780822241-768x793.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Regiões montanhosas e campos abertos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 51,
    name: "Alma-de-gato",
    scientificName: "Piaya cayana",
    description:
      "Ave discreta e ágil de longa cauda e canto característico. Costuma viver em florestas e áreas de vegetação densa.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-6-768x516.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Matas e florestas tropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 52,
    name: "Araçari-de-bico-riscado",
    scientificName: "Pteroglossus inscriptus",
    description:
      "Espécie de tucano pequeno com bico ornamentado por riscos escuros. Alimenta-se principalmente de frutas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-13.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais da Amazônia",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 53,
    name: "Arara-azul-grande",
    scientificName: "Anodorhynchus hyacinthinus",
    description:
      "Maior espécie de arara, com plumagem azul intensa e bico poderoso. Está ameaçada devido ao tráfico e à perda de habitat.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-33-e1710768945587-768x795.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Pantanal, cerrado e matas ciliares",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 54,
    name: "Arara-canindé",
    scientificName: "Ara ararauna",
    description:
      "Arara grande com cores vibrantes azul e amarela. Sociável e barulhenta, vive em bandos e é muito inteligente.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-10-4-e1710525687409-768x704.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e matas de galeria",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 55,
    name: "Arara-de-garganta-azul",
    scientificName: "Ara glaucogularis",
    description:
      "Arara rara e ameaçada de extinção, possui uma característica garganta azul. Endêmica da Bolívia.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-59-e1710769132688-768x783.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais da Bolívia",
    conservationStatus: "Criticamente em perigo (IUCN)",
    type: "aves",
  },
  {
    id: 56,
    name: "Arara-piranga",
    scientificName: "Ara macao",
    description:
      "Arara de plumagem vibrante vermelha, amarela e azul. Muito associada às florestas tropicais úmidas.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-48-e1710769463286-261x300.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais da América Central e América do Sul",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 57,
    name: "Arara-vermelha",
    scientificName: "Ara chloropterus",
    description:
      "Arara de grande porte com plumagem vermelha predominante e verde nas asas. Costuma ser confundida com a arara-piranga.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-14-e1710769751482-768x726.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e subtropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 58,
    name: "Ararinha-de-testa-vermelha",
    scientificName: "Ara rubrogenys",
    description:
      "Pequena arara endêmica da Bolívia, com uma característica marca vermelha na testa e região facial clara.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-98-e1710770741245-768x756.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Regiões montanhosas semiáridas da Bolívia",
    conservationStatus: "Em perigo (IUCN)",
    type: "aves",
  },
  {
    id: 59,
    name: "Ararajuba",
    scientificName: "Guaruba guarouba",
    description:
      "Também conhecida como periquito-dourado, é uma ave de coloração amarela intensa com penas verdes nas asas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-102-e1710770913107-768x722.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica oriental",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 60,
    name: "Caburé",
    scientificName: "Glaucidium brasilianum",
    description:
      "Pequena coruja de hábitos diurnos, encontrada em florestas e áreas urbanas. Vocalização característica e ativa durante o dia.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/cabure-2-e1710781172334.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, matas ciliares e áreas urbanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 61,
    name: "Cacatua",
    scientificName: "Cacatua alba",
    description:
      "Ave branca de médio porte com crista erétil. Muito sociável, inteligente e comum como ave de estimação.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-23.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais da Indonésia",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 62,
    name: "Canário-da-terra",
    scientificName: "Sicalis flaveola",
    description:
      "Pássaro amarelo popular no Brasil, conhecido por seu canto. Vive em áreas abertas e é bastante resistente.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Canario-da-terra-Joselito-Rocha-de-Macedo.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos abertos, áreas urbanas e agrícolas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 63,
    name: "Galo-de-campina",
    scientificName: "Paroaria coronata",
    description:
      "Ave de topete vermelho e canto melodioso. Bastante territorial, vive em pares ou pequenos grupos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Cardeal-Douglas-Fernando-e1710865179809.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Caatinga, cerrado e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 64,
    name: "Cardeal-do-nordeste",
    scientificName: "Paroaria dominicana",
    description:
      "Semelhante ao galo-de-campina, possui topete vermelho vivo e corpo acinzentado. Ave típica do Nordeste.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Cardeal-do-nordeste-Marco-Marcos-768x576.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Caatinga e vegetação arbustiva",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 65,
    name: "Canário-do-mato",
    scientificName: "Serinus mozambicus",
    description:
      "Ave africana introduzida no Brasil, onde se adaptou bem. Pequena, com canto agradável e plumagem verde-amarelada.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-3.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, savanas e áreas urbanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 66,
    name: "Casuar",
    scientificName: "Casuarius casuarius",
    description:
      "Grande ave não voadora da Oceania, famosa por sua crista óssea e comportamento reservado.",

    image: require("../assets/images/casuar.jpg"),
    credit: "Foto: Mateus Ribeiro",
    habitat: "Florestas tropicais da Nova Guiné e Austrália",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 67,
    name: "Cisne-negro",
    scientificName: "Cygnus atratus",
    description:
      "Ave aquática com plumagem escura e bico vermelho. Originária da Austrália e muito simbólica.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Cisne-negro-Ignacio-Ferre-e1710864053558.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Lagos, rios e áreas úmidas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 68,
    name: "Coleirinho",
    scientificName: "Sporophila caerulescens",
    description:
      "Pequena ave com colar preto no pescoço. Muito comum em áreas abertas e conhecida por seu canto.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Coleirinho-Claudio-Cesar-768x635.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, pastagens e bordas de matas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 69,
    name: "Corrupião",
    scientificName: "Icterus jamacaii",
    description:
      "Ave canora e colorida, símbolo do estado de Alagoas. Reconhecida pelo canto melodioso e mimético.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/image-5-768x512.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Caatinga e cerrado nordestino",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 70,
    name: "Coruja-do-banhado",
    scientificName: "Asio flammeus",
    description:
      "Coruja de hábitos crepusculares e noturnos, com asas largas e voo silencioso. Voa sobre áreas alagadas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-06-25-at-14.02.57.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Áreas abertas, pântanos e banhados",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 71,
    name: "Coruja-orelhuda",
    scientificName: "Asio clamator",
    description:
      "Coruja de porte médio com “orelhas” plumosas e olhos alaranjados, ativa ao entardecer.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Coruja-orelhuda_no_Zoologico_de_Sorocaba-768x576.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Áreas abertas, bordas de floresta e pântanos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 72,
    name: "Corujão-orelhuda",
    scientificName: "Bubo virginianus",
    description:
      "Grande coruja com ‘orelhas’ e olhos amarelos. Poderosa predadora noturna.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/image-8-768x960.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Matas, parques e áreas antropizadas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 73,
    name: "Corujinha-do-mato",
    scientificName: "Megascops choliba",
    description:
      "Pequena coruja marrom com manchas, muito comum em áreas urbanas e rurais.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Corujinha-do-mato-Marco-Marcos-e1710864398391.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, parques e jardins",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 74,
    name: "Coruja-negra",
    scientificName: "Strix huhula",
    description:
      "Coruja de plumagem escura com manchas claras, ativa à noite, de voo silencioso.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-11.24.36.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas densas tropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 75,
    name: "Coruja-suindara",
    scientificName: "Tyto furcata",
    description:
      "Também chamada de coruja-das-torres, com disco facial branco e hábitos noturnos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-11.10.25.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Áreas abertas, galpões e ocasionalmente interiores urbanos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 76,
    name: "Ema",
    scientificName: "Rhea americana",
    description:
      "Segunda maior ave sul-americana, não voa, corre rápido. Vive em campos e cerrados.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-13-e1710777487656-768x787.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos abertos e cerrados",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "aves",
  },
  {
    id: 77,
    name: "Emu",
    scientificName: "Dromaius novaehollandiae",
    description:
      "Ave australiana de grande porte, não voadora, encontrada em zoológicos brasileiros.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-2-e1710777633457-768x897.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, savanas e matas abertas da Austrália",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 78,
    name: "Encontro",
    scientificName: "Icterus pyrrhopterus",
    description:
      "Ave canora brasileira, de plumagem predominantemente negra com detalhes amarelos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-10.46.56.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Matas, cerrados e bordas de florestas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 79,
    name: "Faisão-prateado",
    scientificName: "Lophura nycthemera",
    description:
      "Faisão de plumagem iridescente e cauda longa. Popular em criações e zoológicos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/depositphotos_226654492-stock-photo-young-male-silver-pheasant-lophura-e1710854935995.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e áreas abertas do sudeste asiático",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 80,
    name: "Flamingo",
    scientificName: "Phoenicopterus ruber",
    description:
      "Ave aquática famosa pela plumagem rosa e postura em uma perna só.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Flamingo-Sergio-Messias-e1710859686528.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Lagos salgados, lagoas salinas e áreas costeiras",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "aves",
  },
  {
    id: 81,
    name: "Flamingo-chileno",
    scientificName: "Phoenicopterus chilensis",
    description:
      "Ave aquática de plumagem rosa pálido, encontrada em salinas e lagos salobros da América do Sul.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Flamingo-chileno-Alexandre-Gualhanone-e1710859587225.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Lagos salgados e áreas alagadas",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "aves",
  },
  {
    id: 82,
    name: "Ganso-Australiano",
    scientificName: "Cereopsis novaehollandiae",
    description:
      "Ganso robusto com manchas pretas na cabeça; nativo da Austrália e adaptado a áreas costeiras.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/foto_animal_0026-e1710863881685.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Lagos costeiros, pântanos e áreas agrícolas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 83,
    name: "Ganso-do-Havaí",
    scientificName: "Branta sandvicensis",
    description:
      "Uma das aves mais raras do mundo, endêmica do Havaí; migra entre lagoas de montanha.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/reproducao-do-ganso-havaiano-e1710863715513.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Lagoas de montanha e estuários costeiros",
    conservationStatus: "Criticamente em perigo (IUCN)",
    type: "aves",
  },
  {
    id: 84,
    name: "Gavião-carijó",
    scientificName: "Rupornis magnirostris",
    description:
      "Pequeno gavião de porte médio, alimenta-se de répteis e pequenos mamíferos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/21792455780_942774957c-e1710778365964.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Áreas abertas, bordas de florestas e campos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 85,
    name: "Gavião-carrapateiro",
    scientificName: "Milvago chimachima",
    description:
      "Gavião de porte pequeno a médio, especializado em capturar carrapatos de grandes mamíferos.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/14556581390_b24628bab1_b-e1710778654149-300x281-1.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado, savanas e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 86,
    name: "Gavião-de-cauda-branca",
    scientificName: "Geranoaetus albicaudatus",
    description:
      "Ave de rapina de porte médio, com cauda branca e voo gracioso.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/DSC_0024-insta-e1710780500884-768x781.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, cerrados e bordas de matas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 87,
    name: "Gavião-de-coleira",
    scientificName: "Falco femoralis",
    description:
      "Pequeno falcão, veloz e ágil, costuma caçar aves menores em pleno voo.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/3117623_5aff8fd51aa226cfb563382e200f0079-e1710778190727.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas abertas, bordas e áreas rurais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 88,
    name: "Guará",
    scientificName: "Eudocimus ruber",
    description:
      "Ibis de plumagem totalmente vermelha, comum nos pantanais e zonas alagadas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/3629672_2ae8f2570d049e53cdc5b869806573dd-e1710778007563.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Pantanal, manguezais e áreas alagadas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 89,
    name: "Gralha-do-campo",
    scientificName: "Cyanocorax cristatellus",
    description: "Corvina típica do Cerrado, com topete preto e cauda longa.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/image-11.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 90,
    name: "Harpia",
    scientificName: "Harpia harpyja",
    description:
      "Uma das maiores e mais poderosas aves de rapina, com garras impressionantes.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-6-5-e1710527254505-768x699.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais densas",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "aves",
  },
  {
    id: 91,
    name: "Íbis-sagrado",
    scientificName: "Threskiornis aethiopicus",
    description:
      "Ave aquática com plumagem branca e detalhes negros. Era considerado sagrado no Egito antigo.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/sacred-ibis-in-grass-free-photo-e1710861407898-768x744.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Zonas úmidas, margens de rios e pântanos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 92,
    name: "Jacu-de-barriga-castanha",
    scientificName: "Penelope ochrogaster",
    description:
      "Ave terrestre da Mata Atlântica, com ventre acastanhado e hábitos tímidos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Jacu-de-barriga-castanha-e1710854183964.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Atlântica",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "aves",
  },
  {
    id: 93,
    name: "Jacupemba",
    scientificName: "Penelope superciliaris",
    description:
      "Jacu grande da América do Sul, com faixa branca acima dos olhos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Jacupemba-e1710854435412.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e subtropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 94,
    name: "Jacutinga",
    scientificName: "Aburria jacutinga",
    description:
      "Ave rara da Mata Atlântica com plumagem preta e reflexos brilhosos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Jacutinga-Jose-Kachimareck-768x576.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas densas da Mata Atlântica",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "aves",
  },
  {
    id: 95,
    name: "Japú",
    scientificName: "Psarocolius decumanus",
    description:
      "Ave de plumagem escura e canto estridente; vive em florestas abertas e bordas de matas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Japu-Alexandre-Gualhanone.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e secos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 96,
    name: "João-grande",
    scientificName: "Ciconia maguari",
    description:
      "Cegonha de bico longo, bastante comum em regiões pantaneiras e planícies alagadas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Joao-grande-Octavio-Campos-Salles-e1710854693136.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Pantanal, várzeas e áreas alagadas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 97,
    name: "Maçarico-real",
    scientificName: "Theristicus caerulescens",
    description:
      "Ave de bico curvado para baixo, plumagem cinza e asas claras. Vive em campos alagados.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/MAcarico-real-Claudio-Timm.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos alagados, pântanos e margens de rios",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 98,
    name: "Maitaca",
    scientificName: "Pionus maximiliani",
    description:
      "Papagaio de porte médio, plumagem verde com cabeça azul e vermelha.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-11.04.18.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e bordas de matas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 99,
    name: "Maitaca-de-cabeça-azul",
    scientificName: "Pionus menstruus",
    description:
      "Semelhante à maitaca, mas com cabeça predominantemente azul. Sociável e ruidosa.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Maitaca-de-cabeca-azul-Frodoaldo-Budke.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e matas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 100,
    name: "Maracanã-de-cara-amarela",
    scientificName: "Orthopsittaca manilatus",
    description:
      "Pequeno papagaio verde com cabeça amarela; vocalização forte e sociável.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-66-e1710855202902-768x831.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 101,
    name: "Maracanã-de-colar",
    scientificName: "Primolius auricollis",
    description:
      "Papagaio verde com anel colorido no pescoço. Sociável e barulhento, adaptado a florestas e áreas abertas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Maracana-de-colar-Sergio-Messias-e1710855384318.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e bordas de matas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 102,
    name: "Maracanã-guaçu",
    scientificName: "Ara severus",
    description:
      "Papagaio de médio a grande porte, verde com máscara vermelha e bico forte.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Maracana-guacu-Jacek-Kisielewski-e1710855641830.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 103,
    name: "Maracanã-nobre",
    scientificName: "Diopsittaca nobilis",
    description:
      "Pequeno papagaio verde com testa vermelha brilhante. Vive em bandos barulhentos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Maracana-nobre-Daniel-Brazil-e1710861924874.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas abertas e bordas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 104,
    name: "Murucututu-de-barriga-amarela",
    scientificName: "Pulsatrix koeniswaldiana",
    description:
      "Coruja noturna de porte médio, ventre amarelo vivo, habita florestas tropicais.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/image-12.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas densas da Amazônia",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 105,
    name: "Mutum-cavalo",
    scientificName: "Pauxi tuberosa",
    description:
      "Grande ave-terrestre amazônica com crista saliente. Vive no solo denso da floresta.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/Mutum-cavalo-Margi-Moss-300x199-1.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais úmidas",
    conservationStatus: "Quase ameaçada (IUCN)",
    type: "aves",
  },
  {
    id: 106,
    name: "Mutum-de-penacho",
    scientificName: "Crax fasciolata",
    description:
      "Ave terrestre grande com crista ornamental; é importante dispersor de sementes.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/mutum-pinima-768x599.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e cerrados",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 107,
    name: "Mutum-do-sudeste",
    scientificName: "Crax blumenbachii",
    description:
      "Ave de crista ornamentada, ameaçada pela destruição de habitat na Mata Atlântica.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-10-768x757.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais atlânticas",
    conservationStatus: "Criticamente em perigo (IUCN)",
    type: "aves",
  },
  {
    id: 108,
    name: "Mutum-de-Alagoas",
    scientificName: "Pauxi mitu",
    description:
      "Ave endêmica de Alagoas, extinta em estado selvagem; restam exemplares só em cativeiro.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/10/mutum-de-alagoas-768x481.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta tropical do Nordeste brasileiro",
    conservationStatus: "Extinta na natureza (IUCN)",
    type: "aves",
  },
  {
    id: 109,
    name: "Papa-capim",
    scientificName: "Sporophila nigricollis",
    description:
      "Pequeno pássaro canoro, macho com cabeça escura e peito branco; muito apreciado por canto.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Papa-capim-Darlan-Sattler-768x576.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos e bordas de matas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 110,
    name: "Papagaio-campeiro",
    scientificName: "Amazona ochrocephala",
    description:
      "Papagaio verde de médio porte com narina amarelada. Barulhento e inteligente.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-54-e1710774774500-768x845.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, cerrados e áreas antropizadas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 111,
    name: "Papagaio-chauá",
    scientificName: "Amazona rhodocorytha",
    description:
      "Papagaio verde com face azul-esverdeada; espécie ameaçada encontrada em mata atlântica.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-84-e1710775131488-768x851.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Atlântica",
    conservationStatus: "Ameaçado (IUCN)",
    type: "aves",
  },
  {
    id: 112,
    name: "Papagaio-de-cara-roxa",
    scientificName: "Amazona brasiliensis",
    description:
      "Papagaio costeiro do sudeste brasileiro, com testa avermelhada; vive em mangues e estuários.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/papagaio-de-cara-roxa-Amazona-brasiliensis-e1710857024564.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Mangues e estuários costeiros",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 113,
    name: "Papagaio-do-congo",
    scientificName: "Psittacus erithacus",
    description:
      "Papagaio africano cinza notável por sua grande capacidade vocal e inteligência.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-14.48.42.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais da África Central",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 114,
    name: "Papagaio-de-peito-roxo",
    scientificName: "Amazona vinacea",
    description:
      "Papagaio de plumagem verde com peito roxo; vive em florestas do sul do Brasil e Argentina.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Papagaio-de-peito-roxo-Samantha-Klein-e1710861621700.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas subtropicais",
    conservationStatus: "Ameaçado (IUCN)",
    type: "aves",
  },
  {
    id: 115,
    name: "Papagaio-do-mangue",
    scientificName: "Amazona amazonica",
    description:
      "Papagaio do norte da Amazônia, de plumagem verde e face amarela; vive perto da margem de águas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-63-e1710857427483-768x840.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Margens de rios e manguezais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 116,
    name: "Papagaio-dos-garbes",
    scientificName: "Amazona kawalli",
    description:
      "Papagaio da Amazônia, com manchas na cabeça; espécie rara e pouco conhecida.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/06/0677527001662845376.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Floresta Amazônica",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 117,
    name: "Papagaio-galego",
    scientificName: "Alipiopsitta xanthops",
    description:
      "Papagaio de porte médio, com testa dourada e garganta amarela; vive em cerrado e caatinga.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2024/06/Papagaio-galego-200x300.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrado, caatinga e bordas de florestas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 118,
    name: "Papagaio-moleiro",
    scientificName: "Amazona farinosa",
    description:
      "Grande papagaio verde com testa azul; inteligente e adaptável, comum em cativeiros.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-88-e1710857585435-768x812.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 119,
    name: "Papagaio-papa-cacau",
    scientificName: "Amazona festiva",
    description:
      "Papagaio verde com cabeça amarela; prefere áreas abertas e bordas de mata.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/Papagaio-papa-cacau-Julio-Silveira-225x300-1-e1710857749886.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas abertas e cerrados",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 120,
    name: "Papagaio-vasa",
    scientificName: "Coracopsis vasa",
    description:
      "Papagaio preto-africano incomum, pode ter crista ereta; muito raro fora da África.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-9-768x557.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas da Madagascar e arquipélagos próximos",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 121,
    name: "Papagaio-verdadeiro",
    scientificName: "Amazona aestiva",
    description:
      "Papagaio verde muito comum, vocal e inteligente, frequentemente visto em áreas urbanas e rurais.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Papagaio-verdadeiro-Octavio-Campos-Salles-300x300-1.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, matas ciliares e áreas antropizadas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 122,
    name: "Pássaro-preto",
    scientificName: "Gnorimopsar chopi",
    description:
      "Ave canora de plumagem preta e canto metalizado, comum em campos e bordas de matas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Passaro-preto-Luciano-Bernardes-768x510.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, cerrados e bordas de florestas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 123,
    name: "Pato-do-mato",
    scientificName: "Cairina moschata",
    description:
      "Pato selvagem de grande porte; plumagem marrom escura e bico robusto.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Pato-do-mato-Sergio-Murilo-e1710857993609.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Lagos, rios e áreas ribeirinhas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 124,
    name: "Pavão-azul",
    scientificName: "Pavo cristatus",
    description:
      "Ave terrestre de plumagem exuberante, macho exibe cauda colorida em leque para cortejar.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/61079-612733-67485567-vendo-pavao-azul-ombros-negros-e-outras-aves.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas abertas e áreas rurais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 125,
    name: "Perdiz",
    scientificName: "Rhynchotus rufescens",
    description:
      "Ave terrestre de pequeno porte, marrom-acinzentada; frequenta áreas agrícolas e campos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Perdiz-Rodrigo-Conte-e1710858663622.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, cerrados e áreas agrícolas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 126,
    name: "Periquitão",
    scientificName: "Psittacara leucophthalmus",
    description:
      "Papagaio pequeno-verde com olhos contornados de branco; vive em bandos agitados.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Zoo-82-e1710859319224-768x843.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, bordas e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 127,
    name: "Periquito-de-cabeça-suja",
    scientificName: "Aratinga weddellii",
    description:
      "Pequeno papagaio de cabeça azulada e corpo verde; frequenta bordas de florestas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Periquito-de-cabeca-suja-Marcos-Amend-e1710858849961.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e semi-abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 128,
    name: "Periquito-do-encontro-amarelo",
    scientificName: "Brotogeris chiriri",
    description:
      "Pequeno periquito verde com faixa amarela no rosto; ativo e barulhento em grupo.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Periquito-do-encontro-amarelo-Ronaldo-Koloszuk-e1710858966864.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Cerrados, bordas de matas e áreas urbanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 129,
    name: "Periquito-rei",
    scientificName: "Eupsittula aurea",
    description:
      "Periquito de plumagem verde e corpo amarelo-ouro; muito ágil e sociável.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Periquito-rei-Leonardo-Amui-e1710859055924.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, cerrado e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 130,
    name: "Periquito-rico",
    scientificName: "Brotogeris tirica",
    description:
      "Periquito pequeno e ativo, de coloração verde com tonalidades cinza e amarelo.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-7.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, savanas e áreas urbanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 131,
    name: "Pintassilgo-da-Venezuela",
    scientificName: "Spinus cucullatus",
    description:
      "Pequeno pássaro com plumagem amarela vibrante e capuz preto na cabeça.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-2.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 132,
    name: "Pica-pau-verde-barrado",
    scientificName: "Colaptes melanochloros",
    description:
      "Pica-pau de coloração verde e barrado, comum em áreas abertas e bordas de florestas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-4.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos abertos, bordas de florestas e áreas urbanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 133,
    name: "Príncipe-negro",
    scientificName: "Aratinga nenday",
    description:
      "Papagaio colorido, principalmente verde com manchas vermelhas e amarelas, muito sociável.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/aratinga.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e áreas abertas da América do Sul",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 134,
    name: "Quero-quero",
    scientificName: "Vanellus chilensis",
    description:
      "Ave de médio porte, com bico e pernas longas, vocal e territorial, comum em campos e áreas urbanas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Quero-quero-Joselito-Rocha-de-Macedo-768x755.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos abertos, pastagens e áreas urbanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 135,
    name: "Rosela",
    scientificName: "Platycercus eximius",
    description:
      "Papagaio australiano colorido, com plumagem vermelha, azul e verde, muito ativo e barulhento.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-14.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e áreas abertas (origem na Austrália)",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 136,
    name: "Sabiá-da-mata",
    scientificName: "Turdus fumigatus",
    description:
      "Pássaro canoro com plumagem marrom acinzentada, comum em florestas e matas.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Sabia-da-mata-Israel-Kuster.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e matas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 137,
    name: "Sabiá-do-campo",
    scientificName: "Mimus saturninus",
    description:
      "Ave comum em campos e áreas abertas, com canto melodioso e plumagem marrom-clara.",
    image: {
      uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-10-17-at-10.56.19.jpeg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos, cerrado e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 138,
    name: "Sabiá-poca",
    scientificName: "Turdus amaurochalinus",
    description:
      "Ave canora comum na América do Sul, com plumagem cinza e canto característico.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Sabia-poca-Andre-Adeodato-768x682.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 139,
    name: "Seriema",
    scientificName: "Cariama cristata",
    description:
      "Ave terrestre de grande porte, pernas longas, vocalização característica e hábitos diurnos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Seriema-Daniel-Gentili-1-e1710862007654.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Campos abertos e cerrados",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 140,
    name: "Tiriba-de-barriga-vermelha",
    scientificName: "Pyrrhura perlata",
    description:
      "Pequeno papagaio com barriga vermelha vibrante, muito ativo e sociável em grupos.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Tiriba-de-barriga-vermelha-Joao-Carlos-Cal-Martins-e1710860390389.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais e subtropicais",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 141,
    name: "Tiriba-pfrimer",
    scientificName: "Pyrrhura pfrimeri",
    description:
      "Espécie rara e ameaçada de papagaio, com plumagem verde e detalhes em azul e vermelho.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Tiriba-de-pfrimer-Roseanne-Almeida-e1710860462500.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais do Brasil",
    conservationStatus: "Vulnerável (IUCN)",
    type: "aves",
  },
  {
    id: 142,
    name: "Trinca-ferro",
    scientificName: "Saltator similis",
    description:
      "Passeriforme de médio porte com canto forte e plumagem cinza e preta.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Trinca-ferro-Frodoaldo-Budke-e1710864460205.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas, bordas e áreas abertas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 143,
    name: "Turaco-de-face-branca",
    scientificName: "Tauraco leucotis",
    description:
      "Ave colorida com plumagem verde e máscara branca, típica da África.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-1-768x623.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais africanas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 144,
    name: "Tucano",
    scientificName: "Ramphastos toco",
    description:
      "Ave com bico enorme colorido, muito conhecida e símbolo da fauna tropical.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-22.png",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas tropicais da América do Sul",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
    id: 145,
    name: "Urubu-rei",
    scientificName: "Sarcoramphus papa",
    description:
      "Grande ave necrófaga com coloração marcante na cabeça, importante na limpeza ambiental.",
    image: {
      uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Urubu-rei-Leandro-Moreira-A-e1710860842823.jpg",
    },
    credit: "Foto: Zoológico de Brasília",
    habitat: "Florestas e áreas abertas das Américas",
    conservationStatus: "Pouco preocupante (IUCN)",
    type: "aves",
  },
  {
  id: 146,
  name: "Aperema",
  scientificName: "Rhinoclemmys punctularia",
  description: "Cágado terrestre encontrado em áreas alagadas da América do Sul, com carapaça escura e pintas claras.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Aparema-e1710852380700.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas alagadas e florestas da América do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 147,
  name: "Cascavel",
  scientificName: "Crotalus durissus",
  description: "Serpente peçonhenta com chocalho característico na cauda, encontrada em áreas abertas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/cascavel-e1710852510268-768x695.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Cerrado, caatinga e campos abertos da América do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 148,
  name: "Cobra-do-milho",
  scientificName: "Pantherophis guttatus",
  description: "Serpente não peçonhenta muito popular como pet, com coloração alaranjada e manchas pretas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/COBRA-DO-MILHO-1-e1710852739986.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas e campos dos Estados Unidos",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 149,
  name: "Cotiarinha",
  scientificName: "Bothrops itapetiningae",
  description: "Víbora brasileira de pequeno porte, com coloração marrom e manchas escuras.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/cotiarinha-e1710852879317-768x653.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Cerrado e regiões áridas do Brasil",
  conservationStatus: "Quase ameaçada (IUCN)",
  type: "répteis",
},
{
  id: 150,
  name: "Dragão-barbudo",
  scientificName: "Pogona vitticeps",
  description: "Réptil australiano conhecido pela 'barba' que incha quando ameaçado. Muito criado como pet.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Drag%C3%A3o-barbudo-e1710853005607.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Ambientes áridos e semiáridos da Austrália",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 151,
  name: "Gecko-leopardo",
 scientificName: "Eublepharis macularius",
  description: "Lagarto pequeno, noturno, com pele manchada semelhante à de um leopardo. Muito criado como pet.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/Gecko.jpeg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Desertos e regiões rochosas da Ásia Central",
  conservationStatus: "Não avaliado (IUCN)",
  type: "répteis",
},
{
  id: 152,
  name: "Iguana",
  scientificName: "Iguana iguana",
  description: "Lagarto arborícola de grande porte, conhecido por sua crista dorsal e cauda longa.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/iguana-e1710853347513-768x681.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais da América Central e do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 153,
  name: "Jabuti-piranga",
  scientificName: "Chelonoidis carbonaria",
  description: "Quelônio terrestre brasileiro com carapaça escura e manchas amareladas ou alaranjadas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Jabuti-piranga.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas e cerrado da América do Sul",
  conservationStatus: "Vulnerável (IUCN)",
  type: "répteis",
},
{
  id: 154,
  name: "Jacaré-do-pantanal",
  scientificName: "Caiman yacare",
  description: "Espécie de jacaré abundante no Pantanal, de coloração escura e tamanho médio.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-02-28-at-10.34.22-e1710526214632.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas alagadas do Pantanal e bacias do Prata e Amazonas",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 155,
  name: "Jabuti-tinga",
  scientificName: "Chelonoidis denticulata",
  description: "Maior jabuti da América do Sul, encontrado em florestas tropicais, com carapaça amarelada.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/jabuti-tinga-768x644.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais da América do Sul",
  conservationStatus: "Vulnerável (IUCN)",
  type: "répteis",
},
{
  id: 156,
  name: "Jacaré-tinga",
  scientificName: "Caiman crocodilus",
  description: "Jacaré comum em rios e lagos da América do Sul, com olhos e narinas elevados.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Jacar%C3%A9-tinga.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Rios, igarapés e lagos da América Latina",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 157,
  name: "Jararaca-caiçaca",
  scientificName: "Bothrops moojeni",
  description: "Serpente venenosa brasileira, agressiva e de grande porte.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Jararaca-Cai%C3%A7aca-e1710853800778.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Cerrado e bordas de florestas do Brasil Central",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 158,
  name: "Jararaca-pintada",
  scientificName: "Bothrops neuwiedi",
  description: "Víbora terrestre com coloração marrom-avermelhada e manchas escuras laterais.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/WhatsApp-Image-2024-10-11-at-09.48.50.jpeg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Regiões de cerrado, mata atlântica e áreas abertas",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 159,
  name: "Jiboia",
  scientificName: "Boa constrictor",
  description: "Serpente não peçonhenta que mata por constrição; muito encontrada em florestas tropicais.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Jiboia-e1710861422818.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e savanas da América Central e do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 160,
  name: "Jiboia Imperator",
  scientificName: "Boa imperator",
  description: "Semelhante à jiboia, porém menor e com padrão de cor mais vibrante; popular como pet.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/15598453858_a16a0788c6_b-768x512.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e áreas semiabertas da América Central",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 161,
  name: "Jararacuçu",
  scientificName: "Bothrops jararacussu",
  description: "Víbora venenosa de grande porte, encontrada em ambientes terrestres e próximos à água.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2022/02/jararacucu-e1710853947900.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas e áreas marginais aquáticas da América do Sul",
  conservationStatus: "Quase ameaçada (IUCN)",
  type: "répteis",
},
{
  id: 162,
  name: "Jiboia-arco-íris",
  scientificName: "Epicrates crassus",
  description: "Serpente com iridescência suave nas escamas, encontrada no Pantanal e regiões adjacentes.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Jiboia-arco-iris-e1710854517116.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Pantanal e áreas úmidas da América do Sul",
  conservationStatus: "Vulnerável (IUCN)",
  type: "répteis",
},
{
  id: 163,
  name: "Jiboia-de-madagascar",
  scientificName: "Acrantophis dumerili",
  description: "Serpente terrestre de Madagascar, com padrão que mimetiza o chão da floresta.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2017/08/Jiboia-de-madagascar-e1710854690137.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas decíduas e áreas semiáridas de Madagascar",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 164,
  name: "Muçuã",
  scientificName: "Kinosternon scorpioides",
  description: "Tartaruga de pequeno a médio porte, com casco liso e presença de barbela.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Mu%C3%A7ua.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas alagadas, pântanos e rios lentos da América do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 165,
  name: "Píton-indiana",
  scientificName: "Python molurus",
  description: "Grande serpente que mata por constrição, encontrada em florestas e áreas próximas a água.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Piton-indiana-e1710854871876.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas de floresta, pastagens e regiões úmidas do sul da Ásia",
  conservationStatus: "Vulnerável (IUCN)",
  type: "répteis",
},
{
  id: 166,
  name: "Salamanta",
  scientificName: "Epicrates cenchria",
  description: "Também chamada de jiboia-de-coleira, tem círculos escuros e brilhantes nas laterais.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/02/salamanta.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais da América Central e do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 167,
  name: "Suaçuboia",
  scientificName: "Corallus hortulanus",
  description: "Serpente arborícola com cores variáveis, encontrada em mata densa das Américas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Sua%C3%A7uboia-e1710860644490.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais da América Central e do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 168,
  name: "Sucuri-verde",
  scientificName: "Eunectes murinus",
  description: "Maior serpente da América e uma das maiores do mundo, predadora de grandes presas aquáticas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Sucuri-verde.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Rios, lagos e pântanos da Amazônia e América do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 169,
  name: "Tartaruga-da-Amazônia",
  scientificName: "Podocnemis expansa",
  description: "Tartaruga de grande porte da bacia amazônica, importante para os ecossistemas fluviais.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Tartaruga-da-amazonia-e1710860787314.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Rios e lagos da bacia amazônica",
  conservationStatus: "Vulnerável (IUCN)",
  type: "répteis",
},
{
  id: 170,
  name: "Tartaruga-mordedora",
  scientificName: "Chelydra serpentina",
  description: "Tartaruga agressiva que se alimenta de peixes, anfíbios e carniça, encontrada na América do Norte.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Tartaruga-mordedora.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Rios, pântanos e lagos da América do Norte",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 171,
  name: "Teiú-comum",
  scientificName: "Salvator merianae",
  description: "Grande lagarto terrestre, onívoro, com coloração negra e manchas claras.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2017/08/Teiu.jpeg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Campos, cerrados e áreas abertas da América do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 172,
  name: "Tigre-d’água-norte-americano",
  scientificName: "Trachemys scripta",
  description: "Tartaruga semi-aquática com padrão listrado na cabeça; popular pet e invasora em muitos locais.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Tigre-dagua.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Rios, lagos e pântanos da América do Norte e áreas introduzidas",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 173,
  name: "Tigre-d’água-sul-americano",
  scientificName: "Trachemys dorbigni",
  description: "Tartaruga semi-aquática com marcas mais suaves que a tigre-d’água norte-americana.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Tigre-dagua-sul-americano.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Rios e lagoas da América do Sul",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "répteis",
},
{
  id: 174,
  name: "Tracajá",
  scientificName: "Podocnemis unifilis",
  description: "Tartaruga de casco liso, encontrada em rios da Amazônia e arredores.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2020/01/Tracaja.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Rios e lagos da bacia amazônica",
  conservationStatus: "Quase ameaçada (IUCN)",
  type: "répteis",
},
{
  id: 175,
  name: "Axolote",
  scientificName: "Ambystoma mexicanum",
  description: "Anfíbio neotênico conhecido por manter características larvais na vida adulta, como guelras externas. Pode regenerar membros.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/02/axolote.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Lagos e canais do México, principalmente Xochimilco",
  conservationStatus: "Criticamente em perigo (IUCN)",
  type: "anfíbios",
},
{
  id: 176,
  name: "Salamandra-de-costelas-salientes",
  scientificName: "Pleurodeles waltl",
  description: "Salamandra aquática que exibe as pontas das costelas como mecanismo de defesa, perfurando a pele com toxinas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-03-at-10.25.08.jpeg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Águas doces e tranquilas da Península Ibérica e Marrocos",
  conservationStatus: "Quase ameaçada (IUCN)",
  type: "anfíbios",
},
{
  id: 177,
  name: "Aranha-armadeira",
  scientificName: "Phoneutria nigriventer",
  description: "Uma das aranhas mais venenosas do mundo, conhecida por seu comportamento agressivo e postura defensiva com as pernas levantadas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/02/aranha-armadeira.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e áreas urbanas do Brasil",
  conservationStatus: "Não avaliada",
  type: "artrópodes",
},
{
  id: 178,
  name: "Aranha Caranguejeira",
  scientificName: "Acanthoscurria paulensis",
  description: "Aranha de grande porte, geralmente dócil, que usa pelos urticantes como defesa e se alimenta de pequenos invertebrados e vertebrados.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/02/caranguejeira.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Regiões de cerrado e florestas do Brasil",
  conservationStatus: "Não avaliada",
  type: "artrópodes",
},
{
  id: 179,
  name: "Barata Gigante",
  scientificName: "Blaberus giganteus",
  description: "Uma das maiores baratas do mundo, inofensiva aos humanos e frequentemente usada em estudos científicos e educação ambiental.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/07/Barata-gigante-768x526.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais da América Central e do Sul",
  conservationStatus: "Não avaliada",
  type: "artrópodes",
},
{
  id: 180,
  name: "Escorpião",
  scientificName: "Tityus fasciolatus",
  description: "Espécie de escorpião típica do cerrado, com veneno menos potente que outras espécies, mas ainda capaz de causar acidentes.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/02/escorpiao.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Cerrado brasileiro",
  conservationStatus: "Não avaliada",
  type: "artrópodes",
},
{
  id: 181,
  name: "Escorpião-amarelo",
  scientificName: "Tityus serrulatus",
  description: "Espécie mais perigosa de escorpião no Brasil, com veneno neurotóxico que pode ser fatal, especialmente em crianças e idosos.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/07/Escorpiao-amarelo.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas urbanas e rurais do Sudeste e Centro-Oeste do Brasil",
  conservationStatus: "Não avaliada",
  type: "artrópodes",
},
{
  id: 182,
  name: "Tenébrio Gigante",
  scientificName: "Zophobas morio",
  description: "Larva de besouro amplamente utilizada como alimento para répteis e aves em cativeiro, além de ser estudada por sua capacidade de biodegradar plástico.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2022/02/tenebrio-gigante.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Ambientes escuros e úmidos; viveiro de criação em cativeiro",
  conservationStatus: "Não avaliada",
  type: "artrópodes",
},


{
  id: 183,
  name: "Borboleta-coruja-brasileira",
  scientificName: "Caligo brasiliensis",
  description: "Borboleta noturna com asas que imitam olhos de coruja para afastar predadores.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-29-at-11.04.31.jpeg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e subtropicais do Brasil",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 184,
  name: "Borboleta-pavão-branco",
  scientificName: "Anartia jatrophae",
  description: "Borboleta diurna com padrão branco e manchas que lembram olhos de pavão nas asas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-15-768x628.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas abertas e jardins tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 185,
  name: "Borboleta-rabo-de-andorinha",
  scientificName: "Battus polydamas",
  description: "Borboleta com cauda nas asas traseiras que lembra a cauda de uma andorinha, comum em áreas tropicais.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-17.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas e áreas abertas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 186,
  name: "Borboleta-da-couve",
  scientificName: "Ascia monuste",
  description: "Pequena borboleta branca comum em plantações de couve e outras crucíferas.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-18.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas agrícolas e jardins",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 187,
  name: "Borboleta-coruja-do-coqueiro",
  scientificName: "Brassolis sophorae",
  description: "Borboleta noturna grande, comum em coqueirais, com padrão que lembra olhos na parte superior das asas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-19-768x575.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Coqueirais e florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 188,
  name: "Borboleta-coruja",
  scientificName: "Caligo illioneus",
  description: "Borboleta noturna com asas grandes que simulam olhos de coruja para defesa contra predadores.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2025/02/image-20.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 189,
  name: "Borboleta-monarca",
  scientificName: "Danaus erippus",
  description: "Famosa por suas migrações, apresenta asas alaranjadas com manchas pretas.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2024/03/image-21-768x521.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Campos abertos e áreas agrícolas",
  conservationStatus: "Pouco preocupante (IUCN)",
  type: "borboletas",
},
{
  id: 190,
  name: "Borboleta-júlia",
  scientificName: "Dryas iulia",
  description: "Borboleta com asas laranja brilhante e corpo alongado, comum em áreas tropicais.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-25.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e jardins",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 191,
  name: "Borboleta-estaladeira-vermelha",
  scientificName: "Hamadryas amphinome",
  description: "Borboleta conhecida pelo som que produz ao bater as asas, possui tons avermelhados.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-26-768x576.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 192,
  name: "Borboleta-estaladeira-cinza",
  scientificName: "Hamadryas februa",
  description: "Similar à estaladeira vermelha, porém com coloração cinza nas asas.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-27-300x120.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 193,
  name: "Borboleta-estaladeira-azul",
  scientificName: "Hamadryas laudamia",
  description: "Borboleta com tons azulados nas asas e comportamento semelhante às outras estaladeiras.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2024/03/image-28.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 194,
  name: "Borboleta-pintada",
  scientificName: "Heliconius erato",
  description: "Borboleta conhecida por sua coloração vermelha e preta, comum em florestas tropicais.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2025/03/Heliconius_besckei_edited.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e áreas abertas",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 195,
  name: "Borboleta-zebra-azul",
  scientificName: "Heliconius sara",
  description: "Borboleta com padrão listrado azul e preto, muito vistosa.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-29-768x509.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 196,
  name: "Borboleta-andorinha-vermelha",
  scientificName: "Heraclides anchisiades capis",
  description: "Borboleta com cauda característica, asas vermelhas e pretas.",
  image: {
    uri: "http://www.zoo.df.gov.br/wp-content/uploads/2025/03/images.jpg",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e áreas abertas",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 197,
  name: "Borboleta-andorinha-grande",
  scientificName: "Heraclides thoas",
  description: "Borboleta grande, com cauda pronunciada nas asas traseiras e coloração preta e amarela.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-30.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais e áreas abertas",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 198,
  name: "Borboleta-tigre",
  scientificName: "Mechanitis lysimnia",
  description: "Borboleta com padrão laranja e preto que lembra as listras de um tigre.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-31-768x426.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 199,
  name: "Borboleta-vítrea",
  scientificName: "Methona themisto",
  description: "Borboleta com asas transparentes que a tornam difícil de ser vista por predadores.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-32-768x397.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Florestas tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
{
  id: 200,
  name: "Borboleta-enxofre-gigante",
  scientificName: "Phoebis philea",
  description: "Grande borboleta amarela, comum em áreas abertas e jardins.",
  image: {
    uri: "https://www.zoo.df.gov.br/wp-content/uploads/2025/03/image-33.png",
  },
  credit: "Foto: Zoologico de Brasilia",
  habitat: "Áreas abertas e jardins tropicais",
  conservationStatus: "Não avaliada",
  type: "borboletas",
},
];

const animalTypes = [
  { label: "Mamíferos", value: "mamíferos" },
  { label: "Aves", value: "aves" },
  { label: "Artrópodes", value: "artrópodes" },
  { label: "Répteis", value: "répteis" },
  { label: "Anfíbios", value: "anfíbios" },
  { label: "Borboletário", value: "borboletas" },
];

const AnimalCard = ({ item }) => (
  <View style={styles.card}>
    {/* Nome */}
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.scientificName}>{item.scientificName}</Text>

    {/* Imagem */}
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

    {/* Crédito da imagem */}
    {item.credit && <Text style={styles.credit}>{item.credit}</Text>}

    {/* Info */}
    <View style={styles.infoBox}>
      <Text style={styles.label}>Habitat:</Text>
      <Text style={styles.text}>{item.habitat || "Não informado"}</Text>

      <Text style={styles.label}>Status de Conservação:</Text>
      <Text style={styles.text}>
        {item.conservationStatus || "Não informado"}
      </Text>
    </View>

    {/* Descrição */}
    <Text style={styles.description}>
      {item.description || "Descrição não disponível."}
    </Text>

    {/* Link */}
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

      <FlatList
        data={filteredAnimals}
        renderItem={({ item }) => <AnimalCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={Platform.select({ web: 2, default: 1 })}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.headerTitle}>
              Animais do Zoológico de Brasília
            </Text>

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
          </View>
        }
        contentContainerStyle={Platform.select({
          default: {
            paddingBottom: 30,
            paddingHorizontal: 15,
          },
          web: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: 10,
            width: "100%",
            maxWidth: 900,
            alignSelf: "center",
          },
          listHeader: {
            width: "100%",
            alignSelf: "center",
            backgroundColor: "#ffffff",
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 10,
            ...Platform.select({
              web: {
                maxWidth: 10000,
                paddingHorizontal: 20,
              },
            }),
          },
        })}
        style={Platform.select({
          web: {
            width: "100%",
          },
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8faf8",
    ...Platform.select({
      web: {
        alignItems: "center",
      },
    }),
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 20,
    color: "#2d5e2d",
    paddingTop: Platform.OS === "ios" ? 160 : 140,
    fontFamily: "Helvetica Neue",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 25,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e6e0",
    width: "100%",
    alignSelf: "center",
    ...Platform.select({
      web: {
        width: "100%",
        maxWidth: "100%",
        paddingHorizontal: 0,
      },
    }),
  },
  filterButton: {
    backgroundColor: "#f0f5f0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
    margin: 6,
    borderWidth: 1,
    borderColor: "#d0e0d0",
  },
  filterButtonActive: {
    backgroundColor: "#3a7a3a",
    borderColor: "#2d5e2d",
  },
  filterButtonText: {
    color: "#4a6a4a",
    fontWeight: "600",
    fontSize: 14,
  },
  filterButtonTextActive: {
    color: "#ffffff",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 25,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e0e8e0",
    ...Platform.select({
      web: {
        flexBasis: "45%",
        maxWidth: 450,
        marginHorizontal: "2.5%",
        minHeight: 700,
        display: "flex",
        flexDirection: "column",
      },
    }),
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2d5e2d",
    marginBottom: 4,
  },
  scientificName: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#6b8a6b",
    marginBottom: 12,
  },
  imageContainer: {
    width: "100%",
    height: Platform.OS === "web" ? 650 : 350,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f0f7f0",
    borderRadius: 8,
    overflow: "hidden",
    ...Platform.select({
      web: {
        height: 350,
      },
    }),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagePlaceholder: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#e0efe0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
    ...Platform.select({
      web: {
        height: 350,
      },
    }),
  },
  placeholderText: {
    color: "#7a9a7a",
    fontSize: 14,
  },
  credit: {
    fontSize: 12,
    color: "#7a9a7a",
    textAlign: "right",
    marginBottom: 12,
    fontStyle: "italic",
  },
  infoBox: {
    backgroundColor: "#f5faf5",
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#4a8a4a",
  },
  label: {
    fontWeight: "700",
    color: "#3a6a3a",
    marginBottom: 6,
    fontSize: 14,
  },
  text: {
    color: "#3a6a3a",
    marginBottom: 8,
    fontSize: 14,
  },
  description: {
    fontSize: 15,
    color: "#3a5a3a",
    lineHeight: 22,
    marginBottom: 16,
    flex: 1,
  },
  link: {
    color: "#4a8a4a",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
    fontSize: 14,
  },

  listContainer: {
    ...Platform.select({
      web: {
        width: "90%",
        maxWidth: 1200,
        justifyContent: "center",
      },
    }),
  },
});

export default ZooAnimalsScreen;
