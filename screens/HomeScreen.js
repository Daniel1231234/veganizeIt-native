import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native"
import {LinkBtn} from "../utils/LinkBtn"

export const HomeScreen = ({navigation}) => {
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
            <LinkBtn
              title="למערכת הסריקה"
              navigateTo="scanner"
              radius={20}
              fontSize={20}
              textColor="white"
              borderWidth={1}
              type="clear"
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <LinkBtn
              url="https://veganizeit.onrender.com/home"
              title="לאתר המלא"
              radius={20}
              fontSize={20}
              borderWidth={1}
              type="clear"
              textColor="white"
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
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
})
