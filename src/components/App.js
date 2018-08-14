import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < GifListContainer />
        < NavBar color='black' title="Giphy Search" />
    </div>
  )
}

export default App
