export default {
  template: `
    <div>
      <!-- Confirmation Section with Video Background -->
      <section class="video-background-section">
        <video autoplay loop muted playsinline class="video-background">
          <source src="styles/videos/music.mp4" type="video/mp4">
        </video>
        <div class="form-container confirmation-details text-center mx-auto p-5">
          <h2 class="mb-4">Confirmation Details</h2>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th id="th-name" scope="col">Name</th>
                <td headers="th-name">{{ userDetails.name }}</td>
                <th id="th-lastName" scope="col">Last Name</th>
                <td headers="th-lastName">{{ userDetails.lastName }}</td>
              </tr>
              <tr>
                <th id="th-phoneNumber" scope="col">Phone Number</th>
                <td headers="th-phoneNumber">{{ userDetails.phoneNumber }}</td>
                <th id="th-email" scope="col">Email</th>
                <td headers="th-email">{{ userDetails.email }}</td>
              </tr>
              <tr>
                <th id="th-streetAddress" scope="col">Street Address</th>
                <td headers="th-streetAddress">{{ userDetails.streetAddress }}</td>
                <th id="th-city" scope="col">City/Town</th>
                <td headers="th-city">{{ userDetails.city }}</td>
              </tr>
              <tr>
                <th id="th-subject" scope="col">Subject</th>
                <td headers="th-subject">{{ userDetails.subject }}</td>
                <th id="th-category" scope="col">Category</th>
                <td headers="th-category">{{ userDetails.category }}</td>
              </tr>
              <tr>
                <th id="th-enquiry" scope="col">Enquiry</th>
                <td headers="th-enquiry" colspan="3">{{ userDetails.enquiry }}</td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" @click="submitToDatabase">Confirm</button>
          <button class="btn btn-secondary" @click="goBack">Edit</button>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
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
        this.$router.push('/'); // Redirect after submission
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit data. Error: ' + error.message);
      });
    },
    goBack() {
      this.$router.push('/form'); // Redirect to the form page
    }
  },
  mounted() {
    console.log('User Details loaded:', this.userDetails);
  }
};
