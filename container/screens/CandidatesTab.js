import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Candidates = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Candidates</Text>
    </View>
  )
}

export default Candidates

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt:{
    fontSize:30,
  }
}) 