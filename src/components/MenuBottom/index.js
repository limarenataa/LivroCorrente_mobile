import React from 'react'
import {  Text } from 'react-native'

import { Icon, InlineIcon } from '@iconify/react';
import home20Regular from '@iconify/icons-fluent/home-20-regular';
import heartLine from '@iconify/icons-clarity/heart-line';
import librarySolid from '@iconify/icons-clarity/library-solid';
import mapMarkerLine from '@iconify/icons-clarity/map-marker-line';

import { Container } from './styles';

const MenuBottom = () => {
    return (
        <Container>

           <Icon icon={home20Regular} style={{color: '#686868', fontSize: '42px'}} />
           <Icon icon={heartLine} style={{color: '#686868', fontSize: '40px'}} />
           <Icon icon={librarySolid} style={{color: '#686868', fontSize: '37px'}} />
           <Icon icon={mapMarkerLine} style={{color: '#686868', fontSize: '37px'}} />   
        </Container>
    )
}

export default MenuBottom;
