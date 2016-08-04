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
    // if (this.val()) {
    //   var val = this.datepicker('getUTCDate');
    //   return (val instanceof Date) ? val : this.val();
    // }
  }
});



// Template.afBootstrapDatepicker.helpers({
//   atts: function addFormControlAtts() {
//     var atts = _.clone(this.atts);
//     // Add bootstrap class
//     atts = AutoForm.Utility.addClass(atts, "form-control");
//     delete atts.datePickerOptions;
//     return atts;
//   }
// });

// Template.afBootstrapDatepicker.rendered = function () {
//   var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');
//   var data = this.data;

//   // instanciate datepicker
//   $input.datepicker(data.atts.datePickerOptions);

//   // set and reactively update values
//   this.autorun(function () {
//     var data = Template.currentData();

//     // set field value
//     if (data.value instanceof Date) {
//       $input.datepicker('setUTCDate', data.value);
//     } else if (typeof data.value === "string") {
//       $input.datepicker('update', data.value);
//     }

//     // set start date if there's a min in the schema
//     if (data.min instanceof Date) {
//       // datepicker plugin expects local Date object,
//       // so convert UTC Date object to local
//       var startDate = utcToLocal(data.min);
//       $input.datepicker('setStartDate', startDate);
//     }

//     // set end date if there's a max in the schema
//     if (data.max instanceof Date) {
//       // datepicker plugin expects local Date object,
//       // so convert UTC Date object to local
//       var endDate = utcToLocal(data.max);
//       $input.datepicker('setEndDate', endDate);
//     }
//   });
// };

// Template.afBootstrapDatepicker.destroyed = function () {
//   var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');
//   $input.datepicker('remove');
// };


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
    return FS._collections[this.atts.collection].find();
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
