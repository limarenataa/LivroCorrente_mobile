import React, {useState} from 'react'
import {  View, Text, StyleSheet , TouchableOpacity, ImageBackground} from 'react-native'
import {NavigationHelpersContext, useNavigation} from '@react-navigation/native';


//Assets/img
import BackgroundLogin from '../../../assets/backgroundLogin.png';

//Components
import InputLogin from '../../components/InputLogin';

//Icon
import { Entypo } from '@expo/vector-icons';

const Lock = <Entypo name="lock" size={20} color="#3A3939" />;

const Login = () => {

    const navigation = useNavigation();
    
    const goToHome = (screen) => {
        //verificação campos input
       
        if(login != '' && senha != ''){
            navigation.navigate(screen)
       }else{
           alert("Por favor, preencha todos os campos!")
        }
    }

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
  
    return (
        <ImageBackground source={BackgroundLogin} style={styles.container}>

            <View style={styles.containerBody}>

                {/* Title */}
                <View style={styles.textContainer}>
                    <Text style={styles.textBackground}>Seja bem-vindx!</Text>
                    <Text style={styles.subTextBackground}>Apoie uma biblioteca comunitária!</Text>
                </View>

                {/* Inputs */}
             
                    <View style={styles.inputArea}>
                        {/* Login */}
                        <InputLogin 
                            placeholder={"Digite seu login"}
                            value={login}
                            onChangeText={text => setLogin(text)}
                        />

                        {/* Senha */}
                        <InputLogin
                            placeholder={"Digite sua senha"} 
                            icon={Lock}
                            value={senha}
                            onChangeText={text => setSenha(text)}
                            password={true}
                        />

                        <TouchableOpacity style={styles.btnLogin} onPress={() => goToHome('Tab') }>
                            <Text style={styles.btnLoginText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                {/* Button */}
                    <View style={styles.cadastroContainer}>
                        <Text style={styles.cadastroText}>Ainda não possui uma conta?</Text>
                        <TouchableOpacity >
                            <Text style={styles.cadastroBtnText}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>

               
            </View>
            

        </ImageBackground>
    )
}

export default Login;

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#FFFCFC',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    containerBody: {
        width:'80%',
    },

    textBackground: {
        color: '#75C9DC',
        fontSize: 20,
    },

    subTextBackground: {
        color: '#fff',
        fontSize: 30,
    },

    textContainer: {
        marginBottom: 110,
    },

    btnLogin: {
        width: 150,
        height: 40,
        backgroundColor: '#75C9DC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
         //shadow IOS
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 1,
         },
         shadowOpacity: 0.22,
         shadowRadius: 2.22,
          //shadow Android
         elevation: 3,
    },

    btnLoginText: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase'

    },

    cadastroContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
    },

    cadastroText:{
        color: '#fff',
    },

    cadastroBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5
    }

})