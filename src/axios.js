import axios from 'axios'
const instance = axios.create({
    // baseURL: 'https://apimusic.linweiqin.com',
	baseURL:'http://rrafa.icu:3000',
});
export default instance;