define(function (require) {

	getListItemPath = require('getListItemPath');
	getListItemPaths = require('getListItemPaths');

	var selected = '[selected=selected]';
	var tree = 'ul'
	$('#paths').append('<p>').append('first path: ', getListItemPath(tree, $(selected).first()).join('/'));

	getListItemPaths(tree, selected).forEach(function (path) {
		$('#paths').append('<p>').append('all paths separate: ', path.join('>'));
	});

	var selectedPaths = getListItemPaths(tree, selected);
	var selectedPathsString = $.map(selectedPaths, function(path){
		return path.join('/');
	}).join(', ');
	$('#paths').append('<p>').append('all paths together: ', selectedPathsString);

	$('#paths').append('<p>').append('simplified first path: ', getListItemPath(tree, $(selected).first(), undefined, '/'));
	$('#paths').append('<p>').append('simplified all paths: ', getListItemPaths(tree, selected, undefined, '/', ', '));

});