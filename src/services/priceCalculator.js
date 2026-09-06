function applyDiscount(price, discountPct) {
  return price - price * discountPct;
}

function calculateTotal(items, discountPct) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return applyDiscount(subtotal, discountPct);
}

module.exports = { applyDiscount, calculateTotal };
