import axios from 'axios';

const instance = axios.create({
  baseURL: "https://anglee-dashboard-core.herokuapp.com"
});
const instance = axios.create();

export default instance;