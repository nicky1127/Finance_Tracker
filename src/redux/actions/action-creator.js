import { ADD_RECORD } from '../constants/action-type';

export const addRecord = payload => {
    const obj = {type: ADD_RECORD, payload};
    return obj;
};