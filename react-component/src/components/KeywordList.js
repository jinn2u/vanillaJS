import React from "react"
import List from "./List.js"
import store from "../Store"

export default class KeywordList extends List {
  componentDidMount(){
    const data = store.getKeywordList()
    this.setState({
      data
    })
  }
  renderItem(item, idx) {
    return (
      <> 
        <span className="number">{idx + 1}</span>
        <span>{item.keyword}</span>
      </>
    )
  }
}