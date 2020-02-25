import * as types from '../constants/action-type';
import * as api from './api';

//APIs actions

/**
 * @param {string} payer
 */
export const loadRecordsByPayer = payer => {
  return async dispatch => {
    dispatch(loadRecordsRequest());

    return await api.loadRecordsByPayer(payer).then(
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
  payload: err.response.data.error,
  error: true
});

/**
 * @param {object} record
 */
export const addRecord = (record = {}) => {
  return async dispatch => {
    dispatch(addRecordRequest());

    return await api.addRecord(record).then(
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
  return { type: types.ADD_RECORD_SUCCESS };
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

    return await api.updateRecord(record).then(
      response => {
        dispatch(updateRecordSuccess());
      },
      err => {
        dispatch(updateRecordFailure(err));
      }
    );
  };
};

export const updateRecordRequest = () => ({ type: types.UPDATE_RECORD_REQUEST });

export const updateRecordSuccess = () => {
  return { type: types.UPDATE_RECORD_SUCCESS };
};

export const updateRecordFailure = err => ({
  type: types.UPDATE_RECORD_FAILURE,
  payload: err,
  error: true
});

/**
 * @param {object} record
 */
export const deleteRecord = (record = {}) => {
  return async dispatch => {
    dispatch(deleteRecordRequest());

    return await api.deleteRecord(record).then(
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
  return { type: types.DELETE_RECORD_SUCCESS };
};

export const deleteRecordFailure = err => ({
  type: types.DELETE_RECORD_FAILURE,
  payload: err,
  error: true
});

//Modal

export const openAddRecordModal = () => ({
  type: types.OPEN_ADD_RECORD_MODAL
});

export const closeAddRecordModal = () => ({
  type: types.CLOSE_ADD_RECORD_MODAL
});

export const openEditRecordModal = record => ({
  type: types.OPEN_EDIT_RECORD_MODAL,
  payload: record
});

export const closeEditRecordModal = () => ({
  type: types.CLOSE_EDIT_RECORD_MODAL
});

export const openDeleteRecordModal = recordId => ({
  type: types.OPEN_DELETE_RECORD_MODAL,
  payload: recordId
});

export const closeDeleteRecordModal = () => ({
  type: types.CLOSE_DELETE_RECORD_MODAL
});