//Observação: A biblioteca react-native-maps só roda no App Expo pois não suporta visualização web.

import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'
//  import MapView from 'react-native-maps';


const PontosColeta = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.avisoText}>
                Descomentar o código para visualizar o map no app Expo
            </Text>
            {/* <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: -22.9721002,
                    longitude: -44.0975676,
                    latitudeDelta: 0.1022,
                    longitudeDelta: 0.0821,
                }}
            >       
            </MapView> */}

        </View>
    )
}

export default PontosColeta

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFCFC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avisoText: {
        width:'80%',
        fontSize: 22,
    },

    // map:{
    //     width: Dimensions.get('window').width, //pegar o tamanho da tela exato
    //     height: '100%'
    // },
})