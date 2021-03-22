import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID gZo4lLGs2VcRZKzmw3Me0WgHsvUfPN7vmlbNAeXGnhw'}
}); 