gravitum:autoform-file-picker
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "file-picker", which provides functionality to select uploaded files or upload files. Designed especially for images.

## Prerequisites

[gravitum:file-collectin](https://github.com/gravitum/meteor-file-collection) package should be installed and configured.


## Installation

In a Meteor app directory, enter:

```
$ meteor add gravitum:autoform-file-picker
```

## Usage

Specify "file-picker" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
     icon: {
        type: String,
        label: "Logo",
        autoform: {
          type: "file-picker",
          collection: "logos", // required, filecollection name
          showIcon: true, // if a mini image should be shown in the form
          upload: {
            onInsert: function(doc){
              doc.shopId = Session.get("shopId");
            }
          },
          showUrl: true // specify if the complete url of the image should in the form
      },
```
#API

TODO


## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.
