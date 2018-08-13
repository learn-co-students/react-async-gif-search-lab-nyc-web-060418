import React from 'react'

export default class GifSearch extends React.Component{
  state = {
    query: ""
  }

  handleQueryChange = (event) => {   
    this.setState({
      query: event.target.value
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query)
  }

  render(){
    return(
      <form style={{float:"right"}} onSubmit={this.handleSubmit}>
        <label>Search</label>
        <input type="text" value={this.state.query} onChange={this.handleQueryChange}/>
        <button>Submit</button>
      </form>
    )
  }
}