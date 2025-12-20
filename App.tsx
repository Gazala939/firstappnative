import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}> 👋🏻 Welcome</Text>
      <Text style = {styles.name}> Name: Gazala Jamadar</Text>
      <Text style = {styles.course}>Course: React Native </Text>

    </View>
  );
}

const styles = StyleSheet.create({
   
    container:{
        flex:1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'blue'
    },

    name:{
        fontSize: 20,
        color:'Black',
        marginTop:10,
    },

    course:{
        color:'green',
        marginTop:10,
        fontSize:18,
    },


})
export default App;

