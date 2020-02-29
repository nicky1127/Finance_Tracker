const express = require('express');
require('express-async-errors');
const moment = require('moment');
const bodyParser = require('body-parser');
const createError = require('http-errors');

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
  const recordsObj = [...records].filter(record => record.payer === payer);
  // setTimeout(()=>res.json({ data: recordsObj }), 1000);
  res.json({ data: recordsObj });
  // throw createError(404, `Failed to laod records related to ${payer}`);
}
router.get(`${apiBase}/records`, recordsListByPayer);


const promiseTimeout = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
    }, delay)
  })

async function recordCreate(req, res) {
  const record = req.body.data;

  await promiseTimeout(1000).catch(()=>{throw createError(404, `Failed to add record related to ${record.payer}`)});
  // throw createError(404, `Failed to add record related to ${record.payer}`);
  // records.push(record);
  // setTimeout(() => res.json({ data: record.id }), 2000);
  // res.json({ data: record.id });
};
router.post(`${apiBase}/records`, recordCreate);

function recordUpdate(req, res) {
  const recordObj = req.body.data;
  throw createError(404, `Failed to update record related to`);
  const idx = records.findIndex(record => record.id.toString() === recordObj.id.toString());
  records[idx].title = recordObj.title;
  records[idx].date = recordObj.date;
  records[idx].price = recordObj.price;
  records[idx].isPaid = recordObj.isPaid;
  setTimeout(() => res.json({ data: records[idx].id }), 1000);
  // res.json({ data: records[idx].id });
}
router.patch(`${apiBase}/records/:recordId`, recordUpdate);

function recordDelete(req, res) {
  const { recordId } = req.params;
  throw createError(404, `Failed to delete the record`);
  records = [...records].filter(record => record.id.toString() !== recordId.toString());
  res.json({});
}
router.delete(`${apiBase}/records/:recordId`, recordDelete);

//=======================================================
app.use(router);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.log('err.expose:',err.expose)
  if (err.expose === undefined) {
    console.log('err.expose:',err.expose)
    const httpErr = createError(500);
    res.status(httpErr.status).json({ error: httpErr.message });
  } else {
    res.status(err.status).json({ error: err.message });
  }
});

app.listen(port, () => log(`${name} listening on port ${port}`));
//=======================================================
