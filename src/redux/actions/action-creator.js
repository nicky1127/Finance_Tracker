import * as types from '../constants/action-type';
import axios from 'axios';

export const addRecord = payload => {
  const obj = { type: types.ADD_RECORD, payload };
  return obj;
};

//APIs actions
const config = { baseURL: '/api' };
const http = axios.create(config);

export const recordList = payer => {
  return async dispatch => {
    return await http.get('/records', { params: { payer } }).then(response => {
      dispatch({ type: types.RECORDS_DATA_LOADED, payload: response ? response.data.data : [] });
    });
  };
};


/**
 * @param {string} payer
 */
export const loadRecordsByPayer = payer => {
  return async dispatch => {
    dispatch(loadRecordsRequest());

    return await http.get('/records', { params: { payer } }).then(
      response => {
        dispatch(loadRecordsSuccess(response.data.data));
      },
      err => {
        dispatch(loadRecordsFailure(err));
      }
    );
  };
};

export const loadRecordsRequest = () => ({ type: types.LOAD_RECORDS_REQUEST });

export const loadRecordsSuccess = records => {
  return { type: types.LOAD_RECORDS_SUCCESS, payload: records };
};

export const loadRecordsFailure = err => ({
  type: types.LOAD_RECORDS_FAILURE,
  payload: err,
  error: true
});

export const recordCreate = (payload = {}) => {
  return async dispatch => {
    await http
      .post('/records', { data: payload })
      .catch(() => console.log('api fails in recordCreate'));
  };
};

export const recordUpdate = (payload = {}) => {
  return async dispatch => {
    await http
      .patch(`/records/${payload.id}`, { data: payload })
      .catch(() => console.log('api fails in recordDelete'));
  };
};

export const recordDelete = (payload = {}) => {
  return async dispatch => {
    await http
      .delete(`/records/${payload.recordId}`)
      .catch(() => console.log('api fails in recordDelete'));
  };
};
