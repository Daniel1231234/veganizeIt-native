import React from "react"
import {Modal, Pressable, StyleSheet, Text, View} from "react-native"
import {ButtonCmp} from "./Button"
import {Colors} from "./colors"
import {LinkBtn} from "./LinkBtn"

export const ModalCmp = (props) => {
  return (
    <View>
      <Modal
        animationType="fade"
        animationInTiming={200}
        transparent={true}
        visible={props.showModal}
        swipeDirection="down"
      >
        <Pressable
          onPressOut={props.closeModal}
          style={styles.modalOverlay}
        ></Pressable>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.title}</Text>
            {props.isVegan ? (
              <ButtonCmp onPress={props.closeModal} title="חזור" />
            ) : (
              <LinkBtn
                title="הוסף את המוצר למאגר"
                url="https://veganizeit.onrender.com/contact"
                type="clear"
                fontSize={16}
                textColor={Colors.gray700}
                borderColor={Colors.gray700}
                borderWidth={1}
                radius={10}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 16,
    fontWeight: "bold",
    color: Colors.gray700,
    fontSize: 20,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
})
