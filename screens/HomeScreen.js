import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native"
import {Button} from "@rneui/themed"
import {A} from "@expo/html-elements"

export const HomeScreen = ({navigation}) => {
  function goScanner() {
    navigation.navigate("scanner")
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/theme.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBg}
      >
        <View style={styles.main}>
          <Text style={styles.txt}>ברוכים הבאים לסורק הטבעוני!</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: 50,
              paddingHorizontal: 30,
              paddingVertical: 30,
              backgroundColor: "#221c30",
              opacity: 0.8,
            }}
          >
            <Button
              title="למערכת הסריקה"
              onPress={goScanner}
              radius={50}
              buttonStyle={{
                borderColor: "rgba(78, 116, 289, 1)",
                borderWidth: 0.5,
              }}
              type="clear"
              titleStyle={{color: "white", fontSize: 20}}
              raised
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <A href="https://veganizeit.onrender.com/home" style={styles.goWeb}>
              לאתר המלא
            </A>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#39324a",
    flex: 1,
  },
  imageBg: {
    opacity: 0.4,
    width: "100%",
  },
  main: {
    padding: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  txt: {
    color: "white",
    fontSize: 24,
  },
  goWeb: {
    borderColor: "rgba(78, 116, 289, 1)",
    borderWidth: 0.5,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: "center",
    width: 200,
    color: "white",
    fontSize: 20,
  },
})
