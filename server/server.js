// Emails of users who should have admin permissions out of the box
// !!! Should load this from an initial config screen
var admin_emails = [
	"ajlouie@ux-ninja.com",
	"ghh@ddgpartners.com"
];

// Check if the given user is an admin
is_admin = function (user) {
	if (user && user.is_admin) {
		return true;
	} else if (user && user.emails && user.emails.length > 0) {
		var user_email = user.emails[0].address;
		var emails = admin_emails.filter(function (admin_email) {
			return admin_email === user_email;
		});

		// User is an initial admin
		if (emails.length > 0) {
			Meteor.users.update(user._id, {
				$set: { is_admin: true }
			});
			return true;
		} else {
			return false;
		}
		return (emails.length > 0);
	} else {
		return false;
	}
}

Meteor.methods({
	is_admin: function () {
		var user = Meteor.user();
		return is_admin(user);
	},
	edit_user: function (id, name) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Meteor.users.update(id, {
					$set: {profile: {name: name}}
				});			
			}
		}
	},
	make_admin: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Meteor.users.update(id, {
					$set: {is_admin: true}
				});
			}
		}
	},
	revoke_admin: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Meteor.users.update(id, {
					$set: {is_admin: false}
				});
			}
		}
	},
	remove_user: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			var current_user_id = current_user._id.toString();
			var is_this_user = (current_user_id === id);

			if (is_admin(current_user) && !is_this_user) {
				Meteor.users.remove(id);			
			}
		}
	},
	add_inventory: function (metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			Inventory.insert(metadata);			
		}
	},
	edit_inventory: function (id, metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			Inventory.update(id, {$set: metadata});			
		}
	},
	remove_inventory: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			Inventory.remove(id);			
		}
	},
	add_item: function (metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Items.insert(metadata);			
			}
		}
	},
	edit_item: function (id, metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Items.update(id, {$set: metadata});			
			}
		}
	},
	remove_item: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Items.remove(id);			
			}
		}
	},
	add_role: function (metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Roles.insert(metadata);			
			}
		}
	},
	edit_role: function (id, metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Roles.update(id, {$set: metadata});			
			}
		}
	},
	remove_role: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Roles.remove(id);			
			}
		}
	},
	add_status: function (metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Statuses.insert(metadata);			
			}
		}
	},
	edit_status: function (id, metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Statuses.update(id, {$set: metadata});			
			}
		}
	},
	remove_status: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Statuses.remove(id);			
			}
		}
	},
	add_type: function (metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Types.insert(metadata);			
			}
		}
	},
	edit_type: function (id, metadata) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Types.update(id, {$set: metadata});			
			}
		}
	},
	remove_type: function (id) {
		var current_user = Meteor.user();

		if (current_user) {
			if (is_admin(current_user)) {
				Types.remove(id);			
			}
		}
	}
});


Inventory.before.insert(function (userId, doc) {
	doc.createdAt = Date.now();
});

Items.before.insert(function (userId, doc) {
	doc.createdAt = Date.now();
});

Roles.before.insert(function (userId, doc) {
	doc.createdAt = Date.now();
});

Statuses.before.insert(function (userId, doc) {
	doc.createdAt = Date.now();
});

Types.before.insert(function (userId, doc) {
	doc.createdAt = Date.now();
});
