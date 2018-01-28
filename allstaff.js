var gsjson = require('google-spreadsheet-to-json');

gsjson({
    spreadsheetId: '1rxiYolFz0xj6tfgaiD3_nwZUKuM4SxHkMOXXA2uq6Hc'
}).then(function(result) {
    console.log(result.length);
    console.log(result);
}).catch(function(err) {
    console.log(err.message);
    console.log(err.stack);
});
