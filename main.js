jQuery(document).ready(function(){

    var $Insignia =$('#Insignia');

    if (location.href.indexOf('#') != -1){
        $Insignia.show();
    }

    $('.menu-bar .tabs a').click(function(){
        $Insignia.fadeIn('slow');
    });

    $('.tabs-profile').click(function(){
        $insignia.fadeOut('slow');
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

    $conetent.find('.tabs li a').hover(function(){
        $(this).stop().animate({ marginTop: "-7px"}, 300);
    },function(){
        $(this).stop().animate({ marginTop: '0px'}, 400);
    });
});