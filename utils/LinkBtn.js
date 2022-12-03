import {Button} from "@rneui/themed"
import {StyleSheet} from "react-native"
import * as Linking from "expo-linking"
import {useNavigation} from "@react-navigation/native"

export function LinkBtn(props) {
  const navigation = useNavigation()

  function goWeb() {
    if (props.url) Linking.openURL(props.url)
    else navigation.navigate(props.navigateTo)
  }

  return (
    <Button
      title={props.title}
      onPress={goWeb}
      radius={props.radius}
      buttonStyle={{
        borderColor: props.borderColor ? props.borderColor : "white",
        borderWidth: props.borderWidth ? props.borderWidth : 0.5,
      }}
      type={props.type}
      titleStyle={{color: props.textColor, fontSize: props.fontSize}}
      raised
      containerStyle={props.containerStyle}
    />
  )
}

const styles = StyleSheet.create({})
