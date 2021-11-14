var sd=[];
var ud=[];
var t=0;
var m=0;
var n=0;
var f=0;
   
function random()
{
var ran= Math.random();
ran= ran*4 +1;
ran=Math.floor(ran);
return ran;
}

function start()
{
     if(!(t==0))
   {
    location.reload();
   }
begin(); 
}

function begin()
{
    ++t;
    document.getElementsByClassName("heading")[0].innerHTML="Round " + t;
    let timeout= setTimeout(function()
    {
    var p= random();
       sound(p);
       animation(p-1);
       sd.push(p);
    },500);
      
       f=0;
       n=0;
}

function check(i)
{
   ud[n]=i+1;
    ++n;
    if(!(ud[f]==sd[f]))
        {
            
            document.getElementsByClassName("x")[0].classList.add("game-over");
            location.reload();  
        }
       ++f; 
    if(n==t)
    {
        begin();
    }
    
    animation(i);
    sound(i+1);
}



function sound(q)
{
    var audio= new Audio("sound/" +q +".mp3");
    audio.play();
}

function animation(t)
{
    document.getElementsByClassName("butt")[t].classList.add("op");
let timeout= setTimeout(function(){ 
        document.getElementsByClassName("butt")[t].classList.remove("op"); },250);

    }

    