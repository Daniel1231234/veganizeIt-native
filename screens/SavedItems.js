import {useEffect, useState} from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native"
import {FlatList} from "react-native-gesture-handler"
import {Colors} from "../utils/colors"

const demoItems = [
  {
    id: "m1",
    name: "חלב סויה תנובה",
    isVegan: true,
  },
  {
    id: "m2",
    name: "במבה נוגט עלית",
    isVegan: true,
  },
]

const Item = ({name}) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{name}</Text>
  </View>
)

export function SavedItems({navigation, route}) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const itemData = route.params?.item
    console.log("items => ", items)
    console.log("route.params?.item => ", route.params?.item)
    if (!route.params?.item) return
    if (items.indexOf(itemData) !== -1) return

    setItems((prevItems) => [...prevItems, itemData])
    console.log("items => ", items)

    const addToSaved = () => {
      if (items.length === 0) setItems([itemData])
      //   console.log("itemData => ", itemData)
      //   if (items.length === 0) {
      //     setItems([itemData])
      //   }
      //   if (items.indexOf(itemData) !== -1) return
      //   console.log("items => ", items)
      //   setItems((prevItems) => [...prevItems, itemData])

      //   if (!itemData) return
      //   console.log("items => ", items)
    }

    // addToSaved()
  }, [route.params?.item])

  const renderItem = ({item}) => <Item name={item.name} />

  const goHome = () => {
    navigation.navigate("home")
  }

  if (!items)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  return (
    <>
      <Button title="חזור לדף הבית" onPress={goHome} />
      <SafeAreaView style={styles.itemList}>
        <FlatList
          alwaysBounceVertical={false}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
  },
  itemList: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderRadius: 6,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#5e0acc",
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
  },
})
