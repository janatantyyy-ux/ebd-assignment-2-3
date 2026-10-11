// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a



import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Return all orders from the database.
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

// 2. Return orders from Alexandria with cancelled status.
export function myOrders(orders) {
  return orders.filter(
    (order) =>
      order.city === "Alexandria" &&
      order.status === "cancelled"
  );
}

// 3. Return the highest single-item price.
// Return 0 if the array is empty.
export function summarize(orders) {
  return orders.reduce(
    (highest, order) => Math.max(highest, order.price),
    0
  );
}

// 4. Return an order description.
// If the order doesn't exist, return the required error message.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

// 5. Convert each order to an object containing only item and quantity,
// then return the array as JSON text.
export function toJsonLines(orders) {
  const simplifiedOrders = orders.map((order) => ({
    item: order.item,
    quantity: order.quantity,
  }));

  return JSON.stringify(simplifiedOrders);
}
