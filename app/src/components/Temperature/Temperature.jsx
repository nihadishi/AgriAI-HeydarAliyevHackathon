import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'

const Temperature = () => {
    const [temperature, setTemperature] = useState('');
  return (
    <View style={styles.main}>
      <Text>{temperature}</Text>
    </View>
  )
}

export default Temperature