import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AnimalScreen from './src/screens/AnimalScreen';
import EventsScreen from './src/screens/EventsScreen';
import DonationScreen from './src/screens/DonationScreen';
import EducationScreen from './src/screens/EducationScreen';
import TamanduaDetails from './src/screens/TamanduaDetails';
import JararacaDetails from './src/screens/JararacaDetails';
import CachorroMatoDetails from './src/screens/CachorroMatoDetails';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false 
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
        <Stack.Screen name="Animal" component={AnimalScreen} options={{ title: 'Informações do Animal' }} />
        <Stack.Screen name="Events" component={EventsScreen} options={{ title: 'Eventos' }} />
        <Stack.Screen name="Donation" component={DonationScreen} options={{ title: 'Doações' }} />
        <Stack.Screen name="Education" component={EducationScreen} options={{ title: 'Educação Ambiental' }} />
        <Stack.Screen name="TamanduaDetails" component={TamanduaDetails} options={{ title: 'Detalhes do Tamanduá-Mirim' }} />
        <Stack.Screen name="JararacaDetails" component={JararacaDetails} options={{ title: 'Detalhes do Jararaca' }}/>
        <Stack.Screen name="CachorroMatoDetails" component={CachorroMatoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
