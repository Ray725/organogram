var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1rxiYolFz0xj6tfgaiD3_nwZUKuM4SxHkMOXXA2uq6Hc');
var sheet;

async.series([
  function setAuth(step) {
    // see notes below for authentication instructions!
    var creds = require('./organogramAllstaff-d5ab7eaeb68c.json');
    doc.useServiceAccountAuth(creds, step);
  },
  function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
      sheet = info.worksheets[0];
      console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
      step();
    });
  },
  function workingWithRows(step) {
    sheet.getRows({
      offset: 1
    }, function( err, rows ){
      console.log('Read '+rows.length+' rows');
      console.log(rows[0]);
      rows[0].save(); // this is async

      step();
    });
  }
], function(err){
    if( err ) {
      console.log('Error: '+err);
    }
});
