import React from "react"
import Header from "./components/Header.js"
import SearchForm from "./components/SearchForm.js"
import SearchResult from "./components/searchResult.js"
import store from "./Store.js"

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    }
  }
  search(){
    const searchResult = store.search(this.state.searchKeyword)
    console.log(searchResult, "search")
    this.setState({
      searchResult,
      submitted: true
    })
  }
  handleReset(){
    this.setState({
      searchKeyword: "",
      searchResult:"",
      submitted: false
    })
  } 
  handleChangeInput(searchKeyword){
    console.log(searchKeyword)
    if(searchKeyword.length <= 0){
      this.handleReset()
    }
    this.setState({searchKeyword})
  }
  render() {
    const {searchKeyword, submitted, searchResult} = this.state
    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm 
            value={searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={() => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
        </div>
        <div className="content">
          {submitted && <SearchResult data={searchResult} />}
        </div>
      </>
    )

  }
}
