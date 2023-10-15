import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    main:{
        backgroundColor:"#eeeeee",
        height:"100%",
        padding:10,
        flexDirection:"column",
        gap:15
    },
    searchBar:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        gap:10
        
    },
    searchInput:{
        borderRadius:30,
        backgroundColor:"#ffffff",
        width:"83%",
        fontSize:15,
        paddingHorizontal:10
    },
    profile:{
        borderRadius:150,
        backgroundColor:"blue",
        width:49
    }
})