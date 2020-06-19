import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements'
import getPhoneNumberData from './api-service';

// Should be in it's own file but App.tsx wouldn't recognize it for some reason?
export function DialPad(props: any) {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  const updateInput = (val: string) => {
    // TODO: Add clear button to wipe number and and location fields. Should prob
    // be turned into a switch to clean it up.
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

  const getPhoneNumber = async () => {
    const data = await getPhoneNumberData(value);
    setLocation(data.location);
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
              onPress={() => updateInput("2")}
          />
          <Button
              title="3"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("3")}
          />
        </View>
        <View style={dialPadStyles.containerRow}>
          <Button
              title="4"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("4")}
          />
          <Button
              title="5"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("5")}
          />
          <Button
              title="6"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("6")}
          />
        </View>
        <View style={dialPadStyles.containerRow}>
          <Button
              title="7"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("7")}
          />
          <Button
              title="8"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("8")}
          />
          <Button
              title="9"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("9")}
          />
        </View>
        <View style={dialPadStyles.containerRow}>
          <Button
              title="0"
              buttonStyle={dialPadStyles.button}
            titleStyle={dialPadStyles.buttonTitle}
            onPress={() => updateInput("0")}
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
              onPress={() => getPhoneNumber()}
          />
          <Text>Your phone number is from: {location}</Text>
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
