
//funcion para limpiar los contenidos de los inputs text
function limpiar(element) {
    var limpia = document.getElementById(element);
    if (limpia.value !== '') {
        limpia.value = '';
    }
}

//funciones para video controler
	var vid,
		playbtn,
		upbtn,
		downbtn,
		mute,
		curtimetext,
		durtimetext,
		seekslider;

		function initializePlayer() {
			//set objects references
			vid = document.getElementById("huskyVideo");
			playbtn = document.getElementById("play_button");
			upbtn = document.getElementById("up_volume_button");
			downbtn = document.getElementById("down_volume_button");
			mute = document.getElementById("mute_button");
			curtimetext = document.getElementById("curtimetext");
			durtimetext = document.getElementById("durtimetext");
			seekslider = document.getElementById("seekslider");
			// add event listeners
			playbtn.addEventListener("click",playButton,false); 
			mute.addEventListener("click",vidmute,false);
			upbtn.addEventListener("click",upvolume,false);
			downbtn.addEventListener("click",downvolume,false);
			seekslider.addEventListener("change",vidSeek,false); 
			vid.addEventListener("timeupdate",seekTimeupdate,false); 
			 
			
			
		}

		window.onload = initializePlayer;

		//metods for video player
		function playButton(vid_id) {
			if (vid.paused) {
				vid.play();
				playbtn.style.backgroundPosition = "-68px 0px";
			} else {
				vid.pause();
				playbtn.style.backgroundPosition = "0px 0px";
			}
			
		}

		function vidSeek() {
			var seekto = vid.duration * (seekslider.value / 100); 
			vid.currentTime = seekto;
		}
		function seekTimeupdate() {
			var nt = vid.currentTime * (100 / vid.duration);
			seekslider.value = nt;
			var curmins = Math.floor(vid.currentTime / 60);
			var cursecs = Math.floor(vid.currentTime - (curmins * 60));
			var durmins = Math.floor(vid.duration / 60);
			var dursecs = Math.floor(vid.duration - (durmins * 60));
			cursecs = (cursecs < 10)? "0" + cursecs : cursecs;
			dursecs = (dursecs < 10)? "0" + dursecs : dursecs;
			//put the values on video control bar by inner html
			curtimetext.innerHTML = curmins + ":" + cursecs + " / ";
			durtimetext.innerHTML = durmins + ":" + dursecs;
			if (vid.currentTime == vid.duration) {
				playbtn.style.backgroundPosition = "0px 0px";
			}
		}
		function vidmute() {
			if (vid.muted) {
				vid.muted = false;
				mute.style.background = "url('imagenes/muteOn.png')";
			} else {
				vid.muted = true;
				mute.style.background = "url('imagenes/mute.png')";
			}
		}
		function upvolume() {
			vid.volume = (vid.volume != 1.0)? vid.volume + 0.1 : vid.volume ;
		}
		function downvolume() {

			vid.volume = (vid.volume > 0.02)? vid.volume - 0.1 : vid.volume ;
		}