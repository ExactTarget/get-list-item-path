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
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// OR use browser globals if AMD is not present
		factory(jQuery);
	}
}(function ($) {
	// -- END UMD WRAPPER PREFACE --

	// -- BEGIN MODULE CODE HERE --

	var getListItemPath = function getListItemPath(list, selectedItem, labelSelector, joinBy) {
		var labels;
		var $selectedItem = $(selectedItem).first();
		var $items = $selectedItem.add($selectedItem.parentsUntil($(list).first(), 'li'));

		labels = $items.map(function findLabel() {
			var $children = $(this).children();
			var text;

			if (labelSelector) {
				text = $children.filter(':not(ul)').find(labelSelector).text();
			} else {
				//Assume that the label is not wrapped in anything, but that it may have more nested tree as a sibling
				//http://stackoverflow.com/questions/3442394/jquery-using-text-to-retrieve-only-text-not-nested-in-child-tags
				text = $(this).clone()      //clone the element
								.children() //select all the children
								.remove()   //remove all the children
								.end()      //again go back to selected element
								.text()

				if(text.trim() === ""){
					//We were wrong. Assume that the very first child contains the label. Otherwise they need to supply a label selector
					text = $children.first().text()
				}
			}

			return text.trim();
		});

		labels = Array.prototype.slice.call(labels);

		if(typeof joinBy === "string"){
			labels = labels.join(joinBy);
		}

		return labels;
	};

	return getListItemPath;

	// -- BEGIN UMD WRAPPER AFTERWORD --
}));
// -- END UMD WRAPPER AFTERWORD --

/*
		// get string value representation ("/trunk/branch/branch, /trunk, /trunk/branch/branch/branch/leaf")
		tree.getStringValue: function getStringValue() {
			var data = this.selectedItems();
			var self = this;
			var paths = [];

			$.each(data, function(i, item){
				paths.push(self.getItemsFullPath(item) + '/' + item.name);
			});

			return paths.join(', ');
		};


		//get string representation
		checkbox.getStringValue: function getStringValue() {
			return String(this.isChecked());
		};


		radio.getStringValue: function getStringValue() {
			return String(this.isChecked());
		};

		combobox.getStringValue: function getStringValue() {
			return this.selectedItem().text;
		};

		datepicker.getStringValue = Datepicker.prototype.getFormattedDate;

		pillbox.getStringValue: function getStringValue() {
			var stringValue = "";

			$.each(this.items(), function(i, item){
				stringValue += item.text + " ";
			});

			return stringValue.trim();
		};

		$.fn.repeater.Constructor.prototype.getStringValue = function getStringValue() {
			var rows = this.list_getSelectedItems();
			var stringValue = [];

			$.each(rows, function(i, row){
				var rowValue = [];
				$.each(row.element.find('td'), function(i, cell){
					rowValue.push(cell.text());
				});
				stringValue.push(rowValue.join(', '));
			});

			return stringValue.join('; ');
		};
		*/