
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBar from '../components/TabBar';

//Import views
import Home from '../views/Home';
import Favoritos from '../views/Favoritos';
import Bibliotecas from '../views/Bibliotecas';
import PontosColeta from '../views/PontosColeta';
import Biblioteca from '../views/Biblioteca';



const routeTab = createBottomTabNavigator()

const Tab = () => {
    return (
        <routeTab.Navigator tabBar={props => <TabBar {...props} />}>
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="Favoritos" component={Favoritos}/>
            <routeTab.Screen name="Bibliotecas" component={Bibliotecas}/>
            <routeTab.Screen name="PontosColeta" component={PontosColeta}/> 
            <routeTab.Screen name="Biblioteca" component={Biblioteca}/> 
        </routeTab.Navigator>
    )
}

export default Tab;