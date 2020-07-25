import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [txt,settxt] = useState('');

  const changed = (el) => {
    // console.log(el.nativeEvent.text);
    settxt(el.nativeEvent.text);
  }

  return (
    <View style={st1.screen}>
      <View style={st1.bar}>
        <Text style={st1.bartext}>2-Way binding</Text>
      </View>
      <Text style={{fontSize: 20 , color: 'orange'}}>hello, kartik here...</Text>
      <View>
        <TextInput style={st1.textbox} placeholder="Type here..." onChange={changed} value={txt}/>
        <Text style={st1.otptxt}>{txt}</Text>
      </View>
    </View>
  );
}

const st1 = StyleSheet.create({
  bar:{
    backgroundColor: 'pink',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 50
  },
  bartext:{
    fontSize: 25,
    color: 'red',
  },
  screen:{
    marginTop: 20,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox:{
    borderWidth: 5,
    borderColor: 'pink',
    padding: 8,
    margin: 20,
    width: 260,
  },
  otptxt: {
    fontSize: 30,
    color: 'red',
    margin: 25,
  }
});


