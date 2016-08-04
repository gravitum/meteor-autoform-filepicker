/* global AutoForm, $ */

AutoForm.addInputType("file-picker", {
  template: "autoformFilePicker",
  valueOut: function () {
    console.log(this.attr("data-value"));
    if(this[0].nodeName == "INPUT"){
      return this.val()
    } else {
      return this.attr("data-value")
    }
  }
});



Template.autoformFilePicker.created = function(){
  this.shownChooser = new ReactiveVar(false);
}
Template.autoformFilePicker.rendered = function(){
  console.log("autoformFilePicker rendered")
}
Template.autoformFilePicker.events({
  "click .showChooser": function(ev,inst){
    console.log("shown chooses click")
    console.log(inst.shownChooser.set(true))
  },
  "click .popDown": function(ev,inst){
    console.log("popDown click")
    ev.stopPropagation()
    inst.shownChooser.set(false);
  },
  "click .file": function(ev,inst){
    console.log("file click")
    var url = this.file.url;
    if(inst.data.atts.showUrl){
      inst.$("input.afFPVK").val(url)
    }else {
      inst.$(".afFPVK").attr("data-value",url);
    }
    inst.$(".afFPVK").attr("data-value",url);
    inst.$(".fpPreviewIcon").attr("src",url);
    $(ev.target).change();
  }
});

Template.autoformFilePicker.helpers({
  atts: function(atts){
    atts = _.clone(atts);
    delete atts.upload;
    return atts;
  },
  shownChooser: function(){
    console.log("shown chooses change")
    return Template.instance().shownChooser.get()
  },
  files: function(){
    console.log(this.atts)
    return FileCollection._collections[this.atts.collection].find();
  },
  uploadOptions: function(self){
    var uploadOptions = _.isObject(self.atts.upload)? self.atts.upload: {} 
    return _.extend({
      collection: self.atts.collection
    }, uploadOptions);
  }
})

// Template.afFilePickerUpload.events({
//   'change': function(event, template) {
//     event.stopPropagation();
//     console.log( "change", this, arguments)
//     var collection = this.collection
//     FS.Utility.eachFile(event, function(file) {
//       console.log( "each file ")
//       FS._collections[collection].insert(file, function (err, fileObj) {
//         console.log( 'uploaded', err)
//         // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
//       });
//     });
//   }
// });
