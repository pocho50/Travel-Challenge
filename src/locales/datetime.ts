import type { I18nOptions } from "vue-i18n";
const datetimeFormats: I18nOptions["datetimeFormats"] = {
  "en-US": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    },
  },
  "es-AR": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    },
  },
};

export default datetimeFormats;
