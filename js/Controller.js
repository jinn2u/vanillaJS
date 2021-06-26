const tag = "[Controller]"

export default class Controller{
  constructor(store){
    console.log(tag, "constructor")

    this.store = store
  }
}