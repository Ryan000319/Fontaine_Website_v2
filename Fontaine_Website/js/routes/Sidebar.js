export default {
  props: {
    links: Array  // An array of link objects containing title and href
  },

  methods: {
    // Method to navigate to a specific section
    navigateTo(link) {
      this.$router.push(link).then(() => {
        // Extract the section ID from the link
        const sectionId = link.split('#')[1];
        if (sectionId) {
          // Find the section element by ID
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  },
  
  template: `
    <nav id="sidebar" class="navbar">
      <ul class="nav nav-pills flex-column">
        <!-- Loop through the links array and create a list item for each link -->
        <li class="nav-item" v-for="link in links" :key="link.title">
          <!-- When a link is clicked, call the navigateTo method -->
          <a class="nav-link" href="javascript:void(0);" @click="navigateTo(link.href)">{{ link.title }}</a>
        </li>
      </ul>
    </nav>
  `
};
