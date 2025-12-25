import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';

function App() {
 

  return (
    <View style = {styles.content}>
        <View style = { styles.Block}>
            <Text> First Block</Text>
        </View>

        <View style = { styles.Block}>
            <Text> Second Block</Text>
        </View>

        <View style = { styles.Block}>
            <Text> Third Block</Text>
        </View>
        
          
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',  
         // space between cards (RN 0.71+)
  },

  Block :{
    padding: 16,
    margin:12,
    borderWidth: 1,
    borderRadius: 8,

  }


  


});
export default App;