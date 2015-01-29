/* Global functions */
has_empty_fields = function (template) {
	var fields = template.$("input, select");
	var empty_fields = fields.filter(function (field) {
			var val = $(this).val();
			return (val === "" || val === undefined || val === null);
		});
	return (empty_fields.length > 0);
};

/* Global Spacebars helpers */
UI.registerHelper('log_to_console', function (context, options) {
	if(context) {
		console.log(context);
	}
});

UI.registerHelper('selected_if_eq', function (arg1, arg2, options) {
	if (arg1 === arg2) {
		return "selected";
	}
});

UI.registerHelper('session_get', function (name, options) {
	if(name) {
		return Session.get(name);
	}
});

UI.registerHelper('user_is_anonymous', function () {
	var user_id = Meteor.userId();

	if (user_id && (user_id != null)) {
		return false;
	} else {
		return true;
	}	
});

UI.registerHelper('user_is_admin', function () {
	Meteor.call("is_admin", function (error, result) {
		if (!error) {
			Session.set("is_admin", result);
		}
	});
	return Session.get("is_admin");
});

UI.registerHelper('viewport_is_xs', function () {
	var window_width = $(window).width();
	return (window_width < 768);
});
