gravitum:autoform-file-picker
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "file-picker", which provides functionality to upload files.

## Prerequisites

[gravitum:file-collectin](https://github.com/gravitum/meteor-file-collection) package should be installed.


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
          collection: "logos",
          showIcon: true,
          upload: {
            onInsert: function(doc){
              doc.shopId = Session.get("shopId");
            }
          },
          showUrl: true
        }
      },
```
#API

TODO


## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.
