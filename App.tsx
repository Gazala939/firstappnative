import {Image, StyleSheet, Text, View } from 'react-native';


function App() {
    const MyName = () =>
        <Text> My Name is Gazala</Text>
  return (
   
    <View style = {styles.container} >
        <MyName />
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

