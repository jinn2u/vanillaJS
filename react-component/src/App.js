import React from "react"
import Header from "./components/Header.js"
import SearchForm from "./components/SearchForm.js"
export default class App extends React.Component {
  constructor(){
    super()
    this.state = {searchKeyword: ""}
  }
  search(){
    console.log('TODO: search', this.state.searchKeyword)
  }
  handleReset(){
    console.log('TODO: handleReset')
  }
  handleChangeInput(searchKeyword){
    console.log(searchKeyword)
    if(searchKeyword.length <= 0){
      this.handleReset()
    }
    this.setState({searchKeyword})
  }
  render() {
    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm 
            value={this.state.searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={(value) => this.search(value)}
            onReset={() => this.handleReset()}
          />
        </div>
      </>
    )

  }
}
