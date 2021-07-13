import React from 'react'

const List = ({data=[], onClick, renderItem}) => {
  return (
    <ul className="list">
      {data.map((item, idx) => {
        return (
          <li key={item.id} onClick={()=>onClick(item.keyword)}>
            {renderItem(item, idx)}
          </li>
        )
      })}
    </ul>
  )
}
export default List