import React from 'react'

const Search = ({onChange}) => {
  return (
    <div>
      <input type="text" placeholder='Type Something' onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
}

export default Search
