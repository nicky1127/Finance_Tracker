import { ADD_RECORD, RECORDS_DATA_LOADED, CHANGE_PAYER } from '../constants/action-type';

const initialState = {
    records: [],
    payer: 'nina'
};

const recordReducer = ( state = initialState, action ) => {
    if (action.type === ADD_RECORD){
        return Object.assign({}, state, 
            {
                records: state.records.concat(action.payload)
            }
        );
    }
    if (action.type === CHANGE_PAYER){
        return {...state, payer: action.payload};
    }
    if(action.type === RECORDS_DATA_LOADED){
        return Object.assign({}, state, {
            records: action.payload
        });
    }

    return state;
};

export default recordReducer;