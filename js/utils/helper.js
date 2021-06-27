export function createPastDate(date=1, now=new Date()){
  if(date<1) throw "date는 1 이상입니다."

  const yesterday = new Date(now.setDate(now.getDate()-1))
  if(date===1) return yesterday
  return createPastDate(date-1, yesterday)
}
export function qs(selector, scope=document){
  if(!selector) throw "no selector"
  return scope.querySelector(selector)
}
export function on(target, eventName, handler){
  if(!target) throw "no selector"
  target.addEventListener(eventName, handler)
}
export function emit(target, eventName, detail){
  const event = new CustomEvent(eventName, {detail})
  target.dispatchEvent(event)
}