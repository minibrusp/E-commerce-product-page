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

export const getSessionById = async (id) => {
  const response = await fetch('http://localhost:5050/retrieve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  const json = await response.json();

  return json;
};
