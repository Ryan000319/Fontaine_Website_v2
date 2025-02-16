import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const app = createApp({
  data() {
    return {
      // Change localStorage to sessionStorage
    userDetails: JSON.parse(sessionStorage.getItem('formData')) || {}

    };
  },
  methods: {
    submitToDatabase() {
      console.log("Submitting the following data:", JSON.stringify(this.userDetails)); // Log data being sent
      fetch('resources/submit.php', {  // Ensure this URL is correct and server is responding correctly
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userDetails)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('Data submitted successfully!');
        sessionStorage.removeItem('formData'); // Clear session storage after submission
        window.location.href = 'index.html'; // Redirect after submission
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit data. Error: ' + error.message);
      });
    }

  },
  mounted() {
    console.log('User Details loaded:', this.userDetails);
    window.submitToDatabase = this.submitToDatabase.bind(this);
  }
});

app.component('navbar-component', Navbar);
app.component('footer-component', Footer);

app.mount('#app');
