import React, { Component } from 'react';
import { Container, Text,FormControl,Flex, Center,Heading } from 'native-base';
import { ScrollView,View} from 'react-native';
import { Button, Avatar,Card,Icon  } from 'react-native-elements'
import styles from "../styles/style"

const HomeScreen=()=>{
return(
    <ScrollView >
    <View style={styles.container} >
    <Card containerStyle={{width:'100%' }}>
    <Flex direction="row" mb="2.5" mt="1.5" _text={{
          color: "coolGray.800"
        }}>
        <Center size="16" >
        <Avatar
            size={64}
            rounded
            icon={{ name: 'person' }}
            containerStyle={{ backgroundColor: '#00a7f7' }}
          />
        </Center>
        <Center size="16"  width={{base: 200,lg: '80%'}} >
              <Text>James Nyanga {"\n"} +254721531634 {"\n"} you@gmail.com</Text>
            </Center>
             </Flex>
            <Card.Divider />
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Favorite Destination</Card.Title>
          </Card>
          <Card containerStyle={{width:'100%' }}>
            <Card.Title>Language</Card.Title>
          </Card>
      
    </View>
    </ScrollView>
);

}
export default HomeScreen;