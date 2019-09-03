$(window).load(function () {
    $(".help_trigger").click(function(){
       $('.help_bkgrd_cover').show();
    });
    $('.help_bkgrd_cover').click(function(){
        $('.help_bkgrd_cover').hide();
    });
    $('.help_popup_close').click(function(){
        $('.help_bkgrd_cover').hide();
    });
});