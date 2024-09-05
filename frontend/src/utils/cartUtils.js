export const updateCart = (state) => {
  // item price
  const itemPrice = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  state.itemPrice = itemPrice;
  // tax price
  const taxPrice = 0.15 * itemPrice;
  state.taxPrice = taxPrice.toFixed(2);

  // total price
  const totalPrice = itemPrice + taxPrice;
  state.totalPrice = totalPrice;

  // save the cart to localstorage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
