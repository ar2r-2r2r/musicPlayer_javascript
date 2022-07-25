console.log("Welcome to music player");

//Initialize the variables
let songIndex=0;
let audioElement = new Audio('Craspore - Flashbacks.mp3');
let masterPlay=document.getElementById('masterplay');
let minimasterPlay=document.getElementById('minimasterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Craspore - Flashbacks", filePath:"Craspore - Flashbacks.mp3",
    coverPath: "song1.jpg"},
]

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

// minimasterPlay.addEventListener('click', ()=>{
//     //button play on small menu list songs
//     audioElement.play();   
// })

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})