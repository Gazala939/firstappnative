// Array with object
import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

function App(){
    const names = ['Farha','Sara', 'Zara', 'Gazala'];
    return(
        <View style = {styles.container}>
            {names.map((obj , index)=>{
                return(
                    <Text style = {{fontSize:20}} key = {index}>
                        {obj}
                    </Text>
                )
            })}
        </View>

    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default App
