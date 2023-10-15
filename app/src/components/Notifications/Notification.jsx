import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from './style'

const Notification = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.notificationText}>Bildirişlər</Text>
      <View style={{flexDirection:"row", justifyContent:"start",gap:20}}>
        <View><Image style={{width:70, height:70, borderRadius:10}} source={require("./img/taxil.jpg")}/></View>
        <View style={{flexDirection:"column", justifyContent:"space-around"}}><Text style={{fontSize:25, fontWeight:"600", color:"#000000"}}>Okt 15 2023</Text><Text style={{fontSize:15,fontWeight:"400", color:"#000000", flexWrap:"wrap",width:260}}>Hava temperaturu yüksəkdir, məhsulunuza təhlükə yaradır</Text></View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"start",gap:20}}>
        <View><Image style={{width:70, height:70, borderRadius:10}} source={require("./img/taxil.jpg")}/></View>
        <View style={{flexDirection:"column", justifyContent:"space-around"}}><Text style={{fontSize:25, fontWeight:"600", color:"#000000"}}>Okt 8 2023</Text><Text style={{fontSize:15,fontWeight:"400", color:"#000000", flexWrap:"wrap",width:260}}>Torpağın nəmişliyi aşağıdır, əlavə suvarmayı məsləhət görürəm</Text></View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"start",gap:20}}>
        <View style={{alignItems:"center",  width:"100%"}}><TouchableHighlight><Text style={{color:"#ffffff",textAlign:"center", fontWeight:"600", fontSize:20, paddingVertical:10, paddingHorizontal:30, backgroundColor:"#000000", borderRadius:10}}>Daha çox</Text></TouchableHighlight></View>
      </View>
    </View>
  )
}

export default Notification