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
}
const store = new Store(storage)

export default store