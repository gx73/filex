/* FILEX TRONICS - about page */
$('#rev').innerHTML = TESTIMONIALS.map(t => `<blockquote><p>${t.text}</p><cite>${t.who}</cite></blockquote>`).join('');
$('#aboutWa').href = wa(`Hello ${CONFIG.brand}, I'd like to ask about your devices.${whoLines()}`);
