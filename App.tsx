import {Image, StyleSheet, Text, View } from 'react-native';


function App() {
  return (
   
    <View style = {styles.container} >
        <Image source ={{uri :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGv11jUUiXBNK0ChNHHZSkarxMOcyM1htxZBRFHLPdGVf0WHlfpEYEgA&s"}}
        style = {styles.image}
        />
        <Text style = {styles.name}> Gazala Jamadar </Text>
        <Text style = {styles.role}> Full stack Developer</Text>
        <Text style = {styles.email}> 📧 gazala@123gmail.com </Text>
        <Text style = {styles.contact}>📞 8088912367</Text>


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

    name:{
        fontSize: 24,
        fontWeight:'bold',
    },

    role:{
        fontSize:18,
        color:'grey',
        marginBottom: 10,
    },

    contact:{
        fontSize:16
    },

    image: {
        width: 120,
        height:120,
        borderRadius:60,
        marginBottom: 15,
    }


})
export default App;

