import { View, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles} from "./style"
import Temperature from '../../components/Temperature/Temperature'
import Notification from '../../components/Notifications/Notification'
import { BottomNavigation } from '../../components/BottomNavigation/BottomNavigation'
const HomeScreen = () => {
  const [isShownTemperature, setIsShownTemperature] = useState(false);
  useEffect(() => {
   setTimeout(() => {
    setIsShownTemperature(true)
    console.log("SALAM");
   }, 3500);
  }, [])
  return (
    <View style={styles.main}>
     <View style={styles.searchBar}>
      <TextInput placeholder="Search..." placeholderTextColor="#555555" style={styles.searchInput}/>
      <View style={styles.profile}></View>
     </View>
     <View style={{width:"100%",objectFit:"cover"}}>
      {isShownTemperature? <Temperature/>: <ActivityIndicator size="large" color="#0000ff" />}
     </View>
      <View><Notification/></View>
    </View>
  )
}

export default HomeScreen