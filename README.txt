FILEX TRONICS - TOVUTI YA KURASA NYINGI
=======================================

KURASA
  index.html    Intro: jina FILEX TRONICS, kisha simu ya mtindo wa iPhone inawaka na nembo ya FL, kisha inakupeleka contact.html
  contact.html  WhatsApp, Instagram, sign-in ya mteja, na ramani ya Kariakoo
  shop.html     Bidhaa zote: tafuta, chuja kwa aina, panga kwa bei
  product.html  Ukurasa wa bidhaa moja (inatumia ?id=...)
  cart.html     Kikapu cha manunuzi na kuagiza kwa WhatsApp
  about.html    Kuhusu sisi na maoni ya wateja
  faq.html      Maswali yanayoulizwa mara nyingi

FOLDA
  css/style.css  Muonekano wa kurasa zote
  css/intro.css  Muonekano wa intro tu
  js/config.js   NAMBA YA WHATSAPP, INSTAGRAM, ENEO, BIDHAA NA BEI (hapa ndipo unapobadilisha vitu)
  js/art.js      Michoro ya bidhaa
  js/common.js   Header, footer, kikapu na viungo vya WhatsApp
  js/*.js        Msimbo wa kila ukurasa

JINSI YA KUFUNGUA
  1. Toa (extract) zip.
  2. Bonyeza mara mbili index.html. Inafunguka kwenye browser.
  Kikapu na sign-in vinahifadhiwa kwenye browser. Kama havikai kati ya kurasa
  (baadhi ya browser huzuia hili kwa faili zinazofunguliwa moja kwa moja),
  fungua folda kwa seva ndogo, mfano: python3 -m http.server  kisha fungua http://localhost:8000
  Ukiweka tovuti kwenye hosting, tatizo hili halipo.

VITU VYA KUBADILISHA (js/config.js)
  - whatsapp / whatsappDisplay : namba ya WhatsApp
  - instagram                  : jina lako halisi la Instagram (sasa ni "filextronics" tu ili kujaza nafasi)
  - location.detail            : weka mtaa na namba ya duka, mfano 'Mtaa wa Msimbazi, Duka No. 12'
  - location.mapQuery          : anwani kamili kwa pini sahihi kwenye ramani
  - PRODUCTS                   : jina, bei (TZS) na maelezo ya bidhaa. Bei ni za mfano.
  - TESTIMONIALS               : weka maoni halisi ya wateja
  - FAQS                       : andika sera zako halisi (delivery, malipo, warranty)

SIGN-IN
  Sign-in inahifadhi jina na namba ya simu kwenye browser ya mteja tu, ili ujumbe wa
  WhatsApp ujazwe moja kwa moja. Hakuna password na hakuna seva. Kwa akaunti halisi
  zenye password utahitaji backend (mfano Firebase Auth au seva yako).

NEMBO
  Nembo ya FL ni ya FILEX TRONICS. Haitumii nembo ya Apple.
