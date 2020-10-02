'use strikt'
var naarBoven = document.querySelector('.naar-boven'),
    mydiv = document.getElementById('fistivals'),
    myChilderen = document.querySelectorAll('.fistivals .container div');

naarBoven.onclick = function(){
    window.scroll(0,0);
}
var mybool = false;
window.onscroll = function(){
    if(window.scrollY > (mydiv.offsetTop - 600 )&& mybool == false){
        // console.log("you are there");
        myChilderen.forEach(elm => elm.classList.add('removeTranslateX'));
        mybool = true;
    }
}

// play list
var playListElm = document.querySelectorAll('.playlist ul li'),
    playlistDiv = document.querySelector('.playlist .mydiv'),
    myPlayList = document.querySelector('.playlist'),
    songOption = localStorage.getItem('songChoise');
    backgroundOption = localStorage.getItem('plyBackground');

let myIframe = document.querySelector('.myIframe');
if(songOption != null && backgroundOption != null){
    myIframe.src = songOption;
    myPlayList.style.backgroundImage  = "url('../images/"+ backgroundOption +".jpg')";
}
playListElm.forEach(elm =>{
    elm.onclick = function(){
        myIframe.src = this.getAttribute('data-iframe');
        myPlayList.style.backgroundImage  = "url('../images/"+ this.getAttribute('data-img') +".jpg')";
        localStorage.setItem('songChoise' , this.getAttribute('data-iframe'));
        localStorage.setItem('plyBackground' , this.getAttribute('data-img'));
    }
})


var myText = "let's get fun !";
var introMsg = document.querySelector('.intro-msgs');
var i = 0;
window.onload = function(){
    introMsg.classList.add('moveright');
    var introIntervale = setInterval(function(){
        introMsg.textContent += myText[i];
        i++;
        if(i > myText.length - 1){
            clearInterval(introIntervale);
        }
    }, 300);
    console.log(myText.length)
}