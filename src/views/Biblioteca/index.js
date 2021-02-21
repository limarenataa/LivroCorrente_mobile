import React, {useState} from 'react'
import {SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity, Image, Text, FlatList}  from 'react-native'


//Assets/img
import BibPerfil from '../../../assets/bibPerfil.png';

//Icons
import { Entypo } from '@expo/vector-icons';  

//Components
import CardCampanha from '../../components/CardCampanha';
import ModalInfo from '../../components/ModalInfo'

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
        titulo_pedido: "As brumas de Avalon",
        numeroExemplar_pedido: "3",
        genero_pedido: "Fantasia",
        nome_biblioteca: "Ciranda de Tarituba"
    },

    {
        id: Math.random(),
        titulo_pedido: "Malala",
        numeroExemplar_pedido: "1",
        genero_pedido: "Biografia",
        nome_biblioteca: "Ciranda de Tarituba"
    },

    {
        id: Math.random(),
        titulo_pedido: "Harry Potter",
        numeroExemplar_pedido: "3",
        genero_pedido: "Ficção",
        nome_biblioteca: "Ciranda de Tarituba"
    },
  ]


export default function Biblioteca (){

     //State para controlar a exibição do modal
     const [showModal, setShowModal] = useState(false);

     const handleShowModal = () => {
         setShowModal(true);
     } 

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroller}>

                <View style={styles.pageHeader}>
                    <TouchableOpacity style={styles.headerMenu}>
                        <Entypo name="dots-three-horizontal" size={24} color="#F8F5F5" />
                    </TouchableOpacity>
                </View>

                <View style={styles.pageBody}>
                    <View style={styles.infoBiblioArea}>
                        <Image style={styles.logoBiblioteca} source={BibPerfil}/>
                        <View style={styles.infoBiblio}>
                            <Text style={styles.nomeBiblioteca}>Ciranda de Tariuba</Text>
                            <Text style={styles.nomeRedeBiblioteca}>Mar de Leitores</Text>
                        </View>
                    </View>

                    <View style={styles.campanhasBiblio}>
                        <Text style={styles.titleCampanhas}>Confira as campanhas desta biblioteca: </Text>
            
                        <FlatList
                            data={dadosCampanhas}
                            keyExtractor={(item) => `${item.id}`}        
                            renderItem={({item}) => (
                                <TouchableOpacity  onPress={() => handleShowModal()}>
                                    <CardCampanha 
                                        capa_pedido={item.capa_pedido} 
                                        titulo_pedido={item.titulo_pedido} 
                                        numeroExemplar_pedido={item.numeroExemplar_pedido}
                                        genero_pedido={item.genero_pedido}
                                        nome_biblioteca={item.nome_biblioteca}
                                    />
                                </TouchableOpacity> 
                            )}
                        />
                        
                    </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCFC',
    },

    scroller: {
        flex: 1,
    },

    pageHeader: {
        height: 240,
        backgroundColor: '#987284'
    },

    headerMenu: {
        alignItems: 'flex-end',
        height: 40,
        paddingLeft: 5,
        paddingRight: 20,
        marginTop: 30,
        marginBottom: 10,
    },

    pageBody: {
        backgroundColor: '#FFFCFC',
        borderTopLeftRadius: 50,
        marginTop: -50,
    },

    infoBiblioArea: {
        flexDirection: 'row', 
        marginTop: -30,
    },

    infoBiblio: {
        flex: 1, 
        justifyContent: 'flex-end'
        
    },

    logoBiblioteca: {
        height:110,
        width: 110,
        borderRadius: 20,
        marginLeft: 30,
        marginRight: 10,
        borderWidth: 4, 
        borderColor: '#FFFCFC',
        backgroundColor: '#F8F5F5'
    },

    nomeBiblioteca:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#504D4D'
    },

    nomeRedeBiblioteca: {
        fontSize: 17,
        color: '#504D4D'
    },

    favIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#FFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20, 
          //shadow IOS
          shadowColor: "#CCC",
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          //shadow android
          elevation: 2,
        
    },

    titleCampanhas: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#504D4D',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
    },

})
