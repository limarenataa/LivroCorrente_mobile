import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native'
import {useNavigation} from '@react-navigation/native';

//IMG
import PreloadImg from '../../../assets/preload.png';

const Preload = () => {

    //Enviar para a tela Home depois 2000ms
    const navigation = useNavigation();
    
    //Carregando o app na página PreLoad antes de direcionar para a pag Login
        setTimeout(() => {
            navigation.navigate('Login')
         }, 1000);
      

    return (
        <SafeAreaView style={styles.container}>
            
            <ImageBackground style={styles.background} source={PreloadImg}>
                {/* Spinner: */}
                <ActivityIndicator style={styles.loadingIcon} size="large" color="#fff"/>
            </ImageBackground>   
            
        </SafeAreaView>
    )
}

export default Preload

const styles = StyleSheet.create({
   
    container: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    background: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
    },

    loadingIcon: {
        marginTop: 250
    }
})