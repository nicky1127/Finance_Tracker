import { ADD_RECORD, RECORDS_DATA_LOADED, CHANGE_PAYER } from '../constants/action-type';
import axios from 'axios';

export const addRecord = payload => {
  const obj = { type: ADD_RECORD, payload };
  return obj;
};

export const changePayer = payload => {
  const obj = { type: CHANGE_PAYER, payload };
  return obj;
};

//APIs actions
const config = { baseURL: '/api' };
const http = axios.create(config);

export const recordList = payer => {
  return async dispatch => {
    return await http.get('/records', { params: { payer } }).then(response => {
      dispatch({ type: RECORDS_DATA_LOADED, payload: response ? response.data.data : [] });
    });
  };
};

export const recordCreate = (payload = {}) => {
  return async dispatch => {
    await http
      .post('/records', { data: payload })
      .catch(() => console.log('api fails in recordCreate'));
  };
};
