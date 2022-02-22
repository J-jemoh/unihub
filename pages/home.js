import React, { Component,useState } from 'react';
// import { Container, Header,Content,Card,CardItem,Body,Icon, Button,Form, Input, Text,Label  } from 'native-base';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { BottomMenu,Item } from "react-native-bottom-menu";
import { StyleSheet,View,ScrollView,Image  } from 'react-native';
import { Text, Card, Button, Icon ,TabView,Tab } from 'react-native-elements';

const Homepage =({navigation})=>{
	const [isActive, setActive] = useState("home");
	const [index, setIndex] = React.useState(0);
	return(
  <ScrollView>
   <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Profile"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Barriers"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Recommendation"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%' }}>
          <ScrollView>
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title h4>Basic Information</Card.Title>
            <Card.Divider />
            <Text style={styles.fonts} >
              Study ID: KCH-0001-001
            </Text>
            <Text style={styles.fonts} >
              UPN: 12345-67534
            </Text>
            <Text style={styles.fonts} >
              Gender: F
            </Text>
            <Text style={styles.fonts} >
              Age: 20 Yrs
            </Text>
            <Text style={styles.fonts}>Facility: KCH</Text>
          </Card>
          <Card>
            <Card.Title h4>Other info</Card.Title>
            <Card.Divider />
            <Text style={styles.fonts} >
              Date enrolled: 2008-05-12
            </Text>
            <Text style={styles.fonts} >
              Recent VL: 1000copies
            </Text>
            <Text style={styles.fonts} >
              Location: Ahero
            </Text>
            <Text style={styles.fonts} >
              LTFU: Yes
            </Text>
            <Text style={styles.fonts}>Facility: KCH</Text>
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW MORE"
            />
          </Card>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Text h4>This is Barriers Section</Text>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Text h4>This is Recommendations Section</Text>
        </TabView.Item>
      </TabView>
    </>
	
    </ScrollView>


		);
	}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    flexWrap:'nowrap',
    
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Homepage;