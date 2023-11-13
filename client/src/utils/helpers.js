// new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
export const formatPrice = (value, currency, locales) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// calculate total from each cart item's totalPrice
export const calculateTotal = (total, currentItem) => {
  return total + currentItem.totalPrice;
};

// calculate total quantity from each cart item's quantity
export const calculateTotalQuantity = (total, currentItem) => {
  return total + currentItem.quantity;
};
