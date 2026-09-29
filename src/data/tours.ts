// Structured tour data for Genuine Egypte
// Replaces WordPress BA Book Everything backend with a pure static, strongly-typed catalog.

export interface TourItineraryItem {
  title: string;
  description: string;
}

export type TourCategory = 
  | 'Nile Cruises'
  | 'Cairo & Giza Tours'
  | 'Luxor & Upper Egypt'
  | 'Abu Simbel Excursions'
  | 'Private Transfers'
  | 'Hot Air Balloon'
  | 'Day Tours';

export interface TourItem {
  id: string;
  slug: string;
  title: string;
  category: TourCategory;
  destination: string;
  duration: string;
  price: number | null;
  priceNote: string;
  featured: boolean;
  shortDescription: string;
  overview: string;
  highlights: string[];
  itinerary: TourItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  meetingPoint: string;
  mainImage: string;
  images: string[];
  relatedSlugs: string[];
}

export const TOURS_DATA: TourItem[] = [
  {
    "id": "tour-1",
    "slug": "royal-ruby-nile-cruise-3-nights-4-days",
    "title": "Royal Ruby Nile Cruise 3 Nights 4 days",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1:",
        "description": "Upon arrival to Aswan, you will be met and greet by our English-speaking representative who will transfer you by private A-C van to your fabulous Nile cruise ship. Check in before 12:00 PM. At the beginning you will have your Lunch meal on board. After Lunch, you will be transferred to visit The High Dam, which has been erected by the Egyptian president Gamal Abdel Nasser in 1960 AD to protect Egypt from the Nile flood. After that you will enjoy sailing on the Nile by a motor boat to reach Temple of Philae, which was erected during the Graeco-Roman period and was dedicated to goddess Isis. At last you will be escorted to visit The Unfinished Obelisk, which was made out of red granite and was dedicated to god Amun Ra. After finishing your tour, you will return to your ship. At night, free at leisure on your own in Aswan. [L-D] Meals Included: Lunch Dinner N.B: If your arrival time to Aswan is so early, so we will start the tour direct upon arrival as the cruise check in time at 12:00 and we don't want our guest waste their time waiting at the lobby for check in."
      }
    ],
    "inclusions": [
      "04 or 03 nights’ accommodation on board the Nile cruises based on FB basis.",
      "Meet and assist service upon arrival & departure",
      "Assistance of our personnel during your stay and excursions",
      "All transfers by a modern air-conditioned deluxe vehicle private",
      "All Nile Cruise excursions as mentioned in the itinerary private",
      "Entrance fees to all sights in and between Luxor and Aswan",
      "English-speaking tour guide during your excursions on the Cruise (group size is 1 - 8 maximum)",
      "Complementary 01 bottle of water per day per person",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Any Extra meals and beverages.",
      "All personal expenses like laundry etc.",
      "Tipping to Guide, Driver, etc.",
      "Any Optional tours may require."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise",
      "nile-premium-nile-cruise-5-days-04-nights-program-every-monday"
    ]
  },
  {
    "id": "tour-2",
    "slug": "royal-ruby-nile-cruise-4-nights-5-days",
    "title": "Royal Ruby Nile Cruise 4 Nights 5 days",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "4 Nights 5 days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1:",
        "description": "Upon arrival to Aswan, you will be met and greet by our English-speaking representative who will transfer you by private A-C van to your fabulous Nile cruise ship. Check in before 12:00 PM. At the beginning you will have your Lunch meal on board. After Lunch, you will be transferred to visit The High Dam, which has been erected by the Egyptian president Gamal Abdel Nasser in 1960 AD to protect Egypt from the Nile flood. After that you will enjoy sailing on the Nile by a motor boat to reach Temple of Philae, which was erected during the Graeco-Roman period and was dedicated to goddess Isis. At last you will be escorted to visit The Unfinished Obelisk, which was made out of red granite and was dedicated to god Amun Ra. After finishing your tour, you will return to your ship. At night, free at leisure on your own in Aswan. [L-D] Meals Included: Lunch Dinner N.B: If your arrival time to Aswan is so early, so we will start the tour direct upon arrival as the cruise check in time at 12:00 and we don't want our guest waste their time waiting at the lobby for check in."
      }
    ],
    "inclusions": [
      "Meet and assist service upon arrival & departure",
      "Assistance of our personnel during your stay and excursions",
      "All transfers by a modern air-conditioned deluxe vehicle private",
      "All Nile Cruise excursions as mentioned in the itinerary private",
      "Entrance fees to all sights in and between Luxor and Aswan",
      "English-speaking tour guide during your excursions on the Cruise (group size is 1 - 8 maximum)",
      "Complementary 01 bottle of water per day per person",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Any Extra meals and beverages.",
      "All personal expenses like laundry etc.",
      "Tipping to Guide, Driver, etc.",
      "Any Optional tours may require."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "nile-premium-nile-cruise",
      "nile-premium-nile-cruise-5-days-04-nights-program-every-monday"
    ]
  },
  {
    "id": "tour-3",
    "slug": "nile-premium-nile-cruise",
    "title": "Nile Premium Nile cruise 04 Days / 03 Nights",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights / 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1:",
        "description": "Upon arrival to Aswan, you will be met and greet by our English-speaking representative who will transfer you by private A-C van to your fabulous Nile cruise ship. Check in before 12:00 PM. At the beginning you will have your Lunch meal on board. After Lunch, you will be transferred to visit The High Dam, which has been erected by the Egyptian president Gamal Abdel Nasser in 1960 AD to protect Egypt from the Nile flood. After that you will enjoy sailing on the Nile by a motor boat to reach Temple of Philae, which was erected during the Graeco-Roman period and was dedicated to goddess Isis. At last you will be escorted to visit The Unfinished Obelisk, which was made out of red granite and was dedicated to god Amun Ra. After finishing your tour, you will return to your ship. At night, free at leisure on your own in Aswan. [L-D] Meals Included: Lunch Dinner N.B: If your arrival time to Aswan is so early, so we will start the tour direct upon arrival as the cruise check in time at 12:00 and we don't want our guest waste their time waiting at the lobby for check in."
      }
    ],
    "inclusions": [
      "04 or 03 nights’ accommodation on board the Nile cruises based on FB basis.",
      "Meet and assist service upon arrival & departure",
      "Assistance of our personnel during your stay and excursions",
      "All transfers by a modern air-conditioned deluxe vehicle private",
      "All Nile Cruise excursions as mentioned in the itinerary private",
      "Entrance fees to all sights in and between Luxor and Aswan",
      "English-speaking tour guide during your excursions on the Cruise (group size is 1 - 8 maximum)",
      "Complementary 01 bottle of water per day per person",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Any Extra meals and beverages.",
      "All personal expenses like laundry etc.",
      "Tipping to Guide, Driver,Cruise staff, etc.",
      "Any Optional tours may require."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
    "images": [
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
      "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise-5-days-04-nights-program-every-monday"
    ]
  },
  {
    "id": "tour-4",
    "slug": "nile-premium-nile-cruise-5-days-04-nights-program-every-monday",
    "title": "Nile Premium Nile cruise 5 Days / 04 Nights Program (Every Monday)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "4 Nights / 5 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1:",
        "description": "Upon arrival at Luxor airport or station, our representative will transfer you to your Nile Cruise by a private A/C van. Embarkation before 12:00 PM. Afternoon, you will discover the East bank of Luxor including Karnak Temples Complex, which are the largest structures ever build in the history of the mankind. The principal building is that of god Amun Ra, since it was considered the house of god on the earth, the earlier structure date back to the middle kingdom, but there are some references which refer to the earlier buildings as old as the 3rd dynasty. Later on, you will proceed to visit Temple of Luxor, which was built by one of the kings of the 12th dynasty and completed by the well know king Ramses II. This temple was located in the heart of ancient Thebes and, like Karnak, was dedicated to the main/chief god Amun Re. After finishing your day tour, you will be transferred back to your ship for rest and refresh. At night, Egyptian folkloric show will be operated by the staff. Dinner will be served and overnight in Luxor. (L-D) N.B: If your arrival time to Luxor is so early, so we will start the tour direct upon arrival as the cruise check in time at 12:00 and we don't want our guest waste their time waiting at the lobby for check in. Meals Included: Lunch Dinner What's Included"
      }
    ],
    "inclusions": [
      "Meet and assist service upon arrival & departure",
      "Assistance of our personnel during your stay and excursions",
      "All transfers by a modern air-conditioned deluxe vehicle private",
      "All Nile Cruise excursions as mentioned in the itinerary private",
      "Entrance fees to all sights in and between Luxor and Aswan",
      "English-speaking tour guide during your excursions on the Cruise (group size is 1 - 8 maximum)",
      "Complementary 01 bottle of water per day per person",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Any Extra meals and beverages.",
      "All personal expenses like laundry etc.",
      "Tipping to Guide, Driver,Cruise staff, etc.",
      "Any Optional tours may require."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
    "images": [
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
      "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-5",
    "slug": "giza-pyramids-and-the-sphinx-half-day-tour",
    "title": "Giza Pyramids And The Sphinx Half Day Tour",
    "category": "Cairo & Giza Tours",
    "destination": "Cairo & Giza",
    "duration": "Half Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Flexible Pick-up: Available from 7:30 am with the latest pick-up at 1:00 pm.",
      "Enjoy two and a half hours at the Giza Plateau.",
      "The round trip is approximately 1 hour in duration."
    ],
    "itinerary": [
      {
        "title": "itinerary",
        "description": "* The Great Pyramid of Khufu * The valley temple of Khafre * The Sphinx •Tomb of Queen Mereasnkh III (Optional) * Camel Ride ( 30 Minutes Max - optional) * Lunch time (Optional) * Shopping (Optional)"
      }
    ],
    "inclusions": [
      "private guidance by real egyptologist.",
      "modern Air-conditioned.",
      "Private Transportation.",
      "entrance fees for mentioned locations in itenary."
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet ? Cairo, Cairo Governorate, Egypt I arrange for pick-up and drop-off services at your hotel or place of accommodation. Please keep in mind that there are extra fees for airport or",
    "mainImage": "/images/tours/genuine-egypte-3.webp",
    "images": [
      "/images/tours/genuine-egypte-3.webp",
      "/images/tours/genuine-egypte-2.webp",
      "/images/tours/genuine-egypte-4.webp",
      "/images/tours/genuine-egypte-6.webp"
    ],
    "relatedSlugs": [
      "cairo-layover-city-break",
      "half-day-tour-of-garbage-city-and-saint-samaan-cave-church-and-city-of-the-dead",
      "memphis-saqqara-and-dahshur-private-full-day-tour"
    ]
  },
  {
    "id": "tour-6",
    "slug": "cairo-layover-city-break",
    "title": "Cairo Layover City Break",
    "category": "Cairo & Giza Tours",
    "destination": "Cairo & Giza",
    "duration": "Flexible",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "tour itinerary",
        "description": "we will meet you at airport hall exit door and then take you to tour Cairo's Iconic sites: - Giza Great Pyramids and the Sphinx. - Egyptian Museum. - Khan Khalili Market and old middle eastern Cairo. - One hour sailing along the Nile. - Local food and shopping. We will do all of the above as much as your layover hours permits!"
      }
    ],
    "inclusions": [
      "Private egyptologist Guide.",
      "Transfers in a private Vehicle.",
      "Free-bottled mineral water.",
      "Service charge & government taxes.",
      "Airport pick up and drop off.",
      "entrance fees for mentioned locations."
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/genuine-egypte-4.webp",
    "images": [
      "/images/tours/genuine-egypte-4.webp",
      "/images/tours/genuine-egypte-3.webp",
      "/images/tours/genuine-egypte-2.webp",
      "/images/tours/genuine-egypte-1.webp",
      "/images/tours/genuine-egypte-8.webp",
      "/images/tours/genuine-egypte-7.webp"
    ],
    "relatedSlugs": [
      "giza-pyramids-and-the-sphinx-half-day-tour",
      "half-day-tour-of-garbage-city-and-saint-samaan-cave-church-and-city-of-the-dead",
      "memphis-saqqara-and-dahshur-private-full-day-tour"
    ]
  },
  {
    "id": "tour-7",
    "slug": "half-day-tour-of-garbage-city-and-saint-samaan-cave-church-and-city-of-the-dead",
    "title": "Half Day Tour of Garbage City and Saint Samaan Cave Church and City of the Dead",
    "category": "Cairo & Giza Tours",
    "destination": "Cairo & Giza",
    "duration": "Half Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Your tour itinerary",
        "description": "we will pick you up from your hotel at 10:00 AM to start your day tour to the Garbage City in Cairo, to watch Cairo's unofficial sanitation crew. Then continue your unusual tour to the City of the Dead, an ancient cemetery that has become a residential neighborhood for some Egyptian people. No one is sure of the exact number of people living among the million or so tombs. Continue to tour Coptic Cairo Churches and Synagogue. Any special requests?"
      }
    ],
    "inclusions": [
      "Private guided tour with certified licensed Egyptologist",
      "Private door-to-door transportation in modern air-conditioned vehicle",
      "Hotel pickup and return transfer",
      "Complimentary bottled water during the tour",
      "All local taxes and service charges"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) during the checkout process.",
    "mainImage": "/images/tours/genuine-egypte-13.webp",
    "images": [
      "/images/tours/genuine-egypte-13.webp",
      "/images/tours/genuine-egypte-11.webp"
    ],
    "relatedSlugs": [
      "giza-pyramids-and-the-sphinx-half-day-tour",
      "cairo-layover-city-break",
      "memphis-saqqara-and-dahshur-private-full-day-tour"
    ]
  },
  {
    "id": "tour-8",
    "slug": "memphis-saqqara-and-dahshur-private-full-day-tour",
    "title": "Memphis Saqqara and Dahshur Private Full Day Tour",
    "category": "Cairo & Giza Tours",
    "destination": "Cairo & Giza",
    "duration": "Full Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Your tour itinerary",
        "description": "At 8 am pick up from Hotel - Tour Saqqara Step Pyramid - Pyramid of king Unas (access inside is permitted) - Tomb of princess Idut and Tomb of Visir Kajemni (taking photos inside by phones are permitted but by camera you need a camera ticket) - If you have any special interest to visit any more of this site I can help you to do what's on your wish list, just let me know. - We continue to Dahshur, home of the Bent Pyramid and the Red Pyramid (access inside is allowed) . - Finally Memphis the first and oldest Capital we may change the start site according to tour situation to avoid the crowds or the site closing hours but we still do the itinerary."
      }
    ],
    "inclusions": [
      "Qualified Egyptologist guide Hotel pickup and drop off Transport by air-conditioned minivan Free time to shop Enjoy privileged, personalized attention on this private tour.",
      "Private Guide",
      "Private Transportation",
      "entrance fees for archeological locations"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) during the checkout process.",
    "mainImage": "/images/tours/genuine-egypte-14.webp",
    "images": [
      "/images/tours/genuine-egypte-14.webp",
      "/images/tours/genuine-egypte-18.webp",
      "/images/tours/genuine-egypte-17.webp",
      "/images/tours/genuine-egypte-16.webp"
    ],
    "relatedSlugs": [
      "giza-pyramids-and-the-sphinx-half-day-tour",
      "cairo-layover-city-break",
      "half-day-tour-of-garbage-city-and-saint-samaan-cave-church-and-city-of-the-dead"
    ]
  },
  {
    "id": "tour-9",
    "slug": "alexandria-full-day-tour-from-cairo-to-explore",
    "title": "Alexandria full day tour from Cairo to explore",
    "category": "Cairo & Giza Tours",
    "destination": "Cairo & Giza",
    "duration": "full day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Your tour itinerary",
        "description": "- Pick you up from your Hotel at 7 am with a modern a/c van. The journey takes about 2 hours each way. - First visit the catacombs of Kom el-Shoqafa (one of the seven wonders of the Middle Ages), next Pompey's Pillar. Explore Pompey Pillar and Serapeum Temple. - Next Next we will visit the Amphitheatre and Villa of Birds. Please note only certain sections of the Amphitheatre are open to the public. I will explain to you about the history parts that we cannot access. . - Then proceed to Qaitbey fort located on the Mediterranean cock to Coastline. - Lunch at a local restaurant. - Lastly visit the modern library of Alexandrea, then head back to Cairo. If you have any special interests, just ask me for a quote!"
      }
    ],
    "inclusions": [
      "Other: Private Egyptologies guide Private Deluxe Transfer Pick up from your hotel in Cairo and Drop at your Hotel in Cairo. Bottled water during tour.",
      "Private Guide.",
      "Private Transportation.",
      "entrane fees"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) during the checkout process.",
    "mainImage": "/images/tours/genuine-egypte-27.webp",
    "images": [
      "/images/tours/genuine-egypte-27.webp",
      "/images/tours/genuine-egypte-29.webp",
      "/images/tours/genuine-egypte-30.webp",
      "/images/tours/genuine-egypte-31.webp"
    ],
    "relatedSlugs": [
      "giza-pyramids-and-the-sphinx-half-day-tour",
      "cairo-layover-city-break",
      "half-day-tour-of-garbage-city-and-saint-samaan-cave-church-and-city-of-the-dead"
    ]
  },
  {
    "id": "tour-10",
    "slug": "day-tours-luxor-and-aswan-luxor-and-aswan",
    "title": "3 days tours luxor and aswan Luxor and Aswan",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Full day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Day 1:",
        "description": "we will pick you up from the airport to take you on a tour to the great temple of Karnak and Luxor. After tour back to the hotel."
      }
    ],
    "inclusions": [
      "Egyptologist tour guide, transport in a/c modern van with a licensed driver. Airport pick up in Luxor. Felucca ride in Aswan. Evening tour in Luxor.",
      "Private egyptologist Guide",
      "Private Transportation",
      "entrance fees"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) during the checkout process. <h2 class=\"elementor-heading-title eleme",
    "mainImage": "/images/tours/genuine-egypte-19.webp",
    "images": [
      "/images/tours/genuine-egypte-19.webp",
      "/images/tours/genuine-egypte-20.webp",
      "/images/tours/genuine-egypte-21.webp",
      "/images/tours/genuine-egypte-22.webp",
      "/images/tours/genuine-egypte-23.webp",
      "/images/tours/genuine-egypte-24.webp"
    ],
    "relatedSlugs": [
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour",
      "explore-the-legendary-karnak-and-luxor-temple"
    ]
  },
  {
    "id": "tour-11",
    "slug": "luxors-west-east-side-highlights-full-day-tour-in-egypt",
    "title": "Luxor's West & East Side Highlights",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Full Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Your tour itinerary",
        "description": "•The tour will start with a pickup from your accomodation or any other location, and driving to Luxor West Bank. •We'll first cover the legendary Valley of the Kings. •We'll visit the magnificent mortuary temple of Queen Hatshepsut. •Next, we'll go to the Valley of the Artisans (Deir el Madina). •We'll then come across the colossal of memnon. -At any given point, we could arrange for you to have lunch in an Egyptian restaurant that I'm happy to recommend. •What follows will be Karnak temple. •We'll end the tour with the temple eponymous to the city: Luxor Temple. •After all of this, we'll drive back to the pickup location. This itinerary could be customized."
      }
    ],
    "inclusions": [
      "Other: Water and soft drinks in the vehicle are included.",
      "Private Guide",
      "entrance fees",
      "Private Transportation",
      "Private Transportation With Driver"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Luxor, Luxor Governorate, Egypt Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel)",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-2-4.webp",
      "/images/tours/ABU-SIMBEL-1-4.webp",
      "/images/tours/ABU-SIMBEL-11.webp",
      "/images/tours/genuineegypte-3-4.webp",
      "/images/tours/genuineegypte-1-5.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "egypts-valley-of-the-kings-queens-half-day-private-tour",
      "explore-the-legendary-karnak-and-luxor-temple"
    ]
  },
  {
    "id": "tour-12",
    "slug": "egypts-valley-of-the-kings-queens-half-day-private-tour",
    "title": "Egypt's Valley of the Kings & Queens",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Half Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Transport Details",
        "description": "Type: Private Transportation / Category: Minibus We will use a modern Toyota Hi Ace 8 seater with air conditioning and a professional driver,or small modern comfortable air conditioned car for couples."
      }
    ],
    "inclusions": [
      "Private Guide",
      "entrance fees",
      "Private Transportation",
      "Private Transportation With Driver"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/genuineegypte-1-4.webp",
    "images": [
      "/images/tours/genuineegypte-1-4.webp",
      "/images/tours/genuineegypte-2-5.webp",
      "/images/tours/genuineegypte-3-4.webp",
      "/images/tours/genuineegypte-8.webp",
      "/images/tours/genuineegypte-3-5.webp",
      "/images/tours/genuineegypte-2-6.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "explore-the-legendary-karnak-and-luxor-temple"
    ]
  },
  {
    "id": "tour-13",
    "slug": "explore-the-legendary-karnak-and-luxor-temple",
    "title": "Explore the legendary Karnak and Luxor temple",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Half Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Transport Details",
        "description": "Type: Private Transportation We will use a modern Toyota Hi Ace 8 seater with air conditioning for more than 2 people or modern air conditioning limousines for couples or singles and a professional driver."
      }
    ],
    "inclusions": [
      "Water and soft drinks in the vehicle are included.",
      "Private Guide",
      "Private Transportation",
      "entrance fees"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) during the checkout process.",
    "mainImage": "/images/tours/ABU-SIMBEL-3-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-3-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-1-2.webp",
      "/images/tours/ABU-SIMBEL-2-2.webp",
      "/images/tours/ABU-SIMBEL-3-2.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour"
    ]
  },
  {
    "id": "tour-14",
    "slug": "from-luxor-to-dendera-abydos-full-day-tour-in-egypt",
    "title": "From Luxor to Dendera & Abydos",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Full Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Your genuine tour itinerary",
        "description": "We will start by picking you up from your lodging or any location of choice, and drive to Abydos. On our way there, we will drive across local villages and we could stop to see one if you'd like. Our true adventure will start on arrival, when we'll visit the the temple of the Lord of the Underworld, God Osiris. Its construction was completed after the death of the king who started building it. Either at this point, or earlier or later, you could decide to have lunch either in Abydos, in Dendara or in any of the local villages we will pass by driving from Luxor. We will then go on a scenic drive and travel to Dendara to explore the temple of Godess Hathor, who was the Godess of motherhood, love and music. This temple is located in a local egyptian village which we will also explore. At last, we'll drive back to Luxor to your accomodation. This itinerary could be customized according to your needs."
      }
    ],
    "inclusions": [
      "Water and soft drinks in the vehicle are included.",
      "Private Guide.",
      "Private Transportation.",
      "entrance fees."
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) during the checkout process.",
    "mainImage": "/images/tours/genuineegypte-1.webp",
    "images": [
      "/images/tours/genuineegypte-1.webp",
      "/images/tours/genuineegypte.webp",
      "/images/tours/genuineegypte-3.webp",
      "/images/tours/genuineegypte-4.webp",
      "/images/tours/genuineegypte-3-1.webp",
      "/images/tours/genuineegypte-2-2.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour"
    ]
  },
  {
    "id": "tour-15",
    "slug": "private-day-tour-to-edfu-and-komombo-temples-from-luxor",
    "title": "private day tour to edfu and komombo temples from luxor",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Flexible",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Transport Details",
        "description": "Type: Private Transportation / Category: Suv We will use a modern Toyota Hi Ace 8 seater with air conditioning and a professional driver,or small modern comfortable air conditioned car for couples."
      }
    ],
    "inclusions": [
      "Other: Water and soft drinks in the vehicle are included.",
      "Private Guide.",
      "entrance fees.",
      "Private Transportation.",
      "Private Transportation With Driver."
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Luxor, Luxor Governorate, Egypt Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) duri",
    "mainImage": "/images/tours/genuineegypte-1-2.webp",
    "images": [
      "/images/tours/genuineegypte-1-2.webp",
      "/images/tours/genuineegypte-3-2.webp",
      "/images/tours/genuineegypte-2-3.webp",
      "/images/tours/genuineegypte-6.webp",
      "/images/tours/genuineegypte-3-3.webp",
      "/images/tours/genuineegypte-2-4.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour"
    ]
  },
  {
    "id": "tour-16",
    "slug": "day-trip-to-abu-simbel-unesco-world-heritage-site-from-aswan",
    "title": "Day-trip to Abu Simbel, UNESCO World Heritage Site, from Aswan",
    "category": "Abu Simbel Excursions",
    "destination": "Aswan & Abu Simbel",
    "duration": "Flexible",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Your Aswan tour itinerary",
        "description": "- we will pick you up from your hotel or the agreed meeting point in Aswan. - We will around 3 hours from Aswan into the desert. - We will have enough time to visit the 2 temples for about 2 hours. - After finishing from visiting the temples we will drive back to Aswan for 3 more hours. - I will drop you off at your hotel or the agreed point in Aswan. This tour can be customized up to the request. Passport copy pictures and hotels/ Nile cruises booking copy pictures will be needed in advance."
      }
    ],
    "inclusions": [
      "Other",
      "Private Guide",
      "Private Transportation",
      "entrance fees"
    ],
    "exclusions": [
      "Monument entrance tickets (unless specified as all-inclusive)",
      "Personal expenses and optional activities",
      "Gratuities for tour guide and driver",
      "Food and drinks unless explicitly stated in itinerary"
    ],
    "meetingPoint": "Where will you meet Airport: ,Cruise: ,ByGuide: You can request a different meeting location (for example, your hotel) during the checkout process. <div class=\"elementor-element elementor-element-5e39",
    "mainImage": "/images/tours/ABU-SIMBEL-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1.webp",
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/ABU-SIMBEL-5.webp"
    ],
    "relatedSlugs": []
  },
  {
    "id": "tour-17",
    "slug": "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
    "title": "Hot-Air Balloon Tour in Luxor with Hotel Transfers",
    "category": "Private Transfers",
    "destination": "Luxor",
    "duration": "Flexible",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Early Morning Pickup:",
        "description": "Pick-up from your hotel in Luxor in the early morning hours by an air-conditioned vehicle."
      }
    ],
    "inclusions": [
      "Hot-air balloon flight over Luxor (45–75 minutes)",
      "Round-trip hotel transfers in an air-conditioned vehicle",
      "English-speaking live tour guide",
      "Motorboat ride across the Nile River",
      "Flight certificate",
      "Bottled water",
      "Light snacks"
    ],
    "exclusions": [
      "Personal expenses",
      "Gratuities (tips)",
      "Food or drinks not mentioned in the inclusions",
      "Large luggage or oversized bags",
      "Any optional activities not listed in the tour itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M_OSt1oY2CdXsQa3LbY5kyRDSM9nqiCPvH8eGzbGzriXw.webp",
    "images": [
      "/images/tours/uri_ifs___M_OSt1oY2CdXsQa3LbY5kyRDSM9nqiCPvH8eGzbGzriXw.webp",
      "/images/tours/uri_ifs___M_3xYe3zqsaqxHEC6_udE-Wf4BxzjMjhxjl0ED4id2jiw.webp",
      "/images/tours/uri_ifs___M_CAx3hII-b06uTDOdzjgJEaJPY7-rKZGHtPf6KqHbQJg.webp",
      "/images/tours/uri_ifs___M_94FqXXDAl0vRGHcMBluAOWD2tu4tgAcPCkljzL3I_JU.webp"
    ],
    "relatedSlugs": [
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers",
      "full-day-guided-tour-of-luxor-with-hot-air-balloon-lunch-transfers"
    ]
  },
  {
    "id": "tour-18",
    "slug": "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
    "title": "Premium Sunrise Hot Air Balloon Tour in Luxor with Photos, Video & Hotel Transfers",
    "category": "Private Transfers",
    "destination": "Luxor",
    "duration": "Flexible",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Hotel Pickup:",
        "description": "Start with a luxurious limousine pickup from your hotel in Luxor, typically before sunrise."
      }
    ],
    "inclusions": [
      "Round-trip transfers in an air-conditioned limousine",
      "Premium hot-air balloon ride (45–60 minutes) over Luxor’s West Bank",
      "Customized in-flight photos and video with a dedicated professional photographer",
      "Personalized photo album & souvenir items",
      "Flight certificate",
      "Light refreshments"
    ],
    "exclusions": [
      "Personal expenses",
      "Gratuities (tips)",
      "Food or drinks not mentioned in inclusions",
      "Large luggage, suitcases, or oversized bags",
      "Pets (except registered service animals)",
      "Smoking, alcohol, drugs",
      "Sharp, flammable, or hazardous items",
      "Drones or professional photography equipment (tripods) unless pre-approved",
      "Any optional activities not listed in the tour plan"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M_zouujCEjwXrk6aF6hCoLj4Wuk9XMwOARikVnlq4ECNc.webp",
    "images": [
      "/images/tours/uri_ifs___M_zouujCEjwXrk6aF6hCoLj4Wuk9XMwOARikVnlq4ECNc.webp",
      "/images/tours/uri_ifs___M_R17DXO-mIFVw9545XItZ8xc1apRUTiDuWd488tCp2tw.webp",
      "/images/tours/uri_ifs___M_c1028eb4-4f13-4221-939b-fca62381a0bb.webp",
      "/images/tours/uri_ifs___M_QKPayPvssEIJ-Pfyc2iWp-nuM0E4b5t6UIwtxEb5x18.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers",
      "full-day-guided-tour-of-luxor-with-hot-air-balloon-lunch-transfers"
    ]
  },
  {
    "id": "tour-19",
    "slug": "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers",
    "title": "Valley of The Kings Guided Tour with Sunrise Hot Air Balloon & Round-Trip Hotel Transfers",
    "category": "Private Transfers",
    "destination": "Luxor",
    "duration": "Flexible",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "04:00 – 04:30 AM | Hotel Pickup",
        "description": "Pick up from your hotel in Luxor by air-conditioned vehicle. Light refreshment (water/juice) provided."
      }
    ],
    "inclusions": [
      "Sunrise Hot Air Balloon Ride over Luxor’s West Bank (~45 minutes)",
      "Flight certificate & bottled water during the ride",
      "Guided tour of West Bank sites: Valley of the Kings, Hatshepsut Temple, Colossi of Memnon",
      "Round-trip hotel transfers (air-conditioned vehicle)"
    ],
    "exclusions": [
      "Entrance tickets to archaeological sites (usually extra)",
      "Meals or snacks",
      "Tips for guide and driver"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M_y3rORJd7tgDhbGdebTykZZeNwx7egw8uaq0U3ynAfFc.webp",
    "images": [
      "/images/tours/uri_ifs___M_y3rORJd7tgDhbGdebTykZZeNwx7egw8uaq0U3ynAfFc.webp",
      "/images/tours/uri_ifs___M_CAx3hII-b06uTDOdzjgJEaJPY7-rKZGHtPf6KqHbQJg.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-5-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-4.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "full-day-guided-tour-of-luxor-with-hot-air-balloon-lunch-transfers"
    ]
  },
  {
    "id": "tour-20",
    "slug": "full-day-guided-tour-of-luxor-with-hot-air-balloon-lunch-transfers",
    "title": "Full Day Guided Tour of Luxor with Hot Air Balloon, Lunch & Transfers",
    "category": "Private Transfers",
    "destination": "Luxor",
    "duration": "Full Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Private Door-to-Door Journey",
        "description": "Your professional driver meets you at your designated pickup location (hotel lobby or airport terminal with name sign). Enjoy a smooth, air-conditioned ride directly to your destination with scenic views and requested comfort stops along the way."
      }
    ],
    "inclusions": [
      "Sunrise Hot Air Balloon Ride (30–45 minutes)",
      "Guided tour of major Luxor attractions (East & West Bank)",
      "Lunch at a local restaurant",
      "Hotel pickup & drop-off",
      "Air-conditioned transportation between attractions"
    ],
    "exclusions": [
      "Entrance fees to monuments",
      "Drinks and personal expenses",
      "Tips for guide and driver (optional)",
      "Balloon ride cancellation due to bad weather"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M_IfDbof7zSmY2PE4fxSjthjyn3KWKOkCKxVGGBSa833Y-1.webp",
    "images": [
      "/images/tours/uri_ifs___M_IfDbof7zSmY2PE4fxSjthjyn3KWKOkCKxVGGBSa833Y-1.webp",
      "/images/tours/uri_ifs___M_CAx3hII-b06uTDOdzjgJEaJPY7-rKZGHtPf6KqHbQJg-1.webp",
      "/images/tours/uri_ifs___M_e00e86d0-bc63-4972-b42e-4c0ad6f1dfde.webp",
      "/images/tours/uri_ifs___M_OSt1oY2CdXsQa3LbY5kyRDSM9nqiCPvH8eGzbGzriXw.webp",
      "/images/tours/uri_ifs___M_3xYe3zqsaqxHEC6_udE-Wf4BxzjMjhxjl0ED4id2jiw.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-3-1.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  },
  {
    "id": "tour-21",
    "slug": "sunrise-hot-air-balloon-ride-in-luxor",
    "title": "Luxor Hot Air Balloon Tour at Sunrise",
    "category": "Hot Air Balloon",
    "destination": "Luxor",
    "duration": "Flexible",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Breathtaking sunrise flight over Luxor West Bank and Valley of the Kings",
      "Pre-flight safety briefing by certified commercial balloon pilot",
      "Includes motorboat Nile crossing and hotel pickup/drop-off",
      "Commemorative flight certificate included"
    ],
    "itinerary": [
      {
        "title": "Early Morning",
        "description": "Transfer to the balloon launch site."
      }
    ],
    "inclusions": [
      "Pickup from hotel and drop-off",
      "Hot air balloon flight at sunrise",
      "Safety briefing and professional pilot",
      "Refreshments after landing"
    ],
    "exclusions": [
      "Tips for pilot and staff (optional)",
      "Personal expenses and souvenirs",
      "Balloon ride cancellation due to bad weather"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M_IfDbof7zSmY2PE4fxSjthjyn3KWKOkCKxVGGBSa833Y-1.webp",
    "images": [
      "/images/tours/uri_ifs___M_IfDbof7zSmY2PE4fxSjthjyn3KWKOkCKxVGGBSa833Y-1.webp",
      "/images/tours/uri_ifs___M_y3rORJd7tgDhbGdebTykZZeNwx7egw8uaq0U3ynAfFc-1.webp",
      "/images/tours/uri_ifs___M_3xYe3zqsaqxHEC6_udE-Wf4BxzjMjhxjl0ED4id2jiw.webp",
      "/images/tours/uri_ifs___M_OSt1oY2CdXsQa3LbY5kyRDSM9nqiCPvH8eGzbGzriXw.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour"
    ]
  },
  {
    "id": "tour-22",
    "slug": "from-luxor-full-day-all-inclusive-tour-to-west-and-east-banks-with-lunch",
    "title": "From Luxor: Full-Day All-Inclusive Tour to West and East Banks with Lunch",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Full Day (8–9 hours)",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Morning – West Bank",
        "description": "08:00 AM: Pickup from your hotel in Luxor. Transfer to the West Bank of the Nile. Visit Valley of the Kings – explore several Pharaohs’ tombs. Stop at Hatshepsut Temple (Deir el-Bahari) . See the Colossi of Memnon ."
      }
    ],
    "inclusions": [
      "Hotel pickup and drop-off.",
      "Professional Egyptologist guide.",
      "Air-conditioned transportation between sites.",
      "Entrance fees to some sites (confirm with provider).",
      "Traditional Egyptian lunch."
    ],
    "exclusions": [
      "Personal expenses and drinks.",
      "Tips for guide and driver (optional).",
      "Optional extra activities not mentioned in the itinerary."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-5-2.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-5-2.webp",
      "/images/tours/s2-3.webp",
      "/images/tours/uri_ifs___M_EzxZ-ICDSManDFT2Env-nAlkcz8BhoJLx8tj6WgOZDY.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-7.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour"
    ]
  },
  {
    "id": "tour-23",
    "slug": "from-luxor-half-day-east-bank-guided-tour-with-karnak-luxor-temple-visits-and-lunch",
    "title": "From Luxor: Half-Day East Bank Guided Tour with Karnak & Luxor Temple Visits and Lunch",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Half Day (4–6 hours)",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Morning",
        "description": "08:00 AM: Pickup from your hotel in Luxor. Transfer to the East Bank of the Nile. Visit Karnak Temple – explore the hypostyle halls, obelisks, statues, and sacred lake. Visit Luxor Temple – see the grand colonnades, statues, and learn about its historical significance."
      }
    ],
    "inclusions": [
      "Hotel pickup and drop-off.",
      "Professional Egyptologist guide.",
      "Air-conditioned transportation between sites.",
      "Entrance fees to Karnak and Luxor Temples.",
      "Traditional Egyptian lunch."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Tips for guide and driver (optional).",
      "Optional activities not mentioned in the itinerary."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M_dvWmeOkUhYSdP4WzcxgqaJuERctQNqu_DF477bUuSj8.webp",
    "images": [
      "/images/tours/uri_ifs___M_dvWmeOkUhYSdP4WzcxgqaJuERctQNqu_DF477bUuSj8.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-27.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour"
    ]
  },
  {
    "id": "tour-24",
    "slug": "from-luxor-half-day-west-bank-guided-tour-including-valley-of-the-kings-hatshepsut-temple-with-lunch",
    "title": "From Luxor: Half-Day West Bank Guided Tour including Valley of the Kings & Hatshepsut Temple with Lunch",
    "category": "Luxor & Upper Egypt",
    "destination": "Luxor",
    "duration": "Half Day (4–6 hours)",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Private tour led by a certified licensed Egyptologist guide",
      "Comfortable travel in private modern air-conditioned vehicle",
      "Flexible, unhurried pace customized to your interests",
      "Hotel pickup and drop-off included"
    ],
    "itinerary": [
      {
        "title": "Valley of the Kings",
        "description": "visit Pharaohs’ tombs"
      }
    ],
    "inclusions": [
      "Hotel pickup and drop-off.",
      "Professional Egyptologist guide.",
      "Air-conditioned transportation between sites.",
      "Entrance fees to Valley of the Kings and Hatshepsut Temple.",
      "Traditional Egyptian lunch."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Tips for guide and driver (optional).",
      "Optional activities not mentioned in the itinerary."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/geo-22-1.webp",
    "images": [
      "/images/tours/geo-22-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-5-2.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-4-1.webp",
      "/images/tours/uri_ifs___M_UB5Qx2MUnCuZMRh9A6c0hp5F5z7bJyQUuFdRFC4Z7B4.webp"
    ],
    "relatedSlugs": [
      "day-tours-luxor-and-aswan-luxor-and-aswan",
      "luxors-west-east-side-highlights-full-day-tour-in-egypt",
      "egypts-valley-of-the-kings-queens-half-day-private-tour"
    ]
  },
  {
    "id": "tour-25",
    "slug": "3-nights-4-days-nile-cruise-luxor-%e2%86%92-aswan",
    "title": "3 Nights / 4 Days Nile Cruise – Luxor → Aswan",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights / 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Luxor (Embarkation)",
        "description": "Morning/Afternoon: Arrival at Luxor airport or hotel . Transfer to the Nile cruise ship and check-in. Optional: Evening visit to Luxor Temple (lighting ceremony). Evening: Welcome dinner on board and overnight stay on the cruise."
      }
    ],
    "inclusions": [
      "Accommodation on Nile cruise (full board: breakfast, lunch, dinner).",
      "Guided tours with professional Egyptologist.",
      "Entrance fees to all mentioned monuments."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Tips for guide and crew (optional).",
      "Optional excursions (e.g., hot air balloon, sound & light shows).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-4.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-4.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-5.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan.webp",
      "/images/tours/uri_ifs___M__sFVbMakcxd_ILlPc7S-vZS2AwJYsm-ZajjrjcfRR1I.webp",
      "/images/tours/screen.webp",
      "/images/tours/11-21.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-26",
    "slug": "4-nights-5-days-nile-cruise-luxor-%e2%86%92-aswan-detailed-program",
    "title": "4 Nights / 5 Days Nile Cruise – Luxor → Aswan (Detailed Program)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "4 Nights / 5 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Luxor (Embarkation)",
        "description": "Morning/Afternoon: Arrival at Luxor airport or hotel . Transfer to Nile cruise ship and check-in. Optional: Evening visit to Luxor Temple (sound & light show optional). Evening: Welcome dinner on board and overnight stay."
      }
    ],
    "inclusions": [
      "Accommodation on Nile cruise (full board: breakfast, lunch, dinner).",
      "Guided tours with professional Egyptologist.",
      "Entrance fees to all mentioned monuments.",
      "Cruise accommodation and onboard entertainment.",
      "Transfers from Luxor hotel/airport to cruise and Aswan disembarkation."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Tips for guide and crew (optional).",
      "Optional activities (e.g., hot air balloon).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Philae-Temple-1.webp",
    "images": [
      "/images/tours/Philae-Temple-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-9.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-8.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-4-1.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-27",
    "slug": "7-nights-8-days-deluxe-nile-cruise-luxor-%e2%86%92-aswan-detailed-program",
    "title": "7 Nights / 8 Days Deluxe Nile Cruise – Luxor → Aswan (Detailed Program)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "7 Nights / 8 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Luxor (Embarkation)",
        "description": "Morning/Afternoon: Arrival at Luxor airport or hotel . Transfer to Nile cruise ship and check-in. Optional: Evening visit to Luxor Temple (sound & light show optional). Evening: Welcome dinner on board and overnight stay."
      }
    ],
    "inclusions": [
      "Accommodation on deluxe Nile cruise (full board: breakfast, lunch, dinner).",
      "Guided tours with professional Egyptologist.",
      "Entrance fees to all listed monuments.",
      "Onboard entertainment and leisure facilities.",
      "Transfers from Luxor hotel/airport to cruise and Aswan disembarkation."
    ],
    "exclusions": [
      "Optional excursions (hot air balloon, sound & light shows).",
      "Drinks and personal expenses.",
      "Tips for crew and guide (optional).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-14.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-14.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-15.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-16.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-16-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-17.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-18.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-28",
    "slug": "3-nights-4-days-nile-cruise-aswan",
    "title": "3 Nights / 4 Days Nile Cruise – Aswan → Luxor (Detailed Program)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights / 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Aswan (Embarkation)",
        "description": "Arrival at Aswan airport, train station, or hotel . Transfer to Nile cruise ship and check-in. Optional: Evening Felucca ride on the Nile or onboard welcome activities. Dinner and overnight on the cruise."
      }
    ],
    "inclusions": [
      "Accommodation on Nile cruise with full board meals (breakfast, lunch, dinner).",
      "Guided tours with professional Egyptologist.",
      "Entrance fees to all listed monuments.",
      "Transfer to cruise from Aswan airport, hotel, or train station."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Tips for guide and crew (optional).",
      "Optional tours or activities (e.g., hot air balloon).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M_uzWoGCQ7h3lNv3ixRaoOvdrUH6GvbhRno8Rw-NXNxa4.webp",
    "images": [
      "/images/tours/uri_ifs___M_uzWoGCQ7h3lNv3ixRaoOvdrUH6GvbhRno8Rw-NXNxa4.webp",
      "/images/tours/uri_ifs___M_Is-gFXqYaqjy_3phe9I3iVrQFL2zxWc_PLkuEAv5sV4.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-vZS2AwJYsm-ZajjrjcfRR1I.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/screen-1.webp",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-29",
    "slug": "4-nights-5-days-nile-cruise-aswan-%e2%86%92-luxor-detailed-program",
    "title": "4 Nights / 5 Days Nile Cruise – Aswan → Luxor (Detailed Program)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "4 Nights / 5 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Aswan (Embarkation)",
        "description": "Arrival at Aswan airport, train station, or hotel . Transfer to Nile cruise ship and check-in. Optional: Evening Felucca ride or onboard welcome activities. Dinner and overnight on board."
      }
    ],
    "inclusions": [
      "Accommodation on Nile cruise (full board: breakfast, lunch, dinner).",
      "Guided tours with professional Egyptologist.",
      "Entrance fees to all monuments mentioned.",
      "Onboard entertainment and leisure facilities."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Tips for guide and crew (optional).",
      "Optional excursions or activities (e.g., hot air balloon).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-4.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-30",
    "slug": "7-nights-8-days-nile-cruise-aswan-%e2%86%92-luxor-luxury",
    "title": "7 Nights / 8 Days Nile Cruise – Aswan → Luxor (Luxury)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "7 Nights / 8 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Aswan (Embarkation)",
        "description": "Arrival at Aswan airport, train station, or hotel . Transfer to Luxury Nile cruise ship and check-in. Optional: Felucca ride or welcome onboard activities. Dinner and overnight on the cruise."
      }
    ],
    "inclusions": [
      "Luxury Nile cruise accommodation with full board meals.",
      "Guided sightseeing with professional Egyptologist.",
      "Entrance fees to all mentioned monuments.",
      "Onboard entertainment and leisure facilities.",
      "Transfers from Aswan to cruise and Luxor disembarkation."
    ],
    "exclusions": [
      "Optional excursions (e.g., hot air balloon).",
      "Drinks and personal expenses.",
      "Tips for guide and crew (optional).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-6.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-31",
    "slug": "8-days-extended-round-trip-nile-cruise-luxor-%e2%86%92-aswan-%e2%86%92-luxor",
    "title": "8 Days Extended Round Trip Nile Cruise – Luxor → Aswan → Luxor",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "Full day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Luxor (Embarkation)",
        "description": "Arrival at Luxor airport or hotel . Transfer to Nile cruise ship and check-in. Optional: Evening visit to Luxor Temple or onboard welcome activities. Dinner and overnight on board."
      }
    ],
    "inclusions": [
      "Accommodation on Nile cruise with full board meals (breakfast, lunch, dinner).",
      "Guided tours with professional Egyptologist.",
      "Entrance fees to all listed monuments.",
      "Return transfer to Luxor hotel or airport.",
      "Onboard leisure and entertainment facilities."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Optional excursions (e.g., hot air balloon).",
      "Tips for guide and crew (optional).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-27.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-27.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-26.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-28.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-21.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-23.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-32",
    "slug": "8-days-flexible-extended-nile-cruise-aswan-%e2%86%92-luxor-optional-return",
    "title": "8 Days Flexible Extended Nile Cruise – Aswan → Luxor (Optional Return)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "Full day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Full board accommodation with gourmet Egyptian & international buffet dining",
      "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
      "Licensed private Egyptologist guide for all shore excursions",
      "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
    ],
    "itinerary": [
      {
        "title": "Day 1 – Aswan (Embarkation)",
        "description": "Arrival at Aswan airport, hotel, or train station . Transfer to Nile cruise ship and check-in. Welcome onboard, dinner and overnight stay."
      }
    ],
    "inclusions": [
      "Accommodation on Nile cruise (full board meals: breakfast, lunch, dinner).",
      "Guided tours with professional Egyptologist.",
      "Entrance fees to all mentioned monuments.",
      "Transfers from Aswan to cruise and Luxor disembarkation.",
      "Onboard entertainment and leisure facilities."
    ],
    "exclusions": [
      "Drinks and personal expenses.",
      "Optional excursions or add-ons (e.g., hot air balloon).",
      "Tips for guide and crew (optional).",
      "Travel insurance."
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-3-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-vZS2AwJYsm-ZajjrjcfRR1I.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "tour-33",
    "slug": "luxor-airport-private-transfer-hotel-%e2%86%94-airport",
    "title": "Luxor Airport Private Transfer – Hotel ↔ Airport",
    "category": "Private Transfers",
    "destination": "Luxor",
    "duration": "Approx. 45–60 mins",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Arrival Transfer (Luxor Airport → Hotel)",
        "description": "Meet & greet service at Luxor International Airport Assistance with luggage upon arrival Transfer by private air-conditioned vehicle Comfortable ride directly to your hotel in Luxor Drop-off at hotel entrance"
      }
    ],
    "inclusions": [
      "Private air-conditioned vehicle",
      "Professional English-speaking driver",
      "Meet & assist service at Luxor Airport (arrival transfer)",
      "Hotel pick-up and drop-off",
      "Luggage assistance",
      "All taxes and service charges"
    ],
    "exclusions": [
      "Airport visa or immigration fees",
      "Tips and personal expenses",
      "Extra waiting time beyond the scheduled pick-up",
      "Any services not mentioned in the inclusions"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/uri_ifs___M__KDjCW9XM0Vncfbb-j9iXD6Ptll0__ewoZ2pcZ6_3DM.webp",
    "images": [
      "/images/tours/uri_ifs___M__KDjCW9XM0Vncfbb-j9iXD6Ptll0__ewoZ2pcZ6_3DM.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  },
  {
    "id": "tour-34",
    "slug": "aswan-airport-private-transfer-hotel-%e2%86%94-airport",
    "title": "Aswan Airport Private Transfer – Hotel ↔ Airport",
    "category": "Private Transfers",
    "destination": "Aswan",
    "duration": "Approx. 45–60 mins",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Arrival Transfer (Aswan Airport → Hotel / Nile Cruise)",
        "description": "Meet & greet service at Aswan International Airport Assistance with luggage upon arrival Transfer by private air-conditioned vehicle Comfortable drive to your hotel or Nile cruise Drop-off at the main entrance or cruise docking point"
      }
    ],
    "inclusions": [
      "Private air-conditioned vehicle",
      "Professional English-speaking driver",
      "Meet & assist service at the airport (arrival transfer)",
      "Hotel / Nile cruise pick-up and drop-off",
      "Luggage assistance",
      "All service charges and local taxes"
    ],
    "exclusions": [
      "Airport visa and immigration fees",
      "Tips and personal expenses",
      "Extra waiting time beyond the scheduled pick-up",
      "Any services not mentioned in the inclusions"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/placeholder.webp",
    "images": [
      "/images/tours/placeholder.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  },
  {
    "id": "tour-35",
    "slug": "hurghada-airport-private-transfer-hotel-%e2%86%94-airport",
    "title": "Hurghada Airport Private Transfer – Hotel ↔ Airport",
    "category": "Private Transfers",
    "destination": "Hurghada",
    "duration": "Approx. 45–60 mins",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Arrival Transfer (Hurghada Airport → Hotel / Resort)",
        "description": "Meet & greet service at Hurghada International Airport Assistance with luggage upon arrival Transfer by private air-conditioned vehicle Comfortable drive to your hotel or resort Drop-off at the hotel reception or resort entrance"
      }
    ],
    "inclusions": [
      "Private air-conditioned vehicle",
      "Professional English-speaking driver",
      "Meet & assist service at the airport (arrival transfer)",
      "Hotel / resort pick-up and drop-off",
      "Luggage assistance",
      "All service charges and local taxes"
    ],
    "exclusions": [
      "Airport visa and immigration fees",
      "Tips and personal expenses",
      "Extra waiting time beyond the scheduled pick-up",
      "Any services not mentioned in the inclusions"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/placeholder.webp",
    "images": [
      "/images/tours/placeholder.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  },
  {
    "id": "tour-36",
    "slug": "luxor-%e2%86%94-aswan-private-transfer-service",
    "title": "Luxor ↔ Aswan Private Transfer Service",
    "category": "Private Transfers",
    "destination": "Aswan",
    "duration": "Approx. 4–5 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Option 1: Luxor → Aswan",
        "description": "Pick-up from your hotel or Nile cruise in Luxor Departure by private air-conditioned vehicle Comfortable overland drive to Aswan Short rest stop if needed Drop-off at your hotel or Nile cruise in Aswan"
      }
    ],
    "inclusions": [
      "Private air-conditioned vehicle",
      "Professional English-speaking driver",
      "Hotel / Nile cruise pick-up and drop-off",
      "Fuel, road tolls, and parking fees",
      "All service charges and local taxes"
    ],
    "exclusions": [
      "Tour guide",
      "Meals and drinks",
      "Entrance fees to attractions",
      "Tips and personal expenses",
      "Any services not mentioned in the inclusions"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/placeholder.webp",
    "images": [
      "/images/tours/placeholder.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  },
  {
    "id": "tour-37",
    "slug": "luxor-%e2%86%94-hurghada-private-transfer-service",
    "title": "Luxor ↔ Hurghada Private Transfer Service",
    "category": "Private Transfers",
    "destination": "Hurghada",
    "duration": "Approx. 4–5 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Option 1: Luxor → Hurghada",
        "description": "Pick-up from your hotel or Nile cruise in Luxor Departure by private air-conditioned vehicle Comfortable drive through the Eastern Desert Optional rest stop upon request Drop-off at your hotel or resort in Hurghada"
      }
    ],
    "inclusions": [
      "Private air-conditioned vehicle",
      "Professional English-speaking driver",
      "Hotel / resort / Nile cruise pick-up and drop-off",
      "Fuel, road tolls, and parking fees",
      "All service charges and local taxes"
    ],
    "exclusions": [
      "Tour guide",
      "Meals and drinks",
      "Entrance fees to attractions",
      "Tips and personal expenses",
      "Any services not mentioned in the inclusions"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/placeholder.webp",
    "images": [
      "/images/tours/placeholder.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  },
  {
    "id": "tour-38",
    "slug": "hurghada-%e2%86%94-aswan-private-transfer-service",
    "title": "Hurghada ↔ Aswan Private Transfer Service",
    "category": "Private Transfers",
    "destination": "Hurghada",
    "duration": "Approx. 4–5 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was ...",
    "overview": "genuineegypte takes you on a tour to enjoy the warmth of the bright sun on both banks of the river to witness the greatness of the ancient Egyptian man. It was established 15 years ago and has a team of Egyptologists.",
    "highlights": [
      "Modern private air-conditioned vehicle with professional licensed driver",
      "Door-to-door service with flexible pickup time from hotel or airport",
      "All toll fees, fuel, and luggage assistance included",
      "Complimentary bottled water during the ride"
    ],
    "itinerary": [
      {
        "title": "Option 1: Hurghada → Aswan",
        "description": "Pick-up from your hotel or resort in Hurghada Departure by private air-conditioned vehicle Comfortable drive through the Eastern Desert and Nile Valley Optional rest stop upon request Drop-off at your hotel or Nile cruise in Aswan"
      }
    ],
    "inclusions": [
      "Private air-conditioned vehicle",
      "Professional English-speaking driver",
      "Hotel / resort / Nile cruise pick-up and drop-off",
      "Fuel, road tolls, and parking fees",
      "All service charges and local taxes"
    ],
    "exclusions": [
      "Tour guide",
      "Meals and drinks",
      "Entrance fees to attractions",
      "Tips and personal expenses",
      "Any services not mentioned in the inclusions"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.",
    "mainImage": "/images/tours/placeholder.webp",
    "images": [
      "/images/tours/placeholder.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  }
];

export function getAllTours(): TourItem[] {
  return TOURS_DATA;
}

export function getTourBySlug(slug: string): TourItem | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase().replace(/^\/+|\/+$/g, "");
  return TOURS_DATA.find(t => {
    const tSlug = t.slug.toLowerCase();
    const tDecoded = decodeURIComponent(t.slug).toLowerCase();
    return tSlug === decoded || tDecoded === decoded;
  });
}

export function getToursByCategory(category: string): TourItem[] {
  return TOURS_DATA.filter(t => t.category.toLowerCase() === category.toLowerCase());
}

export function getToursByDestination(destination: string): TourItem[] {
  return TOURS_DATA.filter(t => t.destination.toLowerCase().includes(destination.toLowerCase()));
}

export function getFeaturedTours(): TourItem[] {
  return TOURS_DATA.filter(t => t.featured);
}
