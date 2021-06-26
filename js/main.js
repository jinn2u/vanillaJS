import Store from './Store.js'
import storage from './Storage.js'
import Controller from './Controller.js'

const tag = "[main]"

document.addEventListener("DOMContentLoaded", main)

function main(){
  console.log(tag, "main")
  
  const store = new Store(storage)

  const views = {
  }

  new Controller(store)
}