import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || '';

export default axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
  },
});
