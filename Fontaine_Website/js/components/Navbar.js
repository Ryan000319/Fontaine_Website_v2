export default {
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://genshin.hoyoverse.com/en/map?region=0">
          <img src="styles/icons/logo.png" alt="Genshin Impact Logo" class="img-fluid">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/history">History & Lore</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/characters">Characters</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/music">Music</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/form">Form</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
};
