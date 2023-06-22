setInterval(()=>{
let audio = document.createElement('audio');
audio.prepend();
audio.setAttribute('src','sound.mp3');
audio.load = true;
audio.play();
},9000)