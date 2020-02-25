import axios from 'axios';

const config = { baseURL: '/api' };
const http = axios.create(config);

export const loadRecordsByPayer = payer => http.get('/records', { params: { payer } });

export const addRecord = record => http.post('/records', { data: record });

export const updateRecord = record => http.patch(`/records/${record.id}`, { data: record });

export const deleteRecord = record => http.delete(`/records/${record.recordId}`);
