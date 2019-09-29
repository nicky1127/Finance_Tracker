const express = require('express');
const moment = require('moment');

const router = express.Router();
const app = express();

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

function plansList(req, res) {
  const recordsObj = [...records];
  res.json({ data: recordsObj });
}

router.get(`${apiBase}/records`, plansList);

//=======================================================
app.use(router);
app.listen(port, () => log(`${name} listening on port ${port}`));
//=======================================================
