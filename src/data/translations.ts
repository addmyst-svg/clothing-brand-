export interface TranslationDictionary {
  brandTagline: string;
  brandTaglineSub: string;
  nav: {
    home: string;
    shop: string;
    crafts: string;
    artisans: string;
    customise: string;
    story: string;
    partner: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtext: string;
    shopCta: string;
    artisanCta: string;
  };
  problem: {
    heading: string;
    subheading: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  solution: {
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  spotlight: {
    badge: string;
    title: string;
    readStory: string;
    exploreCraft: string;
  };
  impact: {
    heading: string;
    subheading: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
  };
  shop: {
    title: string;
    subtext: string;
    allCategories: string;
    filterCraft: string;
    filterTier: string;
    sortLabel: string;
    everydayLine: string;
    heritageLine: string;
    handcraftedBy: string;
    addToCart: string;
    quickView: string;
    itemsFound: string;
  };
  cart: {
    title: string;
    empty: string;
    emptyAction: string;
    subtotal: string;
    shippingNotice: string;
    checkout: string;
    freeShippingUnlocked: string;
    addMoreForFreeShipping: string;
  };
  common: {
    searchPlaceholder: string;
    currency: string;
    wishlist: string;
    close: string;
    learnMore: string;
    viewAll: string;
    viewProducts: string;
    origin: string;
    timeTaken: string;
    artisansInvolved: string;
    care: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'hi', TranslationDictionary> = {
  en: {
    brandTagline: 'Kala that carries a story.',
    brandTaglineSub: 'Reviving disappearing Indian handicrafts into contemporary, durable & affordable fashion handcrafted by rural women in Bihar.',
    nav: {
      home: 'Home',
      shop: 'Shop',
      crafts: 'Craft Library',
      artisans: 'Artisans',
      customise: 'Customise',
      story: 'Our Story & Impact',
      partner: 'Partner With Us',
      contact: 'Contact & FAQ'
    },
    hero: {
      eyebrow: 'Rooted in Bihar • Crafted for the Modern Wardrobe',
      title: 'Kala that carries a story.',
      subtext: 'Preserving endangered Indian crafts like Sujini, Madhubani, and Khatwa through small-batch contemporary silhouettes handcrafted by women self-help collectives.',
      shopCta: 'Shop the Collection',
      artisanCta: 'Meet Our Artisans'
    },
    problem: {
      heading: 'Why Craft Revival Matters',
      subheading: 'Traditional handmade arts are fast vanishing beneath mass synthetic industrialization.',
      card1Title: '73% Crafts Disappearing',
      card1Desc: 'Techniques like Khatwa cutwork and Sujini quilting are losing their generational practitioners to low-wage urban migration [placeholder metric].',
      card2Title: 'Unfair Market Intermediaries',
      card2Desc: 'Village women artisans historically receive less than 15% of retail value while middlemen capture markups [placeholder metric].',
      card3Title: 'Inconsistent Seasonal Income',
      card3Desc: 'Without steady demand and modern design integration, artisans face months of financial insecurity between agricultural cycles [placeholder metric].'
    },
    solution: {
      heading: 'The श्री Kala Model',
      subheading: 'A transparent four-pillar ecosystem connecting ancient rural heritage with everyday wardrobes.',
      step1Title: '1. Document the Craft',
      step1Desc: 'We archive endangered motifs, regional natural dye formulas, and oral histories directly with village elders.',
      step2Title: '2. Design for Today',
      step2Desc: 'Our design studio translates traditional needlecraft into functional, breathable jackets, sarees, bags, and tops.',
      step3Title: '3. Handcraft in Batches',
      step3Desc: 'Empowered women self-help groups craft pieces in dignified village clusters with guaranteed fair living wages.',
      step4Title: '4. Deliver with Story',
      step4Desc: 'Each garment reaches your door with the artisan’s handwritten card, technique origin, and wash care guide.'
    },
    spotlight: {
      badge: 'Craft of the Month',
      title: 'Sujini Embroidery: The Living Tapestry of Bhusra',
      readStory: 'Read the Living Story',
      exploreCraft: 'Explore Sujini Pieces'
    },
    impact: {
      heading: 'Our Collective Impact in Bihar',
      subheading: 'Real economic dignity, continuous skill transfer, and preserved heritage.',
      stat1Label: 'Rural Women Artisans Supported [placeholder]',
      stat2Label: 'Traditional Crafts Documented & Revived',
      stat3Label: 'Fair-Wage Living Hours Generated [placeholder]',
      stat4Label: 'Direct Bank Deposits to Women SHGs [placeholder]'
    },
    shop: {
      title: 'The Handcrafted Collection',
      subtext: 'Every stitch, fold, and brushstroke carries the soul and dignity of its maker.',
      allCategories: 'All Categories',
      filterCraft: 'Filter by Craft',
      filterTier: 'Collection Tier',
      sortLabel: 'Sort By',
      everydayLine: 'Everyday Affordable',
      heritageLine: 'Premium Heritage',
      handcraftedBy: 'Handcrafted by',
      addToCart: 'Quick Add',
      quickView: 'Quick View',
      itemsFound: 'pieces found'
    },
    cart: {
      title: 'Your Heritage Bag',
      empty: 'Your shopping bag is waiting for its first artisanal piece.',
      emptyAction: 'Explore Collection',
      subtotal: 'Estimated Subtotal',
      shippingNotice: 'Includes all taxes. Free express shipping on orders above ₹1,999 across India.',
      checkout: 'Proceed to Secure Checkout',
      freeShippingUnlocked: '🎉 You have unlocked Free Express Shipping!',
      addMoreForFreeShipping: 'Add'
    },
    common: {
      searchPlaceholder: 'Search sarees, denim, Madhubani, Sujini, artisans...',
      currency: '₹',
      wishlist: 'Wishlist',
      close: 'Close',
      learnMore: 'Learn More',
      viewAll: 'View All',
      viewProducts: 'View Pieces',
      origin: 'Origin',
      timeTaken: 'Time Taken',
      artisansInvolved: 'Artisans Involved',
      care: 'Care & Maintenance'
    }
  },
  hi: {
    brandTagline: 'हर धागे में विरासत',
    brandTaglineSub: 'बिहार की लुप्तप्राय पारंपरिक हस्तकलाओं को समकालीन, टिकाऊ और सुलभ परिधानों में पुनर्जीवित करने का संकल्प।',
    nav: {
      home: 'होम',
      shop: 'संग्रह देखें',
      crafts: 'शिल्प विरासत',
      artisans: 'हमारे शिल्पकार',
      customise: 'कस्टम बनवाएं',
      story: 'हमारी कहानी व प्रभाव',
      partner: 'साथ जुड़ें',
      contact: 'संपर्क व प्रश्न'
    },
    hero: {
      eyebrow: 'बिहार की मिट्टी से जुड़ा • आधुनिक जीवनशैली के लिए निर्मित',
      title: 'हर धागे में विरासत',
      subtext: 'सुजिनी, मधुबनी और खतवा जैसी प्राचीन कलाओं को ग्रामीण महिला स्वयं-सहायता समूहों द्वारा हस्तनिर्मित समकालीन परिधानों के माध्यम से संरक्षित करना।',
      shopCta: 'संग्रह देखें',
      artisanCta: 'शिल्पकारों से मिलें'
    },
    problem: {
      heading: 'शिल्प पुनरुद्धार क्यों आवश्यक है',
      subheading: 'औद्योगिक उत्पादन के दौर में हमारी सदियों पुरानी हस्तकलाएं लुप्त होने की कगार पर हैं।',
      card1Title: '73% शिल्प लुप्तप्राय',
      card1Desc: 'खतवा कटवर्क और सुजिनी जैसी दुर्लभ तकनीकों के पारखी कारीगर घट रहे हैं [सांकेतिक आंकड़ा]।',
      card2Title: 'बिचौलियों का शोषण',
      card2Desc: 'ग्रामीण महिला कारीगरों को उत्पाद के खुदरा मूल्य का केवल 15% ही मिल पाता था [सांकेतिक आंकड़ा]।',
      card3Title: 'अस्थिर मौसमी आय',
      card3Desc: 'आधुनिक बाजार से सीधे जुड़ाव के अभाव में कारीगरों को साल के कई महीने आर्थिक तंगी झेलनी पड़ती थी [सांकेतिक आंकड़ा]।text'
    },
    solution: {
      heading: 'श्री Kala का समाधान मॉडल',
      subheading: 'पारंपरिक विरासत को निष्पक्ष व्यापार और आधुनिक डिजाइन से जोड़ने वाला चार-चरणीय चक्र।',
      step1Title: '1. शिल्प का दस्तावेजीकरण',
      step1Desc: 'हम गांवों के बुजुर्ग कारीगरों से दुर्लभ पैटर्न और प्राकृतिक रंगों की विधियों को संजोते हैं।',
      step2Title: '2. आधुनिक डिजाइन',
      step2Desc: 'हमारा स्टूडियो इन तकनीकों को आरामदायक जैकेट, साड़ी, बैग और कुर्तों में ढालता है।',
      step3Title: '3. छोटे समूहों में निर्माण',
      step3Desc: 'महिला स्वयं-सहायता समूह अपनी गति से, सम्मानजनक मजदूरी के साथ हर टुकड़ा तैयार करते हैं।',
      step4Title: '4. कहानी के साथ आप तक',
      step4Desc: 'हर परिधान कारीगर के हस्ताक्षर और तकनीक के संक्षिप्त इतिहास के साथ आप तक पहुंचता है।'
    },
    spotlight: {
      badge: 'माह का विशेष शिल्प',
      title: 'सुजिनी कढ़ाई: भुसरा गांव की जीवित कथा-कढ़ाई',
      readStory: 'पूरी कहानी पढ़ें',
      exploreCraft: 'सुजिनी संग्रह देखें'
    },
    impact: {
      heading: 'बिहार में हमारा सामाजिक प्रभाव',
      subheading: 'महिला सशक्तीकरण, स्थिर आजीविका और सांस्कृतिक धरोहर का संरक्षण।',
      stat1Label: 'लाभान्वित ग्रामीण महिला शिल्पकार [सांकेतिक]',
      stat2Label: 'पुनर्जीवित की गई पारंपरिक हस्तकलाएं',
      stat3Label: 'सृजित सम्मानजनक आजीविका के घंटे [सांकेतिक]',
      stat4Label: 'महिला स्वयं-सहायता खातों में प्रत्यक्ष भुगतान [सांकेतिक]'
    },
    shop: {
      title: 'हस्तशिल्प वस्त्र संग्रह',
      subtext: 'हर सिलाई, सिलवट और रंग में ग्रामीण महिलाओं के स्वाभिमान की महक है।',
      allCategories: 'सभी श्रेणियां',
      filterCraft: 'शिल्प अनुसार चुनें',
      filterTier: 'श्रेणी प्रकार',
      sortLabel: 'क्रमबद्ध करें',
      everydayLine: 'किफायती रोज़मर्रा',
      heritageLine: 'शाही हेरिटेज',
      handcraftedBy: 'हस्तनिर्मित द्वारा',
      addToCart: 'बैग में जोड़ें',
      quickView: 'त्वरित दर्शन',
      itemsFound: 'उत्पाद उपलब्ध'
    },
    cart: {
      title: 'आपका विरासत थैला',
      empty: 'आपका थैला अभी खाली है। हस्तनिर्मित कला को अपने जीवन का हिस्सा बनाएं।',
      emptyAction: 'संग्रह देखें',
      subtotal: 'अनुमानित कुल राशि',
      shippingNotice: 'सभी कर सम्मिलित हैं। ₹1,999 से अधिक के ऑर्डर पर पूरे भारत में निःशुल्क शिपिंग।',
      checkout: 'सुरक्षित चेकआउट करें',
      freeShippingUnlocked: '🎉 आपको निःशुल्क एक्सप्रेस शिपिंग मिल गई है!',
      addMoreForFreeShipping: 'जोड़ें'
    },
    common: {
      searchPlaceholder: 'साड़ी, डेनिम, मधुबनी, सुजिनी या कारीगर खोजें...',
      currency: '₹',
      wishlist: 'पसंदीदा',
      close: 'बंद करें',
      learnMore: 'विस्तार से जानें',
      viewAll: 'सभी देखें',
      viewProducts: 'उत्पाद देखें',
      origin: 'उत्पत्ति क्षेत्र',
      timeTaken: 'निर्माण समय',
      artisansInvolved: 'सहभागी कारीगर',
      care: 'देखभाल निर्देश'
    }
  }
};
