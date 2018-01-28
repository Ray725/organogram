var fs = require('fs');

fs.readFile('data.json', function(err, data) {
  var dataJson = JSON.parse(data);
  var designList = dataJson[5];
  var dumpJson = {
    "name": "Design",
    "head": "",
    "deputies": [],
    "associates": [],
    "trainees": []
  };

  for(var i = 0; i < designList.length; i++) {
    if(designList[i].position == "Design Editor") {
      dumpJson.head = designList[i];
    } else if(designList[i].position == "Layout Deputy" || designList[i].position == "Sports Graphics Deputy" || designList[i].position == "Illustrations Deputy" || designList[i].position == "design Graphics Deputy") {
      dumpJson.deputies.push(designList[i]);
    } else if(designList[i].position == "Data Projects" || designList[i].position == "Illustrator" || designList[i].position == "Designer") {
      dumpJson.associates.push(designList[i]);
    } else {
      dumpJson.trainees.push(designList[i]);
    }
  }


  fs.writeFile("./design.json", JSON.stringify(dumpJson), function(err) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("file created");
  });

});
