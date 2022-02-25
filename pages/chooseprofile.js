import React, { Component } from 'react';
import { Container, Text,FormControl,Flex, Center,Heading } from 'native-base';
import { ScrollView,View} from 'react-native';
import { Button, Avatar,Card,Icon  } from 'react-native-elements'
import styles from "../styles/style"

const ChooseProfile=({navigation})=>{
return(
    <ScrollView >
    <View style={styles.container} >
        <Text style={{fontSize:20,fontWeight:'bold'}}>Choose how you would like to earn with Unihub</Text>
          <Card containerStyle={{width:'100%',backgroundColor:'#000000' }}>
            <Card.Title><Text style={{color:'#ffffff'}}>MotorBike|Unihub Boda {"\n\n"} You are atleast 18 years old and have a boda boda.</Text> </Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Unihub car driver</Card.Title>
            <Text>I want to drive my own car on unihub and may be hire drivers and add more cars later.Please not that
                we are currently not accepting vehicles to operate on unihub.
            </Text>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>DeliverUnihub eats</Card.Title>
            <Text>You are above 18 years and you have a scooter. boda boda or motorcycle.</Text>
          </Card>
          <Card containerStyle={{marginTop:'22%',width:'100%'}}>
          <Button primary rounded iconRight  buttonStyle={styles.loginbutton} onPress={()=>navigation.navigate('Documents')}
            title="Continue">
            </Button>
          </Card>
      
    </View>
    </ScrollView>
);

}
export default ChooseProfile;