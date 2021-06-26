const tag = "[Store]"

export default class Store{
  constructor(storage){
    if(!storage) throw "no storage"
    console.log(tag, "constructor")

    this.storage = storage
  }
}