import {Image, StyleSheet, Text, View } from 'react-native';


function App() {
    const MyName = (props: any) =>
        <Text> My Name is {props.name}</Text>
  return (
   
    <View style = {styles.container} >
        <MyName name = "React Native" />
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

