Meteor.publish("inventory", function() {
	this.unblock();
	return Inventory.find();
});

Meteor.publish("items", function() {
	this.unblock();
	return Items.find();
});

Meteor.publish("roles", function() {
	this.unblock();
	return Roles.find();
});

Meteor.publish("statuses", function() {
	this.unblock();
	return Statuses.find();
});

Meteor.publish("types", function() {
	this.unblock();
	return Types.find();
});
