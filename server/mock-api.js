const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

router.use(bodyParser.json());

const name = 'mock-api.finance-recorder';
const port = 8000;

const apiBase = '/api';

function log() {
  const args = [...arguments];
  const dt = moment().format('YYYY-MM-DD HH:mm:ss');
  args.unshift(`[${dt}]`);
  console.log(...args);
}

//Records
let records = require('./mock/api/records');

function recordsListByPayer(req, res) {
  const { payer } = req.query;
  const recordsObj = [...records].filter(record => record.payer === payer);
  // setTimeout(()=>res.json({ data: recordsObj }), 1000);
  res.json({ data: recordsObj });
}
router.get(`${apiBase}/records`, recordsListByPayer);

function recordCreate(req, res) {
  const record = req.body.data;
  records.push(record);
  setTimeout(() => res.json({ data: record.id }), 2000);
  // res.json({ data: record.id });
}
router.post(`${apiBase}/records`, recordCreate);

function recordUpdate(req, res) {
  const recordObj = req.body.data;
  const idx = records.findIndex(record => record.id.toString() === recordObj.id.toString());
  records[idx].title = recordObj.title;
  records[idx].date = recordObj.date;
  records[idx].price = recordObj.price;
  records[idx].isPaid = recordObj.isPaid;
  setTimeout(()=>res.json({ data: records[idx].id }), 1000);
  // res.json({ data: records[idx].id });
}
router.patch(`${apiBase}/records/:recordId`, recordUpdate);

function recordDelete(req, res) {
  const { recordId } = req.params;
  records = [...records].filter(record => record.id.toString() !== recordId.toString());
  res.json({});
}
router.delete(`${apiBase}/records/:recordId`, recordDelete);

//=======================================================
app.use(router);
app.listen(port, () => log(`${name} listening on port ${port}`));
//=======================================================
