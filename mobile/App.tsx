import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps{
  title: string;
}

export default function App() {
  return (
    <View style={styles.container}>    

      <Button title="send 1 "/>
      <Button title="send 2 "/>
      <Button title="send 3 "/>
      <Button title="Hello World!"/>

      <StatusBar style="auto" />
    </View>
  );
}


function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
