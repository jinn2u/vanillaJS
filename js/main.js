import Store from './models/Store.js'
import storage from './models/datas/Storage.js'
import Controller from './controller/Controller.js'
import SearchFormView from './views/SearchFormView.js'
import SearchResultView from './views/SearchResultView.js'
import TabView from './views/TabView.js'
import KeywordListView from './views/KeywordListView.js'

const tag = "[main]"

document.addEventListener("DOMContentLoaded", main)

function main(){
  // console.log(tag, "main")
  const store = new Store(storage)
  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
    keywordListView: new KeywordListView()
  }
  new Controller(store, views)
}