import axios from "axios";

const instance = axios.create({
  timeout: 180000
});

const Network = (baseUrl = "http://www.omdbapi.com/?apikey=a5435674") => {
  instance.defaults.baseURL = baseUrl;
  return instance;
};

// console.log('Network :::',Network())
export default Network;
