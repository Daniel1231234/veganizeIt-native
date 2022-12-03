import React, {useState, useEffect} from "react"
import {StyleSheet, Text, View, SafeAreaView, Pressable} from "react-native"
import {BarCodeScanner} from "expo-barcode-scanner"
import {checkVegan, fetchBarcodes} from "../ScanService"
import {Colors} from "../utils/colors"
import {useLayoutEffect} from "react"
import {ButtonCmp} from "../utils/Button"
import {IconButton} from "../utils/IconButton"
import {Button} from "@rneui/themed"
import {ModalCmp} from "../utils/ModalCmp"

export function ScannerScreen({navigation}) {
  const [hasPremmission, setHasPremission] = useState(null)
  const [scanned, setScanned] = useState(false)

  const [hideCamera, setHideCamera] = useState(true)
  const [showStartBtn, setShowStartBtn] = useState(true)

  const [showModal, setShowModal] = useState(false)
  const [isVegan, setIsVegan] = useState(null)

  const askForCameraPermission = () => {
    ;(async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync()
      setHasPremission(status === "granted")
    })()
  }

  useEffect(() => {
    async function getBarcodes() {
      await fetchBarcodes()
    }

    askForCameraPermission()
    getBarcodes()
  }, [])

  function startScanning() {
    setHideCamera(false)
    setShowStartBtn(false)
  }

  const handleBarcode = ({type, data}) => {
    setScanned(true)
    setHideCamera(true)
    const itemToCheck = checkVegan(data)
    console.log(itemToCheck)
    setShowModal(true)
    setIsVegan(itemToCheck)
    console.log(`Type:${type} with data:${data}`)
  }

  const closeModal = () => {
    console.log("closingg")
    setShowModal(false)
  }

  function finishScan() {
    setScanned(false)
    setHideCamera(false)
  }

  function goBack() {
    navigation.navigate("home")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton name="arrow-back" color="white" onPress={goBack} />
      },
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
    })
  }, [navigation, goBack])

  if (hasPremmission === null) {
    return (
      <View style={styles.container}>
        <Text>אפשר להשתמש במצלמה שלך?</Text>
      </View>
    )
  }

  if (hasPremmission === false) {
    return (
      <View style={styles.container}>
        <Text>לא ניתן להתחבר למצלמה שלך</Text>
        <ButtonCmp
          title={"אפשר גישה"}
          onPress={() => {
            askForCameraPermission()
          }}
        />
      </View>
    )
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          onPress={() => {
            closeModal
          }}
        >
          <ModalCmp
            isVegan={isVegan}
            title={isVegan ? "המוצר טבעוני!" : "המוצר לא קיים במאגרנו"}
            showModal={showModal}
            closeModal={closeModal}
          />
          <View style={styles.container}>
            {showStartBtn && (
              <Button
                title="התחל לסרוק!"
                onPress={startScanning}
                radius={50}
                buttonStyle={{
                  backgroundColor: Colors.gray700,
                  borderWidth: 0.5,
                }}
                type="clear"
                titleStyle={{color: "white", fontSize: 24}}
                raised
                containerStyle={{
                  width: 200,
                  marginHorizontal: 60,
                  marginVertical: 20,
                }}
              />
            )}

            {!hideCamera && (
              <View style={styles.barcodebox}>
                <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarcode}
                  style={{height: 400, width: 400}}
                />
              </View>
            )}

            {scanned && <ButtonCmp title={"לסרוק שוב?"} onPress={finishScan} />}
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#39324a",
  },
  button: {
    backgroundColor: Colors.gray700,
  },
})
