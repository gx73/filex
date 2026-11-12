/* FILEX TRONICS - settings and data. Edit this file to change numbers, prices and text. */
const CONFIG = {
  brand: 'FILEX TRONICS',
  whatsapp: '255652828264',            // digits only, country code first
  whatsappDisplay: '+255 652 828 264',
  instagram: 'filextronics',           // change to your real Instagram username
  currency: 'TZS',
  location: {
    area: 'Kariakoo',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    detail: '',                        // optional: add your street, building or shop number, e.g. 'Mtaa wa Msimbazi, Duka No. 12'
    mapQuery: 'Kariakoo, Dar es Salaam, Tanzania'  // what Google Maps searches for; use your exact address for a precise pin
  }
};

/* Sample TZS prices. Edit freely. */
const PRODUCTS = [
  {id:'ip16pm',name:'iPhone 16 Pro Max',sub:'256GB',cat:'iPhone',price:4200000,art:'phone-pro',tag:'Flagship',specs:['6.9-inch Super Retina XDR display','A18 Pro chip','Pro camera system with telephoto lens']},
  {id:'ip16p',name:'iPhone 16 Pro',sub:'256GB',cat:'iPhone',price:3650000,art:'phone-pro',tag:'Pro',specs:['6.3-inch Super Retina XDR display','A18 Pro chip','Pro camera system with telephoto lens']},
  {id:'ip16',name:'iPhone 16',sub:'128GB',cat:'iPhone',price:2750000,art:'phone',tag:'New',specs:['6.1-inch Super Retina XDR display','A18 chip','Camera Control button']},
  {id:'ip15pm',name:'iPhone 15 Pro Max',sub:'256GB',cat:'iPhone',price:3650000,art:'phone-pro',tag:'Titanium',specs:['6.7-inch Super Retina XDR display','A17 Pro chip','Titanium frame, USB-C']},
  {id:'ip15',name:'iPhone 15',sub:'128GB',cat:'iPhone',price:2350000,art:'phone',tag:'Popular',specs:['6.1-inch Super Retina XDR display','A16 Bionic chip','USB-C port']},
  {id:'ip14',name:'iPhone 14',sub:'128GB',cat:'iPhone',price:1850000,art:'phone',tag:'Value',specs:['6.1-inch Super Retina XDR display','A15 Bionic chip','Dual-camera system']},

  {id:'s24u',name:'Samsung Galaxy S24 Ultra',sub:'256GB',cat:'Android',price:3400000,art:'android-pro',tag:'Flagship',specs:['6.8-inch Dynamic AMOLED display','Snapdragon 8 Gen 3 for Galaxy','Built-in S Pen']},
  {id:'a55',name:'Samsung Galaxy A55 5G',sub:'128GB',cat:'Android',price:980000,art:'android',tag:'Mid-range',specs:['6.6-inch Super AMOLED display','50MP main camera','5G connectivity']},
  {id:'px8',name:'Google Pixel 8',sub:'128GB',cat:'Android',price:1750000,art:'android',tag:'Camera',specs:['6.2-inch Actua display','Google Tensor G3 chip','7 years of software updates']},
  {id:'rn13p',name:'Xiaomi Redmi Note 13 Pro',sub:'256GB',cat:'Android',price:780000,art:'android-pro',tag:'Value',specs:['6.67-inch AMOLED display','200MP main camera','67W fast charging']},
  {id:'camon30',name:'Tecno Camon 30',sub:'256GB',cat:'Android',price:720000,art:'android',tag:'Camera',specs:['Large AMOLED display','Portrait-focused camera','Fast charging']},
  {id:'note40',name:'Infinix Note 40',sub:'256GB',cat:'Android',price:560000,art:'android',tag:'Value',specs:['Large AMOLED display','Big-battery daily driver','Fast charging']},

  {id:'ipad10',name:'iPad (10th generation)',sub:'64GB Wi-Fi',cat:'Electronics',price:1150000,art:'tablet',tag:'Tablet',specs:['10.9-inch Liquid Retina display','A14 Bionic chip','USB-C port']},
  {id:'aw9',name:'Apple Watch Series 9',sub:'45mm GPS',cat:'Electronics',price:1450000,art:'watch',tag:'Wearable',specs:['Always-on Retina display','S9 chip with double-tap gesture','Health and fitness tracking']},
  {id:'flip6',name:'JBL Flip 6',sub:'Bluetooth speaker',cat:'Electronics',price:290000,art:'speaker',tag:'Audio',specs:['IP67 waterproof and dustproof','Up to 12 hours of playtime','PartyBoost pairing']},
  {id:'xm5',name:'Sony WH-1000XM5',sub:'Wireless headphones',cat:'Electronics',price:780000,art:'headphones',tag:'Audio',specs:['Industry-leading noise cancelling','Up to 30 hours of battery','Multipoint connection']},

  {id:'app2',name:'AirPods Pro (2nd gen)',sub:'USB-C case',cat:'Accessories',price:620000,art:'earbuds',tag:'Audio',specs:['Active noise cancellation','Transparency mode','USB-C charging case']},
  {id:'chg20',name:'20W USB-C Fast Charger',sub:'Wall adapter',cat:'Accessories',price:45000,art:'charger',tag:'Power',specs:['20W output','USB-C port','Compact travel size']},
  {id:'pb20',name:'20,000mAh Power Bank',sub:'USB-C + USB-A',cat:'Accessories',price:95000,art:'powerbank',tag:'Power',specs:['20,000mAh capacity','USB-C and USB-A ports','Charges two devices at once']},
  {id:'cab1',name:'USB-C Cable',sub:'1 metre',cat:'Accessories',price:20000,art:'cable',tag:'Power',specs:['USB-C to USB-C','Fast-charge ready','1 metre length']},
  {id:'case1',name:'MagSafe-style Phone Case',sub:'Choose your model',cat:'Accessories',price:35000,art:'case',tag:'Protection',specs:['Raised edges for screen and camera','Magnet ring for wireless chargers','Tell us your phone model on WhatsApp']},
  {id:'glass1',name:'Tempered Glass Protector',sub:'Choose your model',cat:'Accessories',price:15000,art:'glass',tag:'Protection',specs:['9H hardness rating','Easy-align installation','Tell us your phone model on WhatsApp']}
];

/* Sample testimonials. Replace with real customer reviews. */
const TESTIMONIALS = [
  {text:'Sample review: I asked about stock on WhatsApp and got an answer the same afternoon.',who:'Sample customer, Dar es Salaam'},
  {text:'Sample review: The price on the site matched what I was quoted when I confirmed my order.',who:'Sample customer, Arusha'},
  {text:'Sample review: Easy to pick a phone, add a case and send everything in one message.',who:'Sample customer, Mwanza'}
];

const FAQS = [
  ['How do I order?','Add items to your cart or tap Order on any product. Your order opens in WhatsApp as a ready-written message. Send it and we confirm the details with you.'],
  ['Are the prices final?','Prices on the site are shown in TZS and are confirmed again when you message us, since stock and market prices can change.'],
  ['Is every item in stock?','Availability is confirmed on WhatsApp before you pay for anything.'],
  ['Where are you based?','We are in Kariakoo, Dar es Salaam. Open the Contact page for the map.'],
  ['How does delivery or pickup work?','Delivery and pickup are arranged with the team on WhatsApp once your order is confirmed.'],
  ['How do I pay?','The payment method is agreed with you on WhatsApp when the order is confirmed.'],
  ['What about warranty?','Ask about warranty for the exact item when you confirm your order.']
];
