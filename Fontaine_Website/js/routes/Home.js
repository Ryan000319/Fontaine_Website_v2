export default {
  data() {
    return {
    // Cards data to be passed to the InteractiveCard component
      cards: [
        {
          title: 'History',
          description: "Learn about the Fontaine's History and Lore.",
          image: 'styles/images/history7.jpg',
          link: '/history#section0',
        },
        {
          title: 'Characters',
          description: 'Meet Interesting Heroes and Villains of Fontaine.',
          image: 'styles/images/history.jpg',
          link: '/characters#section0',
        },
        {
          title: 'Music',
          description: 'Relax with the local music of Fontaine.',
          image: 'styles/images/music.jpeg',
          link: '/music#section0',
        },
        {
          title: 'Form',
          description: 'Sign up to learn more about Fontaine.',
          image: 'styles/images/form.jpeg',
          link: '/form#section0',
        },
      ]
    };
  },
  template: `
    <div>
      <!-- Section 0: Welcome Section -->
      <section id="section0">
        <video-background
          video-src="styles/videos/main4.mp4"
          overlay-image-src="styles/images/welcome_page1.png">
        </video-background>
      </section>

      
      <!-- Section 1: Introduction Section -->
      <section id="section1" class="text-box-background position-relative z-index-3" style="background-image: url('styles/images/character2.jpeg');">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 offset-lg-8">
              <div class="introduction-text text-center">
                <div class="emblem-logo text-center">
                  <img src="styles/icons/emblem/Fontaine_Emblem.png" alt="Emblem Logo" class="img-fluid">
                </div>
                <h1>Fontaine: City of Justice</h1>
                <p>Of the regions of Teyvat, Fontaine prides itself as the hub of culture and the arts; or in the words of Francis, a traveling merchant from the region, "true beauty and elegance." </p>
                <p>Join us on an epic journey through the mystical lands of Fontaine. Experience the adventure, meet fascinating characters, and unravel ancient mysteries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Section 2: Card Section -->
      <section id="section2">
        <card-section :cards="cards" video-src="styles/videos/cards.mp4"></card-section>
      </section>
    </div>
  `
};
