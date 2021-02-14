
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Preload from '../views/Preload'
import Login from '../views/Login'
import Tab from '../routes/Tab'


const routeStack = createStackNavigator()

const Stack = () => {
    return (
        <routeStack.Navigator 
            initialRouteName="Preload"  //determina a tela inicial
            screenOptions={{
                    headerShown: false //ocultar cabeçalho
                }}
        >

            <routeStack.Screen name="Preload" component={Preload}/>
            <routeStack.Screen name="Login" component={Login}/>
            <routeStack.Screen name="Tab" component={Tab}/>
           
        </routeStack.Navigator>
    )
}

export default Stack;