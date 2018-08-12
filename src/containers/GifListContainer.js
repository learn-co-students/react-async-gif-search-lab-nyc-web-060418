import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class App extends React.Component {

  state = {
    gifs: [],
    searchTerm: "dog"
  }

  fetchdata () {
    fetch("http://api.giphy.com/v1/gifs/search?q=" + this.state.searchTerm + "&api_key=dc6zaTOxFJmzC&rating=g").then(res => res.json()).then(json => json.data).then(res=>{
      this.setState({
      gifs: res.slice(0, 3)
    })
  })
  }
  componentDidMount() {
    this.fetchdata()
  }


  updateSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    }, () => this.fetchNew())
  }

  fetchNew = () => {
    fetch("http://api.giphy.com/v1/gifs/search?q=" + this.state.searchTerm + "&api_key=dc6zaTOxFJmzC&rating=g").then(res=>res.json()).then(json => this.setState({
      gifs: (json.data).slice(0,3)
    }))
  }

  render() {
    return(
      <div>
      <GifSearch searchTerm = {this.updateSearch} />
      <GifList gifs = {this.state.gifs} />
      </div>
    )
  }

}
