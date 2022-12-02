import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import datetimeFormats from "./locales/datetime";
import numberFormats from "./locales/numbers";

import "./assets/main.css";

const i18n = createI18n<false>({
  locale: "en-US",
  numberFormats,
  datetimeFormats,
  messages: {
    "es-AR": es,
    "en-US": en,
  },
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
