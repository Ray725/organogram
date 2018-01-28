var fs = require("fs");
console.log("\n *STARTING* \n");


fs.readFile('data.json', function(err, data) {
  var dataJson = JSON.parse(data);
  var opinionList = dataJson[1];

  var hiercontents = {
    "name": "Opinion",
    "head": "",
    "head-title": "Editorial Page Editor",
    "teams": [
      {
        "name": "Op-Ed",
        "deputies": "",
        "associates": [],
        "trainees": []
      },
      {
        "name": "Columns",
        "deputies": "",
        "associates": [],
        "trainees": []
      },
      {
        "name": "Projects",
        "deputies": "",
        "associates": [],
        "trainees": []
      }
    ]
  }

  for(var i = 0; i < opinionList.length; i++) {
    if(opinionList[i].position == "Editorial Page Editor") {
      hiercontents.head = opinionList[i];
    }
    else if (opinionList[i].position == "Deputy Editorial Page Editor - Op-Eds"){
          hiercontents.teams[0].deputies = opinionList[i];
      }
    else if (opinionList[i].position == "Associate Editorial Page Editor - Op-Eds"){
          hiercontents.teams[0].associates.push(opinionList[i]);
      }
    else if (opinionList[i].position == "Trainee Editorial Page Editor - Op-Eds"){
          hiercontents.teams[0].trainees.push(opinionList[i]);
      }
      else if (opinionList[i].position == "Deputy Editorial Page Editor - Columns"){
          hiercontents.teams[1].deputies = opinionList[i];
      }

      else if (opinionList[i].position == "Associate Editorial Page Editor - Columns"){
            hiercontents.teams[1].associates.push(opinionList[i]);
        }
      else if (opinionList[i].position == "Trainee Editorial Page Editor - Columns"){
            hiercontents.teams[1].trainees.push(opinionList[i]);
        }
    else if (opinionList[i].position == "Deputy Editorial Page Editor - Projects"){
          hiercontents.teams[2].deputies = opinionList[i];
      }
    else if (opinionList[i].position == "Associate Editorial Page Editor - Projects"){
          hiercontents.teams[2].associates.push(opinionList[i]);
      }
      else if (opinionList[i].position == "Trainee Editorial Page Editor - Projects"){
          hiercontents.teams[2].trainees.push(opinionList[i]);
      } else {
      hiercontents.trainees.push(opinionList[i]);
    }
  }

  fs.writeFile("./opinionHierarchy.json", JSON.stringify(hiercontents, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
    }

});
})
