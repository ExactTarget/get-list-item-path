/*
 * Fuel UX Checkbox
 * https://github.com/ExactTarget/fuelux
 *
 * Copyright (c) 2014 ExactTarget
 * Licensed under the BSD New license.
 */

// -- BEGIN UMD WRAPPER PREFACE --

// For more information on UMD visit:
// https://github.com/umdjs/umd/blob/master/jqueryPlugin.js

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// if AMD loader is available, register as an anonymous module.
		define(['jquery', 'getListItemPath'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// OR use browser globals if AMD is not present
		factory(jQuery);
	}
}(function ($, getListItemPath) {
	// -- END UMD WRAPPER PREFACE --

	// -- BEGIN MODULE CODE HERE --
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
	// -- BEGIN UMD WRAPPER AFTERWORD --
}));
// -- END UMD WRAPPER AFTERWORD --