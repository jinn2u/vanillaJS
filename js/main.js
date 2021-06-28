import Store from './models/Store.js'
import storage from './models/datas/Storage.js'
import Controller from './controller/Controller.js'
import SearchFormView from './views/SearchFormView.js'
import SearchResultView from './views/SearchResultView.js'

const tag = "[main]"

document.addEventListener("DOMContentLoaded", main)

function main(){
  console.log(tag, "main")
  const store = new Store(storage)
  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView()
  }
  new Controller(store, views)
}