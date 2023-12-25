jQuery( document ).ready(function( $ ){
	$( 'select#role').change( function() {
		if ( guestAuthorRole.role !== $( this ).val() ) {
			deactivateGuestAuthor();
		} else {
			activateGuestAuthor();
		}
	} );

	var loginLabel = $('label[for="user_login"]')[0].innerHTML;


	function activateGuestAuthor() {
		// Make email not required.
		$('label[for="email"] > span.description').hide();
        $('#createuser input[name=email]').closest('tr').removeClass('form-required');

		// User login.
		if ( 'new' === guestAuthorRole.screen ) {
			$('label[for="user_login"]')[0].innerHTML = guestAuthorRole.displayNameLabel;
		} else {
			$('label[for="user_login"]').parents('tr').hide();
		}

		// Password.


		// Email notification.
		$('input#send_user_notification').parents('tr').hide();


		$('label[for="rich_editing"]').parents('tr').hide();
		$('label[for="comment_shortcuts"]').parents('tr').hide();
		$('label[for="admin_bar_front"]').parents('tr').hide();
		$('label[for="locale"]').parents('tr').hide();

		$('tr.user-admin-color-wrap').hide();

	}

	function deactivateGuestAuthor() {
		// Make email required.
		$('label[for="email"] > span.description').show();
		$('#createuser input[name=email]').closest('tr').addClass('form-required');

		// User login.
		if ( 'new' === guestAuthorRole.screen ) {
			$('label[for="user_login"]')[0].innerHTML = loginLabel;
		} else {
			$('label[for="user_login"]').parents('tr').show();
		}

		// Password.
		$('label[for="pass1"]').parents('tr').show();

		// Email notification.
		$('input#send_user_notification').parents('tr').show();

		$('label[for="rich_editing"]').parents('tr').show();
		$('label[for="comment_shortcuts"]').parents('tr').show();
		$('label[for="admin_bar_front"]').parents('tr').show();
		$('label[for="locale"]').parents('tr').show();
	}

	// Trigger change event on page load.
	$( 'select#role').change();

});
