Meteor.subscribe("sites");


Template.about.helpers({
  image: function () { 
    var i = Sites.findOne({siteID:"c1"});
    return i.Image1
  }
});

