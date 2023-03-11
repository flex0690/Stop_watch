var hr=0;
var min=0;
var sec=0;
var ms=0;
var count=0;

var timer=false;


function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;

}
function reset(){
    timer=false;
    hr=0;
    sec=0;
    min=0;
    ms=0;
    document.getElementById("count").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hour").innerHTML="00";
    



}

function stopwatch(){
    if(timer==true){
        count=count+1;
        console.log(count);
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min=00){
            hr=hr+1;
            min=0;
        }

        var hrstring=hr;
        var minstring=min;
        var secstring=sec;
        var msstring=count;
        if(hr<10){
            hrstring="0"+hrstring;
        }if(min<10){
            minstring="0"+minstring;
        }if(sec<10){
            secstring="0"+secstring;
        }if(count<10){
            msstring="0"+msstring;
        }
        document.getElementById("count").innerHTML=msstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("hour").innerHTML=hrstring;
        setTimeout("stopwatch()",10);
    }
}