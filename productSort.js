var allStaff = require('./data.json');
var jf = require('jsonfile');

var  PRODUCT_NUMBER = 9;
var oldProduct = allStaff[PRODUCT_NUMBER];
console.log(oldProduct);
var newProduct = {
					"name": "Product",
					"head": "",
					"second_head": "",
					"lead_developers": [],
					"teams": [
						{
							"name": "Web-Apps",
							"associates": [],
							"trainees": []
						},
						{
							"name": "Front-End",
							"associates": [],
							"trainees": []
						},
						{
							"name": "Product Design",
							"associates": [],
							"trainees": []
						}
					]
				};

for(var i = 0; i < oldProduct.length; i++){
	console.log(oldProduct[i]);
	if(oldProduct[i]["position"] == "Head of Product"){
		newProduct["head"] = oldProduct[i];
	}
	if(oldProduct[i]["position"] == "Lead Engineer"){
		newProduct["second_head"] = oldProduct[i];
	}
	if(oldProduct[i]["position"] == "Lead Developer"){
		newProduct["lead_developers"].push(oldProduct[i]);
	}
	if(oldProduct[i]["position"] == "Red Team Associate Developer"){
		newProduct["teams"][0]["associates"].push(oldProduct[i]);
	}
	if(oldProduct[i]["position"] == "Red Team Trainee"){
		newProduct["teams"][0]["trainees"].push(oldProduct[i]);
	}
	if(oldProduct[i]["position"] == "Front End Associate Developer"){
		newProduct["teams"][1]["associates"].push(oldProduct[i]);
	}
	if(oldProduct[i]["position"] == "Front End Trainee"){
		newProduct["teams"][1]["trainees"].push(oldProduct[i]);
	}
	if(oldProduct[i]["position"] == "Product Designer"){
		newProduct["teams"][2]["associates"].push(oldProduct[i]);
	}
	if(oldProduct[i]["position"] == "Product Design Trainee"){
		newProduct["teams"][2]["trainees"].push(oldProduct[i]);
	}
}

jf.writeFile('productHierarchy.json', newProduct, {spaces: 2}, function (err){
	console.error(err + 'lol');
});