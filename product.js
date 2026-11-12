/* FILEX TRONICS - product page: reads ?id=... from the address */
(function () {
  const id = new URLSearchParams(location.search).get('id');
  const p = byId(id);
  const root = $('#product');

  if (!p) {
    root.innerHTML = `<div class="empty">We could not find that product.<br><a class="btn gold sm" href="shop.html" style="margin-top:1rem">Back to the shop</a></div>`;
    $('#related-wrap').hidden = true;
    return;
  }

  document.title = p.name + ' | FILEX TRONICS';
  let qty = 1;

  root.innerHTML = `
    <div class="crumbs"><a href="shop.html">Shop</a> / <a href="shop.html?cat=${encodeURIComponent(p.cat)}">${p.cat}</a> / ${p.name}</div>
    <div class="pd">
      <div class="art">${art(p.art)}</div>
      <div>
        <span class="tag">${p.cat} &middot; ${p.tag}</span>
        <h1>${p.name}</h1>
        <div class="sub">${p.sub}</div>
        <ul>${p.specs.map(s => `<li>${s}</li>`).join('')}</ul>
        <div class="price" id="pPrice"></div>
        <p class="sub" style="margin-top:.4rem">Sample price. Colour, condition and stock are confirmed on WhatsApp.</p>
        <div class="buy">
          <div class="qty" role="group" aria-label="Quantity">
            <button type="button" id="qMinus" aria-label="Decrease quantity">&minus;</button>
            <b id="qVal">1</b>
            <button type="button" id="qPlus" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn gold" type="button" id="addBtn">Add to cart</button>
          <a class="btn wa" id="waBtn" href="#" target="_blank" rel="noopener">Order on WhatsApp</a>
        </div>
      </div>
    </div>`;

  function update() {
    $('#qVal').textContent = qty;
    $('#pPrice').textContent = fmt(p.price * qty);
    $('#waBtn').href = wa(productMsg(p, qty));
  }
  $('#qMinus').addEventListener('click', () => { qty = Math.max(1, qty - 1); update(); });
  $('#qPlus').addEventListener('click', () => { qty = Math.min(99, qty + 1); update(); });
  $('#addBtn').addEventListener('click', () => { Cart.add(p.id, qty); toast('Added to cart'); });
  update();

  const rel = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  if (rel.length) {
    $('#related').innerHTML = rel.map(cardHTML).join('');
    document.addEventListener('click', e => {
      const b = e.target.closest('#related [data-act="add"]');
      if (b) { Cart.add(b.dataset.id); toast('Added to cart'); }
    });
  } else {
    $('#related-wrap').hidden = true;
  }
})();
