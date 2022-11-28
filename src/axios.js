import axios from 'axios'
const instance = axios.create({
    // baseURL: 'https://apimusic.linweiqin.com',
	baseURL:'http://cloud-music.pl-fe.cn/',
});
export default instance;
