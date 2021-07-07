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
    this.addHistory(keyword)
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
  removeHistory(keyword=""){
    this.#storage.historyData = this.#storage.historyData.filter(item => item.keyword !== keyword)
  }
  addHistory(keyword=""){
    keyword = keyword.trim()
    if(!keyword){
      return
    }
    const hasHistory = this.#storage.historyData.some(history=> history.keyword === keyword)

    if(hasHistory){
      this.removeHistory(keyword)
    }
    const id = createNextId(this.#storage.historyData)
    const date = new Date()  
    console.log(date)
    this.#storage.historyData.push({id, keyword, date})
    this.#storage.historyData.sort(this._sortHistory)
  }
}
const store = new Store(storage)

export default store