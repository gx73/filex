/* FILEX TRONICS - product illustrations drawn as inline SVG (needs the gradients from common.js) */
function art(type){
  const G = 'url(#gGold)', B = 'url(#gBody)';
  const lens = (x, y, r = 6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#050507" stroke="${G}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${r / 3}" fill="#2a2a34"/>`;
  const glow = '<ellipse cx="100" cy="188" rx="52" ry="6" fill="#d4af37" opacity=".22"/>';
  let s = '';
  switch (type) {
    case 'phone-pro':
      s = `<rect x="62" y="14" width="76" height="170" rx="15" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="69" y="21" width="36" height="36" rx="10" fill="#0a0a0e" stroke="#8c6d1f"/>${lens(80,32)}${lens(95,32)}${lens(87.5,47)}<circle cx="100" cy="112" r="8" fill="none" stroke="#8c6d1f" stroke-width="1.6"/>`; break;
    case 'phone':
      s = `<rect x="62" y="14" width="76" height="170" rx="15" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="69" y="21" width="30" height="30" rx="10" fill="#0a0a0e" stroke="#8c6d1f"/>${lens(78,30)}${lens(90,43)}<circle cx="100" cy="112" r="8" fill="none" stroke="#8c6d1f" stroke-width="1.6"/>`; break;
    case 'android-pro':
      s = `<rect x="62" y="14" width="76" height="170" rx="13" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="90" y="22" width="20" height="52" rx="10" fill="#0a0a0e" stroke="#8c6d1f"/>${lens(100,34,5)}${lens(100,48,5)}${lens(100,62,5)}<rect x="94" y="112" width="12" height="3" rx="1.5" fill="#8c6d1f"/>`; break;
    case 'android':
      s = `<rect x="62" y="14" width="76" height="170" rx="13" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="90" y="22" width="20" height="38" rx="10" fill="#0a0a0e" stroke="#8c6d1f"/>${lens(100,34,5)}${lens(100,48,5)}<rect x="94" y="112" width="12" height="3" rx="1.5" fill="#8c6d1f"/>`; break;
    case 'tablet':
      s = `<rect x="28" y="40" width="144" height="118" rx="12" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="36" y="48" width="128" height="102" rx="6" fill="#0a0a0e" stroke="#8c6d1f"/><path d="M52 132l22-26 16 18 20-30 38 38z" fill="none" stroke="${G}" stroke-width="2"/><circle cx="162" cy="99" r="2.2" fill="#8c6d1f"/>`; break;
    case 'watch':
      s = `<rect x="78" y="8" width="44" height="184" rx="14" fill="#16161d" stroke="#8c6d1f" stroke-width="1.5"/><rect x="62" y="64" width="76" height="76" rx="22" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="70" y="72" width="60" height="60" rx="15" fill="#0a0a0e"/><circle cx="100" cy="102" r="18" fill="none" stroke="${G}" stroke-width="2.5"/><path d="M100 102V90M100 102l8 5" stroke="${G}" stroke-width="2.5" stroke-linecap="round"/><rect x="138" y="90" width="7" height="22" rx="3" fill="${G}"/>`; break;
    case 'speaker':
      s = `<rect x="34" y="72" width="132" height="66" rx="33" fill="${B}" stroke="${G}" stroke-width="2.5"/>${[56,70,84,98,112,126,140].map(x => `<circle cx="${x}" cy="94" r="2.6" fill="#8c6d1f"/><circle cx="${x}" cy="105" r="2.6" fill="#8c6d1f"/><circle cx="${x}" cy="116" r="2.6" fill="#8c6d1f"/>`).join('')}`; break;
    case 'headphones':
      s = `<path d="M46 118C46 50 154 50 154 118" fill="none" stroke="${G}" stroke-width="9" stroke-linecap="round"/><rect x="30" y="104" width="30" height="58" rx="14" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="140" y="104" width="30" height="58" rx="14" fill="${B}" stroke="${G}" stroke-width="2.5"/>`; break;
    case 'earbuds':
      s = `<rect x="62" y="88" width="76" height="64" rx="26" fill="${B}" stroke="${G}" stroke-width="2.5"/><path d="M62 112h76" stroke="#8c6d1f" stroke-width="1.5"/><circle cx="100" cy="134" r="3" fill="${G}"/><ellipse cx="82" cy="62" rx="9" ry="12" fill="#f2ecda"/><rect x="79" y="68" width="6" height="22" rx="3" fill="#f2ecda"/><ellipse cx="118" cy="62" rx="9" ry="12" fill="#f2ecda"/><rect x="115" y="68" width="6" height="22" rx="3" fill="#f2ecda"/>`; break;
    case 'charger':
      s = `<rect x="88" y="34" width="6" height="24" rx="2" fill="${G}"/><rect x="106" y="34" width="6" height="24" rx="2" fill="${G}"/><rect x="72" y="58" width="56" height="84" rx="12" fill="${B}" stroke="${G}" stroke-width="2.5"/><rect x="88" y="132" width="24" height="8" rx="4" fill="#050507" stroke="#8c6d1f"/><text x="100" y="104" text-anchor="middle" font-family="monospace" font-size="16" font-weight="700" fill="${G}">20W</text>`; break;
    case 'powerbank':
      s = `<rect x="58" y="36" width="84" height="124" rx="16" fill="${B}" stroke="${G}" stroke-width="2.5"/>${[0,1,2,3].map(i => `<rect x="${74 + i * 14}" y="56" width="9" height="5" rx="2" fill="${i < 3 ? '#d4af37' : '#3a3320'}"/>`).join('')}<rect x="86" y="140" width="28" height="8" rx="4" fill="#050507" stroke="#8c6d1f"/><text x="100" y="108" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="${G}">20000</text>`; break;
    case 'cable':
      s = `<path d="M52 150C30 70 98 60 100 108S168 150 148 64" fill="none" stroke="${G}" stroke-width="5" stroke-linecap="round"/><rect x="38" y="148" width="28" height="18" rx="6" fill="${B}" stroke="${G}" stroke-width="2"/><rect x="136" y="46" width="28" height="18" rx="6" fill="${B}" stroke="${G}" stroke-width="2"/>`; break;
    case 'case':
      s = `<rect x="56" y="10" width="88" height="180" rx="22" fill="none" stroke="${G}" stroke-width="5"/><rect x="66" y="20" width="46" height="46" rx="12" fill="#0a0a0e" stroke="#8c6d1f" stroke-width="1.5"/>${lens(80,34,7)}${lens(98,34,7)}${lens(89,52,7)}<circle cx="100" cy="120" r="28" fill="none" stroke="#8c6d1f" stroke-width="2" stroke-dasharray="4 4"/>`; break;
    case 'glass':
      s = `<rect x="62" y="16" width="76" height="168" rx="16" fill="rgba(212,175,55,.06)" stroke="${G}" stroke-width="2.5" stroke-dasharray="6 4"/><path d="M78 150L124 40M94 160L134 66" stroke="#f6df8e" stroke-width="2" opacity=".5" stroke-linecap="round"/>`; break;
  }
  return `<svg viewBox="0 0 200 200" aria-hidden="true">${glow}${s}</svg>`;
}
