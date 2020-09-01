import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import * as Font from 'expo-font';
import {AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
  });
};

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false);
  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=> setFontLoaded(true)}
      />
    )
  }

  return (
    <MealsNavigator/>
  );
}
registerRootComponent(App);