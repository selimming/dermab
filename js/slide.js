$(document).ready(function(){

    // var i = 0;
    // var img_w = $('.img_box>img').width();

    // $('.section_1').click(function(){
    //     i++;
    //     if(i > 4){
    //         i = 0;
    //     }

    //     $('.img_box').animate({
    //         left: -img_w* i
    //     });
    // });
    
    // setInterval(function(){
    //     $('.section_1').trigger('click');
    // },2000);
    

    var win_w =$(window).width();
    var win_h = $(window).height();

    function layout(){
        $('.section_1').css({

            width: win_w,
            height: win_h

        });

        sec_w=$('.section_1').width();
        sec_h=$('.section_1').height();

        $('.img_box').css({
            width: sec_w * 5,
            height: win_h
        });

        $('.img_box>img').css({
            width: sec_w,
            height: sec_h
        });

        
    }//layout end
    
    
    layout();

    //resize
    $(window).resize(function(){
        win_w = $(window).width();
        layout();
    });

    var i = 0;
    setInterval(function(){
        i++;
        if(i>4){
            i=0;
        }

        $('.img_box').animate({
            left: - win_w * i
        });
    },2000);


    
    



    

});


