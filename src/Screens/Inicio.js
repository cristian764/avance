import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Inicio() {
  return (
    <View style={globalStyles.container}>
      <Text>¡Bienvenido al inicio!</Text>
    </View>
  );
}