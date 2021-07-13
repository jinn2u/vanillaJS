import React from "react"
import List from "./List.js"
import store from "../Store"

export default class KeywordList extends React.Component {
  constructor() {
    super()
    this.state = {
      keywordList: []
    }
  }
  componentDidMount() {
    const keywordList = store.getKeywordList()
    this.setState({keywordList})
  }

  render() {
    return (
      <List data={this.state.keywordList} onClick={this.props.onClick} renderItem={(item, idx) => {
        return (
          <>
            <span className="number">{idx + 1}</span>
            <span>{item.keyword}</span>
          </>
        )
      }} />
    )
  }
}