/* FILEX TRONICS - cart page */
function render() {
  const L = Cart.lines();
  const list = $('#lines'), sum = $('#summary');
  if (!L.length) {
    list.innerHTML = `<div class="empty">Your cart is empty.<br><a class="btn gold sm" href="shop.html" style="margin-top:1rem">Browse the shop</a></div>`;
    sum.hidden = true;
    return;
  }
  sum.hidden = false;
  list.innerHTML = L.map(({ p, q }) => `
    <div class="line">
      <a class="th" href="product.html?id=${p.id}" aria-label="${p.name}">${art(p.art)}</a>
      <div>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="sub">${p.sub}</div>
        <div class="lp">${fmt(p.price * q)}</div>
        <div class="qty">
          <button type="button" data-act="dec" data-id="${p.id}" aria-label="Decrease quantity of ${p.name}">&minus;</button>
          <b>${q}</b>
          <button type="button" data-act="inc" data-id="${p.id}" aria-label="Increase quantity of ${p.name}">+</button>
          <button type="button" class="rm" data-act="rm" data-id="${p.id}">Remove</button>
        </div>
      </div>
    </div>`).join('');
  $('#sub').textContent = fmt(Cart.subtotal());
  $('#waOrder').href = wa(Cart.message());
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const id = b.dataset.id, q = Cart.data[id] || 0;
  if (b.dataset.act === 'inc') Cart.set(id, q + 1);
  if (b.dataset.act === 'dec') Cart.set(id, q - 1);
  if (b.dataset.act === 'rm') Cart.set(id, 0);
  render();
});
$('#clear').addEventListener('click', () => { Cart.clear(); render(); });
render();
