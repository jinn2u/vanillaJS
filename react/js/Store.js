import storage from "../js/Storage.js"
import {createNextId} from "../js/helper.js"
const tag = "[Store]"

class Store{
  #storage
  constructor(storage){
    if(!storage) throw "no storage"
    this.#storage = storage
  }
  search(keyword){
    return this.searchResult = this.#storage.productData.filter(product => product.name.includes(keyword))
  }
  getKeywordList(){
     return this.#storage.keywordData
  }
  getHistoryList(){
    return this.#storage.historyData.sort(this._sortHistory)
  }
  _sortHistory(history1, history2 ){
    if(history1.date > history2.date) return -1
    else return 1
  }
  removeHistory(keyword){
    this.#storage.historyData = this.#storage.historyData.filter(item => item.keyword !== keyword)
  }
}
const store = new Store(storage)

export default store