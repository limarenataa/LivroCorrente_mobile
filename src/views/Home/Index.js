import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Icon } from '@iconify/react';
import searchLine from '@iconify/icons-clarity/search-line';
import barsLine from '@iconify/icons-clarity/bars-line';

//Assets/img
import Logo from '../../../assets/logo.png';


//Components
import CardCampanha from '../../components/CardCampanha';

//Simulando Banco de Dados
const dadosProdutos = [

    {
        id: Math.random(),
        titulo_pedido: "O pequeno príncipe",
        numeroExemplar_pedido: "2",
        genero_pedido: "Fábula",
        nome_biblioteca: "Ciranda de Tarituba"
    },

    {
        id: Math.random(),
        titulo_pedido: "O pequeno príncipe",
        numeroExemplar_pedido: "2",
        genero_pedido: "Fábula",
        nome_biblioteca: "Ciranda de Tarituba"
    },

    {
        id: Math.random(),
        titulo_pedido: "O pequeno príncipe",
        numeroExemplar_pedido: "2",
        genero_pedido: "Fábula",
        nome_biblioteca: "Ciranda de Tarituba"
    },
  ]

function Home (){
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scroller}>

                <View style={styles.headerArea}>
                    <Image style={styles.headerLogo} source={Logo} />
                    <TouchableOpacity>
                        <Icon icon={barsLine} style={{color: '#686868', fontSize: '30px'}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainArea}>
                    <Text style={styles.mainTitle}>Como eu posso ajudar?</Text>
                    <Text style={styles.mainSubTitle}>Doe um livro a uma biblioteca comunitária!</Text>
                </View>

                <View style={styles.searchArea}>
                    <TextInput style={styles.searchInput} placeholder="Pesquisar campanha"/>
                    <TouchableOpacity>
                        <Icon icon={searchLine} style={{color: '#686868', fontSize: '20px'}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCampanha}>
                {/* FlatList -  Parece o map do React */}
                    <FlatList
                        data={dadosProdutos}
                        keyExtractor={(item) => `${item.id}`}    
                        //Para cada usuário, cria um componente User para renderizar o usuário    
                        renderItem={({item}) => (
                        <CardCampanha 
                                    capa_pedido={item.capa_pedido} 
                                    titulo_pedido={item.titulo_pedido} 
                                    numeroExemplar_pedido={item.numeroExemplar_pedido}
                                    genero_pedido={item.genero_pedido}
                                    nome_biblioteca={item.nome_biblioteca}
                        />
                    )}
                    />
                </View>

            </ScrollView>

        </View>
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
       padding: 20,
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
    }

})