
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './src/routes/Stack';

export default function App (){
  return(
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}