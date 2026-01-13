
import {useState} from 'react'
import {View,Text,StyleSheet,Pressable} from 'react-native';

function App(){
    const [log, setlog] = useState('Tab the box');
    return(
        <View style = {styles.container}>
            <Pressable 
                style = {({pressed})=>[styles.box,{opacity: pressed ? 0.5: 1}]}
                onPress = {()=> setlog('On Press')}
                onPressIn={()=>setlog('On Press In')}
                onPressOut={()=>setlog('On Press Out')}
                onLongPress={()=>setlog('On Long Press')}>
                <Text> Tap / Long Press</Text>
            </Pressable>
            <Text style={{marginTop:12}}> {log}</Text>
        </View>

    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    box:{
        backgroundColor:'#BBDEFB',
        padding:24,
        borderRadius: 12,

    }
})

export default App
