function getListItemPath(list, selectedItem, labelSelector, joinBy) {
	var labels;
	var $selectedItem = $(selectedItem);
	var $items = $selectedItem.add($selectedItem.parentsUntil($(list), 'li'));

	labels = $items.map(function findLabel() {
		var $children = $(this).children();
		var text;

		if (labelSelector) {
			text = $children.filter(':not(ul)').find(labelSelector).text();
		} else {
			text = $children.first().text();
		}

		return text.trim();
	});

	labels = Array.prototype.slice.call(labels);

	if(typeof joinBy === "string"){
		labels = labels.join(joinBy);
	}

	return labels;
};

function getListItemPaths(list, selectedItems, labelSelector, joinPathBy, joinPathsBy) {
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

var selected = '.tree-selected';
console.log('first path', getListItemPath('#treeIllustration', $(selected).first(), '.tree-label').join('/'));

getListItemPaths('#treeIllustration', selected, '.tree-label').forEach(function (path) {
	console.log('all paths separate', path.join('>'));
});

var selectedPaths = getListItemPaths('#treeIllustration', selected, '.tree-label');
var selectedPathsString = $.map(selectedPaths, function(path){
	return path.join('/');
}).join(', ');
console.log('all paths together', selectedPathsString);

console.log('simplified first path', getListItemPath('#treeIllustration', $(selected).first(), '.tree-label', '/'));
console.log('simplified all paths', getListItemPaths('#treeIllustration', selected, '.tree-label', '/', ', '));






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