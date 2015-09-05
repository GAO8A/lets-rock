Meteor.subscribe("sites");


Template.site_list.helpers({
	sites: function(){
		if (Session.get("sview")=="yes"){
			return Sites.find({Sview: {$ne: "n"}});
		} else if (Session.get("sview")=="no") {
			return Sites.find({Sview: {$ne: "y"}});
		} 
		// else if (Session.get("topSites")=="yes") {
		// 	return Sites.find({top: {$ne: "n"}});
		// }
		// else if (Session.get("topSites")=="no") {
		// 	return Sites.find({top: {$ne: "y"}});
		// }
		else {
		return Sites.find();
	}
	},
	sview: function () {
      return Session.get("sview");
    },
   	topSites: function () {
      return Session.get("topSites");
    }


});

 Template.site_list.events({

    "click .sview .yes": function () {
      Session.set("sview","yes");
    },
    "click .sview .no": function () {
      Session.set("sview","no");
    },
    "click .topsites .yes": function () {
      Session.set("topSites","yes");
    },
    "click .topsites .no": function () {
      Session.set("topSites","no");
    },
    "click .reset": function () {
      console.log('reset clicked');
      
    }

 });