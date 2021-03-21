import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
   
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term },
            headers: { Authorization: 'Client-ID gZo4lLGs2VcRZKzmw3Me0WgHsvUfPN7vmlbNAeXGnhw'}
        });

        this.setState({images:response.data.results});
    }

    
    render() {

        return ( <div className="ui container" style={{marginTop: '10px'}}>

            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images    
            </div>      
        );
    }
}

export default App;