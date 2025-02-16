export default {
  template: `
    <div>      
      <!-- Form Section with Video Background -->
      <section id="section0" class="video-background-section position-relative">
        <video autoplay loop muted playsinline class="video-background">
          <source src="styles/videos/music.mp4" type="video/mp4">
        </video>

        <div class="form-container align-items-center justify-content-center">
          <form @submit.prevent="submitForm" novalidate>
            <fieldset>
              <legend>User Details</legend>
              <div class="row">
                <!-- Name Field -->
                <div class="col-md-6 mb-3">
                  <label for="name" class="form-label">Name:</label>
                  <input type="text" class="form-control" :class="{ 'is-invalid': errors.name && touchedFields.name }" id="name" v-model="userDetails.name" @input="handleInput('name')">
                  <div class="invalid-feedback" v-show="errors.name && touchedFields.name">{{ errors.name }}</div>
                </div>

                <!-- Last Name Field -->
                <div class="col-md-6 mb-3">
                  <label for="lastName" class="form-label">Last Name:</label>
                  <input type="text" class="form-control" :class="{ 'is-invalid': errors.lastName && touchedFields.lastName }" id="lastName" v-model="userDetails.lastName" @input="handleInput('lastName')">
                  <div class="invalid-feedback" v-show="errors.lastName && touchedFields.lastName">{{ errors.lastName }}</div>
                </div>

                <!-- Phone Number Field -->
                <div class="col-md-6 mb-3">
                  <label for="phoneNumber" class="form-label">Phone Number:</label>
                  <input type="text" class="form-control" :class="{ 'is-invalid': errors.phoneNumber && touchedFields.phoneNumber }" id="phoneNumber" v-model="userDetails.phoneNumber" @input="handleInput('phoneNumber')">
                  <div class="invalid-feedback" v-show="errors.phoneNumber && touchedFields.phoneNumber">{{ errors.phoneNumber }}</div>
                </div>

                <!-- Email Address Field -->
                <div class="col-md-6 mb-3">
                  <label for="email" class="form-label">Email Address:</label>
                  <input type="email" class="form-control" :class="{ 'is-invalid': errors.email && touchedFields.email }" id="email" v-model="userDetails.email" @input="handleInput('email')">
                  <div class="invalid-feedback" v-show="errors.email && touchedFields.email">{{ errors.email }}</div>
                </div>

                <!-- Street Address Field -->
                <div class="col-md-6 mb-3">
                  <label for="streetAddress" class="form-label">Street Address:</label>
                  <input type="text" class="form-control" id="streetAddress" v-model="userDetails.streetAddress">
                </div>

                <!-- City/Town Field -->
                <div class="col-md-6 mb-3">
                  <label for="city" class="form-label">City/Town:</label>
                  <input type="text" class="form-control" id="city" v-model="userDetails.city">
                </div>

                <!-- Postcode Field -->
                <div class="col-md-6 mb-3">
                  <label for="postcode" class="form-label">Postcode:</label>
                  <input type="text" class="form-control" :class="{ 'is-invalid': errors.postcode && touchedFields.postcode }" id="postcode" v-model="userDetails.postcode" @input="handleInput('postcode')">
                  <div class="invalid-feedback" v-show="errors.postcode && touchedFields.postcode">{{ errors.postcode }}</div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Services</legend>
              <div class="row">
                <!-- Subject Field -->
                <div class="col-md-6 mb-3">
                  <label for="subject" class="form-label">Subject:</label>
                  <select class="form-control" id="subject" v-model="userDetails.subject" @change="updateCategory">
                    <option value="Enquiry on History & Lore in Fontaine">Enquiry on History & Lore in Fontaine</option>
                    <option value="Enquiry on Characters in Fontaine">Enquiry on Characters in Fontaine</option>
                    <option value="Enquiry on Music in Fontaine">Enquiry on Music in Fontaine</option>
                  </select>
                </div>

                <!-- Category Field -->
                <div class="col-md-6 mb-3">
                  <label for="category" class="form-label">Category:</label>
                  <input type="text" class="form-control" id="category" v-model="userDetails.category" readonly>
                </div>
              </div>

              <!-- Enquiry Field -->
              <div class="mb-3">
                <label for="enquiry" class="form-label">Enquiry:</label>
                <textarea class="form-control" id="enquiry" v-model="userDetails.enquiry"></textarea>
              </div>
            </fieldset>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </div>
  `,
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
      },
      errors: {
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        postcode: ''
      },
      touchedFields: {
        name: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        postcode: false
      }
    };
  },
  methods: {
    // Handle input and mark field as touched
    handleInput(field) {
      this.touchedFields[field] = true;
      this[`validate${field.charAt(0).toUpperCase() + field.slice(1)}`]();
    },
    // Validation for name field
    validateName() {
      if (!/^[a-zA-Z\s]+$/.test(this.userDetails.name)) {
        this.errors.name = 'Name must contain only letters and spaces.';
      } else {
        this.errors.name = '';
      }
    },
    // Validation for last name field
    validateLastName() {
      if (!/^[a-zA-Z\s]+$/.test(this.userDetails.lastName)) {
        this.errors.lastName = 'Last name must contain only letters and spaces.';
      } else {
        this.errors.lastName = '';
      }
    },
    // Validation for phone number field
    validatePhoneNumber() {
      if (!/^\d{10}$/.test(this.userDetails.phoneNumber)) {
        this.errors.phoneNumber = 'Phone number must be 10 digits.';
      } else {
        this.errors.phoneNumber = '';
      }
    },
    // Validation for email field
    validateEmail() {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(this.userDetails.email)) {
        this.errors.email = 'Invalid email format.';
      } else {
        this.errors.email = '';
      }
    },
    // Validation for postcode field
    validatePostcode() {
      if (!/^\d{5}$/.test(this.userDetails.postcode)) {
        this.errors.postcode = 'Postcode must be exactly 5 digits.';
      } else {
        this.errors.postcode = '';
      }
    },
    // Update category based on selected subject
    updateCategory() {
      switch (this.userDetails.subject) {
        case "Enquiry on History & Lore in Fontaine":
          this.userDetails.category = "History & Lore in Fontaine";
          break;
        case "Enquiry on Characters in Fontaine":
          this.userDetails.category = "Characters in Fontaine";
          break;
        case "Enquiry on Music in Fontaine":
          this.userDetails.category = "Music in Fontaine";
          break;
      }
    },
    // Form submission handler
    submitForm() {
      // Perform validations
      this.validateName();
      this.validateLastName();
      this.validatePhoneNumber();
      this.validateEmail();
      this.validatePostcode();
        
        // Collect error messages
      const errorMessages = [];
      if (this.errors.name) errorMessages.push(this.errors.name);
      if (this.errors.lastName) errorMessages.push(this.errors.lastName);
      if (this.errors.phoneNumber) errorMessages.push(this.errors.phoneNumber);
      if (this.errors.email) errorMessages.push(this.errors.email);
      if (this.errors.postcode) errorMessages.push(this.errors.postcode);
        
      // Check if there are no validation errors
      if (errorMessages.length === 0) {
        // Store user details in session storage
        sessionStorage.setItem('formData', JSON.stringify(this.userDetails));
        // Redirect to the confirmation page
        this.$router.push('/confirmation');
      } else {
        // Alert user to correct the form errors with specific messages
        alert('Please correct the following errors:\n' + errorMessages.join('\n'));
      }
    }
  }
};
