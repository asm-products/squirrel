// Routes

// User Screens

Router.route('/', function () {
	this.layout('app');
	this.render('home', {to: 'content'});
});

Router.route('/inventory', function () {
	this.layout('app');
	this.render('inventory', {to: 'content'});
});

Router.route('/inventory/:_id', function () {
	this.layout('admin');
	var inventory = Inventory.findOne({_id: this.params._id});
	this.render('edit_inventory', {
		data: inventory,
		to: 'content'
	});
});

Router.route('/user', function () {
	this.layout('app');
	this.render('user', {to: 'content'});
});

// Admin Screens

Router.route('/admin', function () {
	this.layout('admin');
	this.render('admin_home', {to: 'content'});
});

Router.route('/admin/items', function () {
	this.layout('admin');
	this.render('items', {to: 'content'});
});

Router.route('/admin/item/:_id', function () {
	this.layout('admin');
	var item = Items.findOne({_id: this.params._id});
	this.render('edit_item', {
		data: item,
		to: 'content'
	});
});

Router.route('/admin/roles', function () {
	this.layout('admin');
	this.render('roles', {to: 'content'});
});

Router.route('/admin/role/:_id', function () {
	this.layout('admin');
	var role = Roles.findOne({_id: this.params._id});
	this.render('edit_role', {
		data: role,
		to: 'content'
	});
});

Router.route('/admin/statuses', function () {
	this.layout('admin');
	this.render('statuses', {to: 'content'});
});

Router.route('/admin/status/:_id', function () {
	this.layout('admin');
	var status = Statuses.findOne({_id: this.params._id});
	this.render('edit_status', {
		data: status,
		to: 'content'
	});
});

Router.route('/admin/users', function () {
	this.layout('admin');
	this.render('users', {to: 'content'});
});

Router.route('/admin/types', function () {
	this.layout('admin');
	this.render('types', {to: 'content'});
});

Router.route('/admin/type/:_id', function () {
	this.layout('admin');
	var type = Types.findOne({_id: this.params._id});
	this.render('edit_type', {
		data: type,
		to: 'content'
	});
});

// Styleguide

Router.route('/styleguide', function () {
	this.render('styleguide');
});
