import React from 'react'

const GifList = ({gifs}) => {

  let renderGif = gifs.map((gif) => {
    // debugger
    return <li><img src={gif.images.original.url} alt={gif.title}/></li>
  })

  return(
    <div>
      <ul>
        {renderGif}
      </ul>
    </div>
  )
}

export default GifList
