import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


//Assets/img
import LogoBiblioteca from '../../../assets/logoBib.png';

const CardBiblioteca = (props) => {
    const navigation = useNavigation();

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

return (
    <View >
        <TouchableOpacity style={styles.container} onPress={()=>goTo('Biblioteca')}>
            <Image style={styles.logoBiblioteca} source={LogoBiblioteca}/>
            <View style={styles.containerInfo}>
                <Text style={styles.titleBiblioteca}>{props.nome}</Text>
                <Text style={styles.infoBiblioteca}>Rede: {props.nome_rede}</Text>
                <Text style={styles.infoBiblioteca}>{props.estado_biblioteca}, {props.cidade_biblioteca}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CardBiblioteca;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf:'center',
        alignItems:'center',
        width: '80%',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
         //shadow IOS
        shadowColor: "#CCC",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
         //shadow android
        elevation: 4,
    },

    containerInfo: {
        width:'70%'
    },

    logoBiblioteca: {
        width: 80,
        height: 80,
        marginLeft:10,
        marginRight: 30,
    },

    titleBiblioteca: {
        color:'#504D4D',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5
    },

    infoBiblioteca: {
        color:'#504D4D',
        fontSize: 14,
        marginBottom: 5
    }
})