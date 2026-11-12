/* FILEX TRONICS - shared code used by every page (header, footer, cart, WhatsApp helpers) */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = n => CONFIG.currency + ' ' + n.toLocaleString('en-US');
const byId = id => PRODUCTS.find(p => p.id === id);
const wa = text => 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text);
const igUrl = () => 'https://www.instagram.com/' + encodeURIComponent(CONFIG.instagram) + '/';
const mapsSearchUrl = () => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.location.mapQuery);
const mapsDirUrl = () => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(CONFIG.location.mapQuery);

/* Customer profile saved on this device only (name + phone, no password) */
const Profile = {
  get() { try { return JSON.parse(localStorage.getItem('filex-profile') || 'null'); } catch (e) { return null; } },
  set(p) { try { localStorage.setItem('filex-profile', JSON.stringify(p)); } catch (e) {} },
  clear() { try { localStorage.removeItem('filex-profile'); } catch (e) {} }
};
function whoLines() { const p = Profile.get(); return p ? `\nName: ${p.name}\nPhone: ${p.phone}` : ''; }

/* Cart saved on this device */
const Cart = {
  data: {},
  load() {
    try {
      const c = JSON.parse(localStorage.getItem('filex-cart') || '{}');
      this.data = {};
      for (const k in c) if (byId(k) && c[k] > 0) this.data[k] = Math.min(99, c[k] | 0);
    } catch (e) { this.data = {}; }
  },
  save() { try { localStorage.setItem('filex-cart', JSON.stringify(this.data)); } catch (e) {} updateBadge(); },
  add(id, q = 1) { this.data[id] = Math.min(99, (this.data[id] || 0) + q); this.save(); },
  set(id, q) { if (q <= 0) delete this.data[id]; else this.data[id] = Math.min(99, q); this.save(); },
  clear() { this.data = {}; this.save(); },
  lines() { return Object.keys(this.data).map(id => ({ p: byId(id), q: this.data[id] })).filter(l => l.p); },
  count() { return this.lines().reduce((s, l) => s + l.q, 0); },
  subtotal() { return this.lines().reduce((s, l) => s + l.p.price * l.q, 0); },
  message() {
    const L = this.lines();
    return `Hello ${CONFIG.brand}, I'd like to order:\n` +
      L.map(l => `${l.q} x ${l.p.name} (${l.p.sub}) - ${fmt(l.p.price * l.q)}`).join('\n') +
      `\nSubtotal: ${fmt(this.subtotal())}${whoLines()}\nPlease confirm availability and delivery.`;
  }
};
function productMsg(p, q = 1) {
  return `Hello ${CONFIG.brand}, I'd like to order:\n${q} x ${p.name} (${p.sub}) - ${fmt(p.price * q)}${whoLines()}\nPlease confirm availability, colour and delivery.`;
}

/* product card used on the shop page and the product page */
function cardHTML(p) {
  return `
    <article class="card">
      <a class="art" href="product.html?id=${p.id}" aria-label="View details for ${p.name}">${art(p.art)}</a>
      <div class="card-body">
        <span class="tag">${p.tag}</span>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="sub">${p.sub}</div>
        <div class="price">${fmt(p.price)}</div>
        <div class="actions">
          <button class="btn sm" type="button" data-act="add" data-id="${p.id}">Add to cart</button>
          <a class="btn wa sm" href="${wa(productMsg(p))}" target="_blank" rel="noopener">Order</a>
        </div>
      </div>
    </article>`;
}

/* toast */
function toast(t) {
  let el = $('#toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = t; el.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 1700);
}

/* gradients and the FL monogram, shared by every page */
function injectDefs() {
  if ($('#svg-defs')) return;
  const d = document.createElement('div');
  d.id = 'svg-defs';
  d.innerHTML = `<svg class="defs" aria-hidden="true" focusable="false"><defs>
    <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8c6d1f"/><stop offset=".38" stop-color="#f6df8e"/><stop offset=".6" stop-color="#d4af37"/><stop offset="1" stop-color="#8c6d1f"/></linearGradient>
    <linearGradient id="gBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#23232c"/><stop offset=".5" stop-color="#111116"/><stop offset="1" stop-color="#1c1c24"/></linearGradient>
    <symbol id="fl-mark" viewBox="0 0 64 64">
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0a0e" stroke="url(#gGold)" stroke-width="2.5"/>
      <path d="M17 47V17H34M17 31H31" fill="none" stroke="url(#gGold)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41 17V47H51" fill="none" stroke="url(#gGold)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol></defs></svg>`;
  document.body.prepend(d);
}

function updateBadge() {
  const b = $('#cartCount'); if (!b) return;
  const n = Cart.count(); b.textContent = n; b.hidden = n === 0;
}

function renderChrome() {
  const page = document.body.dataset.page || '';
  const nav = [['contact.html', 'Contact', 'contact'], ['shop.html', 'Shop', 'shop'], ['about.html', 'About', 'about'], ['faq.html', 'FAQ', 'faq']];
  const links = nav.map(([h, l, k]) => `<a href="${h}"${page === k ? ' aria-current="page"' : ''}>${l}</a>`).join('');
  const head = $('#site-header');
  if (head) {
    head.innerHTML = `<header class="top"><div class="wrap">
      <div class="bar">
        <a class="brand" href="contact.html" aria-label="FILEX TRONICS"><svg><use href="#fl-mark"/></svg><span>FILEX TRONICS<small>GOLD STANDARD TECH</small></span></a>
        <nav class="main" aria-label="Main">${links}</nav>
        <span class="spacer"></span>
        <a class="icon-btn" href="cart.html" aria-label="Open cart"${page === 'cart' ? ' aria-current="page"' : ''}>
          <svg viewBox="0 0 24 24"><path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L19 8H6.2"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>
          <span class="badge" id="cartCount">0</span>
        </a>
        <button class="icon-btn burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      </div>
      <nav class="mnav" id="mnav" aria-label="Mobile">${links}<a href="cart.html">Cart</a></nav>
    </div></header>`;
    $('#burger').addEventListener('click', () => {
      const o = $('#mnav').classList.toggle('open');
      $('#burger').setAttribute('aria-expanded', o);
    });
  }
  const foot = $('#site-footer');
  if (foot) {
    const L = CONFIG.location;
    foot.innerHTML = `<footer><div class="wrap">
      <div class="foot">
        <div>
          <a class="brand" href="contact.html"><svg><use href="#fl-mark"/></svg><span>FILEX TRONICS<small>GOLD STANDARD TECH</small></span></a>
          <p>Phones, electronics and accessories, ordered through WhatsApp.</p>
        </div>
        <div><h4>Explore</h4><a href="contact.html">Contact</a><a href="shop.html">Shop</a><a href="about.html">About</a><a href="faq.html">FAQ</a><a href="cart.html">Cart</a></div>
        <div><h4>Connect</h4><a href="${wa('Hello ' + CONFIG.brand)}" target="_blank" rel="noopener">WhatsApp</a><a href="${igUrl()}" target="_blank" rel="noopener">Instagram</a></div>
        <div><h4>Visit</h4><span class="t">${L.area}</span><span class="t">${L.city}, ${L.country}</span><a href="${mapsSearchUrl()}" target="_blank" rel="noopener">Open in Maps</a></div>
      </div>
      <div class="legal">&copy; 2026 FILEX TRONICS. Prices and stock are confirmed at the time of order.</div>
    </div></footer>`;
  }
  updateBadge();
}

Cart.load();
injectDefs();
renderChrome();
