export default {
  // Accepting props: videoSrc for video source and cards for cards data
  props: ['videoSrc', 'cards'],
  methods: {
    // Method to show the card description on mouse enter
    showDescription(card) {
      card.showDescription = true;
    },
    
    // Method to hide the card description on mouse leave
    hideDescription(card) {
      card.showDescription = false;
    },
      
    // Method to navigate to the link and scroll to the top section
    navigateTo(link) {
      this.$router.push(link).then(() => {
        const sectionId = link.split('#')[1];
        if (sectionId) {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  },
  template: `
    <div class="interactive-card-section position-relative">
      <video autoplay loop muted playsinline class="video-background">
        <source :src="videoSrc" type="video/mp4">
      </video>

      <div class="container d-flex justify-content-center align-items-center h-200">
        <div class="row">
          <div class="text-center" id="prompt-text">
            <h2 class="text-light">Select your path:</h2>
          </div>
          <div class="col-lg-3" v-for="card in cards" :key="card.title">
            <div class="card interactive-card"
                 @mouseenter="showDescription(card)" 
                 @mouseleave="hideDescription(card)"
                 @click="navigateTo(card.link)">
              <div class="card-image-container">
                <img :src="card.image" class="card-img-top" alt="card.title">
                <p class="card-title">{{ card.title }}</p>
              </div>
              <div class="card-body" v-show="card.showDescription">
                <p class="card-text">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};
