const React = require("react-native");
const { StyleSheet } = React;
const styles=StyleSheet.create({
    container:{
      flex: 1,
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemview:{
      marginTop:20,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      width:'100%',
      height:'100%',
    },
    carditem:{
      marginTop:'60%',
    },
    text:{
      marginTop: '5%',
      marginBottom:'2%',
      fontSize:17, 
      lineHeight: 20,
      fontWeight:"bold",
      alignSelf:'center'
  
    },
    loginbutton:{
      marginTop:'5%',
      alignSelf:'center',
      width:350,
      backgroundColor:'#3897f1'
    },
    loginFormTextInput: {
      height: 43,
      fontSize: 14,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#eaeaea",
      backgroundColor: "#fafafa",
      paddingLeft: 10,
      margin: 5,
      marginBottom: 5,
    },
    logoavatar: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: "center",
      },
      row:{
        flexDirection: "row",
        flexWrap: "wrap",
        flex:1,
      },
      ordview:{
        flex: 1,
        width:'100%',
        marginTop:'10%',
        height:'100%',
        
      }
  
  
  });
  export default styles;
  