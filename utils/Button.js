import React from "react"
import {Text, View, StyleSheet, Pressable} from "react-native"
import {Colors} from "./colors"

export function ButtonCmp(props) {
  const {onPress, title = "Save"} = props

  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? Colors.redTavenli : Colors.gray500,
        },
        styles.button,
      ]}
      onPress={onPress}
    >
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
    // backgroundColor: Colors.gray500,
    borderWidth: 2,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  afterPress: {
    opacity: 0.8,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
})
