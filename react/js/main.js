import store from "../js/Store.js"
const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY"
}
const TabLabel = {
  [TabType.KEYWORD]: '추천검색어',
  [TabType.HISTORY]: '최근 검색어'
}
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false
    }
  }
  handleChangeInput(event) {
    const searchKeyword = event.target.value
    if (searchKeyword.length<=0 && this.state.submitted){
      this.handleReset()
    } 
    this.setState({ searchKeyword })
    // console.log(searchKeyword)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.search(this.state.searchKeyword)
  }
  search(searchKeyword) {
    const searchResult = store.search(searchKeyword)
    this.setState({
      searchResult,
      submitted: true
    })
  }
  handleReset() {
    // this.setState({ searchKeyword: "" })
    // console.log("handleReset", this.state.searchKeyword)

    this.setState(() => {
      return { searchKeyword: "", submitted:false}
    }, () => {
      console.log("handleReset", this.state.searchKeyword)
    })
  }
  render() {
    const searchForm = (
      <form
        onSubmit={event => this.handleSubmit(event)}
        onReset={() => this.handleReset()}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          value={this.state.searchKeyword}
          onChange={event => this.handleChangeInput(event)}
        />
        {this.state.searchKeyword && (
          <button
            type="reset"
            className="btn-reset"
          ></button>
        )}
      </form>
    )
    const searchResult = (
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map(item => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다.</div>
      )
    )
    const tabs = (
      <ul className="tabs">
        {Object.values(TabType).map(tabType => {
          return <li key={tabType}>{TabLabel[tabType]}</li> 
        })}
      </ul>
    )
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submitted ? searchResult : tabs}
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))