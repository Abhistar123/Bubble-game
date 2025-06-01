var timer=60;
var Score=0;
var hitrandom=0;

function increaseScore(){
    Score +=10;
    document.querySelector("#scorevalue").textContent=Score;
}

function getNewHit(){
    hitrandom=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrandom;
}
function makeBubble(){
    var Clutter="";

   for(var i=0;i<=143;i++){
       var random_num=Math.floor(Math.random()*10); /*math.random given between 0 and 1 in point then multiply by 10 to get between 0 and 10 in decimal after removing point values with math.floor    */
       Clutter +=`<div class="bubble">${random_num}</div>`;
    }
   document.querySelector("#pbtm").innerHTML=Clutter;
}

function runtimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;  /*har ek second me funtion ka likha huaa code chelaga....means 1 second ke baad timer gatega...*/
            document.querySelector("#timervalue").textContent=timer; /*timer ghatega toh new value paste ho jayega */
        }else{
            clearInterval(timerint);/* extra time else part me chalega minus me so usko clear karna hoga */
            document.querySelector("#pbtm").innerHTML=`<h1 id="hello"> Game Over </h1> `;  /*remove all bubble after timer complete ----> because sare bubbles pbtm me hain */
        }
        
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){ /*sare bubble pr events na lagane ke wajh hum pbtm pr laga denge ---> target se pata chlata hain ki event kon se bubble pr click use hain --->
    textcontent se target div ke andar ka text lenge jo (String me hain)----> phir usko number me convet krenge then clickednum me store kr denge  */
    var clickednum=Number(details.target.textContent);
    if(clickednum===hitrandom){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
runtimer();
makeBubble();
getNewHit();
