const tag = "[Controller]"

export default class Controller{
  constructor(store,  {searchFormView}){
    console.log(tag, "constructor")

    this.store = store
    this.searchFormView = searchFormView

    this.subscribeViewEvents()
  }
  subscribeViewEvents(){
    this.searchFormView.on("@submit", event => this.search(event))
  }
  search(event){
    console.log(tag, event, event.detail)
  }
}