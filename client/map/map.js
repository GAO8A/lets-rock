//Sites = new Mongo.Collection("sites");

Meteor.subscribe("sites");

var marker = {};


Template.map.helpers({
  main_map_options: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options

      return {
        center: new google.maps.LatLng(43.746174, -79.386412),
        zoom: 7,
        //disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
      };


    }
  }

});

Template.map.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  var self = this;
  //burles 

  GoogleMaps.ready('main_map', function(map) {
    
    var marker;
    //burles
   
    console.log('Main Map ready');



    // Adds a InfoWindow
    Sites.find().forEach(function(info){

      var id = info.siteID;

      var infowindow = new google.maps.InfoWindow({ 
          content: 
            ['<span class="InfoWindow">',
            '<h3>' + id.toUpperCase() + '</h3>',
            '<span>' + info.SiteName + '</span>',
            '</span>'].join('')
        });


      var latlng = new google.maps.LatLng(info.Lat,info.Lon);

      if (info.Categ == '1') {
        var image = {
          url: "assets/markers/fr.png",
          scaledSize: new google.maps.Size(20,20),
          //origin: new google.maps.Point(0,0),
          //anchor: new google.maps.Point(anchor_left, anchor_top)
          };
        } else if(info.Categ == '2') {
            var image = {
              url: "assets/markers/br.png",
              scaledSize: new google.maps.Size(20,20),
              //origin: new google.maps.Point(0,0),
              //anchor: new google.maps.Point(anchor_left, anchor_top)
              };
        } else if(info.Categ == '3') {
            var image = {
              url: "assets/markers/er.png",
              scaledSize: new google.maps.Size(20,20),
              //origin: new google.maps.Point(0,0),
              //anchor: new google.maps.Point(anchor_left, anchor_top)
              };
        } else if(info.Categ == '4') {
            var image = {
              url: "assets/markers/hr.png",
              scaledSize: new google.maps.Size(20,20),
              //origin: new google.maps.Point(0,0),
              //anchor: new google.maps.Point(anchor_left, anchor_top)
              };
        } else if (info.Categ == '5') {
            var image = {
              url: "assets/markers/dr.png",
              scaledSize: new google.maps.Size(20,20),
              //origin: new google.maps.Point(0,0),
              //anchor: new google.maps.Point(anchor_left, anchor_top)
              };
        };

      var marker = new google.maps.Marker({
        position: latlng,
        icon:image,
        map: map.instance,
      }); 


      // Adding Hover listener for Tooltip (InfoWindow)
      marker.addListener('mouseover',function(){
        infowindow.open(map.instance, marker);
      });

      marker.addListener('mouseout',function(){
        infowindow.close();
      });


      // Double click handler to go to the site.
      marker.addListener('dblclick',function(){
         Router.go('/'+id);
      });


    });


  });
});