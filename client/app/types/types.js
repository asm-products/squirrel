Template.types.helpers({
	types: function() {
		return Types.find();
	}
});

Template.types.events({
	"click .delete": function (event, template) {
		var button = template.$(event.currentTarget);
		var id = button.attr("data-id");
		return Meteor.call("remove_type", id);
	},
	"click a.edit": function (event, template) {
		var target = template.$(event.currentTarget);
		var target_id = target.attr("data-id");
		template.$("#add_type").addClass("hidden");

		$("tr[id^='view_']").removeClass("hidden");
		template.$("#view_" + target_id).addClass("hidden");

		$("tr[id^='edit_']").addClass("hidden");
		template.$("#edit_" + target_id).removeClass("hidden");
	}
});

Template.add_type.events({
	"blur input, keyup input, focus input, blur select, keyup select, focus select": function (event, template) {
		if (has_empty_fields(template)) {
			$("#add").addClass("disabled");
		} else {
			$("#add").removeClass("disabled");
		}
	},
	"keyup input": function (event, template) {
		if (event.which === 13) {
			var target = template.$(event.currentTarget);
			console.log(event.currentTarget.id);
			var is_add_button = (target.attr("id") === "add");

			if (!is_add_button && !has_empty_fields(template)) {
				$("#add").click();
			}
		}
	},
	"click #add": function (event, template) {
		if (!has_empty_fields(template)) {
			var fields = $.makeArray( template.$("input, select") );
			var metadata = _.reduce(fields, function (memo, field) {
				memo[field.name] = field.value;
				return memo;
			}, {});

			Meteor.call("add_type", metadata);

			template.$("input").each(function (index) {
				this.value = "";
				if (index == 0) {
					this.focus();
				}
			});			
		}
	}
});

Template.edit_type.events({
	"blur input, keyup input, focus input, blur select, keyup select, focus select": function (event, template) {
		if (has_empty_fields(template)) {
			template.$(".save").addClass("disabled");
		} else {
			template.$(".save").removeClass("disabled");
		}
	},
	"keyup input": function (event, template) {
		if (event.which === 13) {
			var target = template.$(event.currentTarget);
			var is_save_button = target.hasClass("save");

			if (!is_add_button && !has_empty_fields(template)) {
				template.$(".save").click();
			}
		}
	},
	"click .save": function (event, template) {
		if (!has_empty_fields(template)) {
			var target = template.$(event.currentTarget);
			var target_id = target.attr("data-id");
			var fields = $.makeArray( template.$("input, select") );
			var metadata = _.reduce(fields, function (memo, field) {
				memo[field.name] = field.value;
				return memo;
			}, {});

			Meteor.call("edit_type", target_id, metadata);

			$("#add_type").removeClass("hidden");
			$("#view_" + target_id)
				.removeClass("hidden")
				.addClass("success");
			$("#edit_" + target_id).addClass("hidden");
		}
	},
	"click .cancel": function (event, template) {
		var target = template.$(event.currentTarget);
		var target_id = target.attr("data-id");
		$("#add_type").removeClass("hidden");
		$("#view_" + target_id).removeClass("hidden");
		$("#edit_" + target_id).addClass("hidden");
	}
});

