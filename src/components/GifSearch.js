import React from 'react';


class GifSearch extends React.Component {
    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state.value)

    }

    render() {
        return (
            <div>
                <h4>Enter a Search Term:</h4>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Find Gifs" />
                </form>
            </div>    
        )
    }
}

export default GifSearch;