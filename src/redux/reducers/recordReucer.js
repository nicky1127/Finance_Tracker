import * as types from '../constants/action-type';

const initialState = {
  records: [],
  loadRecordsLoading: false,
  loadRecordsError: '',
  error: false,
  recordCreateLoading: false,
  recordDeleteLoading: false
};

const recordReducer = (state = initialState, action) => {
  if (action.type === types.ADD_RECORD) {
    return Object.assign({}, state, {
      recordCreateLoading: true
    });
  }
  if (action.type === types.RECORDS_DATA_LOADED) {
    return Object.assign({}, state, {
      records: action.payload
    });
  }

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

  return state;
};

export default recordReducer;
