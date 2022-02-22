
import React, { Component } from 'react';
import { Container, Text,FormControl } from 'native-base';
import { ImageBackground ,ScrollView,TextInput,View} from 'react-native';
import { Button, Avatar,Icon  } from 'react-native-elements'
import styles from "../styles/style"


const Login =({navigation})=>{
 
  return(
     <View style={styles.container} >
          <ImageBackground source={require('../images/bg.jpg')} style={styles.image}>
          <ScrollView>
          <View  style={styles.carditem}>
        <FormControl >
          <Avatar
            size={90}
            rounded  
            icon={{ name: 'user', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#3897f1',alignSelf:'center',marginBottom:'2%' }}
          />
          <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
          leftIcon={{ type: 'font-awesome', name: 'comment' }}
          />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
            <Button rounded iconLeft onPress={()=>navigation.navigate('Dashboard')} buttonStyle={styles.loginbutton} title="Login" >
              </Button>
          
              <Text primary  iconLeft style={styles.text}>
              Don't have an account? 
              </Text>
            <Button primary rounded iconRight  onPress={()=>navigation.navigate('Home')} buttonStyle={styles.loginbutton}
            title="Create an Account">
            </Button>
            </FormControl>
    </View>     
    </ScrollView>  
</ImageBackground>
</View>

     
    );
}

export default Login;


