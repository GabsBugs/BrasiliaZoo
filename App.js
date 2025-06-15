import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import AnimalScreen from "./src/screens/AnimalScreen";
import EventsScreen from "./src/screens/EventsScreen";
import EducationScreen from "./src/screens/Education";
import TamanduaDetails from "./src/screens/TamanduaDetails";
import JararacaDetails from "./src/screens/JararacaDetails";
import CachorroMatoDetails from "./src/screens/CachorroMatoDetails";

import Map from "./src/screens/Map";           
import Stories from "./src/screens/Stories";  
import PlanVisit from "./src/screens/PlanVisit";  
import Conservation from "./src/screens/Conservation";  
import Yaza from "./src/screens/Yaza";  



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={Map} />              
        <Stack.Screen name="Animal" component={AnimalScreen} />
        <Stack.Screen name="Stories" component={Stories} />
        <Stack.Screen name="PlanVisit" component={PlanVisit} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        <Stack.Screen name="Conservation" component={Conservation} />
        <Stack.Screen name="Yaza" component={Yaza} />
        <Stack.Screen name="TamanduaDetails" component={TamanduaDetails} />
        <Stack.Screen name="JararacaDetails" component={JararacaDetails} />
        <Stack.Screen name="CachorroMatoDetails" component={CachorroMatoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
