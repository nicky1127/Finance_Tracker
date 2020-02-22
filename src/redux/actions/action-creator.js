import * as types from '../constants/action-type';
import axios from 'axios';


//APIs actions
const config = { baseURL: '/api' };
const http = axios.create(config);


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

/**
 * @param {object} record
 */
export const addRecord = (record = {}) => {
  return async dispatch => {
    dispatch(addRecordRequest());

    return await http
    .post('/records', { data: record }).then(
      response => {
        dispatch(addRecordSuccess());
      },
      err => {
        dispatch(addRecordFailure(err));
      }
    );
  };
};

export const addRecordRequest = () => ({ type: types.ADD_RECORD_REQUEST });

export const addRecordSuccess = () => {
  return { type: types.ADD_RECORD_SUCCESS};
};

export const addRecordFailure = err => ({
  type: types.ADD_RECORD_FAILURE,
  payload: err,
  error: true
});

/**
 * @param {object} record
 */
export const updateRecord = (record = {}) => {
  return async dispatch => {
    dispatch(updateRecordRequest());

    return await http
    .patch(`/records/${record.id}`, { data: record }).then(
      response => {
        dispatch(updateRecordSuccess());
      },
      err => {
        dispatch(updateRecordFailure(err));
      }
    );
  };
};

export const updateRecordRequest = () => ({ type: types.ADD_RECORD_REQUEST });

export const updateRecordSuccess = () => {
  return { type: types.ADD_RECORD_SUCCESS};
};

export const updateRecordFailure = err => ({
  type: types.ADD_RECORD_FAILURE,
  payload: err,
  error: true
});

/**
 * @param {object} record
 */
export const deleteRecord = (record = {}) => {
  return async dispatch => {
    dispatch(deleteRecordRequest());

    return await http
    .delete(`/records/${record.recordId}`).then(
      response => {
        dispatch(deleteRecordSuccess());
      },
      err => {
        dispatch(deleteRecordFailure(err));
      }
    );
  };
};

export const deleteRecordRequest = () => ({ type: types.DELETE_RECORD_REQUEST });

export const deleteRecordSuccess = () => {
  return { type: types.DELETE_RECORD_SUCCESS};
};

export const deleteRecordFailure = err => ({
  type: types.DELETE_RECORD_FAILURE,
  payload: err,
  error: true
});


