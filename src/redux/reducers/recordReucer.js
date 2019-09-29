import { ADD_RECORD } from '../constants/action-type';

const initialState = {
    records: []
};

const recordReducer = ( state = initialState, action ) => {
    if (action.type === ADD_RECORD){
        console.log('action.payload:', action.payload);
        return Object.assign({}, state, 
            {
                records: state.records.concat(action.payload)
            }
        );
    }
    return state;
};

export default recordReducer;