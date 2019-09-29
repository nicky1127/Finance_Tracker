import { ADD_RECORD } from '../constants/action-type';

export const addRecord = payload => {
  const obj = { type: ADD_RECORD, payload };
  return obj;
};

export const recordList = () => {
  return dispatch => {
    return fetch('http://localhost:5000/api/records')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'RECORDS_DATA_LOADED', payload: json.data });
      });
  };
};
