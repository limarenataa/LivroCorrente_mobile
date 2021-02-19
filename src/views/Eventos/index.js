import React from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity, Image, Text, FlatList}  from 'react-native'

//Assets/img
import Banner from '../../../assets/abralivro.png';

//Components
import CardEvents from '../../components/CardEvents';

//Icons
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';  

const dadosEvents = [

    {
        id: Math.random(),
        evento: "Oficina Literária",
        descricao: "Improvisação artística",
        local: "Pça Vale do Sol",
        saveTheDate: "22/Mar/2021"
    },

    {
        id: Math.random(),
        evento: "Festival Conto de Histórias",
        descricao: "Contos e Fantasia",
        local: "Av. Cortês, 15 ",
        saveTheDate: "29/Mar/2021"
    },

    {
        id: Math.random(),
        evento: "Bienal do Livro",
        descricao: "Exposição e Cultura",
        local: "Sulamérica, Cidade Nova",
        saveTheDate: "15/Abr/2021"
    },
   
  ]


export default function Eventos (){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroller}>

                <View style={styles.pageHeader}>
                    <TouchableOpacity style={styles.headerMenu}>
                        <Entypo name="dots-three-horizontal" size={24} color="#F8F5F5" />
                    </TouchableOpacity>
                </View>

                <View style={styles.pageBody}>
                    <View style={styles.infoEventArea}>
                        <Image style={styles.logo} source={Banner}/>
                        <View style={styles.infoEvent}>
                            <Text style={styles.saveTheDate}>Save The Date</Text>
                            <Text style={styles.infoDate}>Eventos literários</Text>
                        </View>
                        <TouchableOpacity style={styles.favIcon}>
                            <MaterialIcons name="event-available" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.titlePage}>Confira os eventos próximos </Text>

                        <FlatList
                            data={dadosEvents}
                            keyExtractor={(item) => `${item.id}`}     
                            renderItem={({item}) => (
                    
                                <CardEvents 
                                            evento={item.evento} 
                                            descricao={item.descricao} 
                                            local={item.local}
                                            saveTheDate={item.saveTheDate}
                                />
                            
                        )}
                        />
                    </View>
                </View>

            </ScrollView>
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
        backgroundColor: '#987284',
       
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

    infoEventArea: {
        flexDirection: 'row', 
        marginTop: -30,
    },

    infoEvent: {
        flex: 1, 
        justifyContent: 'flex-end'
        
    },

    logo: {
        height:110,
        width: 110,
        borderRadius: 20,
        marginLeft: 30,
        marginRight: 10,
        borderWidth: 4, 
        borderColor: '#FFFCFC',
        backgroundColor: '#F8F5F5'
    },

    saveTheDate:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#504D4D'
    },

    infoDate: {
        fontSize: 16,
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

    titlePage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#504D4D',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
    },
    
    cardEvent: {
        flex: 3,
    },
    
    banner: {
        widht: '100%',  
    }

})
