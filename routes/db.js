var express = require('express')
var router = express.Router()


// setup sqlite and access database
const sqlite3 = require('sqlite3').verbose();

router.get('/', (req, res) => {
  
  let db = new sqlite3.Database('./app/sql/death-db',sqlite3.OPEN_READONLY ,(err) => {
    if(err){
      console.error(err);
    }
    console.log('Connected to the Us Deaths Database');
  });
  
  // perform sqlite query
  let sql = `SELECT * 
             FROM US_Deaths`;
  let quantifier = 'Deaths Per Year'

  db.all(sql,[],(err, rows) => {
    if(err){
      throw(err);
    }
    res.send(rows);
  });
  

  //close sqlite database
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
})

router.get('/:dataset', (req, res) => {
  
  const dbTableMap = {
    'US_Deaths': 'SELECT * FROM US_Deaths',
    'Breakdown_Overview': 'SELECT * FROM Breakdown_Overview',
    'Breakdown_Race': 'SELECT * FROM Breakdown_Race',
    'Breakdown_Age': 'SELECT * FROM Breakdown_Age',
    'State_and_USPop_Overview': 'SELECT * FROM State_and_USPop_Overview',
    'State_and_USPop_Breakdown': 'SELECT * FROM State_and_USPop_Breakdown',
    'State_and_USPop_Race': 'SELECT * FROM State_and_USPop_Race',
    'Firearm_Breakdown': 'SELECT * FROM Firearm_Breakdown',
  }
  
  
  let db = new sqlite3.Database('./app/sql/death-db',sqlite3.OPEN_READONLY ,(err) => {
    if(err){
      console.error(err);
    }
    console.log('Connected to the Us Deaths Database');
  });
  
  // perform sqlite query
  let sql = dbTableMap[req.params.dataset]
  db.all(sql,[],(err, rows) => {
    if(err){
      throw(err);
    }
    res.send(rows);
  });
  

  //close sqlite database
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
})

module.exports = router;