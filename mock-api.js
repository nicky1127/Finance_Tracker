const express = require('express');
const router = express.Router();

const apiBase = '/api';

//Records
let records = require('./mock/api/records');

function plansList(req,res){
    const recordsObj = [...records];
    res.json({data: recordsObj});
}

router.get(`${apiBase}/records`, plansList);