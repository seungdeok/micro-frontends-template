import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const mount = (el: string | Element) => {
  createApp(App).mount(el);
};

if (import.meta.env.MODE === "development") {
  mount("#app");
}

export { mount };
