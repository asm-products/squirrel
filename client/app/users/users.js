Template.users.helpers({
	users: function () {
		return Meteor.users.find();
	},
	is_this_user: function () {
		current_user_id = Meteor.userId();
		this_user_id = this._id;
		return (current_user_id === this_user_id);
	}
});

Template.users.events({
	"click .make-admin": function (event, template) {
		var button = template.$(event.currentTarget);
		var user_id = button.attr("data-id");
		return Meteor.call("make_admin", user_id);
	},
	"click .revoke-admin": function (event, template) {
		var button = template.$(event.currentTarget);
		var user_id = button.attr("data-id");
		return Meteor.call("revoke_admin", user_id);
	},
	"click .delete": function (event, template) {
		var button = template.$(event.currentTarget);
		var user_id = button.attr("data-id");
		return Meteor.call("remove_user", user_id);
	}
});

Template.user.helpers({
});

Template.user.events({
	"blur #user_profile_form input, keyup #user_profile_form input, focus #user_profile_form input": function (event, template) {
		var fields = $("#user_profile_form input[type=text]");
		var empty_fields = fields.filter(function (index) {
				return (this.value === '');
			});
		var form = template.find("#user_profile_form");

		if (empty_fields.length === 0) {
			$("#user_profile_save").removeClass("disabled");
		} else {
			$("#user_profile_save").addClass("disabled");
		}
	},
	"click #user_profile_cancel": function (event, template) {
		window.location.href = "/";
	},
	"click #user_profile_save": function (event, template) {
		var user_id = Meteor.userId();

		// Only logged-in user may edit their profile
		if (user_id) {
			var form = template.find("#user_profile_form");
			var display_name = form.display_name.value;
			var empty_regex = /^\s*$/;


			if ( !(empty_regex.test(display_name)) ) {
				fields = {
					profile: {
						name: display_name
					}
				};

				// Put it into the database
				Meteor.users.update({_id: user_id}, {$set: fields});
			} else {
				console.log("Name field cannot be empty.");
			}
		} else {
			console.log("You are not logged in.");
		}

		// Prevent default form submit
		return false;
	}
});
