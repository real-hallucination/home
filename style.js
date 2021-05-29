$(window).scroll(function(){
    var wh=$(window).height(), sc=$(window).scrollTop();
    function opa(obj){
        var ih=obj.offset().top;
        if(sc+wh<ih+200)obj.css('opacity', 0);
        else if(sc+wh<ih+500)obj.css('opacity', (sc+wh-ih-200)/300);
        else obj.css('opacity', 1);
    }
    function opa2(obj){
        var ih=obj.offset().top;
        if(sc+wh<ih+150)obj.css('opacity', 0);
        else if(sc+wh<ih+350)obj.css('opacity', (sc+wh-ih-150)/200);
        else obj.css('opacity', 1);
    }
    if(document.getElementById('intro'))opa($('#intro'));
    for(var i=1; i<10; ++i)if(document.getElementById(String('a'+String(i))))opa2($(String('#a'+String(i))));
});