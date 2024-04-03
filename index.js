//function for making the bubbles
function makebubble(){
    let cluster="";


    for(i=0;i<=188;i++){
        let randomnum=Math.floor(Math.random()*10);
        cluster+=`<div class="bubble">${randomnum}</div>`
        }

    document.getElementById("panelbtm").innerHTML=cluster;

}

//function for running the timer value
let timer=60;
function runtimer(){
    let timerchange=setInterval(function(){
        if(timer>0){
            timer--;
            document.getElementById("timerval").innerText=timer;
        }
        else{
            clearInterval(timerchange);
            //timer sampla ki game over
            document.querySelector("#panelbtm").textContent="GAME OVER"
        }
      
    },1000)
    
}

//function to generate new hit values
let rn=0;
function generatehit(){
     rn=Math.floor(Math.random()*10);
    document.getElementById("hitval").innerText=rn;
}

//function to change the score if it hits the number
let score=0;
function updatescore(){
    score+=10;
    document.getElementById("newscore").textContent=score;
}

function matching(){
    //jo click kiya hai use lao event bubbling se
    //string aayegi textContent se use change karo number mein
    //also te number click kela ki new bubles form hone and hit chi value cahnge karne
    document.querySelector("#panelbtm").addEventListener("click",function(details){
        if(rn===Number(details.target.textContent)){
            updatescore();
            //new bubble banav
            makebubble();
            generatehit();
        };
    })

}

runtimer();
makebubble();
generatehit();
matching();


