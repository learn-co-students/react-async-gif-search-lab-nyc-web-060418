import React from 'react'

const GifList = (props) => (
  <ul>
    {props.gifs.map((gif, id) => <li key={gif.id}><img src={gif.url} alt="gif" /></li>)}
  </ul>
)

export default GifList;