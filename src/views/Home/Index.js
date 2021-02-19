//Observação: O componente ModalInfo só roda a partir do App Expo no mobile.
// Na visualização do Chrome, o efeito modal e as demais informações da página não rodam corretamente.

import React from 'react';
import {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, FlatList, Modal } from 'react-native';

//Icons
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

//Assets/img
import Logo from '../../../assets/logo.png';


//Components
import CardCampanha from '../../components/CardCampanha';
import ModalInfo from '../../components/ModalInfo'

//Simulando Banco de Dados
const dadosCampanhas = [

    {
        id: Math.random(),
        titulo_pedido: "O pequeno príncipe",
        numeroExemplar_pedido: "2",
        genero_pedido: "Fábula",
        nome_biblioteca: "Ciranda de Tarituba"
    },

    {
        id: Math.random(),
        titulo_pedido: "O mundo de Sofia",
        numeroExemplar_pedido: "1",
        genero_pedido: "Ficção",
        nome_biblioteca: "Colibri"
    },

    {
        id: Math.random(),
        titulo_pedido: "O sol é para todos",
        numeroExemplar_pedido: "3",
        genero_pedido: "Romance",
        nome_biblioteca: "Quilombo do Campinho"
    },

    {
        id: Math.random(),
        titulo_pedido: "Extraordinário",
        numeroExemplar_pedido: "2",
        genero_pedido: "Drama",
        nome_biblioteca: "Judith Lacaz"
    },
  ]

function Home (){

     //State para controlar a exibição do modal
     const [showModal, setShowModal] = useState(false);

     const handleShowModal = () => {
         setShowModal(true);
     }

    return (
        <SafeAreaView style={styles.container}>

            

                <View style={styles.headerArea}>
                    <Image style={styles.headerLogo} source={Logo} />
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={24} color="#686868" />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.mainArea}>
                    <Text style={styles.mainTitle}>Como eu posso ajudar?</Text>
                    <Text style={styles.mainSubTitle}>Doe um livro a uma biblioteca comunitária!</Text>
                </View>

                <View style={styles.searchArea}>
                    <TextInput style={styles.searchInput} placeholder="Pesquisar campanha"/>
                    <TouchableOpacity>
                        <AntDesign name="search1" size={24} color="#686868" />
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scroller}>
                    <View style={styles.containerCampanha}>
                        {dadosCampanhas.map((item, id)=>(
                            <CardCampanha 
                                key={id} 
                                titulo_pedido={item.titulo_pedido} 
                                numeroExemplar_pedido={item.numeroExemplar_pedido} 
                                genero_pedido={item.genero_pedido}
                                nome_biblioteca={item.nome_biblioteca}
                            />
                        ))}
                    </View>
                </ScrollView>
            
            {/* O modal só roda no app.  */}
            <ModalInfo
                show={showModal}
                setShow={setShowModal}                
            />
            

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    
    container: {
       flex:1,
       backgroundColor: '#FFFCFC',
    },

    scroller: {
       flex:1,
    },

    headerArea: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 20,
        marginTop: 30,
        marginBottom: 30,
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
    },

  

})