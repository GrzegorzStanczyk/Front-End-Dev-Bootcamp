(function($) {


	// Zadanie 2
	$.fn.bgc = function() {
		return this.addClass('bgc')
	}

	$.fn.color = function() {
		return this.addClass('color')
	}

	$.fn.title = function() {
		return this.addClass('title')
	}


	$('.grid.grid-12').bgc()
	$('.nav a[href^=http]').bgc()
	$('input:radio, input:checkbox').not(':checked').parent().color()
	$('#text p:empty:first').remove()
	$('.pagination-item').not('span').color()
	$('#container > p').title()


	// Zadanie 3
	var $hamburger = $('.hamburger')
	var $nav = $('nav')

  	$hamburger.click(function() {
    	var $this = $(this)
   		$this.toggleClass('toggle')
  	})



  	$hamburger.on('click', function() {
  		$nav.toggleClass('open')
  	})


  	// Zadanie 4
  	function createRegist($registr) {
  		return "<li>" + $registr + "</li>"
  	}

  	var $form = $('.form')
  	var $input = $("input[name='registr']")
  	var $list = $('<ul/>').insertAfter($form)

  	$form.on('submit', function(e) {
  		e.preventDefault()

  		var $registr = $.trim($input.val())

  		if ($registr === '') {
  			return
  		}

  		$list.append(createRegist($registr))

  	})


  	// Zadanie 5



  	$('.json').click(function() {
	  	$.get('https://jsonplaceholder.typicode.com/users', function(resault) {

	  		var users = resault

	  		var $usersList = $('<ul/>').insertAfter('.json')

	  		for (var i = 0; i <= users.length; i++) {
	  			// $usersList.append('<li>' + users[i].name + '<br>' + users[i].username + '<br>' + users[i].email + '<br>' + users[i].phone)
	  			$usersList.append(addUser(users[i].name, users[i].username, users[i].email, users[i].phone))
	  		}
	  	})



	})
	function addUser(name, username, email, phone) {
  		var $user = $('<li />', {
  			html: 'name: ' + name + '<br>' + 'username: ' + username + '<br>' + 'email: ' + email + '<br>' + 'phone: ' + phone

  		})

  		$('.json').remove()

  		return $user
  	}


})(jQuery)