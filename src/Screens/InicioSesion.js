import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function InicioSesion({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const userList = [{ user: 'Kevin', pass: '123' }];

  const goIn = () => {
    const userFound = userList.some(({ user, pass }) => user === usuario && pass === password);
    if (userFound) {
      navigation.replace('Inicio');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text>Iniciar Sesión</Text>
      <TextInput placeholder='Nombre De Usuario' maxLength={25} value={usuario} onChangeText={setUsuario} />
      <TextInput placeholder='Contraseña' maxLength={20} secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity onPress={goIn}><Text>Iniciar Sesión</Text></TouchableOpacity>
    </View>
  );
}