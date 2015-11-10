$(document).ready(function () {
	CB.initialize();
})

CB = {
	initialize: function(){
		this.assign_events()
	},
	assign_events: function(){
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
			window.location.href  = 'http://instagram.com/designmami'
		})

		$('#tumblr').click(function() {
			window.location.href = 'http://voyeurvoyage.tumblr.com'
		})

		$('#twitter').click(function() {
			window.location.href = 'http://twitter.com/designmami'
		})

		$('#linkedin').click(function() {
			window.location.href = 'http://www.linkedin.com/in/christinabadal'
		})
	}
}



