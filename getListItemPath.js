
getListItemPath: function getListItemPath($selectedItem, $list, labelSelector) {
	var $objects = $selectedItem.add($selectedItem.parentsUntil($tree, 'li'));
	var arr;
	if(labelSelector){
		arr = $objects.map(function () { return $(this).children().filter(':not(ul)').find(labelSelector).text() });
	}else{
		arr = $objects.map(function () { return $(this).children().first().text().trim() });
	}

	arr = Array.prototype.slice.call(arr);

	return arr;
};

var $selected = $('.tree-selected').first();
var $tree = $('#treeIllustration');
console.log(getListItemPath($selected, $tree, '.tree-label').join('/'));
console.log(getListItemPath($selected, $tree).join('>'));


getListItemPath: function getListItemPath($selectedItems, $list, returnMultiple, labelSelector) {
	var $selectionPaths = [];
	$selectedItems.each(function(){
		$selectionPaths.push($(this).add($(this).parentsUntil($tree, 'li')));
	});

	var arr=[];
	if(labelSelector){
		$.each($selectionPaths, function (i, $selectionPath) {
			var selectionPath = $selectionPath.map(function () { return $(this).children().filter(':not(ul)').find(labelSelector).text() });
			arr.push(Array.prototype.slice.call(selectionPath));
		});
	}else{
		$.each($selectionPaths, function (i, $selectionPath) {
			var selectionPath = $selectionPath.map(function () { return $(this).children().first().text().trim() });
			arr.push(Array.prototype.slice.call(selectionPath));
		});
	}


	return returnMultiple ? arr : arr[0];
};

var $selected = $('.tree-selected');
var $tree = $('#treeIllustration');
$.each(getListItemPath($selected, $tree, true, '.tree-label'), function(i, selection){ console.log(selection.join('/')); });
$.each(getListItemPath($selected, $tree, true), function(i, selection){ console.log(selection.join('>')); });
console.log(getListItemPath($selected, $tree, false, '.tree-label').join('\\'));
console.log(getListItemPath($selected, $tree).join('+'));
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