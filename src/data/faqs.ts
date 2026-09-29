export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'cruises' | 'transfers' | 'booking' | 'practical';
}

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'booking',
    question: 'How do I book a tour or cruise with Genuine Egypte?',
    answer: 'Genuine Egypte operates on a bespoke, direct-inquiry model rather than automated impersonal checkouts. Simply browse our tour catalog, select your preferred itinerary, and click "Inquire via WhatsApp" or "Inquire via Email". Our local Luxor team will check availability, answer any specific customization questions, and provide a confirmed quote with all inclusion details within 12 hours.'
  },
  {
    category: 'booking',
    question: 'Do I need to pay online right now?',
    answer: 'No online payment is collected on this website. Once your custom itinerary is finalized with our team, we agree upon clear payment arrangements (e.g. secure international wire transfer, bank deposit, or cash/card upon arrival in Egypt) in accordance with Egyptian tourism regulations.'
  },
  {
    category: 'general',
    question: 'Who will guide our tours?',
    answer: 'Every guided tour by Genuine Egypte is led by a university-educated, licensed Egyptian Egyptologist (both male and female guides available). Our guides are passionate historians fluent in English (and other languages upon advance request) who bring ancient hieroglyphs, mythologies, and daily Egyptian life into vivid perspective.'
  },
  {
    category: 'cruises',
    question: 'What is included in a Nile Cruise with Genuine Egypte?',
    answer: 'Our Nile cruises (such as the 5-star Royal Ruby and Nile Premium) include full-board accommodation (breakfast, lunch, and dinner buffet), all guided shore excursions with your private Egyptologist guide (Karnak, Luxor Temple, Valley of the Kings, Edfu, Kom Ombo, Philae Temple, and High Dam), cruise vessel facilities, and meet-and-assist transfers on embarkation and disembarkation.'
  },
  {
    category: 'cruises',
    question: 'What is the difference between a 3-night, 4-night, and 7-night cruise?',
    answer: 'A 3-night cruise sails upriver from Aswan to Luxor. A 4-night cruise sails downriver from Luxor to Aswan (the classic route with slightly more leisurely sailing). A 7-night cruise sails round-trip (Luxor to Aswan and back to Luxor, or vice-versa), offering the ultimate relaxed pace to see all temples without switching vessels.'
  },
  {
    category: 'cruises',
    question: 'Are drinks included on the Nile cruise?',
    answer: 'Water, tea, and American coffee are typically served during breakfast. Bottled water, sodas, juices, and alcoholic beverages from the bar or dining room during lunch and dinner are billed to your cabin folio and settled on checkout.'
  },
  {
    category: 'transfers',
    question: 'What kind of vehicles do you use for private transfers?',
    answer: 'All our private transfers utilize modern, late-model tourist-licensed vehicles (sedans for 1–2 guests, minivans such as Toyota HiAce for families and small groups) equipped with full air conditioning, ample luggage space, and professional tourist-licensed drivers.'
  },
  {
    category: 'transfers',
    question: 'Can we stop for sightseeing or photos during intercity transfers?',
    answer: 'Yes! That is the advantage of private transfer with Genuine Egypte. For instance, on the Luxor ↔ Aswan transfer, we can stop at Edfu Temple and Kom Ombo Temple en route. On airport transfers, drivers meet you right inside the terminal with a name sign.'
  },
  {
    category: 'practical',
    question: 'Do I need a visa to enter Egypt?',
    answer: 'Citizens of most European nations, the USA, Canada, the UK, Australia, and New Zealand can obtain a tourist visa upon arrival at Egyptian international airports (Cairo, Hurghada, Luxor, etc.) for $25 USD cash, or apply online in advance via the official Egypt e-Visa portal.'
  },
  {
    category: 'practical',
    question: 'What is the tipping culture (Baksheesh) in Egypt?',
    answer: 'Tipping is a customary and appreciated tradition in Egypt for drivers, cruise ship crew, temple attendants, and guides. While entirely discretionary based on your satisfaction, we provide our travelers with clear guidelines prior to arrival so you feel comfortable and prepared.'
  },
  {
    category: 'practical',
    question: 'What should I wear when visiting temples and tombs?',
    answer: 'Lightweight, breathable cotton or linen clothing is recommended. Comfortable walking shoes or sturdy sandals are essential for temple pavements and sand. When visiting active mosques or churches (such as in Cairo or Saint Samaan), conservative dress covering shoulders and knees is respectful.'
  }
];
