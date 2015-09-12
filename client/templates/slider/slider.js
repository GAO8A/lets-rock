Meteor.subscribe("sites"); 
Template.slider.helpers({
	image: function(){
		var id = Router.current().params._site;
		var csite = Sites.findOne({siteID: id});
		//var csite = Sites.findOne({siteID:"C8"});
		if (csite.ImageN == 1){
			$('<div class="item"><img src="'+csite.Image1+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
		} else if (csite.ImageN==2){
			$('<div class="item"><img src="'+csite.Image1+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
			$('<div class="item"><img src="'+csite.Image2+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
		} else if (csite.ImageN==3) {
			$('<div class="item"><img src="'+csite.Image1+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
			$('<div class="item"><img src="'+csite.Image2+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
			$('<div class="item"><img src="'+csite.Image3+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
		} else if (csite.imageN==4) {
			$('<div class="item"><img src="'+csite.Image1+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
			$('<div class="item"><img src="'+csite.Image2+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
			$('<div class="item"><img src="'+csite.Image3+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
			$('<div class="item"><img src="'+csite.Image4+'"><div class="carousel-caption"></div></div>').appendTo('.carousel-inner');
		} else {
			console.log("no pictures");
		};
		$('.carousel-indicators > li').first().addClass('active');
  		$('.item').first().addClass('active');
  		$('#carousel-example-generic').carousel();
		console.log(csite.Image1);
	}
});