import React, { Component } from 'react';
import { Container, Text,FormControl,Flex, Center,Heading } from 'native-base';
import { ScrollView,View} from 'react-native';
import { Button, Avatar,Card,Icon  } from 'react-native-elements'
import styles from "../styles/style"

const Payment=()=>{
return(
    <ScrollView >
    <View style={styles.container} >
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Payment </Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Payment Methods</Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Set Up work profile</Card.Title>
          </Card>
      
    </View>
    </ScrollView>
);

}
export default Payment;