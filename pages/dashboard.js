import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Avatar,Icon  } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen  from '../dashboard/home';
import SettingsScreen from '../dashboard/settings';
import Aboutus from '../dashboard/aboutus';
import Payment from '../dashboard/payment';


const Tab = createBottomTabNavigator();

export default function App({navigation,route}) {
  const {username,phone,useremail}=route.params;
  return (
  
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'list' : 'list',color='#467fd0';
          }
          else if (route.name === 'Payment') {
            iconName = focused ? 'money' : 'money',color='#7c69ef';
          }
          else if (route.name === 'RideHistory') {
            iconName = focused ? 'motorcycle' : 'motorcycle',color='#df4759';
          }
          else if (route.name === 'About us') {
            iconName = focused ? 'info' : 'info',color=	'#42ba96';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} initialParams={{username,phone,useremail}} />
        <Tab.Screen name="Payment" component={Payment} options={{headerShown: false}} />
        <Tab.Screen name="RideHistory" component={Aboutus} options={{headerShown: false}} />
        <Tab.Screen name="About us" component={Aboutus} options={{headerShown: false}} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
      </Tab.Navigator>
    
  );
}