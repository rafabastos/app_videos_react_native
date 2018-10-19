import React from 'react';
import {View,Text,ImageBackground,StyleSheet} from 'react-native';

function Category(props) {
    const genres = props.genres;
    return (
        <ImageBackground
            style={styles.wrapper}
            source={{
                uri: props.background_image
            }}
            >
            <Text style={styles.genre}>{genres ? genres[0]: "No category"}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: {
        width: 2,
        height: 2
        },
        textShadowRadius: 0,
    }
})

export default Category;