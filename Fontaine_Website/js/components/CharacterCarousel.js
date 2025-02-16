export default {
  props: ['characters'],
  template: `
    <section id="section1" class="character-carousel-section position-relative">
      <video autoplay loop muted playsinline class="video-background video-background-blur">
        <source src="styles/videos/char_background.mp4" type="video/mp4">
      </video>

      <div id="characterCarousel" class="carousel slide" data-bs-ride="none">
        <div class="carousel-inner">
          <div v-for="(character, index) in characters" :key="index" :class="['carousel-item', { active: index === 0 }]">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-12 text-center">
                <img :src="character.image" class="carousel-character img-fluid" alt="character.name">
              </div>
              <div class="carousel-caption">
                <div class = "carousel-caption-name">
                    <h5>{{ character.name }}</h5>
                </div>
                <div class="carousel-quote">
                    <em>{{ character.quote }}</em>
                </div>
                <div class="video-responsive">
                  <iframe 
                    width="560" 
                    height="315" 
                    :src="'https://www.youtube.com/embed/' + character.youtubeLink" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </iframe>
                </div>
                <div class="carousel-description">
                  <p>{{ character.description }}</p>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#characterCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#characterCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
};
