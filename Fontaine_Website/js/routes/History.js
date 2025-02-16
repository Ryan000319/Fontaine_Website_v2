// Import the Sidebar component
import Sidebar from './Sidebar.js';


export default {
  components: {
    'sidebar-component': Sidebar // Sidebar component for navigation
  },
    
  template: `
    <div>
      <!-- Sidebar navigation -->
      <sidebar-component :links="links"></sidebar-component>

      <!-- Introduction Section with Video Background -->
      <section id="section0">
        <introduction-component
          video-src="styles/videos/history2.mp4"
          title="Dive into the History and Lore of Fontaine"
          description="Welcome to Fontaine, a land where ingenuity meets hidden depths. Unravel the secrets of a vanished Archon, explore the whispers of ancient prophecies, and witness the rise of a society wrestling with its past and its future."
        ></introduction-component>
      </section>

      <!-- History and Lore Sections -->
      <section id="section1" class="history-section" style="background-image: url('styles/images/History/1.jpg');">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="history-text-container">
                <h2>The End of the Old World</h2>
                <p class="history-text">
                  Once, life itself arose from the Primordial Sea, ruled by the Dragon of Water. After a great war, a new world order arose. Fontaine's people descend from those who survived this era, marked by ambition and the fall of cities beneath the waves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section2" class="history-section" style="background-image: url('styles/images/History/2.jpg');">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="history-text-container">
                <h2>The Oceanid Era</h2>
                <p class="history-text">
                  Egeria, born from the Primordial Sea, became the new heart of these waters, guiding the Oceanids as they spread knowledge and love. Desiring connection, they took human forms; however, Celestia deemed this an act of creation and sealed Egeria away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3" class="history-section" style="background-image: url('styles/images/History/3.jpg');">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="history-text-container">
                <h2>Remuria and the Fall</h2>
                <p class="history-text">
                  Long ago, Remus arrived in Fontaine and built a vast civilization called Remuria. Yet, in his pursuit of perfection, conflicts arose, and an unending war brought Remuria to ruin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section4" class="history-section" style="background-image: url('styles/images/History/4.jpg');">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="history-text-container">
                <h2>An Archon's Sacrifice</h2>
                <p class="history-text">
                  Desperate to defy fate, Egeria split off a mortal aspect – Focalors – to publicly rule as the Archon. Hiding away, she created the Oratrice Mecanique d'Analyse Cardinale, a system designed to gather power through trials and eventually protect her people from the impending doom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section5" class="history-section" style="background-image: url('styles/images/History/5.jpg');">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="history-text-container">
                <h2>Secrets and Ruins</h2>
                <p class="history-text">
                  Explorers delved into ancient ruins, deciphering a new, terrifying prophecy: a second flood would destroy Fontaine. Driven by this knowledge, the Narzissenkreuz Ordo formed, their desperate quest for salvation leading them down morally dubious paths as they delved into forgotten power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section6" class="history-section" style="background-image: url('styles/images/History/6.jpg');">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="history-text-container">
                <h2>Elynas and a Time of Change</h2>
                <p class="history-text">
                  The beast Elynas ravaged Fontaine. A great battle and the resulting explosion transformed Elynas' remains, giving birth to a new race: the Melusines. A new Chief Justice, Neuvillette, sought to bridge this divide, but tensions simmered as whispers of the prophecy spread.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
    // Links for the sidebar navigation
      links: [
        { title: 'Introduction', href: '#section0' },
        { title: 'The End of the Old World', href: '#section1' },
        { title: 'The Oceanid Era', href: '#section2' },
        { title: 'Remuria and the Fall', href: '#section3' },
        { title: 'An Archon\'s Sacrifice', href: '#section4' },
        { title: 'Secrets and Ruins', href: '#section5' },
        { title: 'Elynas and a Time of Change', href: '#section6' }
      ]
    };
  }
};
