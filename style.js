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

$(document).ready(function(){
    if(document.getElementById('photo')){
        var style=document.createElement('style');
        var css="";
        for(var i=0; i<6; ++i)for(var j=0; j<5; ++j)css+="#photo .row{width: 0; height: 20vw;}\
        #photo .a"+String(i)+String(j)+"{\
            width: 20vw; position: absolute; left: "+String(20*j)+"vw;\
            animation: pho 5s infinite alternate;\
            animation-delay: "+String((i+j)/10)+"s;\
            animation-timing-function: linear;\
        }\
        #photo img:first-child{z-index: 1; backface-visibility: hidden;}\
        @keyframes pho{\
            47%{transform: rotateY(0) scaleX(1);}\
            53%{transform: rotateY(180deg) scaleX(-1);}\
            100%{transform: rotateY(180deg) scaleX(-1);}\
        }";
        if (style.styleSheet)style.styleSheet.cssText=css;
        else style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);
        var s='';
        for(var i=0; i<6; ++i){
            s+="<div class='row'>";
            for(var j=0; j<5; ++j){
                var x=i*5+j+1;
                if(x<12);
                else if(x<15)x+=17;
                else if(x<22)x-=3;
                else x-=2;
                var y, z;
                if((x<32&&x>28)||Math.random()>=0.5)y='C', z='BW';
                else y='BW', z='C';
                s+="<div><img src='"+String(x)+y+".png' class='a"+String(i)+String(j)+"'><img src='"+String(x)+z+".png' class='a"+String(i)+String(j)+"'></div>";
            }
            s+="</div class='row'>";
        }
        document.getElementById('photo').innerHTML=s;
    }
});