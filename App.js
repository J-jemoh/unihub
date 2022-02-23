
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginn from "./pages/login"
import Homme from "./pages/home"
import Dashboard from "./pages/dashboard"
import Register from './pages/register';

const Stack = createNativeStackNavigator();
const App =()=>{
  return( 
    <NativeBaseProvider >
     <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="Login" component={Loginn} options={{headerShown: false}} />
     <Stack.Screen name="Home" component={Homme} />
     <Stack.Screen name="Dashboard" component={Dashboard} />
     <Stack.Screen name ="Register" component={Register} options={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>
   </NativeBaseProvider>
    );
};
export default App;





