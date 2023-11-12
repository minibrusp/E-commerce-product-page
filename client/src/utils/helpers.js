// new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
export const formatPrice = (value, currency, locales) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
