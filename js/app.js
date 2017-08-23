$(document).ready(function () {

    //// Close alert message when X is clicked // 
    $('#close-button').click(function () {
        $('#alert').fadeOut(300);
    });


    //// Notifications drop down list //
    $('#notification-bell').click(function () {
        // Show notification drop down
        if ($('#notifications').css('visibility') == 'hidden') {
            $('#notifications').css('visibility', 'visible');
        } else {
            $('#notifications').fadeToggle(300, 'linear');
        }

        $('#icon-alert').fadeOut(300);
        return false;
    });


    //// Hide notifications drop-down when when anywhere on page is clicked (besides notifications drop-down)
    $(document).click(function () {
        $('#notifications').fadeOut(300);
    });


    //// Do nothing when notifications drop-down is clicked
    $('#notifications').click(function () {
        return false;
    });

    //// Send Message
    // Use JQuery to allow submission of form and display message sent confirmation
    // Use JQuery to display error message if user isn't selected or message field is empty

    // When user clicks send
    $('button#send').click(function (event) {
        // Prevent default button behavior
        event.preventDefault();
        $('#message-form').hide();

        // If either field is empty, display error message and 'try again' button
        if ($('#user-search').val().length === 0 || $('#message').val().length === 0) {
            $('#message-user').append('<div id="error"><p>Please include both a user name and a message.  Fields cannot be empty.</p><button id="try-again">Try Again</button></div>')

            // When user clicks "try again" button
            $('#try-again').click(function () {
                // Remove error message and "try again" button
                $('#error').remove();
                // Show original message form
                $('#message-form').show();
            });
        }
        // If fields are filled in correctly, display confirmation message and 'new message' button
        else if ($('#user-search').val().length > 0) {
            $('#message-user').append('<div id="confirmation"><p>Thanks!  Your message has been sent.</p><button id="new-message">New Message</button></div>')

            // When user clicks "new message" button
            $('#new-message').click(function () {
                // Remove confirmation message and "new message" button
                $('#confirmation').remove();
                // Reset user and message
                $('#message-form')[0].reset();
                // Show original message form
                $('#message-form').show();
            });
        }
    });


    //// Local Storage
    // When save button is clicked, store settings to local storage
    $('#save').click(function (event) {
        event.preventDefault;
        let timezone = $('#timezone').val();
        localStorage.setItem('myTimeZone', timezone);

        let email = $('#onoffswitch-email').prop('checked');
        localStorage.setItem('myEmailSetting', email);

        let privacy = $('#onoffswitch-privacy').prop('checked');
        localStorage.setItem('myPrivacySetting', privacy);
    });

    // Show saved timezone on reload
    $('#timezone').val(localStorage.getItem('myTimeZone'));

    // Show saved email switch on reload
    if (localStorage.getItem('myEmailSetting') == 'true') {
        $('#onoffswitch-email').prop('checked', true);
    } else {
        $('#onoffswitch-email').prop('checked', false);
    }

    // Show saved privacy switch on reload
    if (localStorage.getItem('myPrivacySetting') == 'true') {
        $('#onoffswitch-privacy').prop('checked', true);
    } else {
        $('#onoffswitch-privacy').prop('checked', false);
    }

    // When cancel button is clicked, store settings to local storage
    $('#cancel').click(function (event) {
        event.preventDefault();
        localStorage.clear();
        // Revert back to default settings
        $('#timezone').val('');
        $('#onoffswitch-email').prop('checked', false);
        $('#onoffswitch-privacy').prop('checked', false);
    });

    // Auto complete user search
    $(function () {
        let choices = [
                'Gengar',
                'Pikachu',
                'Lapras',
                'Coffing',
                'Snorlax',
                'Geodude',
                'Meowth',
                'MewTwo',
                'Articuno',
                'Scyther',
                'Voltorb',
                'Jigglypuff',
                'Raichu',
                'Digglet'
            ];
        choices.sort();
        $("#user-search").autocomplete({
            source: choices
        });
    });
});
