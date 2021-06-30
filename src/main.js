import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./element-variables.scss";
import "./styles/index.scss";
import { useElementComponents } from "./element-components";

const app = createApp(App);
useElementComponents(app);
app.use(router);
app.mount("#app");
