import React, {useState, useEffect} from "react"
import {Alert, Modal, StyleSheet, Text, View, SafeAreaView} from "react-native"
import {BarCodeScanner} from "expo-barcode-scanner"
import {checkVegan, fetchBarcodes} from "../ScanService"
import {Colors} from "../utils/colors"
import {useLayoutEffect} from "react"
import {ButtonCmp} from "../utils/Button"
import {IconButton} from "../utils/IconButton"

export function ScannerScreen({navigation}) {
  const [hasPremmission, setHasPremission] = useState(null)
  const [scanned, setScanned] = useState(false)

  const [hideCamera, setHideCamera] = useState(true)
  const [showStartBtn, setShowStartBtn] = useState(true)

  const [showModal, setShowModal] = useState(false)

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
    const isVegan = checkVegan(data)
    console.log(isVegan)
    setShowModal(true)
    if (isVegan) Alert.alert("המוצר טבעוני")
    else Alert.alert("המוצר לא נמצא במאגרינו")
    console.log(`Type:${type} with data:${data}`)
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
      {/* <Modal visible={showModal} animationType="slide">
        <Text>מודל מודל</Text>
      </Modal> */}
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {showStartBtn && (
            <ButtonCmp title="תתחיל לסרוק!" onPress={startScanning} />
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
})
