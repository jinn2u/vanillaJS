import Component from "../core/Component.js"

export default class Items extends Component{
  setup(){
    this.$state = {items:['item1', 'item2']}
  }
  template(){
    const {items} = this.$state
    return `
      <ul>
        ${items.map(item=>`<li>${item}<button class="deleteBtn">삭제</button></li>`).join('')}
        
      </ul>
      <button class="addBtn">추가</button>
    `
  }
  // setEvent(){
  //   this.$target.addEventListener('click', ({target}) => {
  //     const items = [...this.$state.items]
  //     if(target.classList.contains('addBtn')){
  //       this.setState({items:[...items, `items${items.length+1}`]})
  //       console.log(this.$state)
  //     }

  //     if(target.classList.contains('deleteBtn')){
  //       console.log(target, "qwer")
  //       items.splice(target.dataset.index,1)
  //       this.setState({items})
  //     }
  //   })
  // }
  setEvent () {
    this.addEvent('click', '.addBtn', () => {
      const { items } = this.$state;
      this.setState({ items: [ ...items, `item${items.length + 1}` ] });
    });
    this.addEvent('click', '.deleteBtn', ({ target }) => {
      const items = [ ...this.$state.items ];
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
  }
}