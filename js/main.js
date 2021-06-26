import Store from './models/Store.js'
import storage from './models/datas/Storage.js'
import Controller from './controller/Controller.js'
import SearchFormView from './views/SearchFormView.js'

const tag = "[main]"

document.addEventListener("DOMContentLoaded", main)

function main(){
  console.log(tag, "main")
  
  const store = new Store(storage)

  const views = {
    searchFormView: new SearchFormView() 
  }

  new Controller(store, views)
}