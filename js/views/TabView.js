import { qs } from "../utils/helper.js"
import View from "./View.js"

const tag = "[TabView]"
const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY"
}
const TabLabel = {
  [TabType.KEYWORD]: '추천검색어',
  [TabType.HISTORY]: '최근 검색어'

}

export default class TabView extends View{
  constructor(){
    super(qs("#tab-view"))
    this.template = new Template()
    console.log(tag, "constructor")
  }
  show(){
    this.element.innerHTML = this.template.getTabList()
    super.show()
  }
}

class Template{
  getTabList(){
    return `
      <ul class="tabs">
        ${Object.values(TabType)
          .map(tabType => ({tabType, tabLabel: TabLabel[tabType]}))
          .map(this._getTab)
          .join("")
        }
      </ul>
    `
  }
  _getTab({tabType, tabLabel}){
    return `
      <li data-tab="${tabType}">
        ${tabLabel}
      </li>
    `
  }
}