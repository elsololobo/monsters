import React from 'react'
import '../../assets/card-list.styles.css'
import Card from '../Card/Card'

const CardList = (props) => {
  let { monsters } = props
  return (
    <div className={'card-list'}>
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />
      })}
    </div>
  )
}
export default CardList
