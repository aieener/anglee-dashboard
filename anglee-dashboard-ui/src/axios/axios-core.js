import axios from "axios";

const instance = axios.create({
    baseURL: "https://anglee-dashboard-core.herokuapp.com"
});
export default instance;
