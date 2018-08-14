import React, { Component } from 'react';

import GifListContainer from '../containers/GifListContainer'

export default (props) => {

  return(
    <div>
    <ul> <img src={props.gifs[0]} key={props.gifs[0]} alt="gif"/> </ul>
    <ul> <img src={props.gifs[1]} key={props.gifs[1]} alt="gif"/> </ul>
    <ul> <img src={props.gifs[2]} key={props.gifs[2]} alt="gif"/> </ul>
    </div>
  )
}
