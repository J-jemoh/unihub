
import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import Loginn from "./pages/login"
import Homme from "./pages/home"
import Dashboard from "./pages/dashboard"
import Register from './pages/register';
import LandingPage from './pages/landingpage';
import ChooseProfile from './pages/chooseprofile';
import Documents from './pages/documents';

const Stack = createNativeStackNavigator();
const App =()=>{
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return( 
    <NativeBaseProvider >
     <NavigationContainer>
     <Stack.Navigator initialRouteName='Landing'>
     <Stack.Screen name="Landing" component={LandingPage} options={{headerShown: false}} />
     <Stack.Screen name="Login" component={Loginn} options={{headerShown: false}} />
     <Stack.Screen name="Home" component={Homme} />
     <Stack.Screen name="Dashboard" component={Dashboard} />
     <Stack.Screen name ="Register" component={Register} options={{headerShown: false}} />
     <Stack.Screen name ="Profile" component={ChooseProfile}  />
     <Stack.Screen name ="Documents" component={Documents}  />
    </Stack.Navigator>
   </NavigationContainer>
   </NativeBaseProvider>
    );
};
export default App;





