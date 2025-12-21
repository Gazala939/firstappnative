import {StyleSheet, Text, View,TextInput } from 'react-native';
import { useEffect } from 'react'



function App() {
    useEffect(()=>{
        console.log("App loaded hi how are u")
    })

   return(
    <View style = {styles.container} >
       
        <Text style ={{ fontSize:40 }}>
            Check Console
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

