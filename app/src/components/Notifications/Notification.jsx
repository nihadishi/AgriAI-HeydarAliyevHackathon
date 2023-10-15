import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

const Notification = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.notificationText}>Notification</Text>
    </View>
  )
}

export default Notification