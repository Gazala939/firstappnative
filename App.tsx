import {useState} from 'react';
import {  StyleSheet, Text, View,Button } from 'react-native';



function App() {
    const [items , setItems] = useState(['A', 'B']);
  return (
    <View>
        {items.map((item, index) =>(
            <Text key = {index}> {item}</Text>
        ))}

        <Button onPress={() => setItems([...items, `X${items.length +1}`])} 
        title = "Add Item"/>
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