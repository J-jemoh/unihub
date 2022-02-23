
import React, { Component } from 'react';
import { Container, Text,FormControl } from 'native-base';
import { ImageBackground ,ScrollView,TextInput,View} from 'react-native';
import { Button, Avatar,Icon,Card } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';
import styles from "../styles/style"

const Register =()=>{
    const [value, setValue] = React.useState('1');
    return(
        <View style={styles.ordview}>
            
                <Text style={{fontWeight:'normal',marginLeft:'2%',marginBottom:'3%'}}>Lets Start by creating your account</Text>
          
            <ScrollView>
               
                <FormControl>
                <TextInput placeholder="Fullname" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
                leftIcon={{ type: 'font-awesome', name: 'comment' }}/>
                <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
                leftIcon={{ type: 'font-awesome', name: 'comment' }}/>
                <TextInput placeholder="Phonenumber" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
                leftIcon={{ type: 'font-awesome', name: 'comment' }}/>
                 <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                 <RadioButton.Item label="Buyer" value="1" />
                 <RadioButton.Item label="Seller" value="2" />
                 <RadioButton.Item label="Delivery" value="3" />
                </RadioButton.Group>
                <TextInput placeholder="password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
                leftIcon={{ type: 'font-awesome', name: 'comment' }}/>
                <TextInput placeholder="confirm-pssword" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
                leftIcon={{ type: 'font-awesome', name: 'comment' }}/>
                <TextInput placeholder="Invitation code" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
                leftIcon={{ type: 'font-awesome', name: 'comment' }}/>
                <Text style={{marginLeft:'2%',marginTop:'3%'}}>By Proceeding, I agree to Unihub Terms and Conditions and 
                acknowledge that i have read the privacy policy.</Text>
                <Text style={{marginLeft:'2%',marginTop:'3%'}}>I also agree that Unihub or its reresentatives may contact me bu Email
                ,phone or SMS at the email address or number I provide including for marketing purpose.</Text>
                <Button primary rounded iconRight  onPress={()=>navigation.navigate('Register')} buttonStyle={styles.loginbutton}
                title="Continue">
            </Button>
                </FormControl>
                
            </ScrollView>
        </View>
        
    );
}

export default Register;