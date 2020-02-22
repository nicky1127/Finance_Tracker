import * as types from '../constants/action-type';

const initialState = {
  records: [],
  loadRecordsLoading: false,
  loadRecordsError: '',
  addRecordLoading: false,
  addRecordError: '',
  deleteRecordLoading: false,
  deleteRecordError: '',
  error: false,
  recordCreateLoading: false,
  recordDeleteLoading: false
};

const recordReducer = (state = initialState, action) => {
  // if (action.type === types.ADD_RECORD) {
  //   return Object.assign({}, state, {
  //     recordCreateLoading: true
  //   });
  // }
  // if (action.type === types.RECORDS_DATA_LOADED) {
  //   return Object.assign({}, state, {
  //     records: action.payload
  //   });
  // }
// new middleare ones
  if (action.type === types.LOAD_RECORDS_REQUEST) {
    return Object.assign({}, state, {
      loadRecordsLoading: true
    });
  }

  if (action.type === types.LOAD_RECORDS_SUCCESS) {
    return Object.assign({}, state, {
      records: action.payload,
      loadRecordsLoading: false
    });
  }

  if (action.type === types.LOAD_RECORDS_FAILURE) {
    return Object.assign({}, state, {
      loadRecordsLoading: false,
      loadRecordsError: action.payload,
      error: action.error
    });
  }

  if (action.type === types.ADD_RECORD_REQUEST) {
    return Object.assign({}, state, {
      addRecordLoading: true
    });
  }

  if (action.type === types.ADD_RECORD_SUCCESS) {
    return Object.assign({}, state, {
      addRecordLoading: false
    });
  }

  if (action.type === types.ADD_RECORD_FAILURE) {
    return Object.assign({}, state, {
      addRecordLoading: false,
      addRecordError: action.payload,
      error: action.error
    });
  }

  if (action.type === types.DELETE_RECORD_REQUEST) {
    return Object.assign({}, state, {
      deleteRecordLoading: true
    });
  }

  if (action.type === types.DELETE_RECORD_SUCCESS) {
    return Object.assign({}, state, {
      deleteRecordLoading: false
    });
  }

  if (action.type === types.DELETE_RECORD_FAILURE) {
    return Object.assign({}, state, {
      deleteRecordLoading: false,
      deleteRecordError: action.payload,
      error: action.error
    });
  }

  return state;
};

export default recordReducer;
