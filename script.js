let total = 0;

function addToCart(productName, price) {
  const cartItems = document.getElementById('cart-items');
  const li = document.createElement('li');

  // Tambahkan teks item + tombol hapus
  li.innerHTML = `
    ${productName} - Rp ${price.toLocaleString()}
    <button class="delete-btn" onclick="removeFromCart(this, ${price})">🗑️</button>
  `;

  cartItems.appendChild(li);

  total += price;
  updateTotal();
}

function removeFromCart(button, price) {
  const li = button.parentElement;
  li.remove(); // hapus item dari tampilan

  total -= price;
  updateTotal();
}

function updateTotal() {
  document.getElementById('total').textContent = `Total: Rp ${total.toLocaleString()}`;
}

