import { Text, StyleSheet } from "react-native"


export default function Title() {
    
  return (
    <Text style={styles.center}> StarBosco App </Text> 
  )

}

const styles = StyleSheet.create({
  center:{
    textAlign:'center'
  }
})