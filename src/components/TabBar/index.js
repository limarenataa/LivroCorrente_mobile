import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, InlineIcon } from '@iconify/react';


//Icons
import home20Regular from '@iconify/icons-fluent/home-20-regular';
import heartLine from '@iconify/icons-clarity/heart-line';
import librarySolid from '@iconify/icons-clarity/library-solid';
import mapMarkerLine from '@iconify/icons-clarity/map-marker-line';



export default function TabBar ({state, navigation}){
  
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.tabArea}>
            {/* Quando clicar em um item, executa a função goTo que recebe como parâmetro o nome da tela e navega para a mesma. */}
            <TouchableOpacity onPress={()=>goTo('Home')} style={styles.tabItem}>
                                                            {/* Condição. confere o estado. se for correspondente ao número do index, a opacidade fica 1, se for false, 0.5 */}
                <Icon icon={home20Regular} style={{opacity: state.index === 0 ? 1 : 0.5, color: '#686868', fontSize: '40px'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('Favoritos')} style={styles.tabItem}>
                <Icon icon={heartLine} style={{opacity: state.index === 1 ? 1 : 0.5, color: '#686868', fontSize: '40px'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('Bibliotecas')} style={styles.tabItem}>
                <Icon icon={librarySolid} style={{opacity: state.index === 2 ? 1 : 0.5, color: '#686868', fontSize: '40px'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('PontosColeta')} style={styles.tabItem}>
                <Icon icon={mapMarkerLine} style={{opacity: state.index === 3 ? 1 : 0.5, color: '#686868', fontSize: '40px'}} />
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    tabArea: {
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },

    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})