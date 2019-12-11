const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser')

const router = express.Router();
const app = express();

router.use(bodyParser.json());

const name = 'mock-api.finance-recorder';
const port = process.env.PORT || 5000;

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
  const recordsObj = [...records].filter(record=>record.payer===payer);
  res.json({ data: recordsObj });
}
router.get(`${apiBase}/records`, recordsListByPayer);

function recordCreate(req, res) {
  const record = req.body.data;
  records.push(record);
  res.json({data: record.id});
}
router.post(`${apiBase}/records`, recordCreate);

//=======================================================
app.use(router);
app.listen(port, () => log(`${name} listening on port ${port}`));
//=======================================================
