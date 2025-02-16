export default {
  props: ['videoSrc', 'title', 'description'],
  template: `
    <div class="video-background-section position-relative">
      <video autoplay loop muted playsinline class="video-background">
        <source :src="videoSrc" type="video/mp4">
      </video>
      <div class="video-content-container position-absolute w-100 h-100">
        <div class="history-welcome-message fade-up">
          <h1>{{ title }}</h1>
          <p class="history-text">{{ description }}</p>
        </div>
      </div>
    </div>
  `
};
