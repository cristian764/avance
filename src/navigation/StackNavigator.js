import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InicioSesion from '../src/screens/InicioSesion';
import Inicio from '../src/screens/Inicio';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InicioSesion'>
        <Stack.Screen name='InicioSesion' component={InicioSesion} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name='Inicio' component={Inicio} options={{ title: 'Bienvenido' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}