// Import the Sidebar component
import Sidebar from './Sidebar.js';

export default {
  components: {
    'sidebar-component': Sidebar  // Sidebar component for navigation
  },
  

  template: `
    <div> 
      <!-- Sidebar navigation -->
      <sidebar-component :links="links"></sidebar-component>

      <!-- Section 0: Music Webpage Introduction Section -->
      <section id="section0">
        <!-- Introduction component with video background, title, and description -->
        <introduction-component
          video-src="styles/videos/music4.mp4"
          title="Music of Fontaine"
          description="Relax and take some time to enjoy and experience the best music Fontaine has to offer."
        ></introduction-component>
      </section>

      <!-- Section 1: Custom music player component -->
      <section id="section1">
        <!-- Music player component -->
        <music-player></music-player>
      </section>
    </div>
  `,
  
  data() {
    return {
      // Links for the sidebar navigation
      links: [
        { title: 'Introduction', href: '#section0' },
        { title: 'Music Player', href: '#section1' }
      ]
    };
  }
};
