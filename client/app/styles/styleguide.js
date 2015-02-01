Template.styleguide.helpers({
	colors: function () {
		var main_palette = [
			"red",
			"green",
			"yellow",
			"blue",
			"gray"
		];
		var variants = [
			"-70",
			"-40",
			"-10",
			"-5",
			"-dark-30",
			"-dark-60"
		];
		var colors = main_palette.map(function (color) {
			var color_variants = variants.map(function (variant) {
				return color + variant;
			});
			return {
				color: color,
				variants: color_variants
			};
		});
		return colors;
	},
	typefaces: function () {
		return [
			{
				role: "Primary",
				name: "Roboto Slab",
				class: "font-primary"
			},
			{
				role: "Secondary",
				name: "Roboto Condensed",
				class: "font-secondary"
			},
			{
				role: "Body",
				name: "Roboto Sans",
				class: "font-body"
			}
		];
	},
	font_weights: function () {
		return [
			"font-light",
			"font-normal",
			"font-semibold",
			"font-bold",
			"font-italic"
		];
	},
	text_sizes: function () {
		return [
			"text-xs",
			"text-sm",
			"text-md",
			"text-lg",
			"text-xl"
		];
	},
	dummy_text: function () {
		return {
			headline: "Quick fox jumps nightly above wizard.",
			lead: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
			paragraph: "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
			specimen: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0 1 2 3 4 5 6 7 8 9 0"
		};
	},
	margins: function () {
		var margins = [];
		for (var i=0; i<10; i++) {
			margins[i] = "margin-" + (i+1);
		}
		return margins.concat(["margin-none","margin-bottom-none","margin-top-none"]);
	},
	paddings: function () {
		var paddings = [];
		for (var i=0; i<10; i++) {
			paddings[i] = "padding-" + (i+1);
		}
		return paddings.concat(["padding-none","padding-bottom-none","padding-top-none"]);
	}
});
