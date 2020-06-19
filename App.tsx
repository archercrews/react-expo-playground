import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements'

// Should be in it's own file but App.tsx wouldn't recognize it for some reason?
export function DialPad() {
  const [value, setValue] = useState("");

  const updateInput = (val: string) => {
    if (val === "<") {
      setValue(value.slice(0, value.length - 1))
    }
    else {
      if (value.length === 10) {
        return
      }
      setValue(value.concat(val));
    }
  }
  
  return (
      <View>
        <Text>{value}</Text>
        <View style={dialPadStyles.containerRow}>
          <Button
            title="1"
            buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("1")}
          />
          <Button
              title="2"
              buttonStyle={dialPadStyles.button}
              titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
          <Button
              title="3"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
        </View>
        <View style={dialPadStyles.containerRow}>
          <Button
              title="4"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
          <Button
              title="5"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
          <Button
              title="6"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
        </View>
        <View style={dialPadStyles.containerRow}>
          <Button
              title="7"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
          <Button
              title="8"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
          <Button
              title="9"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
        </View>
        <View style={dialPadStyles.containerRow}>
          <Button
              title="0"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
          <Button
              title="<"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => updateInput("<")}
          />
        </View>
        <Button
              title="Send it!"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
              onPress={() => Alert.alert("pressed")}
          />
      </View>
  );
}



export default function App() {

  // let value = "";
  // const newValue = (newValue: string) => {
  //   Alert.alert("newVal")
  //   value.concat(newValue);
  // }

  return (
    <View style={styles.container}>
      <Text>Enter a phone number to see where it's from!</Text>
      <DialPad/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const dialPadStyles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  // How to nest this button width in the containerRow style? Or just apply button styles to all
  // buttons in one place. I hate copy/pasting these styles onto every single button bleh.
  button: {
    width: '60%'
  },
  buttonTitle: {
    fontSize: 30
  }
});
