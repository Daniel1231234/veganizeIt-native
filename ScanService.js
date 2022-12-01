import axios from "axios"

const API_BARCODE = "https://who-sapp-default-rtdb.firebaseio.com/barcode.json"
const TOTAL_BARCODES = []

export function storeItems(item) {
  if (API_BARCODE.includes(item)) return
  return axios.post(API_BARCODE, item)
}

export async function fetchBarcodes() {
  if (!TOTAL_BARCODES || TOTAL_BARCODES.length === 0) {
    const res = await axios.get(API_BARCODE)
    for (let key in res.data) {
      const obj = {
        id: key,
        barcode: res.data[key].barcode,
        isVegan: true,
        lastUpdated: res.data[key].lastUpdate,
        name: res.data[key].productName,
        extra: res.data[key].type,
      }
      TOTAL_BARCODES.push(obj)
    }

    return TOTAL_BARCODES
  }
  return TOTAL_BARCODES
}

export function checkVegan(barcode) {
  const barcodeToFind = TOTAL_BARCODES.find((item) => item.barcode === barcode)
  if (!barcodeToFind || barcodeToFind.length === 0) return null
  return barcodeToFind
}

async function postItem(productName, barcode, type) {
  const itemToPost = {
    barcode,
    productName,
    type,
    lastUpdate: "11.22",
    canBeVegan: true,
  }

  const total = await fetchBarcodes()

  const isExist = total.filter((item) => item.barcode === itemToPost.barcode)
  if (isExist) return
  else {
    const res = await axios.post(API_BARCODE, isExist)
    console.log(res.data)
  }
}
