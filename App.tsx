import {Image, StyleSheet, Text, View } from 'react-native';


function App() {
  return (
   
    <View style = {styles.container} >
        <View style = {styles.header}>
            <Text> Header </Text>
        </View>
        <View style = {styles.body}>
            <Text> Main Content</Text>
        </View>
        <View style = {styles.fotter}>
            <Text> Footer Area </Text>
        </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor: '#ffffff',
    },

    header:{
        flex:1,
        backgroundColor:'lightgreen',
        justifyContent: 'center',
    },

    body:{
        flex : 3,
        backgroundColor:'lightblue',
        justifyContent: 'center',
    },

    fotter:{
        flex :1,
        backgroundColor:"grey",
        justifyContent:"center",
    }



})
export default App;

