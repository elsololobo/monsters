import React from 'react'
import '../../assets/search-box.styles.css'

const SearchBox = ({ value, handleChange, placeholder }) => {
  return (
    <input
      className={'search'}
      type={'search'}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}
export default SearchBox
