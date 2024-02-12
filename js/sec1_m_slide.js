$(document).ready(function(){


    var win_w =$(window).width();
    var win_h = $(window).height();

    function layout(){
        $('.section_1').css({

            width: win_w,
            height: win_h

        });

        sec_w=$('.section_1').width();
        sec_h=$('.section_1').height();

        $('.m_imgbox').css({
            width: sec_w * 3,
            height: win_h
        });

        $('.m_imgbox>img').css({
            width: sec_w,
            height: sec_h
        })
    }//layout end
    
    
    layout();

    //resize
    $(window).resize(function(){
        win_w = $(window).width();
        layout();
    });


    
    var m = 0;
    setInterval(function(){
        m++;
        if(m>2){
            m = 0;
        }

        $('.m_imgbox').animate({
            left: - win_w * m
        });
    },3000);



    

});


