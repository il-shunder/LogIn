$(document).ready(function () {
    $('#info input').keyup(function () {
        let emptyFields = $('#info input:required').filter(function () {
            return $.trim(this.value) === '';
        });
        let password = $('#password').val();
        if (!emptyFields.length && password.length > 5) {
            $('#info button').removeClass('inactive');
        } else {
            $('#info button').addClass('inactive');

        }
    });

    $('body').on('click', '.password-control', function () {
        if ($('#password').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password').attr('type', 'password');
        }
        return false;
    });

    /*$("#btn").on("click", function () {
        let userpass = $('#password').val();
        let username = $('#username').val();
        alert("Password: " + userpass + " " + "Login: " + username);
          
    });*/
});