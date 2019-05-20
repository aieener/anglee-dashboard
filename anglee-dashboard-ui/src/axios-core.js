import axios from 'axios';

const instance = axios.create({
  baseURL: "https://anglee-dashboard-core.herokuapp.com"
});

instance.defaults.headers.common['Auth-Token'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;