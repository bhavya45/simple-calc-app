function calculateTotal(price, quantity, discount) {
  const subtotal = price * quantity;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;
  return total;
}

// Export for Jest testing
if (typeof module !== "undefined") {
  module.exports = { calculateTotal };
}

// --- Browser DOM logic ---
if (typeof document !== "undefined") {
  const priceInput = document.getElementById("price");
  const quantityInput = document.getElementById("quantity");
  const discountInput = document.getElementById("discount");
  const totalDisplay = document.getElementById("total");

  function updateTotal() {
    const price = parseFloat(priceInput.value) || 0;
    const quantity = parseInt(quantityInput.value) || 0;
    const discount = parseFloat(discountInput.value) || 0;

    const total = calculateTotal(price, quantity, discount);
    totalDisplay.textContent = total.toFixed(2);
  }

  priceInput.addEventListener("input", updateTotal);
  quantityInput.addEventListener("input", updateTotal);
  discountInput.addEventListener("input", updateTotal);
}


console.log("Testing CI run"); 