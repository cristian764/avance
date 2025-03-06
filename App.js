import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import CambiaImagen from './src/componentes/CambiaImagen';
import styles from './src/estilos/style';

const c1 = require('./assets/imagenes/c1.jpg');
const c2 = require('./assets/imagenes/c2.jpg');
const c3 = require('./assets/imagenes/c3.jpg');
const c4 = require('./assets/imagenes/c4.jpg');
const c5 = require('./assets/imagenes/c5.jpg');

export default function App() {
  const arrayImage = [
    { image1: require('./assets/imagenes/carro1.png'), image2: require('./assets/imagenes/carro2.gif') },
    { image1: require('./assets/imagenes/lavamanos1.jpg'), image2: require('./assets/imagenes/lavamanos2.gif') },
    { image1: require('./assets/imagenes/plantas1.png'), image2: require('./assets/imagenes/plantas2.gif') },
    { image1: require('./assets/imagenes/regadera1.png'), image2: require('./assets/imagenes/regadera2.gif') },
    { image1: require('./assets/imagenes/tasa.jpg'), image2: require('./assets/imagenes/tasa.jpg') },
  ];

  const [numero, setNumero] = useState(0);

  const generarNumero = () => {
    const num = Math.floor(Math.random() * 100);
    setNumero(num);
  };

  const obtenerImagen = () => {
    if (numero >= 1 && numero <= 20) return c1;
    else if (numero >= 21 && numero <= 40) return c2;
    else if (numero >= 41 && numero <= 60) return c3;
    else if (numero >= 61 && numero <= 80) return c4;
    else if (numero >= 81 && numero <= 100) return c5;
    else return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.smallImagesContainer}>
        <CambiaImagen image1={arrayImage[0].image1} image2={arrayImage[0].image2} />
        <CambiaImagen image1={arrayImage[1].image1} image2={arrayImage[1].image2} />
      </View>

      <View style={styles.numeroContainer}>
        <Text style={styles.numero}>{numero}</Text>
      </View>

      <View style={styles.imagenContainer}>
        {numero !== 0 && (
          <Image source={obtenerImagen()} style={styles.imagen} />
        )}
      </View>

      <View style={styles.smallImagesContainer}>
        <CambiaImagen image1={arrayImage[2].image1} image2={arrayImage[2].image2} />
        <CambiaImagen image1={arrayImage[3].image1} image2={arrayImage[3].image2} />
        <CambiaImagen image1={arrayImage[4].image1} image2={arrayImage[4].image2} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Generar Número" onPress={generarNumero} color="#3498db" />
      </View>
      <View>
      <Text>
        Fuentes Osorio Cristian
        Ramírez Flores Kevin
      </Text>
    </View>
    </View>
    
  );
}

