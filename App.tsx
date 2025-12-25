import {useState} from 'react';
import {  StyleSheet, Text, View,Button } from 'react-native';

const Action = ({ increment, reset}) => (
    <View style = {{gap:10}}>
        <Button title = "Add"  onPress ={increment} />
        <Button title = "Reset"  onPress = {reset}/>
    </View>
)
function App() {
    const[total, setTotal] = useState(0)
  return (
    <View style = {styles.content}>
        <Text> Total : {total}</Text>
        <Action increment ={()=> setTotal(total + 1)}
            reset = {()=> setTotal(0)} />
        
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 20,
    
         // space between cards (RN 0.71+)
  },

});
export default App;