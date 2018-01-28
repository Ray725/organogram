var allStaff = require('./data.json');
var jf = require('jsonfile');

var  Photo_NUMBER = 6;
var oldPhoto = allStaff[Photo_NUMBER];
var newPhoto = {
					"name": "Photo",
					"head": "",
					"deputies": [],
					"senior_staff": [],
					"staff": [],
					"trainees": []
				};

for(var i = 0; i < oldPhoto.length; i++){
	if(oldPhoto[i]["position"] == "Photo Editor"){
		newPhoto["head"] = oldPhoto[i];
	}
	if(oldPhoto[i]["position"] == "Sports Photo Deputy"){
		newPhoto["deputies"].push(oldPhoto[i]);
	}
	if(oldPhoto[i]["position"] == "A&E Photo Deputy"){
		newPhoto["deputies"].push(oldPhoto[i]);
	}
	if(oldPhoto[i]["position"] == "News Photo Deputy"){
		newPhoto["deputies"].push(oldPhoto[i]);
	}
	if(oldPhoto[i]["position"] == "Senior Staff Photographer"){
		newPhoto["senior_staff"].push(oldPhoto[i]);
	}
	if(oldPhoto[i]["position"] == "Staff Photographer"){
		newPhoto["staff"].push(oldPhoto[i]);
	}
	//change if trainee isn't actually called trainee
	if(oldPhoto[i]["position"] == "Trainee"){
		newPhoto["trainees"].push(oldPhoto[i]);
	}
}

jf.writeFile('PhotoHierarchy.json', newPhoto, {spaces: 2}, function (err){
	console.error(err + 'lol');
});