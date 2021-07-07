import store from "../js/Store.js"

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
    if (!searchKeyword) this.handleReset()
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
    this.setState({ searchKeyword: "" })
    console.log("handleReset", this.state.searchKeyword)

    this.setState(() => {
      return { searchKeyword: "" }
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
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">

          <div className="content">
            {this.state.submitted && searchResult}
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))