import KeywordListView from "./KeywordListView.js"
import {formatRelativeDate, qs, delegate} from "../utils/helper.js"

const tag = "[HistoryListView]"

export default class HistoryListView extends KeywordListView{
  constructor(){
    console.log(tag, "constructor")
    super(qs("#history-list-view"), new Template())
  }
  bindEvents(){
    delegate(this.element, "click", "button.btn-remove", event => this.handleClickRemoveButton(event))
    super.bindEvents()
  }
  handleClickRemoveButton(event){
    //  console.log(event.target)

     const value = event.target.parentElement.dataset.keyword
     this.emit('@remove', {value})
  }
}
class Template {
  getList(data){
    return `
      <ul class="list"> 
        ${data.map(this._getItem).join("")}
      </ul>
    `
  }
  getEmptyMessage(){
    return `<div class="empty-box">검색 이력이 없습니다.</div>`
  }
  _getItem({id, keyword, date}){
    return`
      <li data-keyword="${keyword}">
        ${keyword}
        <span class="date">${formatRelativeDate(date)}</span>
        <button class="btn-remove"></button>
      </li>
    `
  }
}