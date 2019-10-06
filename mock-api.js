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

function recordsList(req, res) {
  const recordsObj = [...records];
  res.json({ data: recordsObj });
}
router.get(`${apiBase}/records`, recordsList);

function recordCreate(req, res) {
  console.log('==================');
  console.log('req: ',req);
  console.log('req.body: ',req.body);
  console.log('req.body.data: ',req.body.data);
  const record = req.body.data;
  records.push(record);
  res.json({data: record.id});
}
router.post(`${apiBase}/records`, recordCreate);

//=======================================================
app.use(router);
app.listen(port, () => log(`${name} listening on port ${port}`));
//=======================================================
