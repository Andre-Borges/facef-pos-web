import axios from 'axios';
import { configs } from '../configs';

export const getPrice = () => {
  //return axios.get("https://economia.awesomeapi.com.br/json/all");
  return axios.request({ url: configs.apis.economia });
};
