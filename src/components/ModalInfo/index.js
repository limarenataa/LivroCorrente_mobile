import React from 'react';
import {View,  Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'


//Icons
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function ModalInfo ({show, setShow})  {
    
    const navigation = useNavigation();

    const handleBtnCloseModal = () => {
        setShow(false); //Faz com que a props visible fique false e o modal feche
    }


    return (
        <Modal
        //props:
            transparent={true}
            visible={show} //true ou false. faz com que o modal apareça ou não.
            animationType="slide" //tipo de animação
        >
            <View style={styles.modalArea}>
                <View style={styles.modalBody}>
                    <TouchableOpacity onPress={() => handleBtnCloseModal()} style={styles.btnCloseModal}>
                        <MaterialIcons name="expand-more" size={24} color="black" />
                    </TouchableOpacity>

                   <View>
                        <Text style={styles.mainTitle}>Obaa! Ficamos felizes pelo seu interesse em ajudar :D</Text>
                        <Text style={styles.mainSubTitle}>Dá uma olhada nas formas de doação:</Text>
                   </View>
                   
                    <View style={styles.contaienerInfo}>
                        <View style={styles.opcaoEnvio}>
                            <MaterialIcons name="local-shipping" size={30} color="#987284" />
                            <Text style={styles.envioTitle}>Envio direto</Text>
                        </View>
                        <Text>É possível o envio direto para a biblioteca pelos Correios. Endereços disponíveis no perfil da biblioteca no site da RNBC.</Text>
                    </View>

                    <View style={styles.contaienerInfo}>
                        <View style={styles.opcaoEnvio}>
                            <FontAwesome5 name="people-carry" size={24} color="#987284" />
                            <Text style={styles.envioTitle}>Encontre um voluntário</Text>
                        </View>
                        <Text>Encontre um dos nossos voluntários no bairro mais próximo a você. Confira a página "voluntários"!</Text>
                    </View>

                    <View style={styles.contaienerInfo}>
                        <View style={styles.opcaoEnvio}>
                            <FontAwesome5 name="hands-helping" size={24} color="#987284" />
                            <Text style={styles.envioTitle}>Compra em site parceiro:</Text>
                        </View>
                        <Text>Contamos com parceiros que acreditam na nossa causa e oferecem as melhores ofertas para nossas campanhas. Confira a listagem na página "Parceiros"!</Text>
                    </View>
                    

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({


    modalArea:{
        flex: 1, //pega toda a tela
        backgroundColor: "rgba(0, 0, 0, 0.5)", //preto com 50% de transparência
        justifyContent: 'flex-end',
    },

    modalBody:{
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 500,
        paddingTop: 10,
        paddingBottom: 40,
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'space-around'
    },

    mainTitle: {
        fontSize:18,
        marginBottom: 5
    },

    mainSubTitle: {
        fontSize:16,
        marginBottom: 10
    },

    contaienerInfo: {
        marginBottom: 10,
    },

    opcaoEnvio: {
        
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,

    },

    envioTitle: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#987284'
    },

 
})

