import React, { Component } from 'react';

export default class GiffSearch extends Component {
  state = {
    searchTerm: ''
  }

  updateSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handler(this.state.searchTerm)
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      Enter a Search Term: <br/>
      <input value={this.state.searchTerm} name='searchBar' type='text' onChange={this.updateSearch}/>
      <button type='submit'>Find Gifs</button>
      </form>
      </div>
    )
  }
}


// colors = {
//   black: 'navbar-inverse',
//   white: 'navbar-default'
// }
// <nav className={`navbar ${this.colors[this.props.color]}`}>
//   <div className='container-fluid'>
//     <div className='navbar-header'>
//       <a className='navbar-brand'>
//         Hello
//       </a>
//     </div>
//   </div>
// </nav>
