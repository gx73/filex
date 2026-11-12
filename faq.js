/* FILEX TRONICS - FAQ page */
$('#faqList').innerHTML = FAQS.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('');
$('#faqWa').href = wa(`Hello ${CONFIG.brand}, I have a question.${whoLines()}`);
