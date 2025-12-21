import {StyleSheet, Text, View } from 'react-native';




function App() {
   const names = ['Gazala' , 'Sara' , 'Zara']
   
   return(
    <View style = {styles.container} >
        {names.map((obj,index)=>{
            return(
            <Text style={{fontSize: 50}} key = {index}>{obj} </Text>
        )})}
      
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

