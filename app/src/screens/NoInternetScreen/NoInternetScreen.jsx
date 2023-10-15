import { View, Text } from 'react-native'
import React from 'react'
import {styles} from "./style"
const NoInternetScreen = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize:30}}>Please check your connection</Text>
    </View>
  )
}

export default NoInternetScreen