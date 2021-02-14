import React, { useContext } from 'react';
import { StyleSheet} from 'styled-components/native';
import { Icon, InlineIcon } from '@iconify/react';

import { UserContext } from '../contexts/UserContext';


import home20Regular from '@iconify/icons-fluent/home-20-regular';
import heartLine from '@iconify/icons-clarity/heart-line';
import librarySolid from '@iconify/icons-clarity/library-solid';
import mapMarkerLine from '@iconify/icons-clarity/map-marker-line';


const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state:user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <Icon icon={home20Regular} style={{color: '#686868', fontSize: '42px'}} />
            </TabItem>
            <TabItem onPress={()=>goTo('Favoritos')}>
                <Icon icon={heartLine} style={{color: '#686868', fontSize: '40px'}} />
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Bibliotecas')}>
                <Icon icon={librarySolid} style={{color: '#686868', fontSize: '37px'}} />
            </TabItemCenter>
            <TabItem onPress={()=>goTo('PontosColeta')}>
                <Icon icon={mapMarkerLine} style={{color: '#686868', fontSize: '37px'}} /> 
            </TabItem>
        </TabArea>
    );
}