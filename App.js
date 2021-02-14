// import React from 'react';

// import Routes from './src/routes/index'

// export default function App() {
//   return (
//     <Routes/>
//   );
// }

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