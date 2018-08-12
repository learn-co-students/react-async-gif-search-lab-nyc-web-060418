import React from 'react';


class GifList extends React.Component {


    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li> )}
                </ul>    
            </div>  
        )
    }
}

export default GifList;