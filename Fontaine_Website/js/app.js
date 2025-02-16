const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Import components
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import MusicPlayer from './components/MusicPlayer.js';
import Introduction from './components/Introduction.js';
import CharacterCarousel from './components/CharacterCarousel.js';
import VideoBackground from './components/VideoBackground.js';
import InteractiveCard from './components/InteractiveCard.js';

// Import routes
import Home from './routes/Home.js';  
import History from './routes/History.js';
import Characters from './routes/Characters.js';
import Music from './routes/Music.js';  
import Form from './routes/Form.js';
import Confirmation from './routes/Confirmation.js'; 

// Define the routes for the application
const routes = [
    { path: '/', component: Home },
    { path: '/history', component: History },
    { path: '/characters', component: Characters },
    { path: '/music', component: Music },
    { path: '/form', component: Form },
    { path: '/confirmation', component: Confirmation }
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Create the Vue application instance
const app = createApp({
  // Application data
  data() {
    return { 
      userDetails: {
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        streetAddress: '',
        city: '',
        postcode: '',
        subject: '',
        category: '',
        enquiry: ''
      }
    };
  },
  // Lifecycle hook that runs after the instance has been mounted
  mounted() {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Delay (in ms) before the animation starts
      duration: 800 // Duration (in ms) of the animation
    });

    // Retrieve user details from session storage
    this.userDetails = JSON.parse(sessionStorage.getItem('formData')) || {};
    console.log('User Details loaded on confirmation page:', this.userDetails);

    // Additional check for formData in session storage
    const formData = sessionStorage.getItem('formData');
    if (formData) {
      this.userDetails = JSON.parse(formData);
    }
  }
});

// Use the router instance in the app
app.use(router);

// Register components globally
app.component('navbar-component', Navbar);
app.component('footer-component', Footer);
app.component('music-player', MusicPlayer);
app.component('introduction-component', Introduction);
app.component('character-carousel', CharacterCarousel);
app.component('video-background', VideoBackground);
app.component('card-section', InteractiveCard);

// Mount the app to the DOM element with the id 'app'
app.mount('#app');
