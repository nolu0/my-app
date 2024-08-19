import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import{ StyleSheet, Text, View, Button, TouchableHighlight, TextInput} from'react-native';
import{ RootStackParamList} from'./types';
import{ NativeStackScreenProps} from'@react-navigation/native-stack';
import{ useState} from'react';


/************ Main App component where all the screens are being called to run in the app *****************/
 



export default function App() {
  const Stack=createNativeStackNavigator<RootStackParamList>();
  return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screenname='Screen1'component={screen1}></Stack.Screen>
    <Stack.Screenname='Screen2' component={screen2}></Stack.Screen>
  </Stack.Navigator>
   </NavigationContainer>

  );
}
<p>Student Number: ST10457711 Name: Noluthando Surname:Nsibande</p>

/********************************************************************************
 
***********Start of Screen 1 definition************
/typeScreen1Prop=NativeStackScreenProps<RootStackParamList, 'Screen1'>; 
constScreen1:React.FC<Screen1Prop> =(props) =>{ //props allows you to pass data from one component to another
  const[name, setName] =useState<string>(''); //name variable holds the user input for the name
  return(
    
    <Viewstyle={styles.container}>
    <Viewstyle={styles.container2}>
    <Textstyle={styles.text1}>Enter your name:</Text>
    <TextInputstyle=
    {styles.input}
    placeholder='Enter name'
    value={name}
    onChangeText={setName}>
    </TextInput>
    <TouchableHighlightstyle=
    {styles.button}
    //below, we are passing the user input for name to screen2 to show the user a personalised greeting!onPress={() =>props.navigation.navigate('Screen2', {name})}><Textstyle={styles.button}>Save Name</Text>
    </TouchableHighlight>
    </View>
    </View>
    );
  };

      /***********************End of Screen 1 definition ***************
       
       
***********Start of Screen 2 definition************

Welcome to Screen 2 (Noluthando Nsibande)
type screen2Prop = NativeStacksScreenProps<Rootstackparamlist, 'Screen 2'>
const screen2: React.FC<screen2prop> =(props) => {
  const{name} = props.route.params; //we receive the name premeter from the previous screen  through the props.route function
  return(

    <view style={styles.container3}
    <view style={styles,container4}
    <text style={styles.text2}> hi, {name} </Text>
    </view>
    </view>
    )
  }
***********End of Screen 2 definition************

conststyles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  text1:{
    textAlign:'auto',
    fontSize:30,
    fontWeight:"bold",
    color:"green"
  },
  text2:{
    textAlign:'auto',
    fontSize:30,

fontWeight:"bold",
color:"green"
},
container2:{
  marginTop:400,
  width:500,
  height:400,
  backgroundColor:'lightgreen',
  alignItems:'center',
  justifyContent:'center',
},
container3:{
  flex:1,
  backgroundColor:'green',
  alignItems:'center',
  justifyContent:'flex-start'
},
container4:{
  marginTop:300,
  width:500,
  height:400,
  backgroundColor:'lightgreen',
  alignItems:'center',
  justifyContent:'center',
},
button:{
  width:150,
  height:50,
  fontSize:22,
  color:"white",
  fontWeight:"bold",

  backgroundColor:"black",
  textAlign:"center",
  justifyContent:"center",
  alignItems:"center",
  marginTop:50,
   borderRadius:10
  }, 
  input:{
    width:400,
    height:40,
    backgroundColor:'green',
    paddingHorizontal:10,
    marginVertical:1,
    borderRadius:5,
    color:'lightgreen',
    marginTop:20,
    fontSize:20,
  },
});








