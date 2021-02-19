import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';


//Icons
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



export default function TabBar ({state}){

    const navigation = useNavigation();

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.tabArea}>
            {/* Quando clicar em um item, executa a função goTo que recebe como parâmetro o nome da tela e navega para a mesma. */}
            
            <TouchableOpacity onPress={()=>goTo('Home')} style={styles.tabItem}>
                                                      {/* Condição. confere o estado. se for correspondente ao número do index, a opacidade fica 1, se for false, 0.5 */}
                <AntDesign name="home" size={30} style={{opacity: state.index === 0 ? 1 : 0.5, color: '#686868'}} />
            </TouchableOpacity>
           
            <TouchableOpacity onPress={()=>goTo('Bibliotecas')} style={styles.tabItem}>
                <MaterialCommunityIcons name="bookshelf" size={33} style={{opacity: state.index === 2 ? 1: 0.5, color: '#686868'}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goTo('Favoritos')} style={styles.tabItem}>
                <AntDesign name="calendar" size={29} style={{opacity: state.index === 1 ? 1 : 0.5, color: '#686868'}} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>goTo('PontosColeta')} style={styles.tabItem}>
                <MaterialCommunityIcons name="map-marker-outline" size={32} style={{opacity: state.index === 3 ? 1 : 0.5, color: '#686868'}} />
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    tabArea: {
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },

    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})