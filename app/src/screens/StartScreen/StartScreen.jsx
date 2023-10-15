import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles} from "./style"

const StartScreen = () => {
  const [text, setText] = useState('');
  const words = ['E', 'C', 'O','R','E','X'];
  const interval = 100;
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < words.length) {
        setText((prevText) => prevText +  words[index]);
        index++;
      } else {
        clearInterval(intervalId); 
      }
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <View style={styles.main}>
      <Text style={{fontSize:50, color:"green", letterSpacing:10, width:"100%",textAlign:"center"}}>{text}</Text>
    </View>
  )
}

export default StartScreen