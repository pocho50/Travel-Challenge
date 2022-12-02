import type { I18nOptions } from "vue-i18n";
const numberFormats: I18nOptions["numberFormats"] = {
  "en-US": {
    currency: {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    },
    decimal: {
      style: "decimal",
      maximumFractionDigits: 2,
    },
  },
  "es-AR": {
    currency: {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 2,
    },
    decimal: {
      style: "decimal",
      maximumSignificantDigits: 2,
    },
  },
};

export default numberFormats;
