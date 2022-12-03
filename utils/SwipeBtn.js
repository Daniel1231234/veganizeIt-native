import React, {useState} from "react"

import Icon from "react-native-vector-icons/FontAwesome"

import SwipeButton from "rn-swipe-button"
import {Colors} from "./colors"

export const SwipeBtn = (props) => {
  const onPress = () => {
    console.log("yay")
    props.onPress
  }
  const iconCmp = () => {
    return <Icon name="arrow-left" size={30} color="white" />
  }

  return (
    <>
      <SwipeButton
        title={props.title}
        titleStyles={{color: "white"}}
        railBackgroundColor={Colors.gray500}
        railFillBorderColor="black"
        railStyles={{
          backgroundColor: Colors.bgColor,
          opacity: 0.7,
          borderColor: Colors.gray500,
        }}
        onSwipeSuccess={onPress}
        titleMaxFontScale={20}
        shouldResetAfterSuccess={true}
        thumbIconBackgroundColor={Colors.gray500}
        // titleColor="white"
        thumbIconComponent={iconCmp}
      />
    </>
  )
}
