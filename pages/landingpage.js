
import React, { Component } from 'react';
import { Text } from 'native-base';
import { ImageBackground ,ScrollView,TextInput,View} from 'react-native';
import { Button } from 'react-native-elements'
import styles from "../styles/style"

const LandingPage=({navigation})=>{
    return (

        <View style={styles.container}>
            
             <View style={styles.landingheader}>
             <ImageBackground source={require('../images/delivery.png')} style={styles.image}>
             </ImageBackground>
            </View>
            <View style={styles.landingfooter}>
             <Text style={{fontWeight:'bold',fontSize:20,marginTop:'10%',color:'#161c2d'}}>Drive. Deliver.Earn with Unihub</Text>
             <View style={styles.row}>
             <Button title='Sign in' buttonStyle={{width:200,padding:20,backgroundColor:'#1b2a4e'}} block
             onPress={()=>navigation.navigate('Login')} ></Button>
             <Button title='Register' buttonStyle={{width:200,padding:20,backgroundColor:'#69d2f1'}}
             onPress={()=>navigation.navigate('Register')}></Button>
             </View>
            
            </View>
            
        </View>
    );
}
export default LandingPage;