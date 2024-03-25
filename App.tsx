/* eslint-disable react/self-closing-comp */
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

// Arrow function ile de yapılabilir
// cons App = () => {
function App() {
  // function sayHello2() {
  //   console.log('Hello2');
  // };

  const sayHello3 = label => {
    console.log('Hello3 ' + label);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Text>Hello World2</Text>
      </View>
      <Text>Hello World3</Text>
      <Button
        title="Press Me!"
        onPress={() => sayHello3('Asım')}
        disabled={false}
        color="lightcoral"></Button>
    </SafeAreaView>
  );
}

export default App;
