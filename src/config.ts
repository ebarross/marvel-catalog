export default {
  apiUrl:
    process.env.REACT_APP__API_URL ||
    'https://gateway.marvel.com:443/v1/public',
  apiKey: process.env.REACT_APP__API_KEY || '816d5731d006897abf3608866d6aa40e',
};
