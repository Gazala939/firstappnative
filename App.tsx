import React from 'react';
import {  StyleSheet, Text, View, } from 'react-native';

const Card = ({ children, style = {} }) =>(
    <View style = {[ 
        { padding:16,
          margin: 12,
          borderWidth: 1,
          borderRadius: 8 
        },style,
    ]}>
        {children}
    </View>
)
function App() {
  return (
    <View style = {styles.content}>
        <Card>
            <Text> First Block</Text>
        </Card>

        <Card style = {{ backgroundColor: 'red'}}>
            <Text> Second Block</Text>
        </Card>

        <Card>
            <Text> Third Block</Text>
        </Card>
        
          
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',  
         // space between cards (RN 0.71+)
  },

});
export default App;