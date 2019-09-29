import { ADD_RECORD, RECORDS_DATA_LOADED } from '../constants/action-type';
import axios from 'axios';



export const addRecord = payload => {
  const obj = { type: ADD_RECORD, payload };
  return obj;
};





//=====================================
const config = {baseURL:'/api'};
const http = axios.create(config);


export const recordList = () => {
  return async dispatch => {
    return await http.get('/records')
      .then(response => {
        dispatch({ type: RECORDS_DATA_LOADED, payload: response? response.data.data: [] });
      });
  };
};
