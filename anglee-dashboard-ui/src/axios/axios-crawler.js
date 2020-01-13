import axios from 'axios';
const instance = axios.create({
  baseURL: "https://anglee-dashboard-crawler.herokuapp.com"
});

export default instance;