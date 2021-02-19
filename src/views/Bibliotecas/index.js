import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, StatusBar} from 'react-native';


//Icons
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

//Components
import CardBiblioteca from '../../components/CardBiblioteca';

//Simulando Banco de Dados
const dadosBibliotecas = [

    {
        id: Math.random(),
        nome: "Ciranda de Tariuba",
        nome_rede: "Mar de Leitores",
        estado_biblioteca: "RJ",
        cidade_biblioteca: "Paraty"
    },

    {
        id: Math.random(),
        nome: "Ciranda de Tariuba",
        nome_rede: "Mar de Leitores",
        estado_biblioteca: "RJ",
        cidade_biblioteca: "Paraty"
    },

    {
        id: Math.random(),
        nome: "Ciranda de Tariuba",
        nome_rede: "Mar de Leitores",
        estado_biblioteca: "RJ",
        cidade_biblioteca: "Paraty"
    },

    {
        id: Math.random(),
        nome: "Ciranda de Tariuba",
        nome_rede: "Mar de Leitores",
        estado_biblioteca: "RJ",
        cidade_biblioteca: "Paraty"
    },
    
  ]

export default function Bibliotecas (){

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.headerArea}>
                <Entypo name="dots-three-horizontal" size={24} color="#686868" />
            </TouchableOpacity>
    
            <View style={styles.mainArea}>
                <Text style={styles.mainTitle}>Bibliotecas cadastradas</Text>
                <Text style={styles.mainSubTitle}>Apoie uma biblioteca comunitária!</Text>
            </View>

            <View style={styles.searchArea}>
                <TextInput style={styles.searchInput} placeholder="Encontrar biblioteca"/>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="#686868" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scroller}>

            <View style={styles.containerCampanha}>
                {dadosBibliotecas.map((item, id)=>(
                    <CardBiblioteca 
                        key={id} 
                        nome={item.nome} 
                        nome_rede={item.nome_rede} 
                        estado_biblioteca={item.estado_biblioteca}
                        cidade_biblioteca={item.cidade_biblioteca}       
                    />
                ))}
            </View>

            </ScrollView>    
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    
    container: {
       flex:1,
       backgroundColor: '#FFFCFC',
    },

    scroller: {
       flex:1,
    },

    headerArea: {
        
        alignItems: 'flex-end',
        height: 40,
        paddingLeft: 5,
        paddingRight: 20,
        marginTop: 30,
        marginBottom: 10,
    },

    headerLogo: {
        marginTop: 30,
        marginLeft:20,
        width: 142,
        height: 34
    },

    searchArea: {
        backgroundColor: '#F8F5F5',
        height: 40,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf:'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        marginBottom: 20
    

    },

    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#959292'
    },

    mainArea: {
        marginTop:20,
        padding:20,
        flexDirection: 'column',
    },

    mainTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#504D4D',
        textAlign: 'center',
    },

    mainSubTitle: {
        fontSize: 17,
        color: '#959292',
        textAlign: 'center',
    }

})