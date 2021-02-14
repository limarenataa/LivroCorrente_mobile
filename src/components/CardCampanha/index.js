import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//Assets/img
import Capa from '../../../assets/capa.png';

const CardCampanha = (props) => {
                
return (
    <View style={styles.container}>
        <Image style={styles.capaLivro} source={Capa}/>
        <View>
            <Text style={styles.titleLivro}>{props.titulo_pedido}</Text>
            <Text style={styles.infoLivro}>Exemplares: {props.numeroExemplar_pedido}</Text>
            <Text style={styles.infoLivro}>Gênero: {props.genero_pedido}</Text>
            <Text>{props.nome_biblioteca}</Text>
        </View>
    </View>
  )
}

export default CardCampanha;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf:'center',
        width: '80%',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        boxShadow: '2px 2px 2px #CCC',
    },

    capaLivro: {
        width: 80,
        height: 100,
    },

    titleLivro: {
        color:'#504D4D',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5
    },

    infoLivro: {
        color:'#504D4D',
        fontSize: 14,
        marginBottom: 5
    }
})