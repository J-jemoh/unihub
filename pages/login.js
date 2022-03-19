
import React, { Component,useState,useEffect } from 'react';
import { Container, Text,FormControl } from 'native-base';
import { ImageBackground ,ScrollView,TextInput,View} from 'react-native';
import { Button, Avatar,Icon  } from 'react-native-elements'
import styles from "../styles/style"


const Login =({navigation})=>{
const [isLoading, setLoading] = useState(true);
 const[email,setusername]=useState('')
 const[password,setpassword]=useState('')
 const[data,setData]=useState('');
//  
const getusername =async()=>{ 
  try{
   await fetch("https://3c06-41-90-66-34.ngrok.io/api/login",
    {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: email,
          password: password,
          
      },)
    })
    // .then(res => setusername(res))
    // .then(res => setpassword(res))
  
    .then((res)=>res.json())
    .then((json)=>{
      if(json.user.email){
        navigation.navigate('Dashboard',{username:json.user.name,
                                        phone:json.user.phonenumber,
                                        useremail:json.user.email
                                      })
        console.log(json)
      }
      else{
        console.error(json.error)
      }
    })
    .catch((e)=>{console.error(e)})
    
  }
  catch(e) {
    console.error(e);
  }   
}

 const checkTextinput=()=>{
   if(!email.trim()){
     alert('Please enter a username')
     return;
   }
   if(!password.trim()){
     alert('Please enter a password')
     return;
   }
   alert('Logged in successfully')
 }
 
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
          leftIcon={{ type: 'font-awesome', name: 'comment' }} onChangeText={(value)=>setusername(value)}
           />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}
          onChangeText={(value)=>setpassword(value)}
          />
            <Button rounded iconLeft onPress={getusername} buttonStyle={styles.loginbutton} title="Login" >
              </Button>
              {/* <Button rounded iconLeft onPress={()=>navigation.navigate('Dashboard')} buttonStyle={styles.loginbutton} title="Login" >
              </Button> */}
              <Text primary  iconLeft style={styles.text}>
              Don't have an account? 
              </Text>
            <Button primary rounded iconRight  onclick={()=>navigation.navigate('Register')} buttonStyle={styles.loginbutton}
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


