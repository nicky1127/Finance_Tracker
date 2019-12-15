import { ADD_RECORD, RECORDS_DATA_LOADED } from '../constants/action-type';

const initialState = {
    records: [],
    recordCreateLoading: false,
    recordDeleteLoading: false

};

const recordReducer = ( state = initialState, action ) => {
    if (action.type === ADD_RECORD){
        return Object.assign({}, state, 
            {
                recordCreateLoading: true
            }
        );
    }
    if(action.type === RECORDS_DATA_LOADED){
        return Object.assign({}, state, {
            records: action.payload
        });
    }

    return state;
};

export default recordReducer;