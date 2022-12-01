import React from "react"
import {Text, View, StyleSheet, Pressable} from "react-native"
import {Colors} from "./colors"

export function ButtonCmp(props) {
  const {onPress, title = "Save"} = props
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    backgroundColor: Colors.gray500,
    borderWidth: 2,
    elevation: 7,
    // backgroundColor: "black",
  },
  text: {
    fontSize: 20,
    // lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },
})
