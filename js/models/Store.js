const tag = "[Store]"

export default class Store{
  constructor(storage){
    if(!storage) throw "no storage"
    console.log(tag, "constructor")

    this.storage = storage
    this.searchKeyword = ""
    this.searchResult = []
  }
  search(keyword){
    this.searchKeyword = keyword
    this.searchResult = this.storage.productData.filter(product => product.name.includes(keyword))
  } 
}