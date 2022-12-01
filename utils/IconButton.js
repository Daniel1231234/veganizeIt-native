import {Pressable} from "react-native"
import {AntDesign} from "@expo/vector-icons"
import {Ionicons} from "@expo/vector-icons"

export function IconButton({name, color, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  )
}
