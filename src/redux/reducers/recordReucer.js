import { ADD_RECORD, RECORDS_DATA_LOADED } from '../constants/action-type';

const initialState = {
    records: []
};

const recordReducer = ( state = initialState, action ) => {
    if (action.type === ADD_RECORD){
        return Object.assign({}, state, 
            {
                records: state.records.concat(action.payload)
            }
        );
    }
    if(action.type === RECORDS_DATA_LOADED){
        return Object.assign({}, state, {
            records: state.records.concat(action.payload)
        });
    }
    return state;
};

export default recordReducer;