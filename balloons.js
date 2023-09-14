$(function(){

    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
});
// for random effect for Happy Birthday, add all the class features for animation into an array and select random one from that and
// change the class to that