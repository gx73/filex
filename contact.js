/* FILEX TRONICS - contact page: WhatsApp, Instagram, customer sign-in, Kariakoo map */
const L = CONFIG.location;

/* WhatsApp */
$('#waNum').textContent = CONFIG.whatsappDisplay;
$('#waOpen').href = wa(`Hello ${CONFIG.brand}, I'd like to ask about your devices.${whoLines()}`);
$('#copyNum').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(CONFIG.whatsappDisplay); toast('Number copied'); }
  catch (err) {
    const r = document.createRange(); r.selectNodeContents($('#waNum'));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast('Number selected');
  }
});

/* Instagram */
$('#igHandle').textContent = '@' + CONFIG.instagram;
$('#igOpen').href = igUrl();

/* Location */
$('#locTitle').textContent = `Find us in ${L.area}`;
$('#locAddr').textContent = [L.detail, `${L.area}, ${L.city}, ${L.country}`].filter(Boolean).join(' - ');
$('#mapFrame').src = 'https://www.google.com/maps?q=' + encodeURIComponent(L.mapQuery) + '&output=embed';
$('#mapOpen').href = mapsSearchUrl();
$('#mapDir').href = mapsDirUrl();

/* Customer sign-in: saves name and phone on this device so orders and messages are pre-filled */
function showProfile() {
  const p = Profile.get();
  $('#loginForm').hidden = !!p;
  $('#signed').hidden = !p;
  if (p) { $('#sName').textContent = p.name; $('#sPhone').textContent = p.phone; $('#waOpen').href = wa(`Hello ${CONFIG.brand}, I'd like to ask about your devices.${whoLines()}`); }
}
$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#lName').value.trim().replace(/\s+/g, ' ');
  const phone = $('#lPhone').value.trim();
  const digits = phone.replace(/[^\d]/g, '');
  let err = '';
  if (name.length < 2) err = 'Enter your name.';
  else if (!/^\+?[\d\s()-]+$/.test(phone) || digits.length < 9 || digits.length > 15) err = 'Enter a valid phone number, for example +255 7XX XXX XXX.';
  $('#lErr').textContent = err;
  if (err) return;
  Profile.set({ name: name.slice(0, 60), phone: phone.slice(0, 20) });
  showProfile();
  toast('Signed in');
});
$('#signOut').addEventListener('click', () => {
  Profile.clear(); $('#lName').value = ''; $('#lPhone').value = '';
  $('#waOpen').href = wa(`Hello ${CONFIG.brand}, I'd like to ask about your devices.`);
  showProfile(); toast('Signed out');
});
showProfile();
