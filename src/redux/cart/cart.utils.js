export const addItemToCart = (cartItems, newItem) => {
  // Check to see if there is going to be any duplicates
  const existingCartItem = cartItems.find((item) => item.id === newItem.id)

  // create new items list and edit the quantity of duplicates
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }

  return [...cartItems, { ...newItem, quantity: 1 }]
}
