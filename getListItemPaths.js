define( function( require ) {

	var $ = require('jquery');
	var getListItemPath = require('getListItemPath');

	var getListItemPaths = function getListItemPaths(list, selectedItems, labelSelector, joinPathBy, joinPathsBy) {
		var $selectedItems = $(selectedItems);
		var paths = [];
		$.each($(selectedItems), function () {
			paths.push(getListItemPath(list, this, labelSelector, joinPathBy));
		});

		if(typeof joinPathsBy === "string"){
			paths = paths.join(joinPathsBy);
		}

		return paths;
	};

	return getListItemPaths;
});