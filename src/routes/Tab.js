
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Import views
import Home from '../views/Home';
import Favoritos from '../views/Favoritos';
import Bibliotecas from '../views/Bibliotecas';
import PontosColeta from '../views/PontosColeta';


const routeTab = createBottomTabNavigator()

const Tab = () => {
    return (
        <routeTab.Navigator initialRouteName='Home' tabBarOptions={{
            activeTintColor:'red',
            inactiveTintColor: 'blue',
            labelStyle: {fontSize: 20}
        }}>
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="Favoritos" component={Favoritos}/>
            <routeTab.Screen name="Bibliotecas" component={Bibliotecas}/>
            <routeTab.Screen name="PontosColeta" component={PontosColeta}/>   
        </routeTab.Navigator>
    )
}

export default Tab;