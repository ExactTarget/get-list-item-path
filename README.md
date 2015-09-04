# get-list-item-path
Takes an item in a series of nested HTML lists and gives you full path to item.

## Using

### Clone and require
```
    getListItemPath = require('getListItemPath');
    getListItemPaths = require('getListItemPaths');
```

### Get formatted paths
```
    var selected = '[selected=selected]';
    var tree = 'ul';
    var joinPathBy = '/';
    var joinPathsBy = ', ';

    var firstPathString = getListItemPath(tree, $(selected).first(), undefined, joinPathBy));
    var allPathsString = getListItemPaths(tree, selected, undefined, joinPathBy, joinPathsBy));
```

### Get just first selected path as array
```
    var selected = '[selected=selected]';
    var tree = 'ul';
    var joinBy = '/';

    var firstPathArr = getListItemPath(tree, $(selected).first());
    var firstPathString = firstPathArr.join(joinBy);
```

### Get all paths separately as array
```
    var selected = '[selected=selected]';
    var tree = 'ul';

    getListItemPaths(tree, selected).forEach(function (path) {
        //do something with each path individually
    });
```

### Get all paths as array and transform into string
```
    var selected = '[selected=selected]';
    var tree = 'ul';
    var joinPathBy = '/';
    var joinPathsBy = ', ';

    var selectedPaths = getListItemPaths(tree, selected);
    var selectedPathsString = $.map(selectedPaths, function(path){
        return path.join(joinPathBy);
    }).join(joinPathsBy);
```
