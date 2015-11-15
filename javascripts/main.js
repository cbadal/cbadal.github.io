$(document).ready(function () {
	CB.initialize();
})

CB = {
	initialize: function(){
		this.assign_events()
	},
	assign_events: function(){
		that = this;
		$('#contact').click(function() {
			$('#content').load('pages/contact.html')
		})
		
		$('#about').click(function() {
			$('#content').load('pages/about.html')
		})

		$('#work').click(function() {
			$('#content').load('pages/work.html')
		})

		$('#instagram').click(function() {
			if ( $(window).width() > 739) { 
				that.instagram()
			}
			else {
				window.location.href  = 'http://instagram.com/designmami';
			}
		})

		$('#tumblr').click(function() {
			window.location.href = 'http://voyeurvoyage.tumblr.com'
		})

		$('#twitter').click(function() {
			if ( $(window).width() > 739) { 
				$('#content').load('pages/twitter.html')
			}
			else {
			window.location.href = 'http://twitter.com/designmami'
			}
		})

		$('#linkedin').click(function() {
			window.location.href = 'http://www.linkedin.com/in/christinabadal'
		})
	},

   
	instagram: function () {
		$('#content').load('pages/instagram.html')
		var userFeed = new Instafeed ({
			get: 'user',
			userId: '182230830',
			accessToken: '182230830.1677ed0.0329b7b27f3f472fbf07eb14b21e1608',
			resolution: 'standard_resolution',
			limit: '20',
			template: '<a href="{{link}}"><img class="img-responsive" src="{{image}}" style="width:500px"/></a>'
		});
		userFeed.run();




	$(window).scroll(function() {
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		userFeed.next();
		}
	});


	}

}



