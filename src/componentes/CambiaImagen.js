import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

function CambiaImagen({ image1, image2 }) {
    const [actual, setActual] = useState(image1);

    const handlePress = () => {
        setActual(actual === image1 ? image2 : image1);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={actual} style={styles.Imagen} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Imagen: {
        width: 100,
        height: 100,
        margin: 5,
        resizeMode: 'contain',
    },
});

export default CambiaImagen;
