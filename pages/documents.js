import React, { Component } from 'react';
import { Container, Text,FormControl,Flex, Center,Heading } from 'native-base';
import { ScrollView,View} from 'react-native';
import { Button, Avatar,Card,Icon  } from 'react-native-elements'
import styles from "../styles/style"

const Documentsj=({navigation})=>{
return(
    <ScrollView >
    <View style={styles.container} >
        <Text style={{fontSize:20,fontWeight:'bold'}}>Welcome [Name]</Text>
        <Text>Required Steps {"\n"} Here is what you need to do to set up your account</Text>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title><Text >National ID(next) </Text> </Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Driver Photo</Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Regular Driving License</Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Background Check Result</Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>PSV car insurance</Card.Title>
          </Card>
          <Card containerStyle={{marginTop:'10%',width:'100%'}}>
          <Button primary rounded iconRight  buttonStyle={styles.loginbutton} onPress={()=>navigation.navigate('Login')}
            title="Continue">
            </Button>
          </Card>
      
    </View>
    </ScrollView>
);

}
export default Documentsj;