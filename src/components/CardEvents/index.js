import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//Assets/img
import Logo from '../../../assets/ellibro.jpg';

const CardEvents = (props) => {
                
return (
    <View style={styles.container}>
  
            <Image style={styles.capaEvent} source={Logo}/>
            <View>
                <Text style={styles.titleEvent}>{props.evento}</Text>
                <Text style={styles.infoEvent}>Descrição: {props.descricao}</Text>
                <Text style={styles.infoEvent}>Local: {props.local}</Text>
                <Text style={styles.date}>{props.saveTheDate}</Text>
            </View>
       
    </View>
)
}

export default CardEvents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf:'center',
        width: '88%',
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

    capaEvent: {
        width: 80,
        height: 100,
        marginLeft: 10,
        marginRight: 15,


    },

    titleEvent: {
        color:'#504D4D',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5
    },

    infoEvent: {
        color:'#504D4D',
        fontSize: 14,
        marginBottom: 5
    },
    date: {
        fontWeight: 'bold',
        fontSize:17,
        color: '#a9a9a9'
    }
})