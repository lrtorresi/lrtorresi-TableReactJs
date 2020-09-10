import axios from 'axios';

const api = axios.create({
    baeUrl: 'http://localhost:5000/api/v1/menu/bentocafenovo',
})

export default api;