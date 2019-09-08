var fs = require('fs');

fs.readFile('data.json', function(err, data) {
  var dataJson = JSON.parse(data);
  var newsList = dataJson[0];
  var dumpJson = {
    "name": "News",
    "head": "",
    "deputies": [],
    "associates": [],
    "trainees": []
  };

  for(var i = 0; i < newsList.length; i++) {
    if(newsList[i].position == "News Editor") {
      dumpJson.head = newsList[i];
    } else if(newsList[i].position == "Senior Staff Writer") {
      dumpJson.deputies.push(newsList[i]);
    } else if(newsList[i].position == "Staff Writer") {
      dumpJson.associates.push(newsList[i]);
    } else {
      dumpJson.trainees.push(newsList[i]);
    }
  }

  fs.writeFile("./news.json", JSON.stringify(dumpJson), function(err) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("file created");
  });

});
