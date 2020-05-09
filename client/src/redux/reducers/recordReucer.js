import * as types from '../constants/action-type';

const initialState = {
  records: [],
  recordToEdit: {},
  recordToDeleteId: null,
  loadRecordsLoading: false,
  loadRecordsError: '',
  addRecordLoading: false,
  addRecordError: '',
  editRecordLoading: false,
  editRecordError: '',
  deleteRecordLoading: false,
  deleteRecordError: '',
  error: false,

  addRecordModalOpen: false,
  editRecordModalOpen: false,
  deleteRecordModalOpen: false
  // recordCreateLoading: false,
  // recordDeleteLoading: false
};

const recordReducer = (state = initialState, action) => {
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

  // Add a record
  if (action.type === types.ADD_RECORD_REQUEST) {
    return Object.assign({}, state, {
      addRecordLoading: true
    });
  }

  if (action.type === types.ADD_RECORD_SUCCESS) {
    return Object.assign({}, state, {
      addRecordLoading: false,
      addRecordModalOpen: false
    });
  }

  if (action.type === types.ADD_RECORD_FAILURE) {
    return Object.assign({}, state, {
      addRecordLoading: false,
      addRecordError: action.payload,
      error: action.error
    });
  }

  //Edit a record
  if (action.type === types.UPDATE_RECORD_REQUEST) {
    return Object.assign({}, state, {
      editRecordLoading: true
    });
  }

  if (action.type === types.UPDATE_RECORD_SUCCESS) {
    return Object.assign({}, state, {
      editRecordLoading: false,
      editRecordModalOpen: false
    });
  }

  if (action.type === types.UPDATE_RECORD_FAILURE) {
    return Object.assign({}, state, {
      editRecordLoading: false,
      editRecordError: action.payload,
      error: action.error
    });
  }

  // Delete a record
  if (action.type === types.DELETE_RECORD_REQUEST) {
    return Object.assign({}, state, {
      deleteRecordLoading: true
    });
  }

  if (action.type === types.DELETE_RECORD_SUCCESS) {
    return Object.assign({}, state, {
      deleteRecordLoading: false,
      deleteRecordModalOpen: false
    });
  }

  if (action.type === types.DELETE_RECORD_FAILURE) {
    return Object.assign({}, state, {
      deleteRecordLoading: false,
      deleteRecordError: action.payload,
      error: action.error
    });
  }

  //Modal
  if (action.type === types.OPEN_ADD_RECORD_MODAL) {
    return Object.assign({}, state, {
      addRecordModalOpen: true
    });
  }

  if (action.type === types.CLOSE_ADD_RECORD_MODAL) {
    return Object.assign({}, state, {
      addRecordModalOpen: false
    });
  }

  if (action.type === types.OPEN_EDIT_RECORD_MODAL) {
    return Object.assign({}, state, {
      editRecordModalOpen: true,
      recordToEdit: action.payload
    });
  }

  if (action.type === types.CLOSE_EDIT_RECORD_MODAL) {
    return Object.assign({}, state, {
      editRecordModalOpen: false,
      recordToEdit: {}
    });
  }

  if (action.type === types.OPEN_DELETE_RECORD_MODAL) {
    return Object.assign({}, state, {
      deleteRecordModalOpen: true,
      recordToDeleteId: action.payload
    });
  }

  if (action.type === types.CLOSE_DELETE_RECORD_MODAL) {
    return Object.assign({}, state, {
      deleteRecordModalOpen: false,
      recordToDeleteId: null
    });
  }

  return state;
};

export default recordReducer;
