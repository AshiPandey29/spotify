console.log("welcome");

// initialize vairables
let songIndex = 0;
let audioElement = new Audio('songs/attention.mp3');
let masterPlay = document.getElementById('masterPlay');
let  progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Attention- Charlie Puth", filePath: "songs/1.mp3", coverPath: "images/attn.svg", timePath: "3:29"},
    {songName: "Liar- Camila Cabello", filePath: "songs/2.mp3", coverPath: "images/liar.png", timePath: "3:27"},
    {songName: "Closer- The Chainsmokers, Halsey", filePath: "songs/3.mp3", coverPath: "images/closer.png", timePath: "4:05"},
    {songName: "Escapism- RAYE, 070 Shake", filePath: "songs/4.mp3", coverPath: "images/escapism.png", timePath: "4:32"},
    {songName: "Money- LISA", filePath: "songs/5.mp3", coverPath: "images/money.jpeg", timePath: "2:48"},
    {songName: "Mood- 24kGoldn, iann dior", filePath: "songs/6.mp3", coverPath: "images/mood.png", timePath: "2:21"},
    {songName: "PS5- salem ilese, TOMORROW X TOGETHER", filePath: "songs/7.mp3", coverPath: "images/ps5.jpeg", timePath: "2:32"},
    {songName: "Senorita- Shawn Mendes, Camila Cabello", filePath: "songs/8.mp3", coverPath: "images/senorita.png", timePath: "3:11"},
    {songName: "Shameless- Camila Cabello", filePath: "songs/s9.mp3", coverPath: "images/shameless.png", timePath: "3:40"},
    {songName: "Starboy- The Weeknd, Daft Punk", filePath: "songs/10.mp3", coverPath: "images/starboy.png", timePath: "3:50"},
    {songName: "Stay- The Kid LAROI, Justin Bieber", filePath: "songs/11.mp3", coverPath: "images/stay.png", timePath: "2:22"} ,
    {songName: "We Don't Talk Anymore- Charlie Puth, Selena Gomez", filePath: "songs/12.mp3", coverPath: "images/we dont talk.png", timePath: "3:38"},
    
]

songItems.forEach((element, i) => {
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
     element.getElementsByClassName("timestamp")[0].innerText = songs[i].timePath;
})

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity= 0;

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        }
        else{
            audioElement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            gif.style.opacity= 0;  
        }
    })
})





document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})