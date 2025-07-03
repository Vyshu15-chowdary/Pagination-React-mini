const  musicPlayer = document.querySelector('.musicplayer');
const  musicControls = document.querySelector('.music-controls');
const  playPause = document.querySelector('.play-pause-button');
const stop =document.querySelector('.stop-button');
const trackTitle = document.querySelector('#track-title');
const trackartist = document.querySelector('#track-artist');
const progressBar = document.querySelector('#progress-bar');
const progressTime = document.querySelector('#progress-time');
const volumeBar = document.querySelector('#volume-bar');
const volumeLevel = document.querySelector('#volume-level');

//audio track
 const audioTrack = {
    title: 'bahubali',
    artist:'dsp',
    src :"C:\Users\YENDLURI SASIKANTH\Downloads\Charuseela - SenSongsmp3.Co (1).mp3",
    duration: 180 // seconds
 };
 //intialize music player
  
 musicPlayer.addEventListener('load', () =>{
     trackTitle.textContent = audioTrack.title;
     trackartist.textContent = audioTrack.artist;
     progressBar.max = audioTrack.duration;
 });

 //play/pause-music
 playPause.addEventListener('click', () =>{

    if (playPause.textContent ==='play'){
        playPause.textContent ='pause';
    }else {
        playPause.textContent ="play"
    }
 });
  stop.addEventListener('click',()=>{
     playPause.textContent ='play'
  });
   progressBar.addEventListener('input',() =>{
     progressTime.textContent
   });

