import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import the font awesome core installed by npm library
import { library } from "@fortawesome/fontawesome-svg-core"; //'@fortawesome/fontawesome-svg-core'//utility function that allows us to import icons from fontawesome
/* import font awesome icon component */
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // '@fortawesome/free-solid-svg-icons'//fas is the prefix to select all icons from this library but we just want the phone icon here
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"; //' @fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; //--save @fortawesome/vue-fontawesome@prerelease

library.add(faPhone, faFacebook, faInstagram);
createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
