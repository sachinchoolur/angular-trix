![license](https://img.shields.io/npm/l/angular-trix.svg)
![travis](https://travis-ci.org/sachinchoolur/angular-trix.svg?branch=master)
![bower](https://img.shields.io/bower/v/angular-trix.svg)
![npm](https://img.shields.io/npm/v/angular-trix.svg)

# angular-trix
##### A rich wysiwyg text editor directive for angularjs.

> Angularjs directive for [trix editor](https://github.com/basecamp/trix/)

## Install

You can get it on npm.

```
npm install angular-trix --save
```

Or bower, too.

```
bower install angular-trix --save
```

If you're not into package management, just [download a ZIP](https://github.com/sachinchoolur/angular-trix/archive/master.zip) file.

## Setup

#### First, include angularjs, trix.js and trix.css into your document. 

```html
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/trix/0.9.2/trix.css">

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/trix/0.9.2/trix.js"></script>
```
trix.css includes default styles for the Trix toolbar, editor, and attachments. Skip this file if you prefer to define these styles yourself.

To use your own polyfills, or to target only browsers that support all of the required standards, include trix-core.js instead.

####  Then Include angular-trix.js. 

```html
<script src="dist/angular-trix.min.js"></script>
```
Add `angularTrix` dependency to your module
```javascript
var myApp = angular.module('app', ['angularTrix']);
```

#### Create trix-editor
Place an empty `<trix-editor></trix-editor>` tag on the page. Trix will automatically insert a separate `<trix-toolbar>` before the editor.

Like an HTML `<textarea>`, `<trix-editor>` accepts autofocus and placeholder attributes. Unlike a `<textarea>`, `<trix-editor>` automatically expands vertically to fit its contents.

#### Finally, add `angular-trix` directive and ng-model to the `<trix-editor></trix-editor>`.


```html
<trix-editor angular-trix ng-model="foo"></trix-editor>
```
## Observing Editor Changes

The `<trix-editor>` element emits several events which you can use to observe and respond to changes in editor state.

* `trix-initialize` fires when the `<trix-editor>` element is attached to the DOM and its `editor` object is ready for use.

* `trix-change` fires whenever the editor’s contents have changed.

* `trix-selection-change` fires any time the selected range changes in the editor.

* `trix-focus` and `trix-blur` fire when the editor gains or loses focus, respectively.

* `trix-file-accept` fires when a file is dropped or inserted into the editor. You can access the DOM `File` object through the `file` property on the event. Call `preventDefault` on the event to prevent attaching the file to the document.

* `trix-attachment-add` fires after an attachment is added to the document. You can access the Trix attachment object through the `attachment` property on the event. If the `attachment` object has a `file` property, you should store this file remotely and set the attachment’s URL attribute.

* `trix-attachment-remove` fires when an attachment is removed from the document. You can access the Trix attachment object through the `attachment` property on the event. You may wish to use this event to clean up remotely stored files.

You can use the following attributes to listen the trix events and implement your custom logic.
* `trix-initialize`
* `trix-change `
* `trix-selection-change `
* `trix-focus `
* `trix-blur` 
* `trix-file-accept` 
* `trix-attachment-add `
* `trix-attachment-remove`

```html
<trix-editor ng-model="trix" angular-trix trix-initialize="trixInitialize(e);" trix-change="trixChange(e);" trix-selection-change="trixSelectionChange(e);" trix-focus="trixFocus(e);" trix-blur="trixBlur(e);" trix-file-accept="trixFileAccept(e);" trix-attachment-add="trixAttachmentAdd(e);" trix-attachment-remove="trixAttachmentRemove(e);"></trix-editor>
```

```js
// You can still access the trix event
var events = ['trixInitialize', 'trixChange', 'trixSelectionChange', 'trixFocus', 'trixBlur', 'trixFileAccept', 'trixAttachmentAdd', 'trixAttachmentRemove'];

for (var i = 0; i < events.length; i++) {
    $scope[events[i]] = function(e) {
        console.info('Event type:', e.type);
    }
};

```

For a live demonstration, open this [site](https://sachinchoolur.github.io/angular-trix/) and just your console :)


## License

MIT License
