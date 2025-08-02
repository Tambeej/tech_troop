async function processOrder(orderId) {
  const orderResponse = await fetch(`/api/orders/${orderId}`);
  const order = await orderResponse.json();
  const inventoryResponse = await fetch(`/api/inventory/${order.productId}`);
  const inventory = await inventoryResponse.json();

  if (inventory.stock > 0) {
    return { success: true, message: "Order processed" };
  } else {
    return { success: false, message: "Out of stock" };
  }
}
