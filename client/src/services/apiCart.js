export const checkoutCart = async (cart) => {
  const response = await fetch('http://localhost:5050/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  const json = response.json();

  return json;
};
