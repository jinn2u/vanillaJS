export function createPastDate(date=1, now=new Date()){
  if(date<1) throw "date는 1 이상입니다."

  const yesterday = new Date(now.setDate(now.getDate()-1))
  // 어제일 경우 현재 날짜에서 1만 뺀후 return.
  if(date===1) return yesterday
  // date만큼 재귀를 돌면서 날짜에서 1을 뺀다.(date일 전의 날짜를 구한다.)
  return createPastDate(date-1, yesterday)
}

export function qs(selector, scope=document){
  if(!selector) throw "no selector"
  return scope.querySelector(selector)
}