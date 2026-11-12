/* FILEX TRONICS - shop page: search, category filter, sort */
const CATS = ['All', 'iPhone', 'Android', 'Electronics', 'Accessories'];
const params = new URLSearchParams(location.search);
const state = { cat: CATS.includes(params.get('cat')) ? params.get('cat') : 'All', q: '', sort: 'featured' };

function renderCats() {
  $('#cats').innerHTML = CATS.map(c => {
    const n = c === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c).length;
    return `<button class="cat" type="button" data-cat="${c}" aria-pressed="${state.cat === c}">${c}<span>${n}</span></button>`;
  }).join('');
}

function renderGrid() {
  const q = state.q.trim().toLowerCase();
  let list = PRODUCTS.filter(p => (state.cat === 'All' || p.cat === state.cat) && (!q || (p.name + ' ' + p.sub + ' ' + p.cat + ' ' + p.tag).toLowerCase().includes(q)));
  if (state.sort === 'low') list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === 'high') list = [...list].sort((a, b) => b.price - a.price);
  if (state.sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  $('#grid').innerHTML = list.length
    ? list.map(cardHTML).join('')
    : `<div class="empty">No products match your search.<br><button class="btn sm" type="button" data-act="reset">Clear filters</button></div>`;
}

document.addEventListener('click', e => {
  const cat = e.target.closest('[data-cat]');
  if (cat) { state.cat = cat.dataset.cat; renderCats(); renderGrid(); return; }
  const b = e.target.closest('[data-act]'); if (!b) return;
  if (b.dataset.act === 'add') { Cart.add(b.dataset.id); toast('Added to cart'); }
  if (b.dataset.act === 'reset') { state.q = ''; state.cat = 'All'; $('#q').value = ''; renderCats(); renderGrid(); }
});
$('#q').addEventListener('input', e => { state.q = e.target.value; renderGrid(); });
$('#sort').addEventListener('change', e => { state.sort = e.target.value; renderGrid(); });

renderCats();
renderGrid();
