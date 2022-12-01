import {Button, StyleSheet, Text} from "react-native"
import {ScannerScreen} from "./screens/ScannerScreen"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {HomeScreen} from "./screens/HomeScreen"
import {useFonts} from "@expo-google-fonts/inter"
import {AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc"
import {StatusBar} from "expo-status-bar"

export default function App() {
  const Stack = createNativeStackNavigator()
  let [fontsLoaded] = useFonts({
    AmaticSC_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#8a2b06",
              headerTintColor: "white",
            },
          }}
        >
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              title: "",
              headerLeft: () => {
                return (
                  <Text
                    style={{
                      fontFamily: "AmaticSC_700Bold",
                      fontSize: 30,
                      color: "white",
                    }}
                  >
                    טבען-לי
                  </Text>
                )
              },
            }}
          />
          <Stack.Screen
            name="scanner"
            component={ScannerScreen}
            options={{title: ""}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
