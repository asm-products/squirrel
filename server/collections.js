Inventory = new Mongo.Collection("inventory");
Items = new Mongo.Collection("items");
Roles = new Mongo.Collection("roles");
Statuses = new Mongo.Collection("statuses");
Types = new Mongo.Collection("types");

var seedItems = function () {

	//Items.remove({});

	var num_items = Items.find({}).count();

	if (num_items != undefined) {

		console.log("There are", num_items, "items in the database.");

		if (num_items < 1) {
			// Database is empty. Re-populate it.
			var docs = [
				{
					name: "Hammer"
				},
				{
					name: "Drill"
				},
				{
					name: "Philips screwdriver"
				},
				{
					name: "Backhoe"
				},
				{
					name: "Steamroller"
				},
				{
					name: "Nails"
				},
				{
					name: "Screws"
				}
			];

			// Loop through each of the docs and add it to the database
			_.each(docs, function(doc) {
				Items.upsert(doc, {$set: doc});
				console.log(doc.name);
			});
		}
	}
}


var seedStatuses = function () {

	//Statuses.remove({});

	var num_statuses = Statuses.find({}).count();

	if (num_statuses != undefined) {

		console.log("There are", num_statuses, "statuses in the database.");

		if (num_statuses < 1) {
			// Database is empty. Re-populate it.
			var docs = [
				{
					name: "In use",
					order: 0
				},
				{
					name: "Available",
					order: 1
				},
				{
					name: "Reserved",
					order: 2
				},
				{
					name: "Delivered",
					order: 3
				},
				{
					name: "Ordered",
					order: 4
				},
				{
					name: "Awaiting Delivery",
					order: 5
				},
				{
					name: "Received",
					order: 6
				}
			];

			// Loop through each of the docs and add it to the database
			_.each(docs, function(doc) {
				Statuses.upsert(doc, {$set: doc});
				console.log(doc.name);
			});
		}
	}
}

var seedRoles = function () {

	//Roles.remove({});

	var num_roles = Roles.find({}).count();

	if (num_roles != undefined) {

		console.log("There are", num_roles, "roles in the database.");

		if (num_roles < 1) {
			// Database is empty. Re-populate it.
			var docs = [
				{
					name: "Mason"
				},
				{
					name: "Carpenter"
				}
			];

			// Loop through each of the docs and add it to the database
			_.each(docs, function(doc) {
				Roles.upsert(doc, {$set: doc});
				console.log(doc.name);
			});
		}
	}
}

var seedTypes = function () {

	//Types.remove({});

	var num_types = Types.find({}).count();

	if (num_types != undefined) {

		console.log("There are", num_types, "types in the database.");

		if (num_types < 1) {
			// Database is empty. Re-populate it.
			var docs = [
				{
					name: "Reusable",
					order: 0
				},
				{
					name: "Expendable",
					order: 1
				},
				{
					name: "Material",
					order: 2
				}
			];

			// Loop through each of the docs and add it to the database
			_.each(docs, function(doc) {
				Types.upsert(doc, {$set: doc});
				console.log(doc.name);
			});
		}
	}
}

Meteor.startup(seedItems);
Meteor.startup(seedRoles);
Meteor.startup(seedStatuses);
Meteor.startup(seedTypes);
