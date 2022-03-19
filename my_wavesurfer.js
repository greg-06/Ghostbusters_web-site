var playBtn = document.getElementById("playBtn")
        var stopBtn = document.getElementById("stopBtn")
        var volumeBtn = document.getElementById("volumeBtn")

        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#ff34bc',
            progressColor: '#adff2f',
            barWidth: 2,
            height: 100,
            responsive: true,
            hideScrollbar: true,          
        });

        wavesurfer.load("media/Ghostbusters.mp3");

        playBtn.onclick = function(){
            wavesurfer.playPause();
            if (playBtn.src.includes("media/play_icon.png")){
                playBtn.src = "media/pause_icon.png";
            }else{
                playBtn.src = "media/play_icon.png";
            }            
        
        }
        stopBtn.onclick = function(){
            wavesurfer.stop();
            playBtn.src = "media/play_icon.png";
        }
        volumeBtn.onclick = function(){
            wavesurfer.toggleMute();
            wavesurfer.playPause();
            if (volumeBtn.src.includes("media/volume_icon.png")){
                volumeBtn.src = "media/mute_icon.png";
            }else{
                volumeBtn.src = "media/volume_icon.png";
            }   
        }
        wavesurfer.on('finish', function () {
            playBtn.src = "media/play_icon.png";
            wavesurfer.stop();        
    });