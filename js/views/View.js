const tag = "[View]"

export default class View{
  constructor(element){
    if(!element) throw "no element"
    this.element = element
    this.originalDisplay = this.element.style.display || ""

    return this
  }
}