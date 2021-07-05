import { TabType } from "../views/TabView.js"

const tag = "[Controller]"

export default class Controller{
  constructor(store,  {searchFormView, searchResultView, tabView, keywordListView, historyListView}){
    // console.log(tag, "constructor")

    this. store = store
    this.searchFormView = searchFormView
    this.searchResultView = searchResultView
    this.tabView = tabView
    this.keywordListView = keywordListView
    this.historyListView = historyListView

    this.subscribeViewEvents()
    this.render()
  }
  subscribeViewEvents(){
    this.searchFormView
      .on("@submit", event => this.search(event.detail.value))
      .on("@reset", ()=>this.reset())

    this.tabView
      .on("@change", event => this.changeTab(event.detail.value))
    this.keywordListView
      .on("@click", event=> this.search(event.detail.value))
    this.historyListView
      .on("@click", event=> this.search(event.detail.value))
      .on("@remove", event => this.removeHistory(event.detail.value))
  }
  search(searchKeyword){
    console.log(tag, "search", searchKeyword)
    this.store.search(searchKeyword)    
    this.render()
  }
  reset(){
    // console.log(tag, "reset")
    this.store.searchKeyword = ""
    this.store.searchResult = []
    this.render()
  }
  changeTab(tab){
    // console.log(tab, tag)
    this.store.selectedTab = tab
    this.render()
  }
  removeHistory(keyword){
    this.store.removeHistory(keyword)
    this.render()
  }
  render(){
    if (this.store.searchKeyword.length > 0){
      return this.renderSearchResult()
    }
    else if (this.store.selectedTab === TabType.KEYWORD){
      this.keywordListView.show(this.store.getKeywordList())
      this.historyListView.hide()
    } else if (this.store.selectedTab === TabType.HISTORY){
      this.keywordListView.hide()
      console.log("history select")
      this.historyListView.show(this.store.getHistoryList())
    } else {
       throw "사용할 수 없는 탭입니다."
    }
    this.tabView.show(this.store.selectedTab)
    this.searchResultView.hide()
  }
  renderSearchResult(){
    this.tabView.hide()
    this.keywordListView.hide()
    this.historyListView.hide()
    this.searchFormView.show(this.store.searchKeyword)
    this.searchResultView.show(this.store.searchResult)
  }
}