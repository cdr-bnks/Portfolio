jQuery(document).ready(function(){

    var $Insignia =$('#Insignia');

    if (location.href.indexOf('#') != -1){
        $Insignia.show();
    }

    $('.menu-bar .tabs a').click(function(){
        $Insignia.fadeIn('slow');
    });

    $('.tabs-profile').click(function(){
        $Insignia.fadeOut('slow');
    });

    $('#indigo-color').click(function(e){
        $('.main-wraper-resume').attr("id", "indigo");
    });

 $('#red-color').click(function(e){
        $('.main-wraper-resume').attr("id", "red");
    });

 $('#green-color').click(function(e){
        $('.main-wraper-resume').attr("id", "green");
    });

 $('#gold-color').click(function(e){
        $('.main-wraper-resume').attr("id", "gold");
    });


    var $content    =$('#content');

    $content.easytabs({
        animate     :true,
        updateHash  :false,
        transtionIn :'slideDown',
        transitionOut :'slideUp',
        animationSpeed  : 600,
        tabs          :".imenu",
        tabActiveClass :'active',
    });

    $content.find('.tabs li a').hover(function(){
        $(this).stop().animate({ marginTop: "-7px"}, 300);
    },function(){
        $(this).stop().animate({ marginTop: '0px'}, 400);
    });
});