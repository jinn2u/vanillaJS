import { TabType } from "../views/TabView.js"

const tag = "[Store]"

export default class Store{
  constructor(storage){
    if(!storage) throw "no storage"
    // console.log(tag, "constructor")

    this.storage = storage
    this.searchKeyword = ""
    this.searchResult = []
    this.selectedTab = TabType.KEYWORD
  }
  search(keyword){
    this.searchKeyword = keyword
    this.searchResult = this.storage.productData.filter(product => product.name.includes(keyword))
  } 
  getKeywordList(){
    return this.storage.keywordData
  }
}