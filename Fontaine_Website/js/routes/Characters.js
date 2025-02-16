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

      <!-- Introduction Section -->
      <section id="section0">
        <introduction-component
          video-src="styles/videos/history.mp4"
          title="Meet the Heroes and Villains of Fontaine"
            description="A brief look into some important characters that you will meet as you travel through Fontaine. Each of them have a unique story to tell and are essential in your journey."
         </introduction-component>
      </section>
      
      <!-- Characters Section -->
      <section id="section1">
        <character-carousel :characters="characters"></character-carousel>
      </section>
    </div>
  `,
  data() {
    return {
      // Links for the sidebar navigation
      links: [
        { title: 'Introduction', href: '#section0' },
        { title: 'Characters', href: '#section1' }
      ],
        
      // Characters data for the character carousel
      characters: [
        {
          name: 'Furina: Hydro Archon',
          quote: 'The "Regina of All Waters, Kindreds, Peoples and Laws" is deeply loved by her people.',
          description: "Flamboyant and imprudent, Furina lives for the thrill of the courtroom, often speaking in a manner peppered with bravado and drama. She is impatient and has a childlike temper, and she will occasionally make judgments that she doesn't mean.",
          image: 'styles/images/Characters/Furina.png',
          youtubeLink: 'EN79SfbcvIE',
        },
        {
          name: 'Neuvillette: Judge',
          quote: 'The Chief Justice of Fontaine, known as the Iudex, is renowned for his unassailable impartiality.',
          description: "Neuvillette is the Iudex of Fontaine, and the leader of the Marechaussee Phantom. While Neuvillette upholds the rules of the court with utmost reverence, he is quite aloof when dealing with human emotions and often distances himself from the public eye.",
          image: 'styles/images/Characters/Neuvillette.png',
          youtubeLink: 'v2QSNQXRSkE',
        },
        {
          name: 'Arlecchino: Harbinger',
          quote: '"The Knave," Fourth of the Fatui Harbingers. Revered as "Father" by the children of the House of the Hearth.',
          description: "As one of the Eleven Fatui Harbingers, Arlecchino is, unlike most Harbingers, likely unloyal to the Tsaritsa. She is working to achieve her goals by acquiring the Gnoses on her behalf. She handles Fatui matters with utmost importance and comes off as graceful and cordial.",
          image: 'styles/images/Characters/Arlecchino.png',
          youtubeLink: 'TnYFVP3c_bs',
        },
        {
          name: 'Chiori: Tailor Assassin',
          quote: 'A frank and outspoken fashion designer whose unique sense of style always puts her at the forefront of Fontainian trends.',
          description: "Chiori is a famous fashion designer from Inazuma who is currently running Chioriya Boutique in Fontaine and is one of the Komaniya Express's regular customers. She left Inazuma when the Vision Hunt Decree and Sakoku Decree was enacted and has not returned since.",
          image: 'styles/images/Characters/Chiori.png',
          youtubeLink: '6wK90KANTyI',
        }
      ]
    };
  }
};
