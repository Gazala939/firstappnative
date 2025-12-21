import {Button ,StyleSheet, Text, View,TextInput } from 'react-native';
import {useState} from 'react'



function App() {
    const [name, setName] = useState(" ");

   return(
    <View style = {styles.container} >
        <TextInput placeholder = 'Enter Name'  onChangeText = {setName}> </TextInput>
        <Text style ={{ fontSize:40 }}>
             Your Name : {name}
        </Text>
        
        
        
        
    </View>
    
);
}

const styles = StyleSheet.create({
   
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ffffff',
    },


})
export default App;

