export default {
  template: `
    <div class="video-background-section position-relative">
        <video ref="videoPlayer" autoplay loop muted playsinline class="video-background">
            <source :src="tracks[currentTrackIndex].video" type="video/mp4">
        </video>
        <audio ref="audioPlayer" @loadedmetadata="updateProgress" @timeupdate="updateProgress" loop>
            <source :src="tracks[currentTrackIndex].audio" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        <div class="music-player-controls container position-absolute bottom-0 pb-3">
            <div class="now-playing">
                <img src="styles/icons/paimon/music.png" alt="Playing" class="custom-icon" :class="{ 'rotating-icon': isPlaying }">
                <div>Playing now: </div>
                <div>{{ tracks[currentTrackIndex].name }}</div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <button class="btn btn-secondary mx-2" @click="previousTrack">
                    <em class="fas fa-step-backward"></em>
                </button>
                <button class="btn btn-primary mx-2" @click="togglePlay">
                    <em :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></em>
                </button>
                <button class="btn btn-secondary mx-2" @click="nextTrack">
                    <em class="fas fa-step-forward"></em>
                </button>
            </div>
            <div class="volume-control d-flex align-items-center justify-content-center mt-2">
              <label for="volume-slider" class="sr-only">Volume Control</label>
              <em class="fas fa-volume-up"></em>
              <input id="volume-slider" type="range" v-model="volume" @input="changeVolume" class="volume-slider ml-2">
            </div>
        </div>
    </div>
  `,
  data() {
    return {
      isPlaying: false,
      currentTrackIndex: 0,
      volume: 25,
        
      // Array of track objects with name, video, and audio sources
      tracks: [
        { name: 'City of Mellifluous Glory', video: 'styles/videos/main4.mp4', audio: 'styles/audios/main.mp3' },
        { name: 'Que le vent soit doux', video: 'styles/videos/track_4.mp4', audio: 'styles/audios/track_2.mp3' },
        { name: 'Leisurely Days in Fontaine', video: 'styles/videos/track_1.mp4', audio: 'styles/audios/track_3.mp3' },
      ],

    };
  },

  methods: {
    // Method to toggle play/pause of the audio
    togglePlay() {
      const audio = this.$refs.audioPlayer;
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
      this.$refs.videoPlayer.play(); // Ensure the video background always plays
    },
    
    // Method to play the previous track
    previousTrack() {
      this.currentTrackIndex = this.currentTrackIndex > 0 ? this.currentTrackIndex - 1 : this.tracks.length - 1;
      this.updateTrack();
    },
      
    // Method to play the next track
    nextTrack() {
      this.currentTrackIndex = this.currentTrackIndex < this.tracks.length - 1 ? this.currentTrackIndex + 1 : 0;
      this.updateTrack();
    },
      
    // Method to change the volume
    changeVolume(event) {
      const audio = this.$refs.audioPlayer;
      audio.volume = event.target.value / 100;
    },
      
    // Method to update the track (audio and video sources)
    updateTrack() {
      const audio = this.$refs.audioPlayer;
      const video = this.$refs.videoPlayer;
      video.src = this.tracks[this.currentTrackIndex].video;
      audio.src = this.tracks[this.currentTrackIndex].audio;
      if (this.isPlaying) {
        audio.play();
        video.play(); // Ensure the video is also set to play
      }
    },

  },
};
