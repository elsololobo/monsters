import React from 'react'
import '../../assets/card.styles.css'
const Card = (props) => {
  let { monster } = props
  return <h1 className={'card-container'}>{monster.name}</h1>
}
export default Card
