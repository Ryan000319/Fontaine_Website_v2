export default {
  props: ['videoSrc', 'overlayImageSrc'],
  data() {
    return {
      isPlaying: false,  
    };
  },
  methods: {
   // Method to toggle play/pause of background music
    togglePlayPause() {
      const bgMusic = document.getElementById('bg-music');  // Reference the background music audio element
      if (bgMusic) {
        if (bgMusic.paused) {
          bgMusic.volume = 0.1;  // Set volume to a lower level
          bgMusic.play();
          this.isPlaying = true; // Update state to playing
        } else {
          bgMusic.pause();
          this.isPlaying = false; // Update state to paused
        }
      } else {
        console.error("Background music element not found!");  // Error handling if bgMusic is not found
      }
    },
  },
  template: `
    <div class="video-background-section position-relative">
        <video autoplay loop muted playsinline class="video-background">
            <source :src="videoSrc" type="video/mp4">
        </video>
        <div class="video-overlay-image" :style="{ backgroundImage: 'url(' + overlayImageSrc + ')' }"></div>

        <!-- Background Music Audio Element -->
        <audio id="bg-music" loop>
            <source src="styles/audios/main.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>

        <!-- Content over the video background -->
        <div class="video-content-container position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center col-lg-2">
                        <div class="welcome-text">
                            <h1>Tour Around Fontaine - Interactive Experience</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Play/Pause Button -->
        <div class="video-content-container position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center play-button-container"> 
                        <button class="btn btn-light btn-lg" @click="togglePlayPause">
                            <em :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></em> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
};
