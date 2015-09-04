define(function (require) {

	getListItemPath = require('getListItemPath');
	getListItemPaths = require('getListItemPaths');

	var selected = '[selected=selected]';
	var tree = 'ul'
	console.log('first path', getListItemPath(tree, $(selected).first()).join('/'));

	getListItemPaths(tree, selected).forEach(function (path) {
		console.log('all paths separate', path.join('>'));
	});

	var selectedPaths = getListItemPaths(tree, selected);
	var selectedPathsString = $.map(selectedPaths, function(path){
		return path.join('/');
	}).join(', ');
	console.log('all paths together', selectedPathsString);

	console.log('simplified first path', getListItemPath(tree, $(selected).first(), undefined, '/'));
	console.log('simplified all paths', getListItemPaths(tree, selected, undefined, '/', ', '));

});