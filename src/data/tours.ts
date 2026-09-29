// Structured tour data for Genuine Egypte
// Master catalog combining existing verified tours and comprehensive Luxor & Aswan Travel Egypt products.
// STRICT STATIC ARCHITECTURE - No database, no backend API, no CMS.

export interface TourItineraryItem {
  title: string;
  description: string;
}

export type TourCategory = 
  | 'Nile Cruises'
  | 'Dahabiya Nile Cruises'
  | 'Lake Nasser Cruises'
  | 'Egypt Vacation Packages'
  | 'Cairo & Giza Tours'
  | 'Cairo Tours'
  | 'Luxor & Upper Egypt'
  | 'Luxor Tours'
  | 'Aswan Tours'
  | 'Hurghada Tours'
  | 'Sharm El Sheikh Tours'
  | 'Marsa Alam Tours'
  | 'Dahab Tours'
  | 'Alexandria Tours'
  | 'Abu Simbel Excursions'
  | 'Shore Excursions'
  | 'Private Transfers'
  | 'Hot Air Balloon'
  | 'Day Tours'
  | 'Egypt Tours';

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
  source?: {
    website: string;
    url?: string;
  };
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
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
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
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
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
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
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
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
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
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
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
    "mainImage": "/images/tours/11-21.webp",
    "images": [
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
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
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
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
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
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
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp"
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
    "mainImage": "/images/tours/11-21.webp",
    "images": [
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
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
    "relatedSlugs": [
      "10-days-of-nile-and-lake-nasser-cruises",
      "steigenberger-omar-el-khayam-lake-cruise",
      "ms-nubian-sea-lake-nasser-cruise"
    ]
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
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
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
    "mainImage": "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
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
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
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
    "mainImage": "/images/tours/11-21.webp",
    "images": [
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
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
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp"
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
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
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
    "mainImage": "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
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
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp"
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
    "mainImage": "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
    "images": [
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
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
    "mainImage": "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
    "images": [
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
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
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
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
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-6.webp",
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
    "mainImage": "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
    "images": [
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg"
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
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp"
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
    "mainImage": "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp"
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
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp"
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
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp"
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
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp"
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
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
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
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "hot-air-balloon-tour-in-luxor-with-hotel-transfers",
      "premium-sunrise-hot-air-balloon-tour-in-luxor-with-photos-video-hotel-transfers",
      "valley-of-the-kings-guided-tour-with-sunrise-hot-air-balloon-round-trip-hotel-transfers"
    ]
  },
  {
    "id": "la-best-of-egypt-in-12-luxury-days",
    "slug": "best-of-egypt-in-12-luxury-days",
    "title": "Best of Egypt in 12 Luxury Days",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "12 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Upon arrival to Cairo International Airport, you will be met with our English-speaking representative who will help and assist you in all formalities including getting the Entry Visa and bags assistance, then transfer you to your hotel for check in and overnight in Cairo."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive Cairo"
      },
      {
        "title": "Day 02",
        "description": "Cairo"
      },
      {
        "title": "Day 03",
        "description": "Cairo & Pyramids"
      },
      {
        "title": "Day 04",
        "description": "Cairo - Abu Simbel - Aswan"
      },
      {
        "title": "Day 05",
        "description": "Aswan - Kom Ombo - Edfu"
      },
      {
        "title": "Day 06",
        "description": "Edfu - Esna - Luxor"
      },
      {
        "title": "Day 07",
        "description": "Luxor"
      },
      {
        "title": "Day 08",
        "description": "Luxor - Cairo - Sharm El - Sheikh"
      },
      {
        "title": "Day 09",
        "description": "Sharm El - Sheikh"
      },
      {
        "title": "Day 10",
        "description": "Sharm El - Sheikh"
      },
      {
        "title": "Day 11",
        "description": "Depart Sharm El - Sheikh"
      },
      {
        "title": "Day 12",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Personalized itinerary planning, handling and operational charges",
      "Private sightseeing with local, English-speaking guides",
      "Luxury rooms in 5-star accommodations, including hotel taxes and service charges",
      "Internal flights and regional surface transportation, including airport transfers",
      "Meals as indicated in detailed itinerary",
      "Admission fees during touring",
      "Travel visas and permits in certain destinations (for US citizens residing in the US only)",
      "Reservations at restaurants, spas, cultural events and performances",
      "Comprehensive Trip Confirmation and Travel Documents packages",
      "Cairo: The St. Regis Cairo, Four Seasons Nile Plaza or Four Seasons First Residence",
      "Nile River cruise : The Oberoi Philae or The Oberoi Zahra",
      "Sharm El-Sheikh : Four Seasons Resort Sharm El Sheikh"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package",
      "4-day-cairo-tour-package"
    ]
  },
  {
    "id": "la-luxury-oberoi-zahra-nile-cruise-and-cairo",
    "slug": "luxury-oberoi-zahra-nile-cruise-and-cairo",
    "title": "Luxury Oberoi Zahra Nile Cruise and Cairo",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "5* Luxury hotel in Cairo for 3 nights",
      "5* Luxury Zahra Nile Cruise for 7 nights",
      "Luxury Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 9 lunches, 7 dinners",
      "Meet and greet service by our representatives at airports",
      "Assistance of our guest relations during your stay",
      "Entry Visa for Egypt provide upon arrival Cairo Airport",
      "All airport transfer by private air-conditioned deluxe vehicle with Free WIFI",
      "Domestic flight Cairo/Luxor – Aswan/Cairo",
      "All sightseeing tours in Cairo - privately guided tours",
      "All sightseeing tours on the cruise sharing cruise group",
      "All sightseeing tours in Cairo, Luxor and Aswan as mentioned in the itinerary",
      "Entrance fees to all sites as indicated on the itinerary",
      "Knowledgeable English-speaking tour guide during your tours",
      "Bottled water during your tours and transfers",
      "Free WiFi service at hotel, Nile cruise and abroad vehicle",
      "All service charges and applicable taxes included"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Giza Pyramids - Sakkara Step Pyramid"
      },
      {
        "title": "Day 03",
        "description": "Cairo Sightseeing Tour"
      },
      {
        "title": "Day 04",
        "description": "Fly Cairo to Luxor - Oberoi Zahra Nile Cruise"
      },
      {
        "title": "Day 05",
        "description": "Oberoi Zahra Nile Cruise - Luxor and Dendera"
      },
      {
        "title": "Day 06",
        "description": "Oberoi Zahra Nile Cruise - Luxor Sightseeing"
      },
      {
        "title": "Day 07",
        "description": "Oberoi Zahra Nile Cruise - Edfu Temple"
      },
      {
        "title": "Day 08",
        "description": "Oberoi Zahra Nile Cruise - Aswan Tours"
      },
      {
        "title": "Day 09",
        "description": "Oberoi Zahra Nile Cruise - Kom Ombo Temple"
      },
      {
        "title": "Day 10",
        "description": "Oberoi Zahra - Optional Tour to Abu Simbel"
      },
      {
        "title": "Day 11",
        "description": "Aswan - Cairo - Fly Back Home"
      }
    ],
    "inclusions": [
      "5* Luxury hotel in Cairo for 3 nights",
      "5* Luxury Zahra Nile Cruise for 7 nights",
      "Luxury Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 9 lunches, 7 dinners",
      "Meet and greet service by our representatives at airports",
      "Assistance of our guest relations during your stay",
      "Entry Visa for Egypt provide upon arrival Cairo Airport",
      "All airport transfer by private air-conditioned deluxe vehicle with Free WIFI",
      "Domestic flight Cairo/Luxor – Aswan/Cairo",
      "All sightseeing tours in Cairo - privately guided tours",
      "All sightseeing tours on the cruise sharing cruise group",
      "All sightseeing tours in Cairo, Luxor and Aswan as mentioned in the itinerary",
      "Entrance fees to all sites as indicated on the itinerary",
      "Knowledgeable English-speaking tour guide during your tours",
      "Bottled water during your tours and transfers",
      "Free WiFi service at hotel, Nile cruise and abroad vehicle",
      "All service charges and applicable taxes included"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-9-day-cairo-and-luxury-dahabiya-nile-cruise",
    "slug": "9-day-cairo-and-luxury-dahabiya-nile-cruise",
    "title": "9 Day Cairo and Luxury Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "5* Dahabiya Cruise for 4 nights",
      "Dahabiya Cruise",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 6 lunches, 4 dinners",
      "Meet and greet service upon arrival and departure at airports.",
      "All excursions as mentioned as per cruise itinerary.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Welcome to enchanting Cairo"
      },
      {
        "title": "Day 02",
        "description": "Touring Giza Pyramids, Saqqara and Memphis"
      },
      {
        "title": "Day 03",
        "description": "Cairo Discovery Tour"
      },
      {
        "title": "Day 04",
        "description": "Fly to Luxor & Embark the Dahabiya"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank & Sailing to Edfu"
      },
      {
        "title": "Day 06",
        "description": "Edfu Temple & Sailing to El Selsela"
      },
      {
        "title": "Day 07",
        "description": "Kom Ombo, Aswan High Dam & Philae Temple"
      },
      {
        "title": "Day 08",
        "description": "Aswan and Flight to Cairo"
      },
      {
        "title": "Day 09",
        "description": "Your Day of Departure has Arrived"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "5* Dahabiya Cruise for 4 nights",
      "Dahabiya Cruise",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 6 lunches, 4 dinners",
      "Meet and greet service upon arrival and departure at airports.",
      "All excursions as mentioned as per cruise itinerary.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna",
      "12-day-luxury-dahabiya-nile-cruise-and-egypt-pyramids-tours"
    ]
  },
  {
    "id": "la-10-day-luxury-egypt-tours-and-nile-cruise",
    "slug": "10-day-luxury-egypt-tours-and-nile-cruise",
    "title": "10 Day Luxury Egypt Tours and Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "5* Luxury hotel in Cairo for 5 nights",
      "5* Luxury Nile River Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 6 lunches, 4 dinners",
      "Meet, greet and assist service with all arrivals and departures",
      "All sightseeing tours mentioned in the itinerary",
      "Entrance fees to all sites mentioned in the itinerary",
      "English speaking guide (Egyptologist) for all tours",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights",
      "All service charges & taxes."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Egypt"
      },
      {
        "title": "Day 02",
        "description": "Pyramids Tour"
      },
      {
        "title": "Day 03",
        "description": "Luxor / Nile Cruise"
      },
      {
        "title": "Day 04",
        "description": "Luxor Sightseeing"
      },
      {
        "title": "Day 05",
        "description": "Edfu and Kom Ombo"
      },
      {
        "title": "Day 06",
        "description": "Aswan Sightseeing"
      },
      {
        "title": "Day 07",
        "description": "Fly to Cairo"
      },
      {
        "title": "Day 08",
        "description": "Grand Egyptian Museum / Coptic Cairo"
      },
      {
        "title": "Day 09",
        "description": "Free at Cairo / Optional Alexandria"
      },
      {
        "title": "Day 10",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "5* Luxury hotel in Cairo for 5 nights",
      "5* Luxury Nile River Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 6 lunches, 4 dinners",
      "Meet, greet and assist service with all arrivals and departures",
      "All sightseeing tours mentioned in the itinerary",
      "Entrance fees to all sites mentioned in the itinerary",
      "English speaking guide (Egyptologist) for all tours",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights",
      "All service charges & taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-8-day-cairo-and-dahabiya-nile-cruise",
    "slug": "8-day-cairo-and-dahabiya-nile-cruise",
    "title": "8 Day Cairo and Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "5* Dahabiya Cruise for 4 nights",
      "Private Air-Conditioned Vehicle",
      "Meet and greet service upon arrival and departure at airports.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours.",
      "All shore excursions as mentioned as per cruise itinerary."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Welcome to enchanting Cairo"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Fly to Luxor & Embark the Dahabiya"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank & Sailing to Edfu"
      },
      {
        "title": "Day 06",
        "description": "Edfu Temple & Sailing to El Selsela"
      },
      {
        "title": "Day 07",
        "description": "Kom Ombo, Aswan High Dam & Philae Temple"
      },
      {
        "title": "Day 08",
        "description": "Your Day of Departure has Arrived"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "5* Dahabiya Cruise for 4 nights",
      "Private Air-Conditioned Vehicle",
      "Meet and greet service upon arrival and departure at airports.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours.",
      "All shore excursions as mentioned as per cruise itinerary."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna",
      "12-day-luxury-dahabiya-nile-cruise-and-egypt-pyramids-tours"
    ]
  },
  {
    "id": "la-8-day-egypt-luxury-tours-and-luxury-nile-cruise-package",
    "slug": "8-day-egypt-luxury-tours-and-luxury-nile-cruise-package",
    "title": "8 Day Egypt Luxury Tours and Luxury Nile Cruise Package",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "7 breakfasts, 5 lunches, 4 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your luxury Nile cruise holiday",
      "Entry visa for Egypt provided upon arrival at the airport",
      "All transfers to and from airports and hotels in modern air-conditioned vehicles",
      "Domestic flight tickets from Cairo to Luxor and from Aswan to Cairo",
      "All tours mentioned in the luxury Nile cruise holiday itinerary",
      "Admission tickets for all attractions mentioned in the itinerary",
      "English speaking driver/guides for all tours",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrival in Cairo for your Luxury Nile Cruise Holiday"
      },
      {
        "title": "Day 02",
        "description": "Giza Pyramids and Historical Cairo Tour"
      },
      {
        "title": "Day 03",
        "description": "Flight to Luxor and Luxor East Bank Tour"
      },
      {
        "title": "Day 04",
        "description": "Luxor West Bank Tour and Cruise to Edfu"
      },
      {
        "title": "Day 05",
        "description": "Edfu, Kom Ombo, and on to Aswan"
      },
      {
        "title": "Day 06",
        "description": "Aswan Monuments Tour and Leisure Time"
      },
      {
        "title": "Day 07",
        "description": "Final Disembarkation and flight to Cairo"
      },
      {
        "title": "Day 08",
        "description": "Luxury Nile Cruise Holiday Ends and Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "7 breakfasts, 5 lunches, 4 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your luxury Nile cruise holiday",
      "Entry visa for Egypt provided upon arrival at the airport",
      "All transfers to and from airports and hotels in modern air-conditioned vehicles",
      "Domestic flight tickets from Cairo to Luxor and from Aswan to Cairo",
      "All tours mentioned in the luxury Nile cruise holiday itinerary",
      "Admission tickets for all attractions mentioned in the itinerary",
      "English speaking driver/guides for all tours",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-4-day-amoura-dahabiya-nile-cruise-aswan-to-esna",
    "slug": "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna",
    "title": "4 Day Amoura Dahabiya Nile Cruise Aswan to Esna",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "3 breakfasts, 3 lunches, 3 dinners",
      "Meet and Greet Service - One of tour representatives will meet you on arrival in Aswan, and another one will be there to bid you farewell when you depart from Luxor.",
      "Full Personal Assistance - Our team of tour professionals will be available to offer assistance throughout the duration of your cruise in the unlikely event that something goes wrong.",
      "All Transfers - All transfers are done in modern air-conditioned vehicles and are included in the price of your cruise.",
      "All Excursions - All excursions mentioned in the itinerary are included in the tour price.",
      "Entrance Fees - Any and all entrance fees to the various sites visited are included.",
      "English Speaking Guide - A fully certified English-speaking Egyptologist guide will accompany you on all excursions. Our guides are extremely knowledgeable, and visitors are encouraged to ask question during excursions.",
      "All Service Charges and Taxes - The price of your cruise is inclusive of all taxes, services charges, and etc. With us, there are NO hidden charges along the way."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Aswan Day Tour and Sail to Kom Ombo"
      },
      {
        "title": "Day 02",
        "description": "Kom Ombo Sightseeing and Sail to Speos of Hormheb"
      },
      {
        "title": "Day 03",
        "description": "Edfu Sightseeing; Island Dinner, and Sail to Esna"
      },
      {
        "title": "Day 04",
        "description": "Disembarkation and Luxor Monuments Tour"
      }
    ],
    "inclusions": [
      "3 breakfasts, 3 lunches, 3 dinners",
      "Meet and Greet Service - One of tour representatives will meet you on arrival in Aswan, and another one will be there to bid you farewell when you depart from Luxor.",
      "Full Personal Assistance - Our team of tour professionals will be available to offer assistance throughout the duration of your cruise in the unlikely event that something goes wrong.",
      "All Transfers - All transfers are done in modern air-conditioned vehicles and are included in the price of your cruise.",
      "All Excursions - All excursions mentioned in the itinerary are included in the tour price.",
      "Entrance Fees - Any and all entrance fees to the various sites visited are included.",
      "English Speaking Guide - A fully certified English-speaking Egyptologist guide will accompany you on all excursions. Our guides are extremely knowledgeable, and visitors are encouraged to ask question during excursions.",
      "All Service Charges and Taxes - The price of your cruise is inclusive of all taxes, services charges, and etc. With us, there are NO hidden charges along the way."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "12-day-luxury-dahabiya-nile-cruise-and-egypt-pyramids-tours"
    ]
  },
  {
    "id": "la-12-day-luxury-dahabiya-nile-cruise-and-egypt-pyramids-tours",
    "slug": "12-day-luxury-dahabiya-nile-cruise-and-egypt-pyramids-tours",
    "title": "12 Day Luxury Dahabiya Nile Cruise and Egypt Pyramids Tours",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "5* Luxury hotel in Cairo for 4 nights",
      "5* Dahabiya Nile Cruise for 7 nights",
      "Dahabiya Cruise",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 9 lunches, 7 dinners",
      "Meet and greet service for all arrivals and departures.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles with a company driver.",
      "All sightseeing tours mentioned in the itinerary.",
      "Entrance fees to all sites mentioned in the luxury Dahabiya Nile cruise itinerary.",
      "English speaking Egyptologist guide for your tours.",
      "Lunch during tours in Giza.",
      "Bottled water during tours.",
      "Domestic flights.",
      "Portage when needed.",
      "Free loan of phone during your stay in Egypt, including limited free airtime"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive at Cairo International Airport"
      },
      {
        "title": "Day 2",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 3",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 4",
        "description": "Fly to Luxor & Embark the Dahabiya"
      },
      {
        "title": "Day 5",
        "description": "Luxor West Bank & Sailing to Edfu"
      },
      {
        "title": "Day 6",
        "description": "Edfu Temple & Sailing to El Selsela"
      },
      {
        "title": "Day 7",
        "description": "Kom Ombo, Aswan High Dam & Philae Temple"
      },
      {
        "title": "Day 8",
        "description": "Aswan and Flight to Cairo"
      },
      {
        "title": "Day 9",
        "description": "Alexandria City Tour - Cairo ON"
      },
      {
        "title": "Day 10",
        "description": "Islamic & Coptic Cairo Tour - Cairo ON"
      },
      {
        "title": "Day 11",
        "description": "Free Day - Cairo ON"
      },
      {
        "title": "Day 12",
        "description": "Homeward Bound"
      }
    ],
    "inclusions": [
      "5* Luxury hotel in Cairo for 4 nights",
      "5* Dahabiya Nile Cruise for 7 nights",
      "Dahabiya Cruise",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 9 lunches, 7 dinners",
      "Meet and greet service for all arrivals and departures.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles with a company driver.",
      "All sightseeing tours mentioned in the itinerary.",
      "Entrance fees to all sites mentioned in the luxury Dahabiya Nile cruise itinerary.",
      "English speaking Egyptologist guide for your tours.",
      "Lunch during tours in Giza.",
      "Bottled water during tours.",
      "Domestic flights.",
      "Portage when needed.",
      "Free loan of phone during your stay in Egypt, including limited free airtime"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
    "images": [
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-4-day-cairo-and-alexandria-tour-package",
    "slug": "4-day-cairo-and-alexandria-tour-package",
    "title": "4 Day Cairo and Alexandria Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "Private air-conditioned vehicle",
      "3 breakfasts, 2 lunches",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles.",
      "Private English-speaking guides",
      "All sightseeing tours as per itinerar.",
      "Entrance fees to all sites as per the stay itinerary.",
      "Free bottled during tours.",
      "Portage when needed.",
      "All service charges and taxe"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive in Cairo"
      },
      {
        "title": "Day2",
        "description": "Tour Cairo and Giza"
      },
      {
        "title": "Day 3",
        "description": "Alexandria Day Tour"
      },
      {
        "title": "Day 4",
        "description": "Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Private air-conditioned vehicle",
      "3 breakfasts, 2 lunches",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles.",
      "Private English-speaking guides",
      "All sightseeing tours as per itinerar.",
      "Entrance fees to all sites as per the stay itinerary.",
      "Free bottled during tours.",
      "Portage when needed.",
      "All service charges and taxe"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
    "images": [
      "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-luxor-tour-package",
      "4-day-cairo-tour-package"
    ]
  },
  {
    "id": "la-4-day-cairo-and-luxor-tour-package",
    "slug": "4-day-cairo-and-luxor-tour-package",
    "title": "4 Day Cairo and Luxor Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "3 breakfasts, 2 lunches",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles.",
      "Private English-speaking guides",
      "All sightseeing tours as per itinerary.",
      "Entrance fees to all sites as per the stay itinerary.",
      "Domestic flights (Cairo / Luxor / Cairo )",
      "Free bottled during tours.",
      "Portage when needed.",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Cairo"
      },
      {
        "title": "Day2",
        "description": "Giza Pyramids and Grand Egyptian Museum"
      },
      {
        "title": "Day 3",
        "description": "Luxor Day Tour by Flight"
      },
      {
        "title": "Day 4",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "3 breakfasts, 2 lunches",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles.",
      "Private English-speaking guides",
      "All sightseeing tours as per itinerary.",
      "Entrance fees to all sites as per the stay itinerary.",
      "Domestic flights (Cairo / Luxor / Cairo )",
      "Free bottled during tours.",
      "Portage when needed.",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
    "images": [
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-tour-package"
    ]
  },
  {
    "id": "la-4-day-cairo-tour-package",
    "slug": "4-day-cairo-tour-package",
    "title": "4 Day Cairo Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "Private air-conditioned vehicle",
      "3 breakfasts, 2 lunches",
      "Meet and greet service at the airport",
      "Customer service assistance throughout your stay",
      "All transfers in private, modern air-conditioned vehicles",
      "Accommodation in Cairo for 3 nights (includes breakfasts)",
      "All sightseeing tours (100% private)",
      "Personal English speaking guide",
      "Entrance fees to listed sites",
      "All meals listed in the 4 day Cairo tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive in Cairo, Egypt"
      },
      {
        "title": "Day2",
        "description": "Tour of the Pyramids"
      },
      {
        "title": "Day 3",
        "description": "Sightseeing in Cairo"
      },
      {
        "title": "Day 4",
        "description": "Depart Cairo"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Private air-conditioned vehicle",
      "3 breakfasts, 2 lunches",
      "Meet and greet service at the airport",
      "Customer service assistance throughout your stay",
      "All transfers in private, modern air-conditioned vehicles",
      "Accommodation in Cairo for 3 nights (includes breakfasts)",
      "All sightseeing tours (100% private)",
      "Personal English speaking guide",
      "Entrance fees to listed sites",
      "All meals listed in the 4 day Cairo tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
    "images": [
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-5-day-tour-of-cairo",
    "slug": "5-day-tour-of-cairo",
    "title": "5 Day Tour of Cairo",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "Private air-conditioned vehicle",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours (100% private)",
      "Personal English speaking guide",
      "Entrance fees to listed sites in the 5 day tour of Cairo itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 05",
        "description": "Depart from Cairo"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "Private air-conditioned vehicle",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours (100% private)",
      "Personal English speaking guide",
      "Entrance fees to listed sites in the 5 day tour of Cairo itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
    "images": [
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-5-day-cairo-and-alexandria-tour",
    "slug": "5-day-cairo-and-alexandria-tour",
    "title": "5 Day Cairo and Alexandria Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours (100% private)",
      "Personal English speaking guide",
      "Entrance fees to listed sites in the 5 day tour of Cairo itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 05",
        "description": "Cairo - Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours (100% private)",
      "Personal English speaking guide",
      "Entrance fees to listed sites in the 5 day tour of Cairo itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-4-day-luxor-edfu-kom-ombo-aswan-and-abu-simbel-tour",
    "slug": "4-day-luxor-edfu-kom-ombo-aswan-and-abu-simbel-tour",
    "title": "4 Day Luxor, Edfu, Kom Ombo, Aswan and Abu Simbel Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Luxor for 2 nights",
      "Hotel in Aswan for 1 nights",
      "Private air-conditioned vehicle",
      "3 breakfasts, 3 lunches.1dinner",
      "Meet and greet service by our representatives at airports",
      "Assistance from our customer service department during your stay",
      "All transfers",
      "All sightseeing tours (all tours are private)",
      "Personal guide fluent in English",
      "Entrance fees to all sites",
      "Personal driver",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive in Luxor"
      },
      {
        "title": "Day 2",
        "description": "Luxor Temples and Tombs"
      },
      {
        "title": "Day 03",
        "description": "Edfu, Kom Ombo and Aswan"
      },
      {
        "title": "Day 04",
        "description": "Tour of Abu Simbel"
      }
    ],
    "inclusions": [
      "Hotel in Luxor for 2 nights",
      "Hotel in Aswan for 1 nights",
      "Private air-conditioned vehicle",
      "3 breakfasts, 3 lunches.1dinner",
      "Meet and greet service by our representatives at airports",
      "Assistance from our customer service department during your stay",
      "All transfers",
      "All sightseeing tours (all tours are private)",
      "Personal guide fluent in English",
      "Entrance fees to all sites",
      "Personal driver",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL.webp",
    "images": [
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-4-days-nile-cruise-from-cairo",
    "slug": "4-days-nile-cruise-from-cairo",
    "title": "4 Days Nile Cruise from Cairo",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "3 nights on board the 5* Standard Nile Cruise",
      "3 breakfasts, 3 lunches, 3 dinners",
      "Domestic Flights: (Cairo / Aswan) and (Luxor / Cairo)",
      "Pickup from the hotel in Cairo to Cairo Airport to fly to Aswan",
      "Pickup from Aswan Airport upon arrival on Day # 1",
      "Transfer to Luxor Airport upon departure on Day # 4",
      "All Nile Cruise excursions as mentioned in the 4 day Nile Cruise from Aswan to Luxor itinerary",
      "Entrance fees to all sights",
      "English speaking guide for all excursions",
      "Bottled water during your tours",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Flight from Cairo to Aswan & Aswan Day Tour"
      },
      {
        "title": "Day 2",
        "description": "Koum Oumbo & Edfu"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank - Luxor ON"
      },
      {
        "title": "Day 4",
        "description": "Check out - Luxor East Bank"
      }
    ],
    "inclusions": [
      "3 nights on board the 5* Standard Nile Cruise",
      "3 breakfasts, 3 lunches, 3 dinners",
      "Domestic Flights: (Cairo / Aswan) and (Luxor / Cairo)",
      "Pickup from the hotel in Cairo to Cairo Airport to fly to Aswan",
      "Pickup from Aswan Airport upon arrival on Day # 1",
      "Transfer to Luxor Airport upon departure on Day # 4",
      "All Nile Cruise excursions as mentioned in the 4 day Nile Cruise from Aswan to Luxor itinerary",
      "Entrance fees to all sights",
      "English speaking guide for all excursions",
      "Bottled water during your tours",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-4-day-cairo-alexandria-and-luxor-tour",
    "slug": "4-day-cairo-alexandria-and-luxor-tour",
    "title": "4 Day Cairo, Alexandria and Luxor Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "Plane, Private air-conditioned vehicle",
      "3 breakfasts, 3 lunches",
      "Meet and assist by English-speaking representatives.",
      "Private arrival transfer from the Airport",
      "Private departure transfer to the Airport.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Full Day tour at Cairo - Giza",
      "Full Day Tour at Luxor",
      "Full Day tour at Alexandria",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic flight Tickets ( Cairo - Luxor ) and ( Luxor - Cairo )",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Egypt - Visit the Pyramids - The Grand Egyptian Museum"
      },
      {
        "title": "Day 02",
        "description": "Full Day Trip to Alexandria"
      },
      {
        "title": "Day 03",
        "description": "Luxor Over Day from Cairo by Flight"
      },
      {
        "title": "Day 04",
        "description": "Transfer to Cairo International Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Plane, Private air-conditioned vehicle",
      "3 breakfasts, 3 lunches",
      "Meet and assist by English-speaking representatives.",
      "Private arrival transfer from the Airport",
      "Private departure transfer to the Airport.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Full Day tour at Cairo - Giza",
      "Full Day Tour at Luxor",
      "Full Day tour at Alexandria",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic flight Tickets ( Cairo - Luxor ) and ( Luxor - Cairo )",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
    "images": [
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-5-day-merit-dahabiya-nile-river-cruise-luxor-to-aswan",
    "slug": "5-day-merit-dahabiya-nile-river-cruise-luxor-to-aswan",
    "title": "5 Day Merit Dahabiya Nile River Cruise Luxor to Aswan",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "4 Nights on board Merit Dahabiya Nile River Cruise",
      "Cruise Boat",
      "Private Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the kings",
      "Motor Boat to Philae island",
      "4 breakfasts, 4 lunches, 4 dinners",
      "Meet and Greet Service – One of tour representatives will meet you on arrival in Luxor, and another one will be there to bid you farewell when you depart from Aswan.",
      "Full Personal Assistance – Our team of tour professionals will be available to offer assistance throughout the duration of your Merit Dahabiya Nile River Cruise Itinerary in the unlikely event that something goes wrong.",
      "All Transfers – All transfers are done in modern air-conditioned vehicles and are included in the price of your cruise.",
      "All Excursions – All excursions mentioned in the itinerary are included in the tour price.",
      "Entrance Fees – Any and all entrance fees to the various sites visited are included.",
      "English Speaking Guide – A fully certified English-speaking guide will accompany you on all excursions. Our guides are extremely knowledgeable, and visitors are encouraged to ask question during excursions.",
      "All Service Charges and Taxes – The price of your cruise is inclusive of all taxes, services charges, and etc. With us, there are NO hidden charges along the way."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cruise Embarkation and Luxor East Bank Sightseeing"
      },
      {
        "title": "Day 02",
        "description": "Luxor West Bank Tour and Sail to Esna"
      },
      {
        "title": "Day 03",
        "description": "Sail to Ramady Island via Edfu, with Edfu Temple Visit"
      },
      {
        "title": "Day 04",
        "description": "Sail to el Sheikh Fadl Island then on to Aswan"
      },
      {
        "title": "Day 05",
        "description": "Aswan Sightseeing, Merit Dahabiya Nile River Cruise Itinerary Ends"
      }
    ],
    "inclusions": [
      "4 Nights on board Merit Dahabiya Nile River Cruise",
      "Cruise Boat",
      "Private Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the kings",
      "Motor Boat to Philae island",
      "4 breakfasts, 4 lunches, 4 dinners",
      "Meet and Greet Service – One of tour representatives will meet you on arrival in Luxor, and another one will be there to bid you farewell when you depart from Aswan.",
      "Full Personal Assistance – Our team of tour professionals will be available to offer assistance throughout the duration of your Merit Dahabiya Nile River Cruise Itinerary in the unlikely event that something goes wrong.",
      "All Transfers – All transfers are done in modern air-conditioned vehicles and are included in the price of your cruise.",
      "All Excursions – All excursions mentioned in the itinerary are included in the tour price.",
      "Entrance Fees – Any and all entrance fees to the various sites visited are included.",
      "English Speaking Guide – A fully certified English-speaking guide will accompany you on all excursions. Our guides are extremely knowledgeable, and visitors are encouraged to ask question during excursions.",
      "All Service Charges and Taxes – The price of your cruise is inclusive of all taxes, services charges, and etc. With us, there are NO hidden charges along the way."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-5-day-cairo-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "slug": "5-day-cairo-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "title": "5 Day Cairo, Luxor, Edfu, Kom Ombo, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "Hotel in Luxor for 1 nights",
      "Hotel in Aswan for 1 nights",
      "4 breakfasts, 5 lunches",
      "Meet and greet service at airports and train stations",
      "Customer service assistance available throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours in Cairo, Luxor, Edfu, Kom Ombo, Aswan & Abu Simbel",
      "English speaking tour guide through-out all tours",
      "Entrance fees to all sites listed in the Cairo, Luxor, Edfu, Kom Ombo, Aswan & Abu Simbel",
      "Bottled water during tours and transfers",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrival at Cairo International Airport / Pyramids and Sakkara"
      },
      {
        "title": "Day 02",
        "description": "Fly to Luxor / Luxor West & East Bank"
      },
      {
        "title": "Day 03",
        "description": "Day Trip to Edfu, Kom Ombo and Aswan"
      },
      {
        "title": "Day 04",
        "description": "Day Tour to Abu Simbel Temple/ Fly back to Cairo"
      },
      {
        "title": "Day 05",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili / Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "Hotel in Luxor for 1 nights",
      "Hotel in Aswan for 1 nights",
      "4 breakfasts, 5 lunches",
      "Meet and greet service at airports and train stations",
      "Customer service assistance available throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours in Cairo, Luxor, Edfu, Kom Ombo, Aswan & Abu Simbel",
      "English speaking tour guide through-out all tours",
      "Entrance fees to all sites listed in the Cairo, Luxor, Edfu, Kom Ombo, Aswan & Abu Simbel",
      "Bottled water during tours and transfers",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-11.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-5-days-cairo-alexandria-and-luxor-tour",
    "slug": "5-days-cairo-alexandria-and-luxor-tour",
    "title": "5 Days Cairo, Alexandria and Luxor Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "Plane, Private air-conditioned vehicle",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights from Cairo to Luxor and from Luxor to Cairo",
      "All sightseeing tours (private and guided)",
      "English speaking tour guide",
      "Entrance fees to all sites listed in the Cairo Luxor Tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 2",
        "description": "Visit the Great Pyramids and Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 3",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 4",
        "description": "Day Trip to Luxor by Air"
      },
      {
        "title": "Day 05",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "Plane, Private air-conditioned vehicle",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights from Cairo to Luxor and from Luxor to Cairo",
      "All sightseeing tours (private and guided)",
      "English speaking tour guide",
      "Entrance fees to all sites listed in the Cairo Luxor Tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
    "images": [
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-5-day-cairo-and-nile-cruise-tour-package",
    "slug": "5-day-cairo-and-nile-cruise-tour-package",
    "title": "5 Day Cairo and Nile Cruise Tour Package",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "5* Nile Cruise for 2 nights",
      "4 breakfasts, 4 lunches, 2 dinners",
      "Meet and greet service by our representatives at airports",
      "An assistance of our guest relations during your stay",
      "Domestic flight Cairo/Aswan – Luxor/Cairo",
      "All sightseeing tours in Cairo - privately guided tours",
      "All sightseeing tours on the cruise - privately guided tours",
      "All sightseeing tours in Cairo, Luxor, and Aswan as mentioned in the itinerary",
      "Entrance fees to all sites as indicated on the itinerary.",
      "Knowledgeable English-speaking tour guide during your tours",
      "Bottled water during your tours and transfers",
      "All service charges and applicable taxes included"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Grand Egyptian Museum - Khan El Khalili"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Nile Cruise - Sail to Kom Ombo"
      },
      {
        "title": "Day 04",
        "description": "Edfu & Sail to Luxor"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Flight back to Cairo"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "5* Nile Cruise for 2 nights",
      "4 breakfasts, 4 lunches, 2 dinners",
      "Meet and greet service by our representatives at airports",
      "An assistance of our guest relations during your stay",
      "Domestic flight Cairo/Aswan – Luxor/Cairo",
      "All sightseeing tours in Cairo - privately guided tours",
      "All sightseeing tours on the cruise - privately guided tours",
      "All sightseeing tours in Cairo, Luxor, and Aswan as mentioned in the itinerary",
      "Entrance fees to all sites as indicated on the itinerary.",
      "Knowledgeable English-speaking tour guide during your tours",
      "Bottled water during your tours and transfers",
      "All service charges and applicable taxes included"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-5-day-cairo-and-luxor-tour-package",
    "slug": "5-day-cairo-and-luxor-tour-package",
    "title": "5 Day Cairo and Luxor Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "Hotel in Luxor for 1 night",
      "Plane, Private air-conditioned vehicle",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights from Cairo to Luxor and from Luxor to Cairo",
      "All sightseeing tours (private and guided)",
      "English speaking tour guide",
      "Entrance fees to all sites listed in the Cairo Luxor Tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Cairo"
      },
      {
        "title": "Day 2",
        "description": "Giza Pyramids and Grand Egyptian Museum"
      },
      {
        "title": "Day 3",
        "description": "Fly to Luxor - Luxor East Bank - Luxor Overnight"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank / Fly back to Cairo"
      },
      {
        "title": "Day 05",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Hotel in Luxor for 1 night",
      "Plane, Private air-conditioned vehicle",
      "4 breakfasts, 3 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights from Cairo to Luxor and from Luxor to Cairo",
      "All sightseeing tours (private and guided)",
      "English speaking tour guide",
      "Entrance fees to all sites listed in the Cairo Luxor Tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
    "images": [
      "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-5-day-luxor-to-aswan-nile-cruise-from-cairo-by-flight",
    "slug": "5-day-luxor-to-aswan-nile-cruise-from-cairo-by-flight",
    "title": "5 Day Luxor to Aswan Nile Cruise From Cairo By Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "4 nights on board the 5* Standard Nile Cruise",
      "Plane, Nile River Cruise, Private air-conditioned vehicle",
      "4 breakfasts, 4 lunches, 4 dinners",
      "Domestic Flights: (Cairo / Luxor) and (Aswan / Cairo)",
      "Pickup from the hotel in Cairo to Cairo Airport to fly to Luxor",
      "Pickup from Luxor Airport upon arrival on Day # 1",
      "Transfer to Aswan Airport upon departure on Day # 5",
      "All Nile Cruise excursions as mentioned in the 5 day Nile Cruise from Luxor to Aswan itinerary",
      "Entrance fees to all sights",
      "English speaking guide for all excursions",
      "Bottled water during your tours",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Flight from Cairo to Luxor - Luxor East Bank - Luxor ON"
      },
      {
        "title": "Day 02",
        "description": "Luxor West Bank - Sail to Edfu & ON"
      },
      {
        "title": "Day 03",
        "description": "Edfu - Kom Ombo - Sail to Aswan & ON"
      },
      {
        "title": "Day 04",
        "description": "Aswan Tours - Aswan ON"
      },
      {
        "title": "Day 5",
        "description": "Optional Abu Simbel Tour - Departure Flight to Cairo"
      }
    ],
    "inclusions": [
      "4 nights on board the 5* Standard Nile Cruise",
      "Plane, Nile River Cruise, Private air-conditioned vehicle",
      "4 breakfasts, 4 lunches, 4 dinners",
      "Domestic Flights: (Cairo / Luxor) and (Aswan / Cairo)",
      "Pickup from the hotel in Cairo to Cairo Airport to fly to Luxor",
      "Pickup from Luxor Airport upon arrival on Day # 1",
      "Transfer to Aswan Airport upon departure on Day # 5",
      "All Nile Cruise excursions as mentioned in the 5 day Nile Cruise from Luxor to Aswan itinerary",
      "Entrance fees to all sights",
      "English speaking guide for all excursions",
      "Bottled water during your tours",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-4.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-4.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-7-day-cairo-nile-cruise-and-hurghada",
    "slug": "7-day-cairo-nile-cruise-and-hurghada",
    "title": "7 Day Cairo, Nile Cruise and Hurghada",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Board on Nile Cruise - Sail to Kom Ombo"
      },
      {
        "title": "Day 04",
        "description": "Edfu Temple - Sail to Luxor - Karnak and Luxor Temples"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Transfer to Hurghada"
      },
      {
        "title": "Day 06",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 07",
        "description": "Fly back to Cairo and Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "5* Nile Cruise for 2 nights",
      "Hotel in Hurghada for 2 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "6 breakfasts, 5 lunches, 4 dinner",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets (Cairo-Aswan & Hurghada-Cairo)",
      "Transfer by A/C Vehicle: Luxor / Hurghada",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-7-day-cairo-alexandria-and-nile-cruise-tour-package-by-flight",
    "slug": "7-day-cairo-alexandria-and-nile-cruise-tour-package-by-flight",
    "title": "7 Day Cairo, Alexandria and Nile Cruise Tour Package by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "6 breakfasts, 5 lunches, 3 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your holiday",
      "All transfers to and from airports and hotels in modern air-conditioned vehicles",
      "Domestic flight tickets from (Cairo to Aswan) and from (Luxor to Cairo)",
      "All tours mentioned in the itinerary",
      "Admission tickets for all attractions mentioned in the itinerary",
      "Private English speaking Egyptologist guide",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Sakkara & Grand Egyptian Museum"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Embark on Nile Cruise"
      },
      {
        "title": "Day 04",
        "description": "Koum Oumbo & Edfu Temples"
      },
      {
        "title": "Day 05",
        "description": "Luxor West & East Banks"
      },
      {
        "title": "Day 06",
        "description": "Morning Flight back to Cairo - Alexandria Tours"
      },
      {
        "title": "Day 07",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "6 breakfasts, 5 lunches, 3 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your holiday",
      "All transfers to and from airports and hotels in modern air-conditioned vehicles",
      "Domestic flight tickets from (Cairo to Aswan) and from (Luxor to Cairo)",
      "All tours mentioned in the itinerary",
      "Admission tickets for all attractions mentioned in the itinerary",
      "Private English speaking Egyptologist guide",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-9-day-cairo-and-nile-cruise-by-air",
    "slug": "9-day-cairo-and-nile-cruise-by-air",
    "title": "9 Day Cairo and Nile Cruise By Air",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 6 lunches, 4 dinners",
      "Meet and greet service upon arrival and departure at airports.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours.",
      "All shore excursions as mentioned as per cruise itinerary."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Your Best of Egypt Tour Begins"
      },
      {
        "title": "Day 02",
        "description": "Tour of the Pyramids"
      },
      {
        "title": "Day 03",
        "description": "Sightseeing in Cairo"
      },
      {
        "title": "Day 04",
        "description": "Fly to Luxor for Nile Cruise"
      },
      {
        "title": "Day 05",
        "description": "Valley of the Kings & Sail to Edfu"
      },
      {
        "title": "Day 06",
        "description": "Edfu and Kom Ombo Temples"
      },
      {
        "title": "Day 07",
        "description": "Sightseeing in Aswan"
      },
      {
        "title": "Day 08",
        "description": "Fly to Cairo"
      },
      {
        "title": "Day 09",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 6 lunches, 4 dinners",
      "Meet and greet service upon arrival and departure at airports.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours.",
      "All shore excursions as mentioned as per cruise itinerary."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-7-day-cairo-alexandria-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "slug": "7-day-cairo-alexandria-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "title": "7 Day Cairo, Alexandria, Luxor, Edfu, Kom Ombo, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "Hotel in Luxor for 1 night",
      "Hotel in Aswan for 1 night",
      "Train",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "6 breakfasts, 5 lunches",
      "1 Day tour in Cairo visiting Egyptian Museum, Pyramids",
      "1 Day tour in Aswan",
      "1 Day tour to Abu Simble",
      "1 Day tour in Luxor visiting East & West Banks",
      "1 Day tour in Alexandria",
      "All transfers",
      "All your tours and excursions are with A/C vehicle",
      "The service of meet and assist at all your destinations",
      "Expert tour guide",
      "All your visits include entrance fees",
      "Our prices include all taxes and services",
      "Train ticket: Luxor / Aswan",
      "Domestic flights: Cairo / Luxor & Aswan / Cairo",
      "Transfer by an A/C vehicle: Cairo / Alexandria / Cairo"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Flight to Luxor - Valley of the Kings - Hatshipsut temple - Karnak and Luxor temples"
      },
      {
        "title": "Day 04",
        "description": "Day Trip to Edfu & Kom Ombo then drive to Aswan"
      },
      {
        "title": "Day 05",
        "description": "Day Tour to Abu Simbel Tour - Flight back to Cairo"
      },
      {
        "title": "Day 06",
        "description": "Over day to Alexandria"
      },
      {
        "title": "Day 07",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "Hotel in Luxor for 1 night",
      "Hotel in Aswan for 1 night",
      "Train",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "6 breakfasts, 5 lunches",
      "1 Day tour in Cairo visiting Egyptian Museum, Pyramids",
      "1 Day tour in Aswan",
      "1 Day tour to Abu Simble",
      "1 Day tour in Luxor visiting East & West Banks",
      "1 Day tour in Alexandria",
      "All transfers",
      "All your tours and excursions are with A/C vehicle",
      "The service of meet and assist at all your destinations",
      "Expert tour guide",
      "All your visits include entrance fees",
      "Our prices include all taxes and services",
      "Train ticket: Luxor / Aswan",
      "Domestic flights: Cairo / Luxor & Aswan / Cairo",
      "Transfer by an A/C vehicle: Cairo / Alexandria / Cairo"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-5.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-1-2.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-7-day-cairo-and-princess-farida-dahabiya-nile-cruise",
    "slug": "7-day-cairo-and-princess-farida-dahabiya-nile-cruise",
    "title": "7 Day Cairo and Princess Farida Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "5* Dahabiya (Princess Farida Dahabiya) cruise for 4 nights",
      "Meet and greet service upon arrival and departure at airports.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours.",
      "All shore excursions as mentioned as per cruise itinerary"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to enchanting Cairo"
      },
      {
        "title": "Day 2",
        "description": "Experience Cairo"
      },
      {
        "title": "Day 3",
        "description": "Fly to Luxor & Embark the Dahabiya"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank & Sailing to Edfu"
      },
      {
        "title": "Day 5",
        "description": "Edfu Temple & Sailing to El Selsela"
      },
      {
        "title": "Day 6",
        "description": "Kom Ombo, Aswan High Dam & Philae Temple"
      },
      {
        "title": "Day 7",
        "description": "Your Day of Departure has Arrived"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "5* Dahabiya (Princess Farida Dahabiya) cruise for 4 nights",
      "Meet and greet service upon arrival and departure at airports.",
      "Assistance from our experienced personnel during your stay.",
      "All transfers in air conditioned vehicles with private driver.",
      "Domestic flights.",
      "Private Egyptologist guide.",
      "All tours mentioned in the itinerary",
      "Bottled water during your tours.",
      "All shore excursions as mentioned as per cruise itinerary"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-7-day-cairo-and-nile-cruise-by-flight",
    "slug": "7-day-cairo-and-nile-cruise-by-flight",
    "title": "7 Day Cairo and Nile Cruise by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "6 breakfasts, 5 lunches, 3 dinner",
      "Domestic flights (Cairo / Aswan ) & (Luxor / Cairo)",
      "Meet, greet and assist with all arrivals and departures",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours mentioned in the itinerary",
      "Egyptologist tour guide",
      "Entrance fees to all sites mentioned in the itinerary",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Koum Oumbo & Edfu - ON"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Luxor ON"
      },
      {
        "title": "Day 06",
        "description": "Check out - Luxor East Bank - Flight back to Cairo"
      },
      {
        "title": "Day 07",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "6 breakfasts, 5 lunches, 3 dinner",
      "Domestic flights (Cairo / Aswan ) & (Luxor / Cairo)",
      "Meet, greet and assist with all arrivals and departures",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours mentioned in the itinerary",
      "Egyptologist tour guide",
      "Entrance fees to all sites mentioned in the itinerary",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-9-day-cairo-nile-cruise-and-hurghada",
    "slug": "9-day-cairo-nile-cruise-and-hurghada",
    "title": "9 Day Cairo, Nile Cruise and Hurghada",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Flight to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Koum Oumbo & Edfu - Nile Cruise ON"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Nile Cruise ON"
      },
      {
        "title": "Day 06",
        "description": "Disembarkation from Nile Cruise - Luxor East Bank - Drive to Hurghada"
      },
      {
        "title": "Day 07",
        "description": "Hurghada Free day"
      },
      {
        "title": "Day 08",
        "description": "Hurghada Free day - Flight back to Cairo"
      },
      {
        "title": "Day 09",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Hotel in Hurghada for 2 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 6 lunches, 4 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets (Cairo-Aswan & Hurghada-Cairo)",
      "Transfer by A/C Vehicle: Luxor / Hurghada",
      "Lunch meal (s) at local restaurants during the tours in Cairo.",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-2-day-cairo-tour",
    "slug": "2-day-cairo-tour",
    "title": "2 Day Cairo Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "5-Star accommodation in Cairo for 1 night",
      "All transfers in private, modern air-conditioned vehicles",
      "1 breakfast, 1 lunch",
      "Meet and greet service at the airport",
      "Customer service assistance throughout your stay",
      "All sightseeing tours (private)",
      "Private English speaking guide",
      "Entrance fees to all sites listed in the 2 Day Cairo Tour itinerary",
      "Meals as per the itinerary",
      "Bottled water during your tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival in Cairo"
      },
      {
        "title": "Day 2",
        "description": "Cairo Sightseeing Tour"
      }
    ],
    "inclusions": [
      "5-Star accommodation in Cairo for 1 night",
      "All transfers in private, modern air-conditioned vehicles",
      "1 breakfast, 1 lunch",
      "Meet and greet service at the airport",
      "Customer service assistance throughout your stay",
      "All sightseeing tours (private)",
      "Private English speaking guide",
      "Entrance fees to all sites listed in the 2 Day Cairo Tour itinerary",
      "Meals as per the itinerary",
      "Bottled water during your tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg",
    "images": [
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-2-day-cairo-and-luxor-from-hurghada-by-flight",
    "slug": "2-day-cairo-and-luxor-from-hurghada-by-flight",
    "title": "2 Day Cairo and Luxor from Hurghada by Flight",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation in Luxor with breakfast at Hotel with breakfast",
      "All transfers by private air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Domestic flight ticket (Hurghada/Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Hurghada and return",
      "Private English speaking guide throughout your tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Hurghada by private vehicle",
      "Lunch at local restaurant during tour in Cairo & Luxor",
      "Bottled water on board the vehicle",
      "Shopping tours through out Khan El Khalili bazaars",
      "All service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Hurghada / Cairo Tours / Fly to Luxor"
      },
      {
        "title": "Day 02",
        "description": "Luxor Tours / Back to Hurghada"
      }
    ],
    "inclusions": [
      "Accommodation in Luxor with breakfast at Hotel with breakfast",
      "All transfers by private air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Domestic flight ticket (Hurghada/Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Hurghada and return",
      "Private English speaking guide throughout your tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Hurghada by private vehicle",
      "Lunch at local restaurant during tour in Cairo & Luxor",
      "Bottled water on board the vehicle",
      "Shopping tours through out Khan El Khalili bazaars",
      "All service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
    "images": [
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-9-day-cairo-alexandria-and-nile-cruise-tour-package-by-flight",
    "slug": "9-day-cairo-alexandria-and-nile-cruise-tour-package-by-flight",
    "title": "9 Day Cairo, Alexandria and Nile Cruise Tour Package by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 7 lunches, 4 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets (Cairo-Luxor & Aswan-Cairo)",
      "Lunch meal (s) at local restaurants during the tours in Cairo.",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Flight to Luxor - Luxor East Bank - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Luxor West Bank - Sail to Edfu & ON"
      },
      {
        "title": "Day 05",
        "description": "Edfu - Kom Ombo - Sail to Aswan & ON"
      },
      {
        "title": "Day 06",
        "description": "Aswan City Tour - Aswan ON"
      },
      {
        "title": "Day 07",
        "description": "Disembarkation from Nile Cruise - Flight to Cairo - Cairo ON"
      },
      {
        "title": "Day 08",
        "description": "Alexandria City Tour - Cairo ON"
      },
      {
        "title": "Day 09",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 7 lunches, 4 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets (Cairo-Luxor & Aswan-Cairo)",
      "Lunch meal (s) at local restaurants during the tours in Cairo.",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-9-day-cairo-nile-cruise-and-sharm-el-sheikh",
    "slug": "9-day-cairo-nile-cruise-and-sharm-el-sheikh",
    "title": "9 Day Cairo, Nile Cruise and Sharm El Sheikh",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Giza Pyramids and the Grand Egyptian Museum"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Kom Ombo and Edfu Temples"
      },
      {
        "title": "Day 05",
        "description": "Luxor West and East Banks"
      },
      {
        "title": "Day 06",
        "description": "Fly to Sharm El Shiekh - Sharm Free day"
      },
      {
        "title": "Day 07",
        "description": "Sharm Free day"
      },
      {
        "title": "Day 08",
        "description": "Sharm Free day - Fly back to Cairo"
      },
      {
        "title": "Day 09",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Hotel in Sharm El Shiekh for 2 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 6 lunches, 5 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets (Cairo-Aswan & Luxor Sharm via Cairo & Sharm-Cairo)",
      "Lunch meal (s) at local restaurants during the tours in Cairo.",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-9-day-cairo-alexandria-luxor-edfu-kom-ombo-aswan-abu-simbel",
    "slug": "9-day-cairo-alexandria-luxor-edfu-kom-ombo-aswan-abu-simbel",
    "title": "9 Day Cairo, Alexandria, Luxor, Edfu, Kom Ombo, Aswan, Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 6 nights",
      "Hotel in Luxor for 1 night",
      "Hotel in Aswan for 1 night",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 7 lunches",
      "Domestic Flight Tickets (Cairo-Luxor & Aswan-Cairo)",
      "All sightseeing tours in Cairo, Luxor, Edfu, Kom Ombo, Aswan, Abu Simbel & Alexandria",
      "English Egyptologist guide",
      "Entrance fees to all sites as stated on the itinerary",
      "All transfers by a modern air-conditioned vehicle",
      "Sightseeing tour to Abu Simbel by a modern air-conditioned bus",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Flight to Luxor - Full Day West & East Bank of Luxor"
      },
      {
        "title": "Day 05",
        "description": "Day Trip to Edfu, Kom Ombo and Aswan"
      },
      {
        "title": "Day 06",
        "description": "Day Tour to Abu Simbel / Fly back to Cairo"
      },
      {
        "title": "Day 07",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 08",
        "description": "Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 09",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 6 nights",
      "Hotel in Luxor for 1 night",
      "Hotel in Aswan for 1 night",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "8 breakfasts, 7 lunches",
      "Domestic Flight Tickets (Cairo-Luxor & Aswan-Cairo)",
      "All sightseeing tours in Cairo, Luxor, Edfu, Kom Ombo, Aswan, Abu Simbel & Alexandria",
      "English Egyptologist guide",
      "Entrance fees to all sites as stated on the itinerary",
      "All transfers by a modern air-conditioned vehicle",
      "Sightseeing tour to Abu Simbel by a modern air-conditioned bus",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/ABU-SIMBEL-2-2.webp",
      "/images/tours/ABU-SIMBEL-2-4.webp",
      "/images/tours/ABU-SIMBEL-3-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-2-day-aswan-abu-simble-and-luxor-from-cairo",
    "slug": "2-day-aswan-abu-simble-and-luxor-from-cairo",
    "title": "2 Day Aswan, Abu Simble and Luxor from Cairo",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "1 Night accommodation in Aswan at Hotel.",
      "All your tours and excursions are with A/C bus.",
      "Air Plane",
      "Train",
      "1 breakfast, 2 lunches",
      "1 full day tour in Aswan visiting Philae Temple,the High Dam and Abu Simble Temple",
      "1 full day tour in Luxor visiting East and West banks in Luxor.",
      "All Transfers in Luxor and Aswan.",
      "The service of meet and assist at all your destinations.",
      "Multilingual expert Egyptologist guide.",
      "All your visits include entrance fees.",
      "Our prices include all taxes and services.",
      "Domestic flights ( Cairo / Aswan) & ( Luxor / Cairo )"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Full Day tour to Philae Temple,High Dam and Abu Simbel Temple"
      },
      {
        "title": "Day 2",
        "description": "Train from Aswan to Luxor - Full Day Tour to West & East Banks in Luxor"
      }
    ],
    "inclusions": [
      "1 Night accommodation in Aswan at Hotel.",
      "All your tours and excursions are with A/C bus.",
      "Air Plane",
      "Train",
      "1 breakfast, 2 lunches",
      "1 full day tour in Aswan visiting Philae Temple,the High Dam and Abu Simble Temple",
      "1 full day tour in Luxor visiting East and West banks in Luxor.",
      "All Transfers in Luxor and Aswan.",
      "The service of meet and assist at all your destinations.",
      "Multilingual expert Egyptologist guide.",
      "All your visits include entrance fees.",
      "Our prices include all taxes and services.",
      "Domestic flights ( Cairo / Aswan) & ( Luxor / Cairo )"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
    "images": [
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-2-day-trip-to-luxor",
    "slug": "2-day-trip-to-luxor",
    "title": "2 Day Trip to Luxor",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation at the Sonesta St.George Hotel for 1 night (including breakfast)",
      "Modern air conditioned vehicles for all transfers",
      "1 breakfast, 1 lunch,1 dinner",
      "Meet and greet service by our representatives at airports",
      "Professional assistance from our customer service department during your stay",
      "Complimentary hotel dinner on day of arrival",
      "All sightseeing tours (private)",
      "English speaking guide and a driver",
      "Entrance fees to all sites",
      "Meals as mentioned in the 2 Day Trip to Luxor itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Luxor"
      },
      {
        "title": "Day 02",
        "description": "Tour of Luxor"
      }
    ],
    "inclusions": [
      "Accommodation at the Sonesta St.George Hotel for 1 night (including breakfast)",
      "Modern air conditioned vehicles for all transfers",
      "1 breakfast, 1 lunch,1 dinner",
      "Meet and greet service by our representatives at airports",
      "Professional assistance from our customer service department during your stay",
      "Complimentary hotel dinner on day of arrival",
      "All sightseeing tours (private)",
      "English speaking guide and a driver",
      "Entrance fees to all sites",
      "Meals as mentioned in the 2 Day Trip to Luxor itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-overnight-trip-to-luxor-from-cairo",
    "slug": "overnight-trip-to-luxor-from-cairo",
    "title": "Overnight Trip to Luxor from Cairo",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation in Luxor at Hotel.",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 2 lunches",
      "Pick up services from your hotel & return.",
      "Domestic flights (Cairo / Luxor / Cairo).",
      "Shopping through famous Bazaars in Luxor.",
      "Felucca boat to Banana Island",
      "Service of professional English-speaking Egyptologist guide.",
      "Entrance fees to the sights mentioned in the itenerary.",
      "Bottled water during your trip.",
      "Pick up service from hotel and return.",
      "Assistance of our personnel during tours.",
      "All services charges and taxes included."
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Fly To Luxor / Luxor Sightseeing Tours"
      },
      {
        "title": "Day 2",
        "description": "Luxor Sightseeing Tours/ Fly Back Cairo"
      }
    ],
    "inclusions": [
      "Accommodation in Luxor at Hotel.",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 2 lunches",
      "Pick up services from your hotel & return.",
      "Domestic flights (Cairo / Luxor / Cairo).",
      "Shopping through famous Bazaars in Luxor.",
      "Felucca boat to Banana Island",
      "Service of professional English-speaking Egyptologist guide.",
      "Entrance fees to the sights mentioned in the itenerary.",
      "Bottled water during your trip.",
      "Pick up service from hotel and return.",
      "Assistance of our personnel during tours.",
      "All services charges and taxes included."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-overnight-tour-to-luxor-from-marsa-alam",
    "slug": "overnight-tour-to-luxor-from-marsa-alam",
    "title": "Overnight Tour to Luxor from Marsa Alam",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation in Luxor at a 5 star Hotel with breakfast",
      "All transfers by air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Tour to Hatshepsut Temple and Valley of the Kings",
      "Tour to Karnak and Luxor Temples",
      "Shopping through famous Bazaars",
      "Service of professional English-speaking Tour Guide",
      "Entrance fees to the sights in Luxor",
      "Lunch at a quality restaurants in Luxor",
      "Bottled water and soft drink on-board vehicle",
      "Pick up and return service from Hotel in Marsa Alam",
      "Assistance of our personnel during tours in Luxor",
      "All services charges and taxes included in the price"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Marsa Alam / Luxor Sightseeing"
      },
      {
        "title": "Day 02",
        "description": "Luxor Sightseeing / Marsa Alam"
      }
    ],
    "inclusions": [
      "Accommodation in Luxor at a 5 star Hotel with breakfast",
      "All transfers by air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Tour to Hatshepsut Temple and Valley of the Kings",
      "Tour to Karnak and Luxor Temples",
      "Shopping through famous Bazaars",
      "Service of professional English-speaking Tour Guide",
      "Entrance fees to the sights in Luxor",
      "Lunch at a quality restaurants in Luxor",
      "Bottled water and soft drink on-board vehicle",
      "Pick up and return service from Hotel in Marsa Alam",
      "Assistance of our personnel during tours in Luxor",
      "All services charges and taxes included in the price"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-overnight-trip-to-cairo-and-alexandria-from-luxor-by-flight",
    "slug": "overnight-trip-to-cairo-and-alexandria-from-luxor-by-flight",
    "title": "Overnight Trip to Cairo and Alexandria from Luxor by Flight",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation for 1 night at a hotel in Cairo.",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 2 lunches",
      "Return flight ticket from Luxor",
      "Pick up services from your hotel and return",
      "All transfers by private A-C modern vehicle Cairo / Alexandria / Cairo",
      "Egyptologist English-speaking tour guide",
      "Entrance fees to the sights in Cairo and Alexandria",
      "lunch meals in Cairo and Alexandria at quality restaurants",
      "Shopping tours in Cairo through grand bazaars",
      "Portage when needed",
      "Bottled water and 1 soft drink during tours",
      "Service charges and taxes included in your package price",
      "Free loan of mobile phone with local number to keep you connected with your family"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Luxor / Cairo Sightseeing"
      },
      {
        "title": "Day 02",
        "description": "Alexandria Sightseeing - Cairo Return Luxor"
      }
    ],
    "inclusions": [
      "Accommodation for 1 night at a hotel in Cairo.",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 2 lunches",
      "Return flight ticket from Luxor",
      "Pick up services from your hotel and return",
      "All transfers by private A-C modern vehicle Cairo / Alexandria / Cairo",
      "Egyptologist English-speaking tour guide",
      "Entrance fees to the sights in Cairo and Alexandria",
      "lunch meals in Cairo and Alexandria at quality restaurants",
      "Shopping tours in Cairo through grand bazaars",
      "Portage when needed",
      "Bottled water and 1 soft drink during tours",
      "Service charges and taxes included in your package price",
      "Free loan of mobile phone with local number to keep you connected with your family"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
    "images": [
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-2-day-cairo-and-luxor-from-marsa-alam-by-flight",
    "slug": "2-day-cairo-and-luxor-from-marsa-alam-by-flight",
    "title": "2 Day Cairo and Luxor from Marsa Alam by Flight",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation in Luxor at Hotel, Sonesta St George Hotel with breakfast",
      "All transfers by private air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Internal flight ticket (Marsa Alam/ Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Marsa Alam and return",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Marsa Alam by private vehicle",
      "Lunch at local restaurant during tour in Cairo & Luxor",
      "Bottled water on board the vehicle",
      "All service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Marsa Alam/ Cairo Tours/ Fly to Luxor"
      },
      {
        "title": "Day 02",
        "description": "Luxor Tours/ Back to Marsa Alam"
      }
    ],
    "inclusions": [
      "Accommodation in Luxor at Hotel, Sonesta St George Hotel with breakfast",
      "All transfers by private air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Internal flight ticket (Marsa Alam/ Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Marsa Alam and return",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Marsa Alam by private vehicle",
      "Lunch at local restaurant during tour in Cairo & Luxor",
      "Bottled water on board the vehicle",
      "All service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
    "images": [
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-3-day-best-ancient-monuments-of-luxor-dendera-and-abydos",
    "slug": "3-day-best-ancient-monuments-of-luxor-dendera-and-abydos",
    "title": "3 Day Best Ancient Monuments of Luxor, Dendera and Abydos",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Luxor for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 3 lunches",
      "2 Nights accommodation in Luxor at Hotel on bed and breakfast basis.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Lunch meal (s) at local restaurants during the tours.",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Experience the tombs and temples of Luxor"
      },
      {
        "title": "Day 2",
        "description": "Touring the City of Luxor"
      },
      {
        "title": "Day 3",
        "description": "Dendera and Abydos"
      }
    ],
    "inclusions": [
      "Hotel in Luxor for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 3 lunches",
      "2 Nights accommodation in Luxor at Hotel on bed and breakfast basis.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Lunch meal (s) at local restaurants during the tours.",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-overnight-tour-to-abu-simbel-from-aswan",
    "slug": "overnight-tour-to-abu-simbel-from-aswan",
    "title": "Overnight Tour to Abu Simbel from Aswan",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Overnight accommodation in Abu Simbel on Half Board Basis",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 1 lunch, 1 dinner",
      "Pickup and return transfers by air conditioned vehicles in Aswan",
      "Meet and return transfer services with a Luxor and Aswan Travel Representative",
      "Meals as included in the itinerary",
      "Bottled water during the tour",
      "Sound and Light Show at Abu Simbel",
      "Tour of Abu Simbel Temples",
      "An expert English speaking Tour Guide",
      "Entrance fees to the sights",
      "Service charges and taxes included"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Aswan - Abu Simbel - Sound & Light Show"
      },
      {
        "title": "Day 02",
        "description": "Abu Simbel Temple Tour - Back to Aswan"
      }
    ],
    "inclusions": [
      "Overnight accommodation in Abu Simbel on Half Board Basis",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 1 lunch, 1 dinner",
      "Pickup and return transfers by air conditioned vehicles in Aswan",
      "Meet and return transfer services with a Luxor and Aswan Travel Representative",
      "Meals as included in the itinerary",
      "Bottled water during the tour",
      "Sound and Light Show at Abu Simbel",
      "Tour of Abu Simbel Temples",
      "An expert English speaking Tour Guide",
      "Entrance fees to the sights",
      "Service charges and taxes included"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-1-2.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1-2.webp",
      "/images/tours/ABU-SIMBEL-1-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-2-day-cairo-and-alexandria-tour-package",
    "slug": "2-day-cairo-and-alexandria-tour-package",
    "title": "2 Day Cairo and Alexandria Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation at Hotel in Cairo for 1 night (including breakfast)",
      "All transfers are done using a modern air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Meet and greet service by our representatives at airports",
      "Assistance from our customer service department throughout your stay",
      "Complimentary dinner at your hotel on day of arrival",
      "All sightseeing tours (all tours are private)",
      "Person English speaking guide (other languages available on request)",
      "Entrance fees to all sites",
      "All meals as mentioned in the itinerary",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrival & Cairo Tour to Grand Egyptian Museum & Giza Pyramids"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Alexandria from Cairo"
      }
    ],
    "inclusions": [
      "Accommodation at Hotel in Cairo for 1 night (including breakfast)",
      "All transfers are done using a modern air-conditioned vehicle",
      "1 breakfast, 2 lunches",
      "Meet and greet service by our representatives at airports",
      "Assistance from our customer service department throughout your stay",
      "Complimentary dinner at your hotel on day of arrival",
      "All sightseeing tours (all tours are private)",
      "Person English speaking guide (other languages available on request)",
      "Entrance fees to all sites",
      "All meals as mentioned in the itinerary",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
    "images": [
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-2-day-cairo-and-luxor-by-flight-round-trip",
    "slug": "2-day-cairo-and-luxor-by-flight-round-trip",
    "title": "2 Day Cairo and Luxor by flight Round trip",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Accommodation in Cairo at Hotel for 1 night.",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 2 lunches",
      "Meet and greet service by our representatives upon your airport arrival.",
      "Assistance with guest relations during your stay.",
      "Domestic flights (Cairo / Luxor / Cairo).",
      "All sightseeing tours as mentioned in the itinerary (private tours).",
      "English speaking tour guide.",
      "Entrance fees to all sites mentioned on the itinerary.",
      "Bottled water during the trip.",
      "Portage as needed.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Pyramids and Cairo Sightseeing"
      },
      {
        "title": "Day 2",
        "description": "Fly from Cairo to Luxor - Luxor Sightseeing and Flight back to Cairo"
      }
    ],
    "inclusions": [
      "Accommodation in Cairo at Hotel for 1 night.",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "1 breakfast, 2 lunches",
      "Meet and greet service by our representatives upon your airport arrival.",
      "Assistance with guest relations during your stay.",
      "Domestic flights (Cairo / Luxor / Cairo).",
      "All sightseeing tours as mentioned in the itinerary (private tours).",
      "English speaking tour guide.",
      "Entrance fees to all sites mentioned on the itinerary.",
      "Bottled water during the trip.",
      "Portage as needed.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
    "images": [
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-overnight-tours-to-aswan-and-abu-simbel-temple-from-luxor",
    "slug": "overnight-tours-to-aswan-and-abu-simbel-temple-from-luxor",
    "title": "Overnight Tours to Aswan and Abu Simbel temple from Luxor",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "1 Night Accommodation at a hotel with Breakfast.",
      "All the transfers by a private air-conditioned Vehicle.",
      "1 breakfast, 2 lunches",
      "First class Train Tickets (Seated Train)",
      "All the sightseeing tours (private tours).",
      "All the sightseeing tours as in the itinerary.",
      "English speaking Egyptologist guide during your excursions.",
      "Entrance fees (Tickets) to all the sites as indicated in the itinerary",
      "Bottled water during the tour",
      "Felucca ride in Aswan for 1 hour",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Train from Luxor to Aswan sightseeing tour"
      },
      {
        "title": "Day 02",
        "description": "Abu Simbel trip from Aswan - Train back to Luxor"
      }
    ],
    "inclusions": [
      "1 Night Accommodation at a hotel with Breakfast.",
      "All the transfers by a private air-conditioned Vehicle.",
      "1 breakfast, 2 lunches",
      "First class Train Tickets (Seated Train)",
      "All the sightseeing tours (private tours).",
      "All the sightseeing tours as in the itinerary.",
      "English speaking Egyptologist guide during your excursions.",
      "Entrance fees (Tickets) to all the sites as indicated in the itinerary",
      "Bottled water during the tour",
      "Felucca ride in Aswan for 1 hour",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-11.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-6-day-cairo-and-luxor-tour-with-sound-and-light-show-and-balloon",
    "slug": "6-day-cairo-and-luxor-tour-with-sound-and-light-show-and-balloon",
    "title": "6 Day Cairo and Luxor Tour with Sound and Light Show and Balloon",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 4 nights",
      "Hotel in Luxor for 1 night",
      "Plane, Private air-conditioned vehicle",
      "5 breakfasts, 4 lunches",
      "Domestic Flight (Cairo / Luxor / Cairo)",
      "All transfers by an air-conditioned vehicle",
      "English speaking Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Hot Air Balloon Flight",
      "Sound & Light Show at Karnak temples",
      "All Service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Full Day Pyramids - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili - Cairo ON"
      },
      {
        "title": "Day 04",
        "description": "Flight to Luxor - Karnak and Luxor temples - Sound and Light Show at Karnak"
      },
      {
        "title": "Day 05",
        "description": "Hot Air Balloon over Luxor - Visit West Bank - Flight to Cairo"
      },
      {
        "title": "Day 06",
        "description": "Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "Hotel in Luxor for 1 night",
      "Plane, Private air-conditioned vehicle",
      "5 breakfasts, 4 lunches",
      "Domestic Flight (Cairo / Luxor / Cairo)",
      "All transfers by an air-conditioned vehicle",
      "English speaking Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Hot Air Balloon Flight",
      "Sound & Light Show at Karnak temples",
      "All Service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
    "images": [
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-3-day-luxor-tour-package",
    "slug": "3-day-luxor-tour-package",
    "title": "3 Day Luxor Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Luxor for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 2 lunches, 1 dinner",
      "Meet and greet service by our representatives at airports",
      "Assistance from our customer service department throughout your stay",
      "All transfers are done using a modern air-conditioned vehicle",
      "Complimentary dinner at your hotel on day of arrival",
      "All sightseeing tours (all tours are private)",
      "Person English speaking guide (other languages available on request)",
      "Entrance fees to all sites",
      "All meals as mentioned in Luxor tour package itinerary",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Luxor"
      },
      {
        "title": "Day 02",
        "description": "Experience the tombs and temples of Luxor"
      },
      {
        "title": "Day 03",
        "description": "Touring the City of Luxor"
      }
    ],
    "inclusions": [
      "Hotel in Luxor for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 2 lunches, 1 dinner",
      "Meet and greet service by our representatives at airports",
      "Assistance from our customer service department throughout your stay",
      "All transfers are done using a modern air-conditioned vehicle",
      "Complimentary dinner at your hotel on day of arrival",
      "All sightseeing tours (all tours are private)",
      "Person English speaking guide (other languages available on request)",
      "Entrance fees to all sites",
      "All meals as mentioned in Luxor tour package itinerary",
      "Free bottled water during tours",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-3-day-cairo-and-luxor-by-round-trip-flight",
    "slug": "3-day-cairo-and-luxor-by-round-trip-flight",
    "title": "3 Day Cairo and Luxor by round trip flight",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "2 breakfasts, 2 lunches",
      "Meet and greet service by our representatives upon your airport arrival.",
      "Assistance with guest relations during your stay.",
      "All transfers in a private air-conditioned vehicle.",
      "Domestic flights (Cairo / Luxor / Cairo).",
      "All sightseeing tours as mentioned in the itinerary (private tours).",
      "English speaking tour guide.",
      "Entrance fees to all sites mentioned on the itinerary.",
      "All meals mentioned on the itinerary.",
      "Bottled water during the trip.",
      "Portage as needed.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival Cairo - Giza Pyramids and Grand Egyptian Museum"
      },
      {
        "title": "Day 2",
        "description": "Luxor - The World Largest Open Air Museum"
      },
      {
        "title": "Day 3",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "2 breakfasts, 2 lunches",
      "Meet and greet service by our representatives upon your airport arrival.",
      "Assistance with guest relations during your stay.",
      "All transfers in a private air-conditioned vehicle.",
      "Domestic flights (Cairo / Luxor / Cairo).",
      "All sightseeing tours as mentioned in the itinerary (private tours).",
      "English speaking tour guide.",
      "Entrance fees to all sites mentioned on the itinerary.",
      "All meals mentioned on the itinerary.",
      "Bottled water during the trip.",
      "Portage as needed.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
    "images": [
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-3-day-cairo-and-alexandria-tour-package",
    "slug": "3-day-cairo-and-alexandria-tour-package",
    "title": "3 Day Cairo and Alexandria Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 2 lunches",
      "Meet and greet service by our representatives at airports",
      "Assistance of our guest relations during your stay",
      "All sightseeing tours are strictly private tours",
      "Private English speaking guide",
      "Entrance fees to all sites as indicated on the itinerary",
      "Meals as indicated in the above itinerary",
      "Bottled water during the trips",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival & Cairo Tour to Grand Egyptian Museum & Giza Pyramids"
      },
      {
        "title": "Day 2",
        "description": "Day Tour to Alexandria from Cairo"
      },
      {
        "title": "Day 3",
        "description": "Transfer to Cairo airport for Final departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 2 lunches",
      "Meet and greet service by our representatives at airports",
      "Assistance of our guest relations during your stay",
      "All sightseeing tours are strictly private tours",
      "Private English speaking guide",
      "Entrance fees to all sites as indicated on the itinerary",
      "Meals as indicated in the above itinerary",
      "Bottled water during the trips",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-3-day-cairo-tour",
    "slug": "3-day-cairo-tour",
    "title": "3 Day Cairo Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 1 lunche",
      "Meet and greet service at the airport",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours (private)",
      "Personal English speaking guide",
      "Entrance fees to all listed sites",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive in Cairo"
      },
      {
        "title": "Day 2",
        "description": "Tour Cairo and Giza"
      },
      {
        "title": "Day 3",
        "description": "Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "Private air-conditioned vehicle",
      "2 breakfasts, 1 lunche",
      "Meet and greet service at the airport",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours (private)",
      "Personal English speaking guide",
      "Entrance fees to all listed sites",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
    "images": [
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-3-day-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "slug": "3-day-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "title": "3 Day Luxor, Edfu, Kom Ombo, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "1 night in Luxor at Hotel",
      "1 night in Aswan at Hotel",
      "Private air-conditioned vehicle",
      "2 breakfasts, 3 lunches",
      "Meet and greet service by our representatives at airports",
      "All transfers by a private air-conditioned vehicle",
      "All sightseeing tours in Luxor and Aswan are private tours",
      "English speaking tour guide.",
      "Entrance fees to all sites as indicated on the itinerary.",
      "Sightseeing tour to Abu Simbel by a private air-conditioned vehicle.",
      "Meals as mention in the above itinerary.",
      "Portage when needed.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive Luxor - Luxor West & East Bank"
      },
      {
        "title": "Day 02",
        "description": "Day Trip to Edfu & Kom Ombo then drive to Aswan"
      },
      {
        "title": "Day 03",
        "description": "Day Tour to Abu Simbel Temple"
      }
    ],
    "inclusions": [
      "1 night in Luxor at Hotel",
      "1 night in Aswan at Hotel",
      "Private air-conditioned vehicle",
      "2 breakfasts, 3 lunches",
      "Meet and greet service by our representatives at airports",
      "All transfers by a private air-conditioned vehicle",
      "All sightseeing tours in Luxor and Aswan are private tours",
      "English speaking tour guide.",
      "Entrance fees to all sites as indicated on the itinerary.",
      "Sightseeing tour to Abu Simbel by a private air-conditioned vehicle.",
      "Meals as mention in the above itinerary.",
      "Portage when needed.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-6-day-cairo-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "slug": "6-day-cairo-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "title": "6 Day Cairo, Luxor, Edfu, Kom Ombo, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "Hotel in Luxor for 2 nights",
      "Hotel in Aswan for 1 night",
      "5 breakfasts, 5 lunches",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles.",
      "Private English-speaking guides",
      "All sightseeing tours on the itinerary.",
      "Entrance fees to all sites as per the stay itinerary.",
      "Domestic flights (Cairo / Luxor ) and ( Aswan / Cairo ).",
      "Free bottled during tours.",
      "Portage when needed.",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Egypt"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Flight to Luxor"
      },
      {
        "title": "Day 04",
        "description": "Visit West & East Bank of Luxor - Overnight Luxor"
      },
      {
        "title": "Day 05",
        "description": "Edfu - Kom Oumbo - High Dam & Philae temple"
      },
      {
        "title": "Day 06",
        "description": "Abu Simbel - Fly back to Cairo"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "Hotel in Luxor for 2 nights",
      "Hotel in Aswan for 1 night",
      "5 breakfasts, 5 lunches",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your stay.",
      "All transfers in private air conditioned vehicles.",
      "Private English-speaking guides",
      "All sightseeing tours on the itinerary.",
      "Entrance fees to all sites as per the stay itinerary.",
      "Domestic flights (Cairo / Luxor ) and ( Aswan / Cairo ).",
      "Free bottled during tours.",
      "Portage when needed.",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-5.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-1-2.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-6-day-cairo-luxor-and-hurghada-tour",
    "slug": "6-day-cairo-luxor-and-hurghada-tour",
    "title": "6 Day Cairo, Luxor and Hurghada Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive and Relax in Cairo"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Sakkara - Grand Egyptian Museum"
      },
      {
        "title": "Day 03",
        "description": "Fly to Luxor / Luxor Sightseeing"
      },
      {
        "title": "Day 04",
        "description": "Transfer to Hurghada"
      },
      {
        "title": "Day 05",
        "description": "Hurghada"
      },
      {
        "title": "Day 06",
        "description": "Back to Cairo - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "Hotel in Luxor for 1 nights",
      "Hotel in Hurghada for 2 nights",
      "5 breakfasts, 4 lunches, 2 dinners",
      "Meet, greet and assist upon arrivals and departures",
      "All transfers in private air-conditioned vehicles",
      "Domestic Flight Tickets (Cairo / Luxor & Hurghada –Cairo)",
      "sightseeing tours mentioned in the Cairo, Luxor & Hurghada Tour itinerary",
      "Private English speaking Egyptologist guide",
      "Entrance fees to the mentioned historical places",
      "All taxes and service charges",
      "Portage when needed"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
    "images": [
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-8-day-cairo-alexandria-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "slug": "8-day-cairo-alexandria-luxor-edfu-kom-ombo-aswan-and-abu-simbel",
    "title": "8 Day Cairo, Alexandria, Luxor , Edfu, Kom Ombo, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 5 nights",
      "Hotel in Luxor for 1 night",
      "Hotel in Aswan for 1 night",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "7 breakfasts, 6 lunches",
      "Domestic Flight Tickets (Cairo-Luxor & Aswan-Cairo)",
      "All sightseeing tours in Cairo, Luxor, Edfu, Kom Ombo, Aswan, Abu Simbel & Alexandria",
      "English Egyptologist guide",
      "Entrance fees to all sites as stated on the itinerary",
      "All transfers by a modern air-conditioned vehicle",
      "Sightseeing tour to Abu Simbel by a modern air-conditioned bus",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Flight to Luxor - Full Day West & East Bank of Luxor"
      },
      {
        "title": "Day 05",
        "description": "Day Trip to Edfu, Kom Ombo and Aswan"
      },
      {
        "title": "Day 06",
        "description": "Day Tour to Abu Simbel / Fly back to Cairo"
      },
      {
        "title": "Day 07",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 08",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 5 nights",
      "Hotel in Luxor for 1 night",
      "Hotel in Aswan for 1 night",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "7 breakfasts, 6 lunches",
      "Domestic Flight Tickets (Cairo-Luxor & Aswan-Cairo)",
      "All sightseeing tours in Cairo, Luxor, Edfu, Kom Ombo, Aswan, Abu Simbel & Alexandria",
      "English Egyptologist guide",
      "Entrance fees to all sites as stated on the itinerary",
      "All transfers by a modern air-conditioned vehicle",
      "Sightseeing tour to Abu Simbel by a modern air-conditioned bus",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-1-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-1-2.webp",
      "/images/tours/ABU-SIMBEL-1-4.webp",
      "/images/tours/ABU-SIMBEL-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-6-days-cairo-and-nile-cruise-tour-package",
    "slug": "6-days-cairo-and-nile-cruise-tour-package",
    "title": "6 Days Cairo and Nile Cruise Tour Package",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 2 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "5 breakfasts, 4 lunches, 3 dinner",
      "All transfers in Cairo, Luxor, and Aswan",
      "All your tours and excursions are with A/C vehicle",
      "English speaing expert guide",
      "All your visits include entrance fees",
      "Our prices include all taxes and services",
      "Domestic airfare: (Cairo / Aswan ) & ( Luxor / Cairo )"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Koum Oumbo & Edfu - ON"
      },
      {
        "title": "Day 05",
        "description": "Luxor West & East Banks - Luxor ON"
      },
      {
        "title": "Day 06",
        "description": "Departure Flight"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 2 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "5 breakfasts, 4 lunches, 3 dinner",
      "All transfers in Cairo, Luxor, and Aswan",
      "All your tours and excursions are with A/C vehicle",
      "English speaing expert guide",
      "All your visits include entrance fees",
      "Our prices include all taxes and services",
      "Domestic airfare: (Cairo / Aswan ) & ( Luxor / Cairo )"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-6-day-cairo-and-alexandria-tour-package",
    "slug": "6-day-cairo-and-alexandria-tour-package",
    "title": "6 Day Cairo and Alexandria Tour Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 5 nights",
      "5 breakfasts, 4 lunches",
      "Meet and greet service at airports; port and stations",
      "Custom service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours on the itinerary (Private Guided Tours)",
      "Entrance fees to all sites as indicated on the itinerary",
      "Bottled water during your tour",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Full Day Pyramids - (Pyramids - Memphis & Sakkara)"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 05",
        "description": "Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 06",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 5 nights",
      "5 breakfasts, 4 lunches",
      "Meet and greet service at airports; port and stations",
      "Custom service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours on the itinerary (Private Guided Tours)",
      "Entrance fees to all sites as indicated on the itinerary",
      "Bottled water during your tour",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
    "images": [
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-6-day-cairo-alexandria-and-luxor-tour",
    "slug": "6-day-cairo-alexandria-and-luxor-tour",
    "title": "6 Day Cairo, Alexandria and Luxor Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 5 nights",
      "5 breakfasts, 4 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights from Cairo to Luxor and from Luxor to Cairo",
      "All sightseeing tours (private and guided)",
      "English speaking tour guide",
      "Entrance fees to all sites listed in the Cairo Luxor Tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Egypt"
      },
      {
        "title": "Day 02",
        "description": "Pyramids, Memphis and Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Day Trip to Luxor from Cairo by Air"
      },
      {
        "title": "Day 04",
        "description": "Alexandria Sightseeing"
      },
      {
        "title": "Day 05",
        "description": "Grand Egyptian Museum, Citadel and Khan El Khalili"
      },
      {
        "title": "Day 06",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 5 nights",
      "5 breakfasts, 4 lunches",
      "Meet and greet service at airports",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Domestic flights from Cairo to Luxor and from Luxor to Cairo",
      "All sightseeing tours (private and guided)",
      "English speaking tour guide",
      "Entrance fees to all sites listed in the Cairo Luxor Tour itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
    "images": [
      "/images/tours/160539070217Nile-Premium-Nile-cruise23-600x540.jpg",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-8-day-cairo-nile-cruise-and-hurghada",
    "slug": "8-day-cairo-nile-cruise-and-hurghada",
    "title": "8 Day Cairo, Nile Cruise and Hurghada",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Board on Nile Cruise - Sail to Kom Ombo"
      },
      {
        "title": "Day 04",
        "description": "Edfu Temple - Sail to Luxor - Karnak and Luxor Temples"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Transfer to Hurghada"
      },
      {
        "title": "Day 06",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 07",
        "description": "Return to Cairo"
      },
      {
        "title": "Day 08",
        "description": "Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Hotel in Hurghada for 2 nights",
      "5* Nile Cruise for 2 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "7 breakfasts, 5 lunches, 4 dinners",
      "Meet and greet service at airports and train stations",
      "Customer service assistance available throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets (Cairo-Aswan & Hurghada-Cairo)",
      "Transfer by A/C Vehicle: Luxor / Hurghada",
      "English speaking tour guide through-out all tours",
      "Entrance fees to all sites listed in the itinerary",
      "Bottled water during tours and transfers",
      "Portage when needed"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-7.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-7.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-8-day-cairo-aswan-abu-simbel-luxor-and-hurghada",
    "slug": "8-day-cairo-aswan-abu-simbel-luxor-and-hurghada",
    "title": "8 Day Cairo, Aswan, Abu Simbel, Luxor and Hurghada",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive and Relax in Cairo"
      },
      {
        "title": "Day 02",
        "description": "Pyramids, Sakkara and The Grand Egyptian Museum"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Sightseeing"
      },
      {
        "title": "Day 04",
        "description": "Abu Simbel - Train to Luxor"
      },
      {
        "title": "Day 05",
        "description": "Luxor Sightseeing"
      },
      {
        "title": "Day 06",
        "description": "Transfer to Hurghada"
      },
      {
        "title": "Day 07",
        "description": "Fly back to Cairo"
      },
      {
        "title": "Day 08",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Hotel in Luxor for 2 night",
      "Hotel in Aswan for 1 night",
      "Hotel in Hurghada for 1 night",
      "Train",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "7 breakfasts, 5 lunches, 1 dinner",
      "Meet, greet and assist upon arrivals and departures",
      "Domestic Flight Tickets (Cairo-Aswan ) & ( Hurghada – Cairo )",
      "All transfers in private air-conditioned vehicles",
      "Sightseeing tours mentioned in the itinerary",
      "Private English speaking Egyptologist guide",
      "Entrance fees to the mentioned historical places",
      "All taxes and service charges",
      "Portage when needed"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-11.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-11.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/ABU-SIMBEL-2-2.webp",
      "/images/tours/ABU-SIMBEL-2-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-8-day-cairo-alexandria-and-nile-cruise-tour-package-by-flight",
    "slug": "8-day-cairo-alexandria-and-nile-cruise-tour-package-by-flight",
    "title": "8 Day Cairo, Alexandria and Nile Cruise Tour Package by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfas"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Koum Oumbo & Edfu - Nile Cruise ON"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Nile Cruise ON"
      },
      {
        "title": "Day 06",
        "description": "Disembarkation from Nile Cruise - Luxor East Bank - Fly back to Cairo"
      },
      {
        "title": "Day 07",
        "description": "Alexandria City Tour - Cairo ON"
      },
      {
        "title": "Day 08",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "7 breakfasts, 6 lunches, 3 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets (Cairo-Aswan & Luxor-Cairo)",
      "Lunch meal (s) at local restaurants during the tours in Cairo.",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-10-day-cairo-nile-cruise-and-hurghada",
    "slug": "10-day-cairo-nile-cruise-and-hurghada",
    "title": "10 Day Cairo, Nile Cruise and Hurghada",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Fly to Aswan - Aswan Tours - Aswan ON"
      },
      {
        "title": "Day 05",
        "description": "Koum Oumbo & Edfu"
      },
      {
        "title": "Day 06",
        "description": "Luxor West & East Banks - Luxor ON"
      },
      {
        "title": "Day 07",
        "description": "Transfer to Hurghada"
      },
      {
        "title": "Day 08",
        "description": "Free Day in Hurghada"
      },
      {
        "title": "Day 09",
        "description": "Flight back to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "Hotel in Hurghada for 2 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 7 lunches, 5 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-10-days-of-nile-and-lake-nasser-cruises",
    "slug": "10-days-of-nile-and-lake-nasser-cruises",
    "title": "10 Days of Nile and Lake Nasser Cruises",
    "category": "Lake Nasser Cruises",
    "destination": "Aswan & Abu Simbel",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "5-Star Deluxe Nile river cruiser for 4 nights",
      "5-Star Deluxe Lake Naseer Cruise 3 nights",
      "Hotel in Luxor for 2 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 8 lunches, 7 dinners",
      "Meet and greet service at airports and coach stations",
      "All transfers in deluxe air-conditioned vehicles through-out the trip",
      "Flight from Aswan to Abu Simbel",
      "All sightseeing tours and shore excursions mentioned stated in the Nile and Lake Nasser Cruises itinerary",
      "English-speaking Egyptologist guide on all tours",
      "Entrance fees to all sights listed in the Nile and Lake Nasser Cruises itinerary",
      "All service charges and taxes are included",
      "Bottled water during tours"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Luxor"
      },
      {
        "title": "Day 02",
        "description": "Sightseeing in Luxor & Edfu"
      },
      {
        "title": "Day 03",
        "description": "Sightseeing in Edfu then Cruise to Kom Ombo and Aswan"
      },
      {
        "title": "Day 04",
        "description": "Aswan Sightseeing"
      },
      {
        "title": "Day 05",
        "description": "Transfer to Abu Simbel"
      },
      {
        "title": "Day 06",
        "description": "Kasr Ibrim"
      },
      {
        "title": "Day 07",
        "description": "Wadi El Saboua"
      },
      {
        "title": "Day 08",
        "description": "Kalabsha and Beit El Wali - Transfer to Luxor"
      },
      {
        "title": "Day 09",
        "description": "Sightseeing in Luxor"
      },
      {
        "title": "Day 10",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "5-Star Deluxe Nile river cruiser for 4 nights",
      "5-Star Deluxe Lake Naseer Cruise 3 nights",
      "Hotel in Luxor for 2 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 8 lunches, 7 dinners",
      "Meet and greet service at airports and coach stations",
      "All transfers in deluxe air-conditioned vehicles through-out the trip",
      "Flight from Aswan to Abu Simbel",
      "All sightseeing tours and shore excursions mentioned stated in the Nile and Lake Nasser Cruises itinerary",
      "English-speaking Egyptologist guide on all tours",
      "Entrance fees to all sights listed in the Nile and Lake Nasser Cruises itinerary",
      "All service charges and taxes are included",
      "Bottled water during tours"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp"
    ],
    "relatedSlugs": [
      "steigenberger-omar-el-khayam-lake-cruise",
      "ms-nubian-sea-lake-nasser-cruise",
      "movenpick-prince-abbas-lake-cruise"
    ]
  },
  {
    "id": "la-10-day-cairo-nile-cruise-and-alexandria-by-flight",
    "slug": "10-day-cairo-nile-cruise-and-alexandria-by-flight",
    "title": "10 Day Cairo, Nile Cruise and Alexandria by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 6 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 7 lunches, 3 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive in Egypt"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 05",
        "description": "Koum Ombo & Edfu Temples"
      },
      {
        "title": "Day 06",
        "description": "Luxor West Bank - Luxor ON"
      },
      {
        "title": "Day 07",
        "description": "Luxor East Bank - Flight back to Cairo"
      },
      {
        "title": "Day 08",
        "description": "Alexandria City Tour - Cairo ON"
      },
      {
        "title": "Day 09",
        "description": "Islamic & Coptic Cairo Tour - Cairo ON"
      },
      {
        "title": "Day 10",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 6 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 7 lunches, 3 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-10-day-round-trip-nile-cruise-and-cairo-tours",
    "slug": "10-day-round-trip-nile-cruise-and-cairo-tours",
    "title": "10 Day Round Trip Nile Cruise and Cairo Tours",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "5* Nile Cruise for 6 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 8 lunches, 6 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your Nile Cruise and Cairo Tour",
      "All transfers and tours in clean and modern air-conditioned vehicles",
      "Domestic Flights",
      "Any other meals as specified in the itinerary",
      "Free bottled water during tours and transfers",
      "Admission tickets for all attractions mentioned in the itinerary",
      "English speaking driver/guides for all tours",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive Cairo for the Cruise and Cairo Monuments Tour"
      },
      {
        "title": "Day 02",
        "description": "Cairo Monuments Tour and Khan el Khalili Experience"
      },
      {
        "title": "Day 03",
        "description": "Flight to Luxor and Nile Cruise Embarkation"
      },
      {
        "title": "Day 04",
        "description": "Cruise to Edfu and Kom Ombo with Edfu Excursion"
      },
      {
        "title": "Day 05",
        "description": "Cruise to Aswan, Aswan Tour"
      },
      {
        "title": "Day 06",
        "description": "Abu Simbel Tour and Free Afternoon in Aswan"
      },
      {
        "title": "Day 07",
        "description": "Cruise to Esna via Kom Ombo with Kom Ombo Excursion"
      },
      {
        "title": "Day 08",
        "description": "Cruise to Luxor with West Bank Monuments Tour"
      },
      {
        "title": "Day 09",
        "description": "Luxor East Bank Tour, Cruise Disembarkation, and Flight to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Nile Cruise and Cairo Tour Package Ends and Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "5* Nile Cruise for 6 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 8 lunches, 6 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your Nile Cruise and Cairo Tour",
      "All transfers and tours in clean and modern air-conditioned vehicles",
      "Domestic Flights",
      "Any other meals as specified in the itinerary",
      "Free bottled water during tours and transfers",
      "Admission tickets for all attractions mentioned in the itinerary",
      "English speaking driver/guides for all tours",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-4.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-4.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-10-day-cairo-nile-cruise-and-sharm-el-sheikh",
    "slug": "10-day-cairo-nile-cruise-and-sharm-el-sheikh",
    "title": "10 Day Cairo, Nile Cruise and Sharm El Sheikh",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfas"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Day Tour to Pyramids & Grand Egyptian Museum - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Kom Ombo and Edfu Temples"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Luxor ON"
      },
      {
        "title": "Day 06",
        "description": "Luxor East Bank - Fly to Sharm"
      },
      {
        "title": "Day 07",
        "description": "Sharm Free day"
      },
      {
        "title": "Day 8",
        "description": "Sharm El Sheikh"
      },
      {
        "title": "Day 9",
        "description": "Flight back to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "Hotel in Sharm El Sheikh for 3 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 4 lunches, 3 dinners",
      "Domestic flights: Cairo / Aswan & Luxor / Sharm & Sharm / Cairo",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed.",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-10-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "slug": "10-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "title": "10 Day Cairo, Alexandria, Luxor, Abydos, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 5 nights",
      "Hotel in Luxor for 2 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 8 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Flight to Luxor - Full Day West & East Bank of Luxor"
      },
      {
        "title": "Day 05",
        "description": "Day Tour to Dendera and Abydos Temples"
      },
      {
        "title": "Day 06",
        "description": "Day Trip to Edfu and Kom Ombo"
      },
      {
        "title": "Day 07",
        "description": "Day Trip to Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 08",
        "description": "Day Tour to Abu Simbel / Fly back to Cairo"
      },
      {
        "title": "Day 09",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 10",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 5 nights",
      "Hotel in Luxor for 2 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "9 breakfasts, 8 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL.webp",
    "images": [
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-1-2.webp",
      "/images/tours/ABU-SIMBEL-1-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-egypt-the-heart-of-mystery",
    "slug": "egypt-the-heart-of-mystery",
    "title": "Egypt The Heart of Mystery",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Mena House Hotel with Pyramid Views in Cairo for 2 nights",
      "Al Moudira Boutique Hotel in Luxor for 4 nights",
      "Dahabiya Cruise on the Nile for 4 nights",
      "Old Cataract Hotel with Nile Views in Aswan for 1 night",
      "Dahabiya Cruise",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 10 lunches, 4 dinners",
      "Greeting and assistance at airports in all cities in Egypt",
      "Transfers to and from the hotels/airports in air-conditioned motor coach",
      "All domestic airfare within Egypt",
      "Entrance fees to all sites on the itinerary",
      "All touring and transfers in air-conditioned motor coach",
      "Licensed English-speaking guide throughout the trip",
      "All hotels taxes, service charges, and government sales tax",
      "Luggage handling at all airports",
      "Assistance through immigration and custom"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrival at Cairo International Airport"
      },
      {
        "title": "Day 02",
        "description": "Tour to Saqqara - Lunch & Grand Egyptian Museum"
      },
      {
        "title": "Day 03",
        "description": "Giza Pyramids & the Great Sphinx &Osiris Tomb & Fly to luxor - Al Moudira Boutique Hotel - Overnight Luxor"
      },
      {
        "title": "Day 04",
        "description": "Dendera / Abydos - Overnight in Al Moudira Boutique Hotel"
      },
      {
        "title": "Day 05",
        "description": "Visit the West Bank of Luxor - Lunch - Overnight in Al Moudira Boutique Hotel"
      },
      {
        "title": "Day 06",
        "description": "Excursion to the East Bank of Luxor"
      },
      {
        "title": "Day 07",
        "description": "Luxor - Esna - First Night in Nile Dahabiya"
      },
      {
        "title": "Day 08",
        "description": "Dahabiya - Edfu Temple - Second night"
      },
      {
        "title": "Day 09",
        "description": "Dahabiya - Gebel El Silsila - Island of Maniha - Overnight in Island Third night"
      },
      {
        "title": "Day 10",
        "description": "Dahabiya - Daraw Camel Market - El Koubania Nubian Village - Aswan - Fourth night"
      },
      {
        "title": "Day 11",
        "description": "Dahabiya - Old Cataract Hotel - Overnight in Aswan"
      },
      {
        "title": "Day 12",
        "description": "Aswan - Cairo - Final Departure"
      }
    ],
    "inclusions": [
      "Mena House Hotel with Pyramid Views in Cairo for 2 nights",
      "Al Moudira Boutique Hotel in Luxor for 4 nights",
      "Dahabiya Cruise on the Nile for 4 nights",
      "Old Cataract Hotel with Nile Views in Aswan for 1 night",
      "Dahabiya Cruise",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 10 lunches, 4 dinners",
      "Greeting and assistance at airports in all cities in Egypt",
      "Transfers to and from the hotels/airports in air-conditioned motor coach",
      "All domestic airfare within Egypt",
      "Entrance fees to all sites on the itinerary",
      "All touring and transfers in air-conditioned motor coach",
      "Licensed English-speaking guide throughout the trip",
      "All hotels taxes, service charges, and government sales tax",
      "Luggage handling at all airports",
      "Assistance through immigration and custom"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-11-days-cairo-alexandria-nile-cruise-and-abu-simbel",
    "slug": "11-days-cairo-alexandria-nile-cruise-and-abu-simbel",
    "title": "11 Days Cairo, Alexandria, Nile Cruise and Abu Simbel",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 6 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 9 lunches, 4 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your Holiday",
      "All transfers and tours in clean and modern air-conditioned vehicles",
      "Domestic flights. (Cairo / Luxor) and (Aswan / Cairo)",
      "Any other meals as specified in the itinerary",
      "Free bottled water during tours and transfers",
      "Admission tickets for all attractions mentioned in the itinerary",
      "Private Egyptologist English-speaking tour guide (s).",
      "Lunch meal (s) at local restaurants during the tours in Cairo & Alexandria",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Full Day Pyramids - Cairo ON"
      },
      {
        "title": "Day 03",
        "description": "Cairo City Tour - Cairo ON"
      },
      {
        "title": "Day 04",
        "description": "Luxor East Bank - Luxor ON"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Sail to Edfu & ON"
      },
      {
        "title": "Day 06",
        "description": "Edfu - Kom Ombo - Sail to Aswan & ON"
      },
      {
        "title": "Day 07",
        "description": "Aswan City Tour - Aswan ON"
      },
      {
        "title": "Day 08",
        "description": "Abu Simbel Tour - Flight to Cairo - Cairo ON"
      },
      {
        "title": "Day 09",
        "description": "Islamic & Coptic Cairo Tour - Cairo ON"
      },
      {
        "title": "Day 10",
        "description": "Alexandria City Tour - Cairo ON"
      },
      {
        "title": "Day 11",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 6 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 9 lunches, 4 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your Holiday",
      "All transfers and tours in clean and modern air-conditioned vehicles",
      "Domestic flights. (Cairo / Luxor) and (Aswan / Cairo)",
      "Any other meals as specified in the itinerary",
      "Free bottled water during tours and transfers",
      "Admission tickets for all attractions mentioned in the itinerary",
      "Private Egyptologist English-speaking tour guide (s).",
      "Lunch meal (s) at local restaurants during the tours in Cairo & Alexandria",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
    "images": [
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-11-days-cairo-nile-cruise-and-hurghada-by-flight",
    "slug": "11-days-cairo-nile-cruise-and-hurghada-by-flight",
    "title": "11 Days Cairo, Nile Cruise and Hurghada by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Koum Oumbo & Edfu"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Luxor ON"
      },
      {
        "title": "Day 06",
        "description": "Luxor East Bank - Hurghada by road"
      },
      {
        "title": "Day 07",
        "description": "Hurghada"
      },
      {
        "title": "Day 08",
        "description": "Hurghada"
      },
      {
        "title": "Day 09",
        "description": "Flight back to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 11",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "Hotel in Hurghada for 3 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 9 lunches, 3 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your Holiday",
      "All transfers and tours in clean and modern air-conditioned vehicles",
      "Domestic flights. (Cairo / Aswan) and (Hurghada / Cairo)",
      "Any other meals as specified in the itinerary",
      "Free bottled water during tours and transfers",
      "Admission tickets for all attractions mentioned in the itinerary",
      "Private Egyptologist English-speaking tour guide (s).",
      "Lunch meal (s) at local restaurants during the tours in Cairo",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-12-days-cairo-alexandria-and-nile-cruise-by-flight",
    "slug": "12-days-cairo-alexandria-and-nile-cruise-by-flight",
    "title": "12 Days Cairo, Alexandria and Nile Cruise by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 7 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 8 lunches, 4 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Complementary sim card for mobile internet with 3.5 G.B",
      "All local taxes and services."
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive Cairo"
      },
      {
        "title": "Day 2",
        "description": "Cairo City Tour (The Grand Egyptian Museum, Citadel of Salah El - Din & Khan El Khalili Bazaar)"
      },
      {
        "title": "Day 3",
        "description": "Full Day Pyramids"
      },
      {
        "title": "Day 4",
        "description": "Flight to Luxor - Check in Nile cruise - Karnak and Luxor temples."
      },
      {
        "title": "Day 5",
        "description": "Luxor West Bank - Sail to Edfu & ON"
      },
      {
        "title": "Day 6",
        "description": "Edfu - Kom Ombo - Sail to Aswan"
      },
      {
        "title": "Day 7",
        "description": "Day Tour to Abu Simble temples"
      },
      {
        "title": "Day 8",
        "description": "Aswan Tour - Flight back to Cairo"
      },
      {
        "title": "Day 9",
        "description": "Alexandria Day Tour - Cairo ON"
      },
      {
        "title": "Day 10",
        "description": "Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 11",
        "description": "Cairo free day"
      },
      {
        "title": "Day 12",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 7 nights",
      "5* Nile Cruise for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 8 lunches, 4 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Complementary sim card for mobile internet with 3.5 G.B",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-11-days-cairo-nile-cruise-and-sharm-el-sheikh-by-flight",
    "slug": "11-days-cairo-nile-cruise-and-sharm-el-sheikh-by-flight",
    "title": "11 Days Cairo, Nile Cruise and Sharm El sheikh by Flight",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 04",
        "description": "Koum Oumbo & Edfu"
      },
      {
        "title": "Day 05",
        "description": "Luxor West Bank - Luxor ON"
      },
      {
        "title": "Day 06",
        "description": "Luxor East Bank - Flight to Sharm El Shiekh"
      },
      {
        "title": "Day 7",
        "description": "Leisure Time at Sharm with Optional Excursions"
      },
      {
        "title": "Day 8",
        "description": "Leisure Time at Sharm with Optional Excursions"
      },
      {
        "title": "Day 9",
        "description": "Flight back to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 11",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "Hotel in Sharm El Sheikh for 3 nights",
      "5* Nile Cruise for 3 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 8 lunches, 6 dinners",
      "Meet and assist service for at arrival and departure",
      "Customer Service assistance throughout your Nile Cruise Holiday",
      "All transfers and tours in clean and modern air-conditioned vehicles",
      "Domestic flights. (Cairo - Aswan) & (Luxor – Cairo - Sharm) & (Sharm – Cairo)",
      "Any other meals as specified in the itinerary",
      "Free bottled water during tours and transfers",
      "Admission tickets for all attractions mentioned in the itinerary",
      "Private Egyptologist English-speaking tour guide (s).",
      "Lunch meal (s) at local restaurants during the tours in Cairo & Alexandria",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-11-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "slug": "11-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "title": "11 Day Cairo, Alexandria, Luxor , Abydos, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 5 nights",
      "Hotel in Luxor for 3 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 9 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Flight to Luxor - Full Day West & East Bank of Luxor"
      },
      {
        "title": "Day 05",
        "description": "Day Tour to Dendera and Abydos Temples"
      },
      {
        "title": "Day 06",
        "description": "Day Tour to Luxor West Bank II (Habu Temple and the Valley of Queens and Workers)"
      },
      {
        "title": "Day 07",
        "description": "Day Trip to Edfu and Kom Ombo"
      },
      {
        "title": "Day 08",
        "description": "Day Trip to Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 09",
        "description": "Day Tour to Abu Simbel / Fly back to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 11",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 5 nights",
      "Hotel in Luxor for 3 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "10 breakfasts, 9 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-11.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-11.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/ABU-SIMBEL-2-2.webp",
      "/images/tours/ABU-SIMBEL-2-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-12-days-pyramids-nile-and-sinai",
    "slug": "12-days-pyramids-nile-and-sinai",
    "title": "12 Days Pyramids, Nile and Sinai",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Dinner"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive Cairo"
      },
      {
        "title": "Day 2",
        "description": "Full Day Pyramids - Train station"
      },
      {
        "title": "Day 3",
        "description": "Aswan Tours - Embarkation on your Nile cruise"
      },
      {
        "title": "Day 4",
        "description": "Day Tour to Abu Simble temple"
      },
      {
        "title": "Day 5",
        "description": "Edfu Temple & Sail to Luxor"
      },
      {
        "title": "Day 6",
        "description": "Luxor West Bank - Flight to Sharm El Shiekh via Cairo"
      },
      {
        "title": "Day 7",
        "description": "Sharm El Shiekh Optional Excursions"
      },
      {
        "title": "Day 8",
        "description": "Sharm El Shiekh Optional Excursions"
      },
      {
        "title": "Day 9",
        "description": "Sharm El Shiekh Optional Excursions"
      },
      {
        "title": "Day 10",
        "description": "Back to Cairo"
      },
      {
        "title": "Day 11",
        "description": "Cairo City Tour (The Grand Egyptian Museum, Citadel of Salah El - Din & Khan El Khalili Bazaar)"
      },
      {
        "title": "Day 12",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "5* Nile Cruise for 3 nights",
      "Hotel in Sharm El Shiekh for 4 nights",
      "Sleeper train for 1 night",
      "Cruise Boat",
      "Plane",
      "Sleeper Train",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 6 lunches, 7 dinners",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Complementary sim card for mobile internet with 3.5 G.B",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-13-day-cairo-nile-cruise-and-hurghada",
    "slug": "13-day-cairo-nile-cruise-and-hurghada",
    "title": "13 Day Cairo, Nile Cruise and Hurghada",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Your Vacation of a Lifetime begins"
      },
      {
        "title": "Day 2",
        "description": "Giza Pyramids - Memphis And sakkara"
      },
      {
        "title": "Day 3",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 4",
        "description": "Fly to Aswan / Sightseeing in Aswan / Board Your Nile Cruise"
      },
      {
        "title": "Day 5",
        "description": "Abu Simbel / Kom Ombo"
      },
      {
        "title": "Day 6",
        "description": "Edfu / Luxor East Bank"
      },
      {
        "title": "Day 7",
        "description": "Luxor West Bank Sightseeing / Transfer to Hurghada"
      },
      {
        "title": "Day 8",
        "description": "Leisure Time in Hurghada (Optional Tours)"
      },
      {
        "title": "Day 9",
        "description": "Leisure Time in Hurghada (Optional Tours)"
      },
      {
        "title": "Day 10",
        "description": "Leisure Time in Hurghada (Optional Tours)"
      },
      {
        "title": "Day 11",
        "description": "Fly back to Cairo / Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 12",
        "description": "Alexandria Full Day"
      },
      {
        "title": "Day 13",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 5 nights",
      "5* Nile River Cruise for 3 nights",
      "Hotel in Hurghada for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "12 breakfasts, 11 lunches, 7 dinners",
      "Meet and greet service at airports; port and stations",
      "Domestic Flight Tickets (Cairo-Aswan ) & ( Hurghada – Cairo )",
      "Custom service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "Transfer from Luxor to Hurghada in private air-conditioned vehicle",
      "All sightseeing tours in Cairo (private)",
      "English speaking Egyptologist guide during all tours",
      "Entrance fees to all sites listed in the Cairo, Nile Cruise And Red Sea Stay itinerary",
      "All meals listed in the Cairo, Nile Cruise and Red Sea Stay itinerary",
      "Bottled water during tours",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-12-days-pyramids-nile-and-hurghada",
    "slug": "12-days-pyramids-nile-and-hurghada",
    "title": "12 Days Pyramids, Nile and Hurghada",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrive Cairo"
      },
      {
        "title": "Day 2",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 3",
        "description": "Fly to Aswan - Aswan Tours - Nile Cruise ON"
      },
      {
        "title": "Day 4",
        "description": "Abu Simble and Kom Ombo"
      },
      {
        "title": "Day 5",
        "description": "Edfu & Luxor"
      },
      {
        "title": "Day 6",
        "description": "Luxor West Bank - Hurghada by road"
      },
      {
        "title": "Day 7",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 8",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 9",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 10",
        "description": "Flight back to Cairo"
      },
      {
        "title": "Day 11",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 12",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "5* Nile Cruise for 3 nights",
      "Hotel in Hurghada for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 9 lunches, 7 dinners",
      "Domestic flights. (Cairo / Aswan) and (Hurghada / Cairo)",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Complementary 01 bottle of water per day per person.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Complementary sim card for mobile internet with 3.5 G.B",
      "All local taxes and services."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-13-day-cairo-nile-cruise-and-sharm-el-sheikh",
    "slug": "13-day-cairo-nile-cruise-and-sharm-el-sheikh",
    "title": "13 Day Cairo, Nile Cruise and Sharm El Sheikh",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival at Cairo International Airport"
      },
      {
        "title": "Day 2",
        "description": "Full Day Pyramids and Sakkara - Train to Aswan"
      },
      {
        "title": "Day 3",
        "description": "Aswan Nile Cruise Tours"
      },
      {
        "title": "Day 4",
        "description": "Kom Ombo and Edfu Temples"
      },
      {
        "title": "Day 5",
        "description": "Luxor Nile Cruise Tours"
      },
      {
        "title": "Day 6",
        "description": "Fly Luxor to Sharm El Sheikh"
      },
      {
        "title": "Day 7",
        "description": "Leisure Time in Sharm El Shiekh (Optional Tours)"
      },
      {
        "title": "Day 8",
        "description": "Leisure Time in Sharm El Shiekh (Optional Tours)"
      },
      {
        "title": "Day 9",
        "description": "Leisure Time in Sharm El Shiekh (Optional Tours)"
      },
      {
        "title": "Day 10",
        "description": "Fly back to Cairo"
      },
      {
        "title": "Day 11",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 12",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 13",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 4 nights",
      "5* Nile River Cruise for 3 nights",
      "Sleeper train for 1 night",
      "Hotel in Sharm El Shiekh for 4 nights",
      "Cruise Boat",
      "Plane",
      "Sleeper train",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "12 breakfasts, 10 lunches, 8 dinners",
      "Meet and greet service at airports; port and stations",
      "Domestic Flight Tickets (Luxor – Sharm via Cairo ) & ( Sharm – Cairo )",
      "Custom service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All sightseeing tours in Cairo (Private Guided Tours)",
      "All sightseeing tours on the cruise (Private Guided Tours)",
      "Entrance fees to all sites as indicated on the itinerary",
      "Bottled water during your tour",
      "Portage when needed",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-6.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-12-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "slug": "12-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "title": "12 Day Cairo, Alexandria, Luxor, Abydos, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 6 nights",
      "Hotel in Luxor for 3 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 10 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Flight to Luxor - Full Day West & East Bank of Luxor"
      },
      {
        "title": "Day 05",
        "description": "Day Tour to Dendera and Abydos Temples"
      },
      {
        "title": "Day 06",
        "description": "Day Tour to Luxor West Bank II (Habu Temple and the Valley of Queens and Workers)"
      },
      {
        "title": "Day 07",
        "description": "Day Trip to Edfu and Kom Ombo"
      },
      {
        "title": "Day 08",
        "description": "Day Trip to Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 09",
        "description": "Day Tour to Abu Simbel / Fly back to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 11",
        "description": "Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 12",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 6 nights",
      "Hotel in Luxor for 3 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 10 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-3-2.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-3-2.webp",
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-13-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "slug": "13-day-cairo-alexandria-luxor-abydos-aswan-and-abu-simbel",
    "title": "13 Day Cairo, Alexandria, Luxor , Abydos, Aswan and Abu Simbel",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 7 nights",
      "Hotel in Luxor for 3 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "12 breakfasts, 11 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo Int. Airport - Cairo ON"
      },
      {
        "title": "Day 02",
        "description": "Pyramids - Memphis & Sakkara"
      },
      {
        "title": "Day 03",
        "description": "Grand Egyptian Museum - Citadel & Khan El Khalili"
      },
      {
        "title": "Day 04",
        "description": "Flight to Luxor - Full Day West & East Bank of Luxor"
      },
      {
        "title": "Day 05",
        "description": "Day Tour to Dendera and Abydos Temples"
      },
      {
        "title": "Day 06",
        "description": "Day Tour to Luxor West Bank II (Habu Temple and the Valley of Queens and Workers)"
      },
      {
        "title": "Day 07",
        "description": "Day Trip to Edfu and Kom Ombo"
      },
      {
        "title": "Day 08",
        "description": "Day Trip to Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 09",
        "description": "Day Tour to Abu Simbel / Fly back to Cairo"
      },
      {
        "title": "Day 10",
        "description": "Alexandria City Tour"
      },
      {
        "title": "Day 11",
        "description": "Day Tour to Dahshour and Meidum"
      },
      {
        "title": "Day 12",
        "description": "Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 13",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 7 nights",
      "Hotel in Luxor for 3 nights",
      "Hotel in Aswan for 2 nights",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "12 breakfasts, 11 lunches",
      "Meet and assist by English-speaking representatives.",
      "Entrance fees to the above mentioned archaeological sightseeing.",
      "Private Egyptologist English-speaking tour guide (s).",
      "Domestic Flight Tickets",
      "Complementary 01 bottle of water per day per person in Cairo.",
      "All transfers by A-C vehicles with qualified driver (s).",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-5.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-1-2.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-day-tour-to-pyramids-memphis-and-sakkara",
    "slug": "day-tour-to-pyramids-memphis-and-sakkara",
    "title": "Day Tour to Pyramids, Memphis and Sakkara",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "All transfers by a private air-conditioned vehicle.",
      "Pick up services from your hotel & return.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal will be served in a local restaurant.",
      "Bottled water during your trip.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "All transfers by a private air-conditioned vehicle.",
      "Pick up services from your hotel & return.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal will be served in a local restaurant.",
      "Bottled water during your trip.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car",
      "private-tour-to-pyramids-the-egyptian-museum-and-khan-khalili"
    ]
  },
  {
    "id": "la-14-day-cairo-hurghada-nile-cruise-balloon-and-abu-simbel",
    "slug": "14-day-cairo-hurghada-nile-cruise-balloon-and-abu-simbel",
    "title": "14 Day Cairo, Hurghada, Nile Cruise, Balloon and Abu Simbel",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival at Cairo International Airport"
      },
      {
        "title": "Day 2",
        "description": "Full Day Pyramids and Sakkara - Cairo ON"
      },
      {
        "title": "Day 3",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili - Cairo ON"
      },
      {
        "title": "Day 4",
        "description": "Islamic & Coptic Cairo Tour - Cairo ON"
      },
      {
        "title": "Day 5",
        "description": "Flight to Hurghada - Hurghada ON"
      },
      {
        "title": "Day 6",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 7",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 8",
        "description": "Transfer from Hurghada to Luxor - Sound & Light Show at Karnak Temple - Luxor ON"
      },
      {
        "title": "Day 9",
        "description": "Hot Air Balloon Ride Over the West Bank - Luxor West Bank - Board on Nile Cruise - Luxor ON"
      },
      {
        "title": "Day 10",
        "description": "Luxor East Bank - Sail to Edfu & ON"
      },
      {
        "title": "Day 11",
        "description": "Edfu - Kom Ombo - Sail to Aswan & ON"
      },
      {
        "title": "Day 12",
        "description": "Aswan Tours - Aswan ON"
      },
      {
        "title": "Day 13",
        "description": "Disembarkation from Cruise - Abu Simbel Temple - Fly back to Cairo - Cairo ON"
      },
      {
        "title": "Day 14",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 5 nights",
      "Hotel in Hurghada for 3 nights",
      "Hotel in Luxor for 1 night",
      "5-Star Deluxe Nile river cruiser for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "13 breakfasts, 12 lunches, 7 dinners",
      "All service charges and taxess.",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your luxury Nile cruise and stay.",
      "All transfers in private air conditioned vehicles.",
      "Private English-speaking guides",
      "All sightseeing tours on the cruise.",
      "Entrance fees to all sites as per the luxury Nile cruise and stay itinerary.",
      "Domestic flights (Cairo / Hurghada ) and ( Aswan / Cairo ).",
      "Free bottled during tours.",
      "Portage when needed."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-15-day-cairo-alexandria-hurghada-nile-cruise-and-abu-simbel",
    "slug": "15-day-cairo-alexandria-hurghada-nile-cruise-and-abu-simbel",
    "title": "15 Day Cairo, Alexandria, Hurghada, Nile Cruise and Abu Simbel",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Soft Drinks"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival at Cairo International Airport"
      },
      {
        "title": "Day 2",
        "description": "Full Day Pyramids and Sakkara - Cairo ON"
      },
      {
        "title": "Day 3",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili - Cairo ON"
      },
      {
        "title": "Day 4",
        "description": "Alexandria City Tour - Cairo ON"
      },
      {
        "title": "Day 5",
        "description": "Islamic & Coptic Cairo Tour - Cairo ON"
      },
      {
        "title": "Day 6",
        "description": "Flight to Hurghada - Hurghada ON"
      },
      {
        "title": "Day 7",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 8",
        "description": "Hurghada Free Day"
      },
      {
        "title": "Day 9",
        "description": "Transfer from Hurghada to Luxor - Sound & Light Show at Karnak Temple - Luxor ON"
      },
      {
        "title": "Day 10",
        "description": "Luxor West Bank - Board on Nile Cruise - Luxor ON"
      },
      {
        "title": "Day 11",
        "description": "Luxor East Bank - Sail to Edfu & ON"
      },
      {
        "title": "Day 12",
        "description": "Edfu - Kom Ombo - Sail to Aswan & ON"
      },
      {
        "title": "Day 13",
        "description": "Aswan Tours - Aswan ON"
      },
      {
        "title": "Day 14",
        "description": "Disembarkation from Cruise - Abu Simbel Temple - Fly back to Cairo - Cairo ON"
      },
      {
        "title": "Day 15",
        "description": "Cairo Int. Airport - Final Departure"
      }
    ],
    "inclusions": [
      "6 nights in Cairo at Hotel",
      "3 nights in Hurghada at Hotel",
      "1 night in Luxor at Hotel",
      "4 nights on 5* Nile Cruise",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "14 breakfasts, 13 lunches, 8 dinners",
      "All service charges and taxes.",
      "Meet and greet services by our representatives at airports.",
      "Assistance from our customer service department for the duration of your luxury Nile cruise and stay.",
      "Private English-speaking guides",
      "All sightseeing tours on the cruise.",
      "Entrance fees to all sites as per the luxury Nile cruise and stay itinerary.",
      "Domestic flights (Cairo / Hurghada ) and ( Aswan / Cairo ).",
      "Free bottled during tours.",
      "Portage when needed."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-route-of-the-holy-family-in-egypt-15-days",
    "slug": "route-of-the-holy-family-in-egypt-15-days",
    "title": "Route of the Holy Family in Egypt (15 Days)",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Breakfast",
      "Dinner"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Cairo, Egypt"
      },
      {
        "title": "Day 2",
        "description": "Giza Pyramids and the Grand Egyptian Museum"
      },
      {
        "title": "Day 3",
        "description": "Tour of Babastis and Philippos"
      },
      {
        "title": "Day 4",
        "description": "Visit to Sakha and Samanoud"
      },
      {
        "title": "Day 5",
        "description": "Wadi Natroun"
      },
      {
        "title": "Day 6",
        "description": "Christian Churches in Cairo"
      },
      {
        "title": "Day 7",
        "description": "Cairo to El Minya"
      },
      {
        "title": "Day 8",
        "description": "Minya - Dandara - Luxor"
      },
      {
        "title": "Day 9",
        "description": "Luxor Nile Cruise Tours"
      },
      {
        "title": "Day 10",
        "description": "Luxor West Bank"
      },
      {
        "title": "Day 11",
        "description": "Temples of Edfu and Kom Ombo"
      },
      {
        "title": "Day 12",
        "description": "Top Attractions of Aswan"
      },
      {
        "title": "Day 13",
        "description": "Temples of Abu Simbel (Optional) - Train to Cairo"
      },
      {
        "title": "Day 14",
        "description": "Free Day in Cairo"
      },
      {
        "title": "Day 15",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "7 nights in Cairo at the Le Méridien Pyramids Hotel and Spa",
      "1 night in Minya at the Nefertiti Hotel",
      "1 night in Luxor at the Sonesta St. George Hotel",
      "4 nights on the Movenpick Royal Lily Nile Cruise",
      "1 night on sleeper train",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "14 breakfasts, 11 lunches, 5 dinners",
      "Meet and greet service at airports; ports and stations",
      "Customer service assistance throughout your Holy Family Trip to Egypt stay",
      "All sightseeing tours in Cairo (private and guided)",
      "All sightseeing tours on the cruise (small group tours)",
      "Holy Family route as per the itinerary",
      "Entrance fees to all sites listed in the Holy Family Trip to Egypt itinerary",
      "Meals listed in the Holy Family Trip to Egypt itinerary",
      "Bottle of water during tours",
      "Portage when needed.",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/11-21.webp",
    "images": [
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-14-day-cairo-nile-and-lake-cruise",
    "slug": "14-day-cairo-nile-and-lake-cruise",
    "title": "14 Day Cairo, Nile and Lake Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "5-Star Deluxe Nile river cruiser for 4 nights",
      "5-Star Deluxe Lake Nasser Cruise 3 nights",
      "Hotel in Cairo for 6 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "13 breakfasts, 11 lunches, 7 dinners",
      "Meet & assist at Cairo International Airport upon arrival and departure.",
      "Domestic flight (Cairo — Luxor — Aswan — Cairo).",
      "All sightseeing tours on your Nile and Lake Cruises will be private.",
      "All sightseeing tours in Cairo, Alexandria, Luxor, Aswan and Abu Simbel as mentioned in the itinerary",
      "Entrance fees to all sites as indicated in the itinerary.",
      "English speaking tour guide throughout your tours.",
      "All transfers by a private air-conditioned vehicle.",
      "Bottled water during the trips.",
      "All service charges & taxes."
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival at Cairo International Airport"
      },
      {
        "title": "Day 2",
        "description": "Giza Pyramids - Memphis And sakkara"
      },
      {
        "title": "Day 3",
        "description": "Grand Egyptian Museum - Citadel and Khan El Khalili"
      },
      {
        "title": "Day 4",
        "description": "Fly to Luxor / Nile Cruise"
      },
      {
        "title": "Day 5",
        "description": "Luxor West Bank"
      },
      {
        "title": "Day 6",
        "description": "Edfu / Kom Ombo"
      },
      {
        "title": "Day 7",
        "description": "Aswan Sightseeing"
      },
      {
        "title": "Day 8",
        "description": "Aswan/ Abu Simbel/ Lake Cruise"
      },
      {
        "title": "Day 9",
        "description": "Sail to Kasr Ibrim - Visit Amada"
      },
      {
        "title": "Day 10",
        "description": "Visit Wadi El Seboua Temple - Sail to Aswan"
      },
      {
        "title": "Day 11",
        "description": "Disembark/ Visit Kalabsha Temple / Fly back to Cairo"
      },
      {
        "title": "Day 12",
        "description": "Alexandria Tour"
      },
      {
        "title": "Day 13",
        "description": "Islamic & Coptic Cairo Tour"
      },
      {
        "title": "Day 14",
        "description": "Depart from Cairo"
      }
    ],
    "inclusions": [
      "5-Star Deluxe Nile river cruiser for 4 nights",
      "5-Star Deluxe Lake Nasser Cruise 3 nights",
      "Hotel in Cairo for 6 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "13 breakfasts, 11 lunches, 7 dinners",
      "Meet & assist at Cairo International Airport upon arrival and departure.",
      "Domestic flight (Cairo — Luxor — Aswan — Cairo).",
      "All sightseeing tours on your Nile and Lake Cruises will be private.",
      "All sightseeing tours in Cairo, Alexandria, Luxor, Aswan and Abu Simbel as mentioned in the itinerary",
      "Entrance fees to all sites as indicated in the itinerary.",
      "English speaking tour guide throughout your tours.",
      "All transfers by a private air-conditioned vehicle.",
      "Bottled water during the trips.",
      "All service charges & taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-egypt-spiritual-tours-sacred-egypt-tour",
    "slug": "egypt-spiritual-tours-sacred-egypt-tour",
    "title": "Egypt Spiritual Tours (Sacred Egypt tour)",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "3 Nights, Le Meridien Pyramids Hotel 5* Pyramids view rooms",
      "3 Nights at Mena House 5* Pyramids view rooms",
      "1 Night, Minya Horus Hotel*",
      "1 Night, House Of Life Abydos 5*",
      "2 Nights, Steigenberger Luxor Hotel 5*",
      "4 Nights at Nile Cruise 5*",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "14 breakfasts, 12 lunches, 10 dinners",
      "Meet & assists at the airport",
      "1 Domestic Flight within Egypt (ASW/CAI)",
      "English Egyptologist guide during your trip",
      "Bottles of water supplied daily",
      "Transportation to all sites mentioned on the itinerary by AC car",
      "Entry tickets to the sites mentioned on the itinerary",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Cairo - Welcome Dinner, Le Meridien Hotel"
      },
      {
        "title": "Day 02",
        "description": "Cairo - Giza Plateau, Pyramids, Sphinx, Valley Temple"
      },
      {
        "title": "Day 03",
        "description": "Cairo - Saqqara, Step Pyramid, Pyramid of Unas, The Serapeum"
      },
      {
        "title": "Day 04",
        "description": "Cairo - Dashur, Bent Pyramid, Red Pyramid"
      },
      {
        "title": "Day 06",
        "description": "Cairo/Minya - El Minya, Bani Hassan Tombs, Amarna"
      },
      {
        "title": "Day 07",
        "description": "Minya/Abydos - Hermopolis, Tuna El Gebel"
      },
      {
        "title": "Day 08",
        "description": "Abydos/Luxor - Seti I Temple, The Osirion"
      },
      {
        "title": "Day 09",
        "description": "Dendera - Temple of Hathor"
      },
      {
        "title": "Day 11",
        "description": "Nile Cruise - Karnak Temple"
      },
      {
        "title": "Day 12",
        "description": "Nile Cruise - Edfu, and Kom Ombo Temple"
      },
      {
        "title": "Day 13",
        "description": "Nile Cruise - Isis Temple, Unfinished Obelisk, Elephantine Island"
      },
      {
        "title": "Day 14",
        "description": "Aswan/Cairo - Morning visit Abu Simbel, flight back to Cairo"
      },
      {
        "title": "Day 15",
        "description": "Cairo - Transport to airport and departure"
      }
    ],
    "inclusions": [
      "3 Nights, Le Meridien Pyramids Hotel 5* Pyramids view rooms",
      "3 Nights at Mena House 5* Pyramids view rooms",
      "1 Night, Minya Horus Hotel*",
      "1 Night, House Of Life Abydos 5*",
      "2 Nights, Steigenberger Luxor Hotel 5*",
      "4 Nights at Nile Cruise 5*",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "14 breakfasts, 12 lunches, 10 dinners",
      "Meet & assists at the airport",
      "1 Domestic Flight within Egypt (ASW/CAI)",
      "English Egyptologist guide during your trip",
      "Bottles of water supplied daily",
      "Transportation to all sites mentioned on the itinerary by AC car",
      "Entry tickets to the sites mentioned on the itinerary",
      "Portage when needed",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-stopover-tour-of-cairo",
    "slug": "stopover-tour-of-cairo",
    "title": "Stopover Tour of Cairo",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "8 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Cairo Airport & return.",
      "All transfers by a Private air-conditioned vehicle.",
      "Private Egyptologist guide.",
      "Lunch meal at a local restaurant in Cairo.",
      "Entrance fees to all the mentioned sites.",
      "Mineral water while on board the vehicle during your Cairo stopover tours.",
      "All your tours and excursions by a private with A/C car.",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Cairo Airport & return.",
      "All transfers by a Private air-conditioned vehicle.",
      "Private Egyptologist guide.",
      "Lunch meal at a local restaurant in Cairo.",
      "Entrance fees to all the mentioned sites.",
      "Mineral water while on board the vehicle during your Cairo stopover tours.",
      "All your tours and excursions by a private with A/C car.",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "day-tour-to-alexandria-from-cairo-by-car",
      "private-tour-to-pyramids-the-egyptian-museum-and-khan-khalili"
    ]
  },
  {
    "id": "la-day-tour-to-alexandria-from-cairo-by-car",
    "slug": "day-tour-to-alexandria-from-cairo-by-car",
    "title": "Day Tour to Alexandria from Cairo by car",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel in Cairo & return",
      "Entrance fees to the mentioned historical place",
      "Transfer by a private air-conditioned vehicle",
      "Private English-speaking Egyptologist guide",
      "Lunch during your tour",
      "All taxes & service charge",
      "Bottled water during your trip"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel in Cairo & return",
      "Entrance fees to the mentioned historical place",
      "Transfer by a private air-conditioned vehicle",
      "Private English-speaking Egyptologist guide",
      "Lunch during your tour",
      "All taxes & service charge",
      "Bottled water during your trip"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "private-tour-to-pyramids-the-egyptian-museum-and-khan-khalili"
    ]
  },
  {
    "id": "la-day-trip-to-luxor-from-cairo-by-air",
    "slug": "day-trip-to-luxor-from-cairo-by-air",
    "title": "Day Trip to Luxor from Cairo by Air",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel and return.",
      "Being met and assisted upon arrival and departure at Luxor Airport.",
      "Entrance fees to the mentioned historical place.",
      "All transfers by a private modern air-conditioned vehicle.",
      "Private English-speaking Egyptologist Guide.",
      "Domestic flights Cairo - Luxor - Cairo.",
      "Bottled water during your trip.",
      "Lunch at a good quality local restaurant.",
      "All Taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel and return.",
      "Being met and assisted upon arrival and departure at Luxor Airport.",
      "Entrance fees to the mentioned historical place.",
      "All transfers by a private modern air-conditioned vehicle.",
      "Private English-speaking Egyptologist Guide.",
      "Domestic flights Cairo - Luxor - Cairo.",
      "Bottled water during your trip.",
      "Lunch at a good quality local restaurant.",
      "All Taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank",
      "day-tour-to-cairo-from-luxor-by-flight"
    ]
  },
  {
    "id": "la-private-tour-to-pyramids-the-egyptian-museum-and-khan-khalili",
    "slug": "private-tour-to-pyramids-the-egyptian-museum-and-khan-khalili",
    "title": "Private Tour to Pyramids, the Egyptian Museum and Khan Khalili",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel & return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal at local restaurant in Cairo.",
      "Bottled water on board the vehicle during the tour.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel & return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal at local restaurant in Cairo.",
      "Bottled water on board the vehicle during the tour.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-cairo-city-tour-to-egyptian-museum-citadel-and-old-cairo",
    "slug": "cairo-city-tour-to-egyptian-museum-citadel-and-old-cairo",
    "title": "Cairo City Tour to Egyptian Museum, Citadel and Old Cairo",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English-speaking Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meal at local restaurant in Cairo",
      "Bottled water on board the vehicle during your trip",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English-speaking Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meal at local restaurant in Cairo",
      "Bottled water on board the vehicle during your trip",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-one-day-tour-to-abu-simbel-from-cairo-via-aswan",
    "slug": "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
    "title": "One Day Tour to Abu Simbel from Cairo via Aswan",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "15 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Flight tickets from Cairo to Aswan and return.",
      "Entrance Fees to the sight.",
      "Transfer by a private air-conditioned vehicle from Aswan to Abu Simbel and return to Aswan airport.",
      "Private Egyptologist guide during your trip.",
      "Mineral water on board the vehicle during the tour.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Flight tickets from Cairo to Aswan and return.",
      "Entrance Fees to the sight.",
      "Transfer by a private air-conditioned vehicle from Aswan to Abu Simbel and return to Aswan airport.",
      "Private Egyptologist guide during your trip.",
      "Mineral water on board the vehicle during the tour.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight",
      "felucca-ride-on-the-nile-in-aswan"
    ]
  },
  {
    "id": "la-cairo-dinner-cruise-and-oriental-show",
    "slug": "cairo-dinner-cruise-and-oriental-show",
    "title": "Cairo Dinner Cruise and Oriental show",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel & return",
      "All transfers by an air-conditioned vehicle",
      "Open buffet dinner",
      "Belly Dancer & Oriental Show",
      "Western Show",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel & return",
      "All transfers by an air-conditioned vehicle",
      "Open buffet dinner",
      "Belly Dancer & Oriental Show",
      "Western Show",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sound-and-light-show-at-the-pyramids",
    "slug": "sound-and-light-show-at-the-pyramids",
    "title": "Sound and Light Show at the Pyramids",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "2 hour",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel & return",
      "All transfers by a private air-conditioned vehicle",
      "English-speaking escorted representative",
      "Entrance fees to the show",
      "Bottled water during your trip.",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel & return",
      "All transfers by a private air-conditioned vehicle",
      "English-speaking escorted representative",
      "Entrance fees to the show",
      "Bottled water during your trip.",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-coptic-and-islamic-cairo-tour",
    "slug": "coptic-and-islamic-cairo-tour",
    "title": "Coptic and Islamic Cairo Tour",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel & return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal at local restaurant in Cairo.",
      "Bottled water on board the vehicle during the tour.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel & return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal at local restaurant in Cairo.",
      "Bottled water on board the vehicle during the tour.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-felucca-trip-on-the-nile-in-cairo",
    "slug": "felucca-trip-on-the-nile-in-cairo",
    "title": "Felucca trip on the Nile in Cairo",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "3 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel & return",
      "Felucca ride on the Nile for two hours",
      "Transfer by a private air-conditioned vehicle",
      "All taxes & service charge",
      "Bottled water during your trip"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel & return",
      "Felucca ride on the Nile for two hours",
      "Transfer by a private air-conditioned vehicle",
      "All taxes & service charge",
      "Bottled water during your trip"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-private-tour-to-pyramids-sakkara-and-dahshur",
    "slug": "private-tour-to-pyramids-sakkara-and-dahshur",
    "title": "Private Tour to Pyramids , Sakkara and Dahshur",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "All transfers by a private air-conditioned vehicle.",
      "Pick up services from your hotel & return.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal will be served in a local restaurant.",
      "Bottled water during your trip.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "All transfers by a private air-conditioned vehicle.",
      "Pick up services from your hotel & return.",
      "Private English-speaking Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "Lunch meal will be served in a local restaurant.",
      "Bottled water during your trip.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-day-tour-to-el-fayoum-from-cairo",
    "slug": "day-tour-to-el-fayoum-from-cairo",
    "title": "Day Tour to El Fayoum from Cairo",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "1 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Cairo and back.",
      "All transfers by 4x4 car.",
      "Entrance fees to the mentioned historical place.",
      "English-speaking Egyptologist guide.",
      "Bottled water on board the vehicle during the tour.",
      "Late lunch meal at local restaurant in EL Fayoum.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Cairo and back.",
      "All transfers by 4x4 car.",
      "Entrance fees to the mentioned historical place.",
      "English-speaking Egyptologist guide.",
      "Bottled water on board the vehicle during the tour.",
      "Late lunch meal at local restaurant in EL Fayoum.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-el-minya-day-tour-from-cairo-by-car",
    "slug": "el-minya-day-tour-from-cairo-by-car",
    "title": "El Minya Day Tour from Cairo by car",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "16 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel & return",
      "Entrance fees to the mentioned historical place",
      "Transfer by a private air-conditioned vehicle",
      "Private English-speaking Egyptologist guide",
      "Late Lunch meal at local restaurant",
      "Bottled water during your trip",
      "All taxes & service charges"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel & return",
      "Entrance fees to the mentioned historical place",
      "Transfer by a private air-conditioned vehicle",
      "Private English-speaking Egyptologist guide",
      "Late Lunch meal at local restaurant",
      "Bottled water during your trip",
      "All taxes & service charges"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-day-tour-to-wadi-el-natroun-monastery-from-cairo",
    "slug": "day-tour-to-wadi-el-natroun-monastery-from-cairo",
    "title": "Day Tour to Wadi El Natroun Monastery from Cairo",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "16005543941Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel & return",
      "Bottled water during your trip",
      "All transfers by a private air-conditioned vehicle",
      "Entrance fees to the mentioned historical place",
      "Private English-speaking guide",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel & return",
      "Bottled water during your trip",
      "All transfers by a private air-conditioned vehicle",
      "Entrance fees to the mentioned historical place",
      "Private English-speaking guide",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-camel-ride-trip-at-the-pyramids",
    "slug": "camel-ride-trip-at-the-pyramids",
    "title": "Camel Ride Trip at the Pyramids",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "2 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel & return",
      "All transfers by an air-conditioned vehicle",
      "A horse or Camel riding for 2 hours",
      "Bottled water during your trip",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel & return",
      "All transfers by an air-conditioned vehicle",
      "A horse or Camel riding for 2 hours",
      "Bottled water during your trip",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-private-tour-to-the-west-bank",
    "slug": "private-tour-to-the-west-bank",
    "title": "Private tour to the West Bank",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "6 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Tour to visit West bank in Luxor",
      "Pick up from your hotel in Luxor",
      "Private day tour to the West Bank in Luxor.",
      "Entrance fees to the above mentioned sites",
      "English speaking guide",
      "A bottle of Mineral water to each person",
      "All service charges and taxes",
      "Return back to your hotel in Luxor"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Tour to visit West bank in Luxor",
      "Pick up from your hotel in Luxor",
      "Private day tour to the West Bank in Luxor.",
      "Entrance fees to the above mentioned sites",
      "English speaking guide",
      "A bottle of Mineral water to each person",
      "All service charges and taxes",
      "Return back to your hotel in Luxor"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-east-bank",
      "day-tour-to-cairo-from-luxor-by-flight"
    ]
  },
  {
    "id": "la-private-tour-to-the-east-bank",
    "slug": "private-tour-to-the-east-bank",
    "title": "Private tour to the East Bank",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "4 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up from your hotel in Luxor.",
      "Private day tour to the East Bank in Luxor.",
      "Entrance fees to the above mentioned sites.",
      "English speaking guide.",
      "A bottle of Mineral water to each person.",
      "All service charges and taxes.",
      "Return back to your hotel in Luxor."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up from your hotel in Luxor.",
      "Private day tour to the East Bank in Luxor.",
      "Entrance fees to the above mentioned sites.",
      "English speaking guide.",
      "A bottle of Mineral water to each person.",
      "All service charges and taxes.",
      "Return back to your hotel in Luxor."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "day-tour-to-cairo-from-luxor-by-flight"
    ]
  },
  {
    "id": "la-day-tour-to-cairo-from-luxor-by-flight",
    "slug": "day-tour-to-cairo-from-luxor-by-flight",
    "title": "Day Tour to Cairo from Luxor by Flight",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "16 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel in Luxor & return.",
      "Entrance fees to all the mentioned sites.",
      "Transfer by air-conditioned vehicle.",
      "Expert tour guide.",
      "Domestic flight ticket Luxor / Cairo / Luxor.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel in Luxor & return.",
      "Entrance fees to all the mentioned sites.",
      "Transfer by air-conditioned vehicle.",
      "Expert tour guide.",
      "Domestic flight ticket Luxor / Cairo / Luxor.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/11-21.webp",
    "images": [
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-day-tour-to-edfu-and-kom-ombo-from-luxor",
    "slug": "day-tour-to-edfu-and-kom-ombo-from-luxor",
    "title": "Day Tour to Edfu and Kom Ombo from Luxor",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by air-conditioned vehicle.",
      "Expert tour guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by air-conditioned vehicle.",
      "Expert tour guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-tour-to-luxor-museum-and-mummification-museum",
    "slug": "tour-to-luxor-museum-and-mummification-museum",
    "title": "Tour to Luxor Museum and Mummification Museum",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "4 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Multilingual expert Egyptologist Guide",
      "All your tours and excursions are by our deluxe coach",
      "All your visits include entrance fees",
      "Mineral Water",
      "Our prices include all taxes and services"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Multilingual expert Egyptologist Guide",
      "All your tours and excursions are by our deluxe coach",
      "All your visits include entrance fees",
      "Mineral Water",
      "Our prices include all taxes and services"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-luxor-camel-ride",
    "slug": "luxor-camel-ride",
    "title": "Luxor Camel Ride",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "3 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up from your hotel in Luxor & return.",
      "Transfer by A/C car.",
      "Mineral water on board.",
      "Motor boat cross the nile.",
      "All taxes & service."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up from your hotel in Luxor & return.",
      "Transfer by A/C car.",
      "Mineral water on board.",
      "Motor boat cross the nile.",
      "All taxes & service."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-luxor-city-tour-by-horse-carriage",
    "slug": "luxor-city-tour-by-horse-carriage",
    "title": "Luxor City tour by Horse Carriage",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "2 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Luxor and return",
      "Multilingual expert Egyptologist guide",
      "Riding fees for the Horse Carriage",
      "All transfers by a modern air-conditioned vehicle",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Luxor and return",
      "Multilingual expert Egyptologist guide",
      "Riding fees for the Horse Carriage",
      "All transfers by a modern air-conditioned vehicle",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-felucca-ride-on-the-nile",
    "slug": "felucca-ride-on-the-nile",
    "title": "Felucca Ride on the Nile",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "3 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up from your hotel in Luxor & return.",
      "Transfer by A/C car.",
      "Mineral water on board .",
      "All taxes & service."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up from your hotel in Luxor & return.",
      "Transfer by A/C car.",
      "Mineral water on board .",
      "All taxes & service."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-day-tour-to-ramesseum-temple-habu-temple-and-nobles-valley",
    "slug": "day-tour-to-ramesseum-temple-habu-temple-and-nobles-valley",
    "title": "Day Tour to Ramesseum Temple, Habu Temple, and Nobles Valley",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "6 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-sound-and-light-show-at-karnak-temples",
    "slug": "sound-and-light-show-at-karnak-temples",
    "title": "Sound and Light Show at Karnak Temples",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "3 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
    "slug": "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
    "title": "Day Tour of Aswan , Philae temple, High Dam and Obelisk",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "6 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking tour guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges & taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking tour guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges & taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "full-day-tour-to-cairo-from-aswan-by-flight",
      "felucca-ride-on-the-nile-in-aswan"
    ]
  },
  {
    "id": "la-full-day-tour-to-cairo-from-aswan-by-flight",
    "slug": "full-day-tour-to-cairo-from-aswan-by-flight",
    "title": "Full day tour to Cairo from Aswan by flight",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "16 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel in Aswan & return.",
      "Entrance fees to all the mentioned sites.",
      "Transfer by air-conditioned vehicle.",
      "Expert tour guide.",
      "Domestic flight ticket Aswan / Cairo / Aswan.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel in Aswan & return.",
      "Entrance fees to all the mentioned sites.",
      "Transfer by air-conditioned vehicle.",
      "Expert tour guide.",
      "Domestic flight ticket Aswan / Cairo / Aswan.",
      "Shopping tours in Cairo.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-1-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "felucca-ride-on-the-nile-in-aswan"
    ]
  },
  {
    "id": "la-felucca-ride-on-the-nile-in-aswan",
    "slug": "felucca-ride-on-the-nile-in-aswan",
    "title": "Felucca Ride on the Nile in Aswan",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "2 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return",
      "Professional English-speaking tour guide",
      "Boat fees and entrance fees",
      "Felucca ride for about 01 hour",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return",
      "Professional English-speaking tour guide",
      "Boat fees and entrance fees",
      "Felucca ride for about 01 hour",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-bird-watching-tour-in-aswan",
    "slug": "bird-watching-tour-in-aswan",
    "title": "Bird Watching Tour in Aswan",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "3 hour",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up and return service from your Hotel or Cruise in Aswan .",
      "All transfers by a private air-conditioned vehicle.",
      "English-speaking local Guide.",
      "Bottled water during your trip.",
      "All taxes & service charge."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up and return service from your Hotel or Cruise in Aswan .",
      "All transfers by a private air-conditioned vehicle.",
      "English-speaking local Guide.",
      "Bottled water during your trip.",
      "All taxes & service charge."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-2.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-2.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-private-tour-to-kom-ombo-and-edfu-temples-from-aswan",
    "slug": "private-tour-to-kom-ombo-and-edfu-temples-from-aswan",
    "title": "Private tour to Kom Ombo and Edfu Temples from Aswan",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Entrance fees to the mentioned historical places.",
      "Multilingual expert Egyptologist guide.",
      "All transfers by a modern air-conditioned vehicle.",
      "Lunch.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Entrance fees to the mentioned historical places.",
      "Multilingual expert Egyptologist guide.",
      "All transfers by a modern air-conditioned vehicle.",
      "Lunch.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-private-day-tour-to-luxor-from-aswan-by-vehicle",
    "slug": "private-day-tour-to-luxor-from-aswan-by-vehicle",
    "title": "Private day tour to Luxor from Aswan by vehicle",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up from your hotel in Aswan and back",
      "All transfers by a private air-conditioned vehicle",
      "Professional English-speaking tour guide",
      "Entrance fees to the mentioned sights",
      "Lunch at quality restaurant",
      "Bottled water during your trip",
      "Pick up service from hotel and return",
      "Assistance of our personnel during tours",
      "Shopping tours in Luxor",
      "All services charges and taxes included"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up from your hotel in Aswan and back",
      "All transfers by a private air-conditioned vehicle",
      "Professional English-speaking tour guide",
      "Entrance fees to the mentioned sights",
      "Lunch at quality restaurant",
      "Bottled water during your trip",
      "Pick up service from hotel and return",
      "Assistance of our personnel during tours",
      "Shopping tours in Luxor",
      "All services charges and taxes included"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-day-trip-to-abu-simbel-from-aswan-by-coach",
    "slug": "day-trip-to-abu-simbel-from-aswan-by-coach",
    "title": "Day Trip to Abu Simbel from Aswan by coach",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "9 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water on board your vehicle.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water on board your vehicle.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-day-trip-to-abu-simbel-from-aswan-by-flight",
    "slug": "day-trip-to-abu-simbel-from-aswan-by-flight",
    "title": "Day Trip to Abu Simbel from Aswan by flight",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "6 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Flight ticket Aswan / Abu Simbel / Aswan on Egypt air",
      "Pick up services from your hotel and return",
      "All transfers & transportation by private air-conditioned van",
      "Assistance of our personnel during the day tour",
      "Professional English-speaking Egyptologist guide during tour",
      "Entrance fees to the mentioned sights in Abu Simbel",
      "Bottled water during your trip",
      "Service charges and taxes included in tour price"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Flight ticket Aswan / Abu Simbel / Aswan on Egypt air",
      "Pick up services from your hotel and return",
      "All transfers & transportation by private air-conditioned van",
      "Assistance of our personnel during the day tour",
      "Professional English-speaking Egyptologist guide during tour",
      "Entrance fees to the mentioned sights in Abu Simbel",
      "Bottled water during your trip",
      "Service charges and taxes included in tour price"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-5.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-5.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-kalabsha-temple-and-nubian-museum-tour",
    "slug": "kalabsha-temple-and-nubian-museum-tour",
    "title": "Kalabsha Temple and Nubian Museum Tour",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "6 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-private-tour-to-the-tombs-of-the-nobles",
    "slug": "private-tour-to-the-tombs-of-the-nobles",
    "title": "Private tour to the Tombs of The Nobles",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "5 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-1-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-1-2.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-trip-to-the-nubian-villages-by-boat",
    "slug": "trip-to-the-nubian-villages-by-boat",
    "title": "Trip to the Nubian Villages by boat",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "4 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Expert tour guide.",
      "Boat fees and tickets.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Expert tour guide.",
      "Boat fees and tickets.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-7.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-sound-and-light-show-at-philae-temple",
    "slug": "sound-and-light-show-at-philae-temple",
    "title": "Sound and Light Show at Philae Temple",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "1 hour",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Luxor and return.",
      "All transfers by a private air-conditioned vehicle.",
      "Private English Egyptologist guide.",
      "Entrance fees to all the mentioned sites.",
      "All service charges & taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-1-4.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-private-day-tour-to-the-nubian-museum",
    "slug": "private-day-tour-to-the-nubian-museum",
    "title": "Private day tour to The Nubian Museum",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "3 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-private-day-tour-to-the-botanic-gardens-and-botanical-museum",
    "slug": "private-day-tour-to-the-botanic-gardens-and-botanical-museum",
    "title": "Private day tour to The Botanic Gardens and Botanical Museum",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "4 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return",
      "Professional English-speaking tour guide",
      "Boat fees and entrance fees",
      "Felucca ride for about 01 hour",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return",
      "Professional English-speaking tour guide",
      "Boat fees and entrance fees",
      "Felucca ride for about 01 hour",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-1-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-11.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-aswan-city-tour-in-horse-carriage",
    "slug": "aswan-city-tour-in-horse-carriage",
    "title": "Aswan City Tour in Horse Carriage",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "2 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return",
      "Multilingual expert Egyptologist guide",
      "Riding fees for the Horse Carriage",
      "All transfers by a modern air-conditioned vehicle",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return",
      "Multilingual expert Egyptologist guide",
      "Riding fees for the Horse Carriage",
      "All transfers by a modern air-conditioned vehicle",
      "Bottled water during your trip",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-day-trip-to-philae-temple-and-nubian-museum",
    "slug": "day-trip-to-philae-temple-and-nubian-museum",
    "title": "Day Trip to Philae Temple and Nubian Museum",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return.",
      "Professional English-speaking Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp",
      "/images/tours/ABU-SIMBEL-2-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-cairo-day-tours-from-hurghada",
    "slug": "cairo-day-tours-from-hurghada",
    "title": "Cairo Day Tours from Hurghada",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "14 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Hurghada and return",
      "Domestic flight ticket Hurghada / Cairo / Hurghada.",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All Service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Hurghada and return",
      "Domestic flight ticket Hurghada / Cairo / Hurghada.",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All Service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-2-day-tour-to-cairo-by-air-from-hurghada",
    "slug": "2-day-tour-to-cairo-by-air-from-hurghada",
    "title": "2 Day Tour to Cairo by Air from Hurghada",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "2 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Internal flight ticket (Hurghada - Cairo - Hurghada)",
      "Pick up services from your hotel in Hurghada and return",
      "Accommodation in Cairo at Le Meridien Pyramids Hotel & Spa with breakfast",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo and Giza",
      "Two Lunch during tours in Cairo",
      "Shopping tours through out Khan El Khalili bazaars",
      "All services charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Fly to Cairo / Pyramids Tours"
      },
      {
        "title": "Day 02",
        "description": "Cairo Tours / Fly back to Hurghada"
      }
    ],
    "inclusions": [
      "Internal flight ticket (Hurghada - Cairo - Hurghada)",
      "Pick up services from your hotel in Hurghada and return",
      "Accommodation in Cairo at Le Meridien Pyramids Hotel & Spa with breakfast",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo and Giza",
      "Two Lunch during tours in Cairo",
      "Shopping tours through out Khan El Khalili bazaars",
      "All services charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-trip-to-stsimeon-monastery",
    "slug": "trip-to-stsimeon-monastery",
    "title": "Trip to St.Simeon Monastery",
    "category": "Aswan Tours",
    "destination": "Aswan",
    "duration": "4 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Aswan and return English Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Aswan and return English Egyptologist guide.",
      "Entrance fees to the mentioned historical places.",
      "All transfers by a modern air-conditioned vehicle.",
      "Bottled water during your trip.",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-2-1.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-2-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/ABU-SIMBEL-1-1.webp"
    ],
    "relatedSlugs": [
      "one-day-tour-to-abu-simbel-from-cairo-via-aswan",
      "day-tour-of-aswan-philae-temple-high-dam-and-obelisk",
      "full-day-tour-to-cairo-from-aswan-by-flight"
    ]
  },
  {
    "id": "la-day-tour-to-luxor-from-hurghada",
    "slug": "day-tour-to-luxor-from-hurghada",
    "title": "Day Tour to Luxor from Hurghada",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "1 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up and return from your hotel in Hurghada",
      "All transfers by private air - conditioned vehicle",
      "Private English Egyptologist guide (Or any other languge)",
      "Entrance fees to all the mentioned sites",
      "Entry to the tomb of King Tut Ankh Amun",
      "Mineral water on board the vehicle during the tour",
      "Lunch meal at local restaurant",
      "Mineral water & cup of tea or coffee during lunch",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up and return from your hotel in Hurghada",
      "All transfers by private air - conditioned vehicle",
      "Private English Egyptologist guide (Or any other languge)",
      "Entrance fees to all the mentioned sites",
      "Entry to the tomb of King Tut Ankh Amun",
      "Mineral water on board the vehicle during the tour",
      "Lunch meal at local restaurant",
      "Mineral water & cup of tea or coffee during lunch",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-2-day-cairo-and-luxor-from-hurghada-by-flight-2",
    "slug": "2-day-cairo-and-luxor-from-hurghada-by-flight-2",
    "title": "2 Day Cairo and Luxor from Hurghada by Flight",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "2 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Domestic flight ticket (Hurghada/Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Hurghada and return",
      "Accommodation in Luxor with breakfast at Sonesta St George Hotel",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout your tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Hurghada by private vehicle",
      "Lunch at local restaurant during tour in Cairo & Luxor",
      "Bottled water on board the vehicle",
      "Shopping tours through out Khan El Khalili bazaars",
      "All service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Hurghada/ Cairo Tours / Fly to Luxor"
      },
      {
        "title": "Day 02",
        "description": "Luxor Tours / Back to Hurghada"
      }
    ],
    "inclusions": [
      "Domestic flight ticket (Hurghada/Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Hurghada and return",
      "Accommodation in Luxor with breakfast at Sonesta St George Hotel",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout your tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Hurghada by private vehicle",
      "Lunch at local restaurant during tour in Cairo & Luxor",
      "Bottled water on board the vehicle",
      "Shopping tours through out Khan El Khalili bazaars",
      "All service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-snorkeling-at-mahmya-island",
    "slug": "snorkeling-at-mahmya-island",
    "title": "Snorkeling at Mahmya Island",
    "category": "Hurghada Tours",
    "destination": "Hurghada & Red Sea",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service & return to your hotel",
      "All transfers from and to your hotel",
      "Cruise yacht ticket and fees",
      "Snorkeling equipment",
      "Lunch served at the Island Restaurant",
      "Bottled water and soft drink",
      "Snorkeling guide assistance",
      "Service charges and taxes included in the price"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service & return to your hotel",
      "All transfers from and to your hotel",
      "Cruise yacht ticket and fees",
      "Snorkeling equipment",
      "Lunch served at the Island Restaurant",
      "Bottled water and soft drink",
      "Snorkeling guide assistance",
      "Service charges and taxes included in the price"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "snorkeling-trip-to-giftun-island",
      "alf-leila-wa-leila-show-in-hurghada",
      "sindbad-submarine-tour-in-hurghada"
    ]
  },
  {
    "id": "la-luxor-overnight-tour-from-hurghada",
    "slug": "luxor-overnight-tour-from-hurghada",
    "title": "Luxor overnight Tour from Hurghada",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up and return from your hotel in Hurghada",
      "All transfers by private air - conditioned vehicle",
      "1 Night accommodation at 5* hotel in Luxor.",
      "Private English Egyptologist guide (Or any other languge)",
      "Entrance fees to all the mentioned sites",
      "Mineral water on board the vehicle during the tour",
      "Two Lunch meal at local restaurant",
      "Mineral water & cup of tea or coffee during lunch",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Hurghada &ndash; Luxor by road &ndash; Karnak and Luxor temples -"
      },
      {
        "title": "Day 2",
        "description": "Valley of the Kings &ndash; Temple of Queen Hatshipsut &ndash; Colossi of Memnon &ndash; Drive back to Hurghada"
      }
    ],
    "inclusions": [
      "Pick up and return from your hotel in Hurghada",
      "All transfers by private air - conditioned vehicle",
      "1 Night accommodation at 5* hotel in Luxor.",
      "Private English Egyptologist guide (Or any other languge)",
      "Entrance fees to all the mentioned sites",
      "Mineral water on board the vehicle during the tour",
      "Two Lunch meal at local restaurant",
      "Mineral water & cup of tea or coffee during lunch",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-snorkeling-trip-to-giftun-island",
    "slug": "snorkeling-trip-to-giftun-island",
    "title": "Snorkeling Trip to Giftun Island",
    "category": "Hurghada Tours",
    "destination": "Hurghada & Red Sea",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up & return service to your hotel",
      "All transfers by a private vehicle",
      "Snorkeling equipment",
      "English speaking guide",
      "Lunch aboard the snorkeling cruise",
      "Bottled water and soft drinks (One Coke Soft Drinks)",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up & return service to your hotel",
      "All transfers by a private vehicle",
      "Snorkeling equipment",
      "English speaking guide",
      "Lunch aboard the snorkeling cruise",
      "Bottled water and soft drinks (One Coke Soft Drinks)",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "snorkeling-at-mahmya-island",
      "alf-leila-wa-leila-show-in-hurghada",
      "sindbad-submarine-tour-in-hurghada"
    ]
  },
  {
    "id": "la-alf-leila-wa-leila-show-in-hurghada",
    "slug": "alf-leila-wa-leila-show-in-hurghada",
    "title": "Alf Leila Wa Leila Show in Hurghada",
    "category": "Hurghada Tours",
    "destination": "Hurghada & Red Sea",
    "duration": "1001 nights",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service & return to your hotel",
      "All transfers by air conditioned deluxe vehicle",
      "Show ticket and fees",
      "Bottled water and soft drink",
      "English speaking escort assistance",
      "Service charges and taxes included in the price"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service & return to your hotel",
      "All transfers by air conditioned deluxe vehicle",
      "Show ticket and fees",
      "Bottled water and soft drink",
      "English speaking escort assistance",
      "Service charges and taxes included in the price"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "snorkeling-at-mahmya-island",
      "snorkeling-trip-to-giftun-island",
      "sindbad-submarine-tour-in-hurghada"
    ]
  },
  {
    "id": "la-sindbad-submarine-tour-in-hurghada",
    "slug": "sindbad-submarine-tour-in-hurghada",
    "title": "Sindbad Submarine Tour in Hurghada",
    "category": "Hurghada Tours",
    "destination": "Hurghada & Red Sea",
    "duration": "2 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from hotel & return",
      "Transfer from your hotel and return by a modern coach",
      "Bottled of water during your trip",
      "Entrance fees and sumbarine ticket",
      "Guide assistance",
      "All taxes and service charges"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from hotel & return",
      "Transfer from your hotel and return by a modern coach",
      "Bottled of water during your trip",
      "Entrance fees and sumbarine ticket",
      "Guide assistance",
      "All taxes and service charges"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "snorkeling-at-mahmya-island",
      "snorkeling-trip-to-giftun-island",
      "alf-leila-wa-leila-show-in-hurghada"
    ]
  },
  {
    "id": "la-petra-tour-from-sharm-by-cruise",
    "slug": "petra-tour-from-sharm-by-cruise",
    "title": "Petra Tour from Sharm by Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "1 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Sharm & return",
      "All transfers by air-conditioned vehicle",
      "Ferry boat tickets Taba - Aqaba - Taba",
      "Entrance fees to Petra",
      "Short horse ride Petra (700 meters, not mandatory)",
      "English speaking spot guide in Petra (about 3 hrs)",
      "Lunch at local restaurant in Petra",
      "Free bottled water on vehicle",
      "Entry visa to Jordan",
      "All service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Sharm & return",
      "All transfers by air-conditioned vehicle",
      "Ferry boat tickets Taba - Aqaba - Taba",
      "Entrance fees to Petra",
      "Short horse ride Petra (700 meters, not mandatory)",
      "English speaking spot guide in Petra (about 3 hrs)",
      "Lunch at local restaurant in Petra",
      "Free bottled water on vehicle",
      "Entry visa to Jordan",
      "All service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
    "images": [
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-day-trip-to-cairo-from-sharm-by-air",
    "slug": "day-trip-to-cairo-from-sharm-by-air",
    "title": "Day Trip to Cairo from Sharm by Air",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "15972759750Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Sharm and return",
      "All transfers by a private air-conditioned vehicle",
      "Return flight ticket Sharm / Cairo / Sharm",
      "Professional English-speaking Egyptologist guide during your trip",
      "Entrance fees to the mentioned sites in Cairo",
      "Lunch meal at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All taxes and service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Sharm and return",
      "All transfers by a private air-conditioned vehicle",
      "Return flight ticket Sharm / Cairo / Sharm",
      "Professional English-speaking Egyptologist guide during your trip",
      "Entrance fees to the mentioned sites in Cairo",
      "Lunch meal at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All taxes and service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-snorkeling-by-boat-to-ras-mohamed",
    "slug": "snorkeling-by-boat-to-ras-mohamed",
    "title": "Snorkeling by Boat to Ras Mohamed",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "8 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Sharm El Sheikh and return",
      "All transfers by a modern air-conditioned coach",
      "English speaking guide",
      "Entrance fees to Ras Mohamed National Park",
      "Snorkeling equipment",
      "Lunch on board the snorkeling boat",
      "Water & soft drink on board",
      "All services charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Sharm El Sheikh and return",
      "All transfers by a modern air-conditioned coach",
      "English speaking guide",
      "Entrance fees to Ras Mohamed National Park",
      "Snorkeling equipment",
      "Lunch on board the snorkeling boat",
      "Water & soft drink on board",
      "All services charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery",
      "semi-submarine-trip-in-sharm-el-sheikh"
    ]
  },
  {
    "id": "la-scuba-diving-sharm-el-sheikh",
    "slug": "scuba-diving-sharm-el-sheikh",
    "title": "Scuba diving Sharm El Sheikh",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Sharm El Sheikh and return",
      "All transfers by a modern air-conditioned vehicle",
      "English speaking guide",
      "Diving equipment",
      "Lunch on board",
      "Water & soft drink on board",
      "All services charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Sharm El Sheikh and return",
      "All transfers by a modern air-conditioned vehicle",
      "English speaking guide",
      "Diving equipment",
      "Lunch on board",
      "Water & soft drink on board",
      "All services charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "mount-sinai-stcatherine-monastery",
      "semi-submarine-trip-in-sharm-el-sheikh"
    ]
  },
  {
    "id": "la-day-tour-to-luxor-from-sharm-by-air",
    "slug": "day-tour-to-luxor-from-sharm-by-air",
    "title": "Day Tour to Luxor from Sharm by Air",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "10 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel and return",
      "Return flight ticket from Sharm El Skeikh",
      "Meet and assist at Luxor Airport ans Sharm Airport upon arrival & departure",
      "All transfers by a private air-conditioned vehicle",
      "Bottled water on board the vehicle during the tour",
      "Professional English-speaking Egyptologist guide during your trip",
      "Entrance fees to the mentioned historical places",
      "Lunch meal at local restaurant",
      "All taxes and service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel and return",
      "Return flight ticket from Sharm El Skeikh",
      "Meet and assist at Luxor Airport ans Sharm Airport upon arrival & departure",
      "All transfers by a private air-conditioned vehicle",
      "Bottled water on board the vehicle during the tour",
      "Professional English-speaking Egyptologist guide during your trip",
      "Entrance fees to the mentioned historical places",
      "Lunch meal at local restaurant",
      "All taxes and service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-mount-sinai-stcatherine-monastery",
    "slug": "mount-sinai-stcatherine-monastery",
    "title": "Mount Sinai & St.Catherine Monastery",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "15 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Sharm and return",
      "All transfers by an air-conditioned vehicle",
      "Entrance fees to St. Catherine National Park",
      "Bedouin guide during climbing up the mountain",
      "Lunch at local resturant in Dahab",
      "Bottled water and soft drink on board the vehicle",
      "All services charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Sharm and return",
      "All transfers by an air-conditioned vehicle",
      "Entrance fees to St. Catherine National Park",
      "Bedouin guide during climbing up the mountain",
      "Lunch at local resturant in Dahab",
      "Bottled water and soft drink on board the vehicle",
      "All services charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "semi-submarine-trip-in-sharm-el-sheikh"
    ]
  },
  {
    "id": "la-semi-submarine-trip-in-sharm-el-sheikh",
    "slug": "semi-submarine-trip-in-sharm-el-sheikh",
    "title": "Semi Submarine Trip in Sharm El Sheikh",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "2 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up from your hotel in Sharm and return",
      "All transfers by a modern air-conditioned vehicle",
      "An hour in the Submarine under water.",
      "One soft drink aboard cruise",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up from your hotel in Sharm and return",
      "All transfers by a modern air-conditioned vehicle",
      "An hour in the Submarine under water.",
      "One soft drink aboard cruise",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery"
    ]
  },
  {
    "id": "la-snorkeling-trip-to-tiran-island",
    "slug": "snorkeling-trip-to-tiran-island",
    "title": "Snorkeling Trip to Tiran Island",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "8 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up from your hotel in Sharm and return",
      "All transfers by a modern air-conditioned coach",
      "Cruise yacht ticket and fees",
      "Snorkeling equipment",
      "Lunch meal aboard the cruise yacht",
      "Bottled water on board cruise",
      "Snorkeling guide aboard cruise and on the beach",
      "All Service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up from your hotel in Sharm and return",
      "All transfers by a modern air-conditioned coach",
      "Cruise yacht ticket and fees",
      "Snorkeling equipment",
      "Lunch meal aboard the cruise yacht",
      "Bottled water on board cruise",
      "Snorkeling guide aboard cruise and on the beach",
      "All Service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery"
    ]
  },
  {
    "id": "la-quad-biking-with-camel-ride-and-bedouin-dinner",
    "slug": "quad-biking-with-camel-ride-and-bedouin-dinner",
    "title": "Quad biking with Camel ride and Bedouin dinner",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "4 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up from hotel to quad-bike station and back",
      "Professional quad-bike guide for your assistance",
      "Quad-bike ticket and fees",
      "Panorama view and Sunset attendance",
      "Camel ride in the desert of Sharm El Sheikh",
      "Bedouin Village Tour with Bedouin Tea",
      "Barbeque dinner with mineral water and soft drinks",
      "All service charge and taxes are included in the price"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up from hotel to quad-bike station and back",
      "Professional quad-bike guide for your assistance",
      "Quad-bike ticket and fees",
      "Panorama view and Sunset attendance",
      "Camel ride in the desert of Sharm El Sheikh",
      "Bedouin Village Tour with Bedouin Tea",
      "Barbeque dinner with mineral water and soft drinks",
      "All service charge and taxes are included in the price"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery"
    ]
  },
  {
    "id": "la-st-catherine-tour-from-sharm",
    "slug": "st-catherine-tour-from-sharm",
    "title": "St. Catherine Tour from Sharm",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "12 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Sharm El Sheikh",
      "All transfers by air conditioned deluxe vehicle",
      "Entrance fees to St. Catherine",
      "English speaking tour guide",
      "Lunch at local restaurant in Dahab",
      "Mineral Water and soft drinks(One Coke Soft Drinks) on board the vehicle",
      "All taxes and service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Sharm El Sheikh",
      "All transfers by air conditioned deluxe vehicle",
      "Entrance fees to St. Catherine",
      "English speaking tour guide",
      "Lunch at local restaurant in Dahab",
      "Mineral Water and soft drinks(One Coke Soft Drinks) on board the vehicle",
      "All taxes and service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery"
    ]
  },
  {
    "id": "la-alf-leila-wa-leila-show-sharm-el-sheikh",
    "slug": "alf-leila-wa-leila-show-sharm-el-sheikh",
    "title": "Alf Leila Wa Leila Show Sharm El Sheikh",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "1001 nights",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Sharm & return",
      "All transfers by a private air-conditioned deluxe vehicle",
      "Entrance fees to Alf Leila Wa Liela Show",
      "Dinner before the Show",
      "Bottled water on board the car",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Sharm & return",
      "All transfers by a private air-conditioned deluxe vehicle",
      "Entrance fees to Alf Leila Wa Liela Show",
      "Dinner before the Show",
      "Bottled water on board the car",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery"
    ]
  },
  {
    "id": "la-scuba-diving-marsa-alam",
    "slug": "scuba-diving-marsa-alam",
    "title": "Scuba diving Marsa Alam",
    "category": "Marsa Alam Tours",
    "destination": "Marsa Alam",
    "duration": "8 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "You will have the chance to dive deep into the Red Sea exploring its beautiful and marvelous Coral Reefs and its astonishing colored fish in Marsa Alam.",
      "Spend a day out on the water learning to scuba dive on an 8-hour experience in Hurghada. This trip is suited for beginners and experts alike who simply want to enjoy the waters of the Red Sea. After pick-up, you will be taken out on a boat to your first diving spot.",
      "Our instructors will guide you around the location and explain the specifics of the diving site. Then head into the sea and explore the underwater realm. Once your first dive ends, enjoy an onboard lunch. Then you will move to a new site for the second dive. then come back to your hotel."
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Marsa Alam and return",
      "All transfers by a modern air-conditioned vehicle",
      "English speaking guide",
      "Diving equipment",
      "Lunch on board the snorkeling boat",
      "Water & soft drink on board",
      "All services charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "snorkeling-trip-at-hamata-islands-from-marsa-alam",
      "tour-to-edfu-and-kom-ombo-from-marsa-alam",
      "snorkeling-trip-at-port-ghalib-marina-from-marsa-alam"
    ]
  },
  {
    "id": "la-bedouin-safari-and-star-gazing-tour",
    "slug": "bedouin-safari-and-star-gazing-tour",
    "title": "Bedouin Safari and Star Gazing Tour",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "5 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Sharm and return",
      "All transfers by an air-conditioned vehicle",
      "Camel ride in the desert of Sharm El Sheikh",
      "Bedouin Village Tour with Bedouin Tea",
      "Barbeque dinner with mineral water and soft drinks",
      "All services charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Sharm and return",
      "All transfers by an air-conditioned vehicle",
      "Camel ride in the desert of Sharm El Sheikh",
      "Bedouin Village Tour with Bedouin Tea",
      "Barbeque dinner with mineral water and soft drinks",
      "All services charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery"
    ]
  },
  {
    "id": "la-day-trip-to-luxor-from-marsa-alam",
    "slug": "day-trip-to-luxor-from-marsa-alam",
    "title": "Day Trip to Luxor from Marsa Alam",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "1 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel and return.",
      "Tour to Hatshepsut, Valley of the Kings.",
      "Tour to Karnak, Colossi of Memnon .",
      "Shopping through famous Bazaars.",
      "Service of professional tour guide.",
      "Entrance fees to the sights.",
      "Lunch at quality restaurant.",
      "Bottled water during your trip.",
      "Assistance of our personal during tours",
      "All transfers by air-conditioned vehicle"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel and return.",
      "Tour to Hatshepsut, Valley of the Kings.",
      "Tour to Karnak, Colossi of Memnon .",
      "Shopping through famous Bazaars.",
      "Service of professional tour guide.",
      "Entrance fees to the sights.",
      "Lunch at quality restaurant.",
      "Bottled water during your trip.",
      "Assistance of our personal during tours",
      "All transfers by air-conditioned vehicle"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-2-day-trip-to-cairo-from-marsa-alam",
    "slug": "2-day-trip-to-cairo-from-marsa-alam",
    "title": "2 Day Trip to Cairo from Marsa Alam",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "2 days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Internal flight ticket (Hurghada/Cairo/Hurghada)",
      "Pick up services from your hotel in Marsa Alam and return",
      "Accommodation in Cairo at Le Meridien Pyramids Hotel and Spa with breakfast",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo",
      "Two Lunch during tours in Cairo",
      "Bottled water on board the vehicle",
      "Shopping tours through out Khan El Khalili bazaars",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Marsa Alam/ Pyramids Tours"
      },
      {
        "title": "Day 2",
        "description": "Cairo Tours/ Back to Marsa Alam"
      }
    ],
    "inclusions": [
      "Internal flight ticket (Hurghada/Cairo/Hurghada)",
      "Pick up services from your hotel in Marsa Alam and return",
      "Accommodation in Cairo at Le Meridien Pyramids Hotel and Spa with breakfast",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo",
      "Two Lunch during tours in Cairo",
      "Bottled water on board the vehicle",
      "Shopping tours through out Khan El Khalili bazaars",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-sharm-el-sheikh-city-tour",
    "slug": "sharm-el-sheikh-city-tour",
    "title": "Sharm El Sheikh City Tour",
    "category": "Sharm El Sheikh Tours",
    "destination": "Sharm El Sheikh",
    "duration": "4 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Sharm El Sheikh and return",
      "All transfers by a modern air-conditioned vehicle",
      "English speaking guide",
      "Soft drinks",
      "Dinner Mix Grill at local restaurant ( El Masryoun)"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Sharm El Sheikh and return",
      "All transfers by a modern air-conditioned vehicle",
      "English speaking guide",
      "Soft drinks",
      "Dinner Mix Grill at local restaurant ( El Masryoun)"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "snorkeling-by-boat-to-ras-mohamed",
      "scuba-diving-sharm-el-sheikh",
      "mount-sinai-stcatherine-monastery"
    ]
  },
  {
    "id": "la-cairo-tour-from-marsa-alam-by-flight",
    "slug": "cairo-tour-from-marsa-alam-by-flight",
    "title": "Cairo Tour from Marsa Alam by Flight",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "20 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Marsa Alam and return",
      "Return flight ticket from Hurghada",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All Service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Marsa Alam and return",
      "Return flight ticket from Hurghada",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All Service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-snorkeling-trip-at-hamata-islands-from-marsa-alam",
    "slug": "snorkeling-trip-at-hamata-islands-from-marsa-alam",
    "title": "Snorkeling Trip at Hamata Islands From Marsa Alam",
    "category": "Marsa Alam Tours",
    "destination": "Marsa Alam",
    "duration": "7 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Marsa Alam",
      "Transportation by air-conditioned vehicle to / from your hotel in Marsa Alam",
      "English speaking guide during the day trip",
      "Snorkeling trip by boat include 3 stops for snorkel",
      "Snorkeling equipments ( mask - fins ) are included",
      "Lunch meal on board the boat",
      "Speed boat",
      "Mineral water and soft drinks on board the boat",
      "Service charges and taxes included"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Marsa Alam",
      "Transportation by air-conditioned vehicle to / from your hotel in Marsa Alam",
      "English speaking guide during the day trip",
      "Snorkeling trip by boat include 3 stops for snorkel",
      "Snorkeling equipments ( mask - fins ) are included",
      "Lunch meal on board the boat",
      "Speed boat",
      "Mineral water and soft drinks on board the boat",
      "Service charges and taxes included"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "scuba-diving-marsa-alam",
      "tour-to-edfu-and-kom-ombo-from-marsa-alam",
      "snorkeling-trip-at-port-ghalib-marina-from-marsa-alam"
    ]
  },
  {
    "id": "la-tour-to-edfu-and-kom-ombo-from-marsa-alam",
    "slug": "tour-to-edfu-and-kom-ombo-from-marsa-alam",
    "title": "Tour to Edfu and Kom Ombo from Marsa Alam",
    "category": "Marsa Alam Tours",
    "destination": "Marsa Alam",
    "duration": "1 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Marsa Alam and return",
      "English Egyptologist guide",
      "Entrance fees to the mentioned historical places",
      "All transfers by a modern air-conditioned vehicle",
      "Lunch at local restaurant",
      "Bottled of water during your trip",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Marsa Alam and return",
      "English Egyptologist guide",
      "Entrance fees to the mentioned historical places",
      "All transfers by a modern air-conditioned vehicle",
      "Lunch at local restaurant",
      "Bottled of water during your trip",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "scuba-diving-marsa-alam",
      "snorkeling-trip-at-hamata-islands-from-marsa-alam",
      "snorkeling-trip-at-port-ghalib-marina-from-marsa-alam"
    ]
  },
  {
    "id": "la-cairo-day-tour-from-dahab-by-flight",
    "slug": "cairo-day-tour-from-dahab-by-flight",
    "title": "Cairo Day Tour from Dahab by Flight",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "12 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Dahab and return",
      "Return flight ticket from Sharm El Sheikh",
      "All transfers by a private air-conditioned vehicle",
      "Entrance fees to all the mentioned sites",
      "Private English speaking guide",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant in Cairo",
      "All Service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Dahab and return",
      "Return flight ticket from Sharm El Sheikh",
      "All transfers by a private air-conditioned vehicle",
      "Entrance fees to all the mentioned sites",
      "Private English speaking guide",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant in Cairo",
      "All Service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-overnight-trip-to-luxor-from-marsa-alam",
    "slug": "overnight-trip-to-luxor-from-marsa-alam",
    "title": "Overnight Trip to Luxor from Marsa Alam",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel and return",
      "Tour to Hatshepsut Temple and Valley of the Kings",
      "Tour to Karnak Temple and Luxor Temple",
      "Shopping through famous Bazaars",
      "Service of professional tour guide",
      "Accommodation at 5* hotel with breakfast, Sonesta Hotel",
      "Entrance fees to the sights.",
      "Lunch at quality restaurant",
      "Bottled water during your trip",
      "Assistance of our personal during tours",
      "All transfers by air-conditioned vehicle"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Marsa Alam /Luxor Sightseeing Tours"
      },
      {
        "title": "Day 2",
        "description": "Luxor Sightseeing Tours/ Marsa Alam"
      }
    ],
    "inclusions": [
      "Pick up services from your hotel and return",
      "Tour to Hatshepsut Temple and Valley of the Kings",
      "Tour to Karnak Temple and Luxor Temple",
      "Shopping through famous Bazaars",
      "Service of professional tour guide",
      "Accommodation at 5* hotel with breakfast, Sonesta Hotel",
      "Entrance fees to the sights.",
      "Lunch at quality restaurant",
      "Bottled water during your trip",
      "Assistance of our personal during tours",
      "All transfers by air-conditioned vehicle"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-snorkeling-trip-at-port-ghalib-marina-from-marsa-alam",
    "slug": "snorkeling-trip-at-port-ghalib-marina-from-marsa-alam",
    "title": "Snorkeling Trip At Port Ghalib Marina from Marsa Alam",
    "category": "Marsa Alam Tours",
    "destination": "Marsa Alam",
    "duration": "7 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Marsa Alam",
      "Transportation by air-conditioned vehicle to / from your hotel in Marsa Alam",
      "Snorkeling trip by boat include 2 or 3 snorkeling stops",
      "Snorkeling equipments ( mask - fins ) are included",
      "Lunch meal on board the boat",
      "Speed boat",
      "Mineral water and soft drinks on board the boat",
      "Guide assistance on board the boat",
      "Service charges and taxes included"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Marsa Alam",
      "Transportation by air-conditioned vehicle to / from your hotel in Marsa Alam",
      "Snorkeling trip by boat include 2 or 3 snorkeling stops",
      "Snorkeling equipments ( mask - fins ) are included",
      "Lunch meal on board the boat",
      "Speed boat",
      "Mineral water and soft drinks on board the boat",
      "Guide assistance on board the boat",
      "Service charges and taxes included"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "scuba-diving-marsa-alam",
      "snorkeling-trip-at-hamata-islands-from-marsa-alam",
      "tour-to-edfu-and-kom-ombo-from-marsa-alam"
    ]
  },
  {
    "id": "la-tour-to-cairo-luxor-from-marsa-alam-by-flight",
    "slug": "tour-to-cairo-luxor-from-marsa-alam-by-flight",
    "title": "Tour to Cairo & Luxor from Marsa Alam by Flight",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "2 days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Internal flight ticket (Hurghada/Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Marsa Alam and return",
      "Accommodation in Luxor at 5* hotel, Sonesta St George Hotel with breakfast",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Marsa Alam by private vehicle",
      "Lunch at local restaurant during tour in Cairo and Luxor",
      "Bottled water on board the vehicle",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Fly To Cairo / Cairo Tours / Fly to Luxor"
      },
      {
        "title": "Day 2",
        "description": "Luxor Tours/ Drive Back to Marsa Alam"
      }
    ],
    "inclusions": [
      "Internal flight ticket (Hurghada/Cairo - Cairo/ Luxor)",
      "Pick up services from your hotel in Marsa Alam and return",
      "Accommodation in Luxor at 5* hotel, Sonesta St George Hotel with breakfast",
      "All transfers by private air-conditioned vehicle",
      "Private English speaking guide throughout tours",
      "Entrance fees to all the sights in Cairo and Luxor",
      "Transfer from Luxor to Marsa Alam by private vehicle",
      "Lunch at local restaurant during tour in Cairo and Luxor",
      "Bottled water on board the vehicle",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-two-day-tour-to-cairo-and-luxor-from-dahab",
    "slug": "two-day-tour-to-cairo-and-luxor-from-dahab",
    "title": "Two Day Tour to Cairo and Luxor from Dahab",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Dahab and return",
      "Internal flight ticket (Sharm /Cairo - Cairo/ Luxor - Luxor/ Sharm)",
      "All transfers by private air-conditioned vehicle",
      "Accommodation in Luxor at hotel with breakfast",
      "Private English-speaking Egyptologist guide throughout tours",
      "Entrance fees to all mentioned sights in Cairo and Luxor",
      "Lunch at local restaurant during tour in Cairo and Luxor",
      "Bottled water on board the vehicle",
      "All services charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Dahab Fly To Cairo / Cairo Tours / Cairo Fly to Luxor"
      },
      {
        "title": "Day 2",
        "description": "Luxor Tours/ Fly Back to Dahab"
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Dahab and return",
      "Internal flight ticket (Sharm /Cairo - Cairo/ Luxor - Luxor/ Sharm)",
      "All transfers by private air-conditioned vehicle",
      "Accommodation in Luxor at hotel with breakfast",
      "Private English-speaking Egyptologist guide throughout tours",
      "Entrance fees to all mentioned sights in Cairo and Luxor",
      "Lunch at local restaurant during tour in Cairo and Luxor",
      "Bottled water on board the vehicle",
      "All services charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-st-catherine-tour-from-dahab",
    "slug": "st-catherine-tour-from-dahab",
    "title": "St. Catherine Tour from Dahab",
    "category": "Dahab Tours",
    "destination": "Dahab",
    "duration": "6 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up service from your hotel in Dahab",
      "All transfers by air-conditioned deluxe vehicle",
      "Entrance fees to St. Catherine",
      "English speaking tour guide",
      "Lunch at local restaurant in Dahab",
      "Mineral Water on board the vehicle",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up service from your hotel in Dahab",
      "All transfers by air-conditioned deluxe vehicle",
      "Entrance fees to St. Catherine",
      "English speaking tour guide",
      "Lunch at local restaurant in Dahab",
      "Mineral Water on board the vehicle",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": []
  },
  {
    "id": "la-standard-nile-cruises",
    "slug": "standard-nile-cruises",
    "title": "Standard Nile Cruises",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 nights",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "In Egypt, you can have a truly special experience to sail via the longest river in the world which is called \"The Nile River\". To have such an exceptional tour,...",
    "overview": "In Egypt, you can have a truly special experience to sail via the longest river in the world which is called \"The Nile River\". To have such an exceptional tour, you need to get on the board of a Nile cruise putting in mind that there are tens of different Nile Cruises from different categories. The most recommended Nile cruise categories in Egypt are the 5* and the 5* High Deluxe category. Prices differ from a cruise to another based on the facilities on each cruise and the time you would like to visit Egypt in and to check the best possible Nile River Cruise with the different guided prices, kindly check our best suggested",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "In Egypt, you can have a truly special experience to sail via the longest river in the world which is called \"The Nile River\". To have such an exceptional tour, you need to get on the board of a Nile cruise putting in mind that there are tens of different Nile Cruises from different categories. The most recommended Nile cruise categories in Egypt are the 5* and the 5* High Deluxe category. Prices differ from a cruise to another based on the facilities on each cruise and the time you would like to visit Egypt in and to check the best possible Nile River Cruise with the different guided prices, kindly check our best suggested"
      }
    ],
    "inclusions": [
      "Private transportation in a modern, air-conditioned tourist vehicle",
      "Certified licensed Egyptologist guide (fluent in English)",
      "Door-to-door hotel or port pickup and drop-off",
      "All service charges, tolls, and local taxes",
      "Complimentary chilled bottled water during transit"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-deluxe-nile-cruises",
    "slug": "deluxe-nile-cruises",
    "title": "Deluxe Nile Cruises",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "In Egypt, you can have a truly special experience to sail via the longest river in the world which is called \"The Nile River\". To have such an exceptional tour,...",
    "overview": "In Egypt, you can have a truly special experience to sail via the longest river in the world which is called \"The Nile River\". To have such an exceptional tour, you need to get on the board of a Nile cruise putting in mind that there are tens of different Nile Cruises from different categories. The most recommended Nile cruise categories in Egypt are the 5* and the 5* High Deluxe category. Prices differ from a cruise to another based on the facilities on each cruise and the time you would like to visit Egypt in and to check the best possible Nile River Cruise with the different guided prices, kindly check our best suggested",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "In Egypt, you can have a truly special experience to sail via the longest river in the world which is called \"The Nile River\". To have such an exceptional tour, you need to get on the board of a Nile cruise putting in mind that there are tens of different Nile Cruises from different categories. The most recommended Nile cruise categories in Egypt are the 5* and the 5* High Deluxe category. Prices differ from a cruise to another based on the facilities on each cruise and the time you would like to visit Egypt in and to check the best possible Nile River Cruise with the different guided prices, kindly check our best suggested"
      }
    ],
    "inclusions": [
      "Private transportation in a modern, air-conditioned tourist vehicle",
      "Certified licensed Egyptologist guide (fluent in English)",
      "Door-to-door hotel or port pickup and drop-off",
      "All service charges, tolls, and local taxes",
      "Complimentary chilled bottled water during transit"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-luxor-day-trip-from-dahab-by-flight",
    "slug": "luxor-day-trip-from-dahab-by-flight",
    "title": "Luxor Day Trip from Dahab by Flight",
    "category": "Luxor Tours",
    "destination": "Luxor",
    "duration": "12 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from your hotel in Dahab and return",
      "Return flight ticket from Sharm / Luxor / Sharm",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant",
      "Shopping tours in Luxor",
      "All Service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from your hotel in Dahab and return",
      "Return flight ticket from Sharm / Luxor / Sharm",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant",
      "Shopping tours in Luxor",
      "All Service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "day-trip-to-luxor-from-cairo-by-air",
      "private-tour-to-the-west-bank",
      "private-tour-to-the-east-bank"
    ]
  },
  {
    "id": "la-two-day-tour-to-cairo-from-dahab",
    "slug": "two-day-tour-to-cairo-from-dahab",
    "title": "Two Day Tour to Cairo from Dahab",
    "category": "Cairo Tours",
    "destination": "Cairo & Giza",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Return flight ticket from Dahab",
      "Pick up services from your hotel and return",
      "Assistance of our personnel during your tours",
      "All transfers by air-conditioned deluxe vehicle",
      "English speaking tour guide fees",
      "Entrance fees to the sights",
      "Lunch during tours in Cairo at quality restaurant",
      "Shopping tours through Cairo famous Bazaars",
      "Bottled water during tours in Cairo",
      "Accommodation in Cairo for 1 night at hotel with breakfast",
      "All services charges and taxes included in your price included"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Dahab Fly To Cairo / Giza Sightseeing Tours"
      },
      {
        "title": "Day 2",
        "description": "Cairo Sightseeing Tours / Fly Back to Dahab"
      }
    ],
    "inclusions": [
      "Return flight ticket from Dahab",
      "Pick up services from your hotel and return",
      "Assistance of our personnel during your tours",
      "All transfers by air-conditioned deluxe vehicle",
      "English speaking tour guide fees",
      "Entrance fees to the sights",
      "Lunch during tours in Cairo at quality restaurant",
      "Shopping tours through Cairo famous Bazaars",
      "Bottled water during tours in Cairo",
      "Accommodation in Cairo for 1 night at hotel with breakfast",
      "All services charges and taxes included in your price included"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "day-tour-to-pyramids-memphis-and-sakkara",
      "stopover-tour-of-cairo",
      "day-tour-to-alexandria-from-cairo-by-car"
    ]
  },
  {
    "id": "la-luxury-nile-cruise",
    "slug": "luxury-nile-cruise",
    "title": "Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "4 Days / 3 Nights",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Your journey is designed around your requirements, with local expertise and personal support at every step....",
    "overview": "Your journey is designed around your requirements, with local expertise and personal support at every step.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Your journey is designed around your requirements, with local expertise and personal support at every step."
      }
    ],
    "inclusions": [
      "Private transportation in a modern, air-conditioned tourist vehicle",
      "Certified licensed Egyptologist guide (fluent in English)",
      "Door-to-door hotel or port pickup and drop-off",
      "All service charges, tolls, and local taxes",
      "Complimentary chilled bottled water during transit"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-three-pyramids-dahabiya-nile-cruise",
    "slug": "three-pyramids-dahabiya-nile-cruise",
    "title": "Three Pyramids Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Friday"
      },
      {
        "title": "Day 02",
        "description": "Saturday"
      },
      {
        "title": "Day 03",
        "description": "Sunday"
      },
      {
        "title": "Day 04",
        "description": "Monday"
      },
      {
        "title": "Day 1",
        "description": "Monday"
      },
      {
        "title": "Day 2",
        "description": "Tuesday"
      },
      {
        "title": "Day 3",
        "description": "Wednesday"
      },
      {
        "title": "Day 4",
        "description": "Thursday"
      },
      {
        "title": "Day 5",
        "description": "Friday"
      }
    ],
    "inclusions": [
      "6 double cabins (ca. 13 sqm) with twin or large bed,",
      "1 Suite (ca. 21 sqm) with large bed, private terrace,",
      "Each cabin is measuring 13sqm, has a large bed or twin beds with Egyptian cotton",
      "Large window with a great view of the Nile in the privacy of their room",
      "All cabins have large, panoramic windows",
      "All cabins are air-conditioned",
      "Private bath/shower with hair dryer",
      "Room service",
      "International Telephone",
      "Safe box",
      "Laundry service & housekeeping",
      "Accompanying motorboat to pull it in case wind is calm",
      "Sun Deck",
      "Satellite-TV, DVD player",
      "Oriental seating area",
      "Internet access",
      "Water filter",
      "Voltage 220. 24 hrs electric power supply",
      "Accompanying motorboat to pull it in case wind is calm."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-3-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-meroe-dahabiya-nile-cruise",
    "slug": "meroe-dahabiya-nile-cruise",
    "title": "Meroe Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Nights 6 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Monday - Esna"
      },
      {
        "title": "Day 02",
        "description": "Tuesday - El Kab & Edfu"
      },
      {
        "title": "Day 03",
        "description": "Wednesday - Sail & Swim"
      },
      {
        "title": "Day 04",
        "description": "Thursday - Gebel Silsileh"
      },
      {
        "title": "Day 05",
        "description": "Friday - Kom Ombo"
      },
      {
        "title": "Day 06",
        "description": "Saturday - Aswan"
      }
    ],
    "inclusions": [
      "Meroe boat includes Panoramic Suites, 8 Luxury Rooms and 1 Standard Room",
      "All cabins have large, panoramic windows",
      "Dining facilities, Bars and Reading Lounge.",
      "Sprinkling System, Anti-Fire treatment and full Fire Safety measures.",
      "Doctor on call.",
      "Air Condition on board.",
      "Private bath/shower with hair dryer",
      "Accompanying motorboat to pull it in case wind is calm.",
      "Sun Deck"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-sonesta-amirat-dahabiya-nile-cruise",
    "slug": "sonesta-amirat-dahabiya-nile-cruise",
    "title": "Sonesta Amirat Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "7 Nights 8 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Saturday"
      },
      {
        "title": "Day 2",
        "description": "Sunday"
      },
      {
        "title": "Day 3",
        "description": "Monday"
      },
      {
        "title": "Day 4",
        "description": "Tuesday"
      },
      {
        "title": "Day 5",
        "description": "Wednesday"
      },
      {
        "title": "Day 6",
        "description": "Thursday"
      },
      {
        "title": "Day 7",
        "description": "Friday"
      },
      {
        "title": "Day 8",
        "description": "Saturday"
      },
      {
        "title": "Day 1",
        "description": "Saturday"
      },
      {
        "title": "Day 2",
        "description": "Sunday"
      },
      {
        "title": "Day 3",
        "description": "Monday"
      },
      {
        "title": "Day 4",
        "description": "Tuesday"
      },
      {
        "title": "Day 5",
        "description": "Wednesday"
      },
      {
        "title": "Day 6",
        "description": "Thursday"
      },
      {
        "title": "Day 7",
        "description": "Friday"
      },
      {
        "title": "Day 8",
        "description": "Saturday"
      }
    ],
    "inclusions": [
      "All cabins have large, panoramic windows",
      "Facilities include 5 cabins and 2 suites",
      "Open air oriental-style Jacuzzi",
      "A private direct-dial telephones",
      "Individual climate control, hairdryers",
      "Mini-bar",
      "Safe deposit boxes",
      "Non-smoking",
      "Plasma televisions and movie channels.",
      "Bathrooms equipped with full size tubs",
      "Laundry service & housekeeping",
      "Accompanying motorboat to pull it in case wind is calm."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-princess-farida-luxury-dahabiya-nile-cruise",
    "slug": "princess-farida-luxury-dahabiya-nile-cruise",
    "title": "Princess Farida Luxury Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Private Pickup from Aswan Airport or Hotel",
      "The Dam of Aswan",
      "Temple of Philae",
      "Kom Ombo Temple"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Hello to Princess Farida Dahabiya - Start the Journey"
      },
      {
        "title": "Day 2",
        "description": "Visit to the Temple of Edfu + El Selsela"
      },
      {
        "title": "Day 3",
        "description": "Sail to Luxor - Discover Luxor East Bank in the Afternoon"
      },
      {
        "title": "Day 4",
        "description": "Disembarkation in the morning - Explore the history of Luxor West Bank"
      },
      {
        "title": "Day 1",
        "description": "Hello to Princess Farida Dahabiya - Start the Journey"
      },
      {
        "title": "Day 2",
        "description": "Explore the magnificent history of Luxor West Bank"
      },
      {
        "title": "Day 3",
        "description": "Visit to the Temples of Edfu & Kom Ombu"
      },
      {
        "title": "Day 4",
        "description": "Explore Aswan"
      },
      {
        "title": "Day 5",
        "description": "Good Bye to the Nile - Final Departure"
      }
    ],
    "inclusions": [
      "2 Decks",
      "6 Luxury Suites",
      "2 Royal suites with private terrace",
      "Lounge",
      "Dining Room",
      "Bar",
      "12 Sun beds",
      "8 Sun Deck Private Pergolas",
      "Open Air GYM"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-ultra-deluxe-nile-cruises",
    "slug": "ultra-deluxe-nile-cruises",
    "title": "Ultra Deluxe Nile Cruises",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Your journey is designed around your requirements, with local expertise and personal support at every step....",
    "overview": "Your journey is designed around your requirements, with local expertise and personal support at every step.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Your journey is designed around your requirements, with local expertise and personal support at every step."
      }
    ],
    "inclusions": [
      "Private transportation in a modern, air-conditioned tourist vehicle",
      "Certified licensed Egyptologist guide (fluent in English)",
      "Door-to-door hotel or port pickup and drop-off",
      "All service charges, tolls, and local taxes",
      "Complimentary chilled bottled water during transit"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-amoura-dahabiya-nile-cruise",
    "slug": "amoura-dahabiya-nile-cruise",
    "title": "Amoura Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Friday"
      },
      {
        "title": "Day 2",
        "description": "Saturday"
      },
      {
        "title": "Day 3",
        "description": "sunday"
      },
      {
        "title": "Day 4",
        "description": "Monday"
      },
      {
        "title": "Day 1",
        "description": "Monday"
      },
      {
        "title": "Day 2",
        "description": "Tuesday"
      },
      {
        "title": "Day 3",
        "description": "Wednesday"
      },
      {
        "title": "Day 4",
        "description": "Thursday"
      },
      {
        "title": "Day 5",
        "description": "Friday"
      }
    ],
    "inclusions": [
      "6 double cabins (ca. 13 sqm) with twin or large bed,",
      "1 Suite (ca. 21 sqm) with large bed, private terrace,",
      "Each cabin is measuring 13sqm, has a large bed or twin beds with Egyptian cotton",
      "Large window with a great view of the Nile in the privacy of their room",
      "All cabins have large, panoramic windows",
      "All cabins are air-conditioned",
      "Private bath/shower with hair dryer",
      "Room service",
      "International Telephone",
      "Safe box",
      "Laundry service & housekeeping",
      "Accompanying motorboat to pull it in case wind is calm",
      "Sun Deck",
      "Satellite-TV, DVD player",
      "Oriental seating area",
      "Internet access",
      "Water filter",
      "Voltage 220. 24 hrs electric power supply",
      "Accompanying motorboat to pull it in case wind is calm."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-assouan-dahabiya-nile-cruise",
    "slug": "assouan-dahabiya-nile-cruise",
    "title": "Assouan Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Nights 6 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Monday - Esna"
      },
      {
        "title": "Day 02",
        "description": "Tuesday - El Kab & Edfu"
      },
      {
        "title": "Day 03",
        "description": "Wednesday - Sail & Swim"
      },
      {
        "title": "Day 04",
        "description": "Thursday - Gebel Silsileh"
      },
      {
        "title": "Day 05",
        "description": "Friday - Kom Ombo"
      },
      {
        "title": "Day 06",
        "description": "Saturday - Aswan"
      }
    ],
    "inclusions": [
      "2 Panoramic suites and 6 Standard rooms All cabins have large, panoramic windows",
      "Dining facilities, Bars and Reading Lounge.",
      "Sprinkling System, Anti-Fire treatment and full Fire Safety measures.",
      "Doctor on call.",
      "Air Condition on board.",
      "Private bath/shower with hair dryer",
      "Accompanying motorboat to pull it in case wind is calm.",
      "Sun Deck"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-nour-el-nil-dahabiya-nile-cruise",
    "slug": "nour-el-nil-dahabiya-nile-cruise",
    "title": "Nour El Nil Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Nights 6 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Monday - Esna"
      },
      {
        "title": "Day 02",
        "description": "Tuesday - El Kab & Edfu"
      },
      {
        "title": "Day 03",
        "description": "Wednesday - Sail & Swim"
      },
      {
        "title": "Day 04",
        "description": "Thursday - Gebel Silsileh"
      },
      {
        "title": "Day 05",
        "description": "Friday - Kom Ombo"
      },
      {
        "title": "Day 06",
        "description": "Saturday - Aswan"
      }
    ],
    "inclusions": [
      "El Nil boat includes Panoramic Suites, 7 Luxury Rooms and 1 Standard Room",
      "All cabins have large, panoramic windows",
      "Dining facilities, Bars and Reading Lounge.",
      "Sprinkling System, Anti-Fire treatment and full Fire Safety measures.",
      "Doctor on call.",
      "Air Condition on board.",
      "Private bath/shower with hair dryer",
      "Accompanying motorboat to pull it in case wind is calm.",
      "Sun Deck"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-merit-dahabiya-nile-cruise",
    "slug": "merit-dahabiya-nile-cruise",
    "title": "Merit Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Wednesday"
      },
      {
        "title": "Day 02",
        "description": "Thursday"
      },
      {
        "title": "Day 03",
        "description": "Friday"
      },
      {
        "title": "Day 04",
        "description": "Saturday"
      },
      {
        "title": "Day 1",
        "description": "Saturday"
      },
      {
        "title": "Day 2",
        "description": "Sunday"
      },
      {
        "title": "Day 3",
        "description": "Monday"
      },
      {
        "title": "Day 4",
        "description": "Tuesday"
      },
      {
        "title": "Day 5",
        "description": "Wednesday"
      }
    ],
    "inclusions": [
      "• All cabins have large, panoramic windows",
      "• Fully furnished eight deluxe cabins",
      "• Two cabins with Large Beds and Six cabins Twin Bedded",
      "Two masts sailboat.",
      "Dining facilities, Bars and Reading Lounge.",
      "Open-air Jacuzzi.",
      "Same day laundry service with express pressing service.",
      "Sprinkling System, Anti-Fire treatment and full Fire Safety measures.",
      "Doctor on call 24 hours.",
      "Emergency handling and fire trained staff.",
      "Marine Satellite (Nile Sat Channels)",
      "Internet access (Chargeable).",
      "Music system with daily program.",
      "Boutique and gift shop",
      "Each cabin 17.75m (bathroom 3.75m including)",
      "Panoramic large windows with sound proof.",
      "Individual controlled A/C.",
      "In-cabin electronic personal large safe.",
      "Telephone with voice mail message.",
      "In-cabin coffee and tea tray service.",
      "LCD TV with individual Receiver in each cabin",
      "Hairdryer/Bathrobe.",
      "Cabin bathroom with walk-in shower"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-malouka-dahabiya-nile-cruise",
    "slug": "malouka-dahabiya-nile-cruise",
    "title": "Malouka Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Nights 6 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Monday - Esna"
      },
      {
        "title": "Day 02",
        "description": "Tuesday - El Kab & Edfu"
      },
      {
        "title": "Day 03",
        "description": "Wednesday - Sail & Swim"
      },
      {
        "title": "Day 04",
        "description": "Thursday - Gebel Silsileh"
      },
      {
        "title": "Day 05",
        "description": "Friday - Kom Ombo"
      },
      {
        "title": "Day 06",
        "description": "Saturday - Aswan"
      }
    ],
    "inclusions": [
      "Malouka boat includes Panoramic Suites, 8 Luxury RoomsAll cabins have large, panoramic windows",
      "Dining facilities, Bars and Reading Lounge.",
      "Sprinkling System, Anti-Fire treatment and full Fire Safety measures.",
      "Doctor on call.",
      "Air Condition on board.",
      "Private bath/shower with hair dryer",
      "Accompanying motorboat to pull it in case wind is calm.",
      "Sun Deck"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-abundance-dahabiya-nile-cruise",
    "slug": "abundance-dahabiya-nile-cruise",
    "title": "Abundance Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Friday"
      },
      {
        "title": "Day 2",
        "description": "Saturday"
      },
      {
        "title": "Day 3",
        "description": "sunday"
      },
      {
        "title": "Day 4",
        "description": "Monday"
      },
      {
        "title": "Day 1",
        "description": "Monday"
      },
      {
        "title": "Day 2",
        "description": "Tuesday"
      },
      {
        "title": "Day 3",
        "description": "Wednesday"
      },
      {
        "title": "Day 4",
        "description": "Thursday"
      },
      {
        "title": "Day 5",
        "description": "Friday"
      }
    ],
    "inclusions": [
      "Meet and assist service upon arrival & departure",
      "Assistance of our personal during your stay and excursions",
      "All transfers by a modern air-conditioned deluxe vehicle",
      "Accommodation on board 5 star Dahabiya on full board basis",
      "All Nile Cruise excursions as mentioned in the itinerary",
      "Entrance fees to all sights between Luxor and Aswan",
      "Egyptologist guide during your excursions",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
    "images": [
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-steigenberger-omar-el-khayam-lake-cruise",
    "slug": "steigenberger-omar-el-khayam-lake-cruise",
    "title": "Steigenberger Omar El Khayam Lake Cruise",
    "category": "Lake Nasser Cruises",
    "destination": "Aswan & Abu Simbel",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Embarkation - Visit Abu Simbel"
      },
      {
        "title": "Day 02",
        "description": "Sail to Kasr Ibrim - Visit Amada - Sail to Wadi El Seboua & Overnight"
      },
      {
        "title": "Day 03",
        "description": "Visit Wadi El Seboua Temple - Sail to Aswan"
      },
      {
        "title": "Day 04",
        "description": "Visit Kalabsha Temple - Disembarkation from the Cruise"
      },
      {
        "title": "Day 01",
        "description": "Arrival at Aswan - Aswan Visits & Embark on the Cruise"
      },
      {
        "title": "Day 02",
        "description": "Kalabsha Temple - Sail To Wadi El Sebou"
      },
      {
        "title": "Day 03",
        "description": "Visit of Wadi El Sebou & Dakka"
      },
      {
        "title": "Day 04",
        "description": "Visit of Kasr Ibrim & Abu Simbel"
      },
      {
        "title": "Day 05",
        "description": "Disembarkation from Cruise"
      }
    ],
    "inclusions": [
      "Large Panoramic Window which opens into a balcony",
      "All cabins are fully air conditioned with individual control",
      "Private bath with bath tub, hair dryer",
      "Colored TV within house music and video channels",
      "Dedicated movie channel",
      "Mini Bar",
      "International telephone in Cabins",
      "Safety Box",
      "Luggage Rack",
      "Doctor available 24 hours around the clock",
      "Internet access",
      "Swimming Pool",
      "Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "10-days-of-nile-and-lake-nasser-cruises",
      "ms-nubian-sea-lake-nasser-cruise",
      "movenpick-prince-abbas-lake-cruise"
    ]
  },
  {
    "id": "la-ms-nubian-sea-lake-nasser-cruise",
    "slug": "ms-nubian-sea-lake-nasser-cruise",
    "title": "MS Nubian Sea Lake Nasser Cruise",
    "category": "Lake Nasser Cruises",
    "destination": "Aswan & Abu Simbel",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Embarkation - Visit Abu Simbel"
      },
      {
        "title": "Day 02",
        "description": "Sail to Kasr Ibrim - Visit Amada - Sail to Wadi El Seboua & Overnight"
      },
      {
        "title": "Day 03",
        "description": "Visit Wadi El Seboua Temple - Sail to Aswan"
      },
      {
        "title": "Day 04",
        "description": "Visit Kalabsha Temple - Disembarkation from the Cruise"
      },
      {
        "title": "Day 01",
        "description": "Arrival at Aswan - Aswan Visits & Embark on the Cruise"
      },
      {
        "title": "Day 02",
        "description": "Kalabsha Temple - Sail To Wadi El Sebou"
      },
      {
        "title": "Day 03",
        "description": "Visit of Wadi El Sebou & Dakka"
      },
      {
        "title": "Day 04",
        "description": "Visit of Kasr Ibrim & Abu Simbel"
      },
      {
        "title": "Day 05",
        "description": "Disembarkation from Cruise"
      }
    ],
    "inclusions": [
      "Panoramic Windows",
      "Private bath with hair dryer",
      "Colored TV within house music and video channels",
      "Dedicated movie channel",
      "Mini Bar",
      "First aid box",
      "Fully air-conditioned with individually controlled",
      "International telephone in Cabins",
      "Safety Box",
      "Luggage Rack",
      "Doctor available 24 hours around the clock. Appointments or emergency calls in advance.",
      "Visa and Master Card accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
    "images": [
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "10-days-of-nile-and-lake-nasser-cruises",
      "steigenberger-omar-el-khayam-lake-cruise",
      "movenpick-prince-abbas-lake-cruise"
    ]
  },
  {
    "id": "la-2-days-tour-to-cairo-and-luxor-from-safaga-port",
    "slug": "2-days-tour-to-cairo-and-luxor-from-safaga-port",
    "title": "2 Days Tour to Cairo And Luxor from Safaga Port",
    "category": "Shore Excursions",
    "destination": "Safaga Port",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Safaga Port & return.",
      "Private transfer from Safaga Port to Hurghada airport.",
      "Private transfer from Luxor to Safaga Port.",
      "Domestic flights (Hurghada - Cairo & Cairo - Luxor).",
      "All transfers by an air-conditioned vehicle",
      "Accommodation for a night at 5* Hotel in Luxor.",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during your tour",
      "Lunch meals at local restaurant",
      "Shopping tours in Luxor",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Fly from Hurghada to Cairo, Visit Pyramids and Egyptian Museum, Fly to Luxor - Overnight Luxor"
      },
      {
        "title": "Day 02",
        "description": "Karnak Temples, Valley of the Kings, Hatshipsit temple, Colossi of Memnon - Drive back to Safaga Port"
      }
    ],
    "inclusions": [
      "Pick up services from Safaga Port & return.",
      "Private transfer from Safaga Port to Hurghada airport.",
      "Private transfer from Luxor to Safaga Port.",
      "Domestic flights (Hurghada - Cairo & Cairo - Luxor).",
      "All transfers by an air-conditioned vehicle",
      "Accommodation for a night at 5* Hotel in Luxor.",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during your tour",
      "Lunch meals at local restaurant",
      "Shopping tours in Luxor",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port",
      "day-tour-to-alexandria-city"
    ]
  },
  {
    "id": "la-luxor-day-tour-from-safaga-port",
    "slug": "luxor-day-tour-from-safaga-port",
    "title": "Luxor Day Tour from Safaga Port",
    "category": "Shore Excursions",
    "destination": "Safaga Port",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Safaga Port & return",
      "All transfers by an air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during your tour",
      "Lunch meal at local restaurant",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Safaga Port & return",
      "All transfers by an air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during your tour",
      "Lunch meal at local restaurant",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port",
      "day-tour-to-alexandria-city"
    ]
  },
  {
    "id": "la-jasmine-dahabiya-nile-cruise",
    "slug": "jasmine-dahabiya-nile-cruise",
    "title": "Jasmine Dahabiya Nile Cruise",
    "category": "Dahabiya Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Wednesday"
      },
      {
        "title": "Day 02",
        "description": "Thursday"
      },
      {
        "title": "Day 03",
        "description": "Friday"
      },
      {
        "title": "Day 04",
        "description": "Saturday"
      },
      {
        "title": "Day 1",
        "description": "Saturday"
      },
      {
        "title": "Day 2",
        "description": "Sunday"
      },
      {
        "title": "Day 3",
        "description": "Monday"
      },
      {
        "title": "Day 4",
        "description": "Tuesday"
      },
      {
        "title": "Day 5",
        "description": "Wednesday"
      }
    ],
    "inclusions": [
      "24 hours reception",
      "International telephone and fax service",
      "Internet service",
      "Large Panoramic window",
      "Main Dining Room, Lounge, Sun Deck Bar",
      "Marine satellite TV",
      "Music system",
      "Pool bar",
      "Private bathroom with W/C, shower and hairdryer",
      "Jacuzzi"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "9-day-cairo-and-luxury-dahabiya-nile-cruise",
      "8-day-cairo-and-dahabiya-nile-cruise",
      "4-day-amoura-dahabiya-nile-cruise-aswan-to-esna"
    ]
  },
  {
    "id": "la-movenpick-prince-abbas-lake-cruise",
    "slug": "movenpick-prince-abbas-lake-cruise",
    "title": "Movenpick Prince Abbas Lake Cruise",
    "category": "Lake Nasser Cruises",
    "destination": "Aswan & Abu Simbel",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Embarkation - Visit Abu Simbel"
      },
      {
        "title": "Day 02",
        "description": "Sail to Kasr Ibrim - Visit Amada - Sail to Wadi El Seboua & Overnight"
      },
      {
        "title": "Day 03",
        "description": "Visit Wadi El Seboua Temple - Sail to Aswan"
      },
      {
        "title": "Day 04",
        "description": "Visit Kalabsha Temple - Disembarkation from the Cruise"
      },
      {
        "title": "Day 01",
        "description": "Arrival at Aswan - Aswan Visits & Embark on the Cruise"
      },
      {
        "title": "Day 02",
        "description": "Kalabsha Temple - Sail To Wadi El Sebou"
      },
      {
        "title": "Day 03",
        "description": "Visit of Wadi El Sebou & Dakka"
      },
      {
        "title": "Day 04",
        "description": "Visit of Kasr Ibrim & Abu Simbel"
      },
      {
        "title": "Day 05",
        "description": "Disembarkation from Cruise"
      }
    ],
    "inclusions": [
      "Large Panoramic Window which opens into a balcony",
      "Sauna & oriental steam bath",
      "Private bath with hair dryer",
      "Colored TV within house music and video channels",
      "Dedicated movie channel",
      "Mini Bar",
      "First aid box",
      "Individually controlled Air Condition",
      "International telephone in Cabins",
      "State-of-the-art water filtration systems",
      "Safety Box",
      "Luggage Rack",
      "Doctor available 24 hours around the clock. Appointments or emergency calls half an hour in advance.",
      "Internet and fax availability",
      "Visa and Master Card accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp"
    ],
    "relatedSlugs": [
      "10-days-of-nile-and-lake-nasser-cruises",
      "steigenberger-omar-el-khayam-lake-cruise",
      "ms-nubian-sea-lake-nasser-cruise"
    ]
  },
  {
    "id": "la-two-day-trip-to-luxor-from-safaga-port",
    "slug": "two-day-trip-to-luxor-from-safaga-port",
    "title": "Two Day Trip to Luxor from Safaga port",
    "category": "Shore Excursions",
    "destination": "Safaga Port",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Safaga Port & return (at the cruise exit door)",
      "All transfers by an air-conditioned vehicle",
      "Accommodation for a night at 5* Hotel, Sonesta St. George Luxor Hotel.",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during your tour",
      "Lunch meals at local restaurant",
      "Shopping tours in Luxor",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Karnak& Luxor Temples."
      },
      {
        "title": "Day 02",
        "description": "Luxor West Bank &"
      }
    ],
    "inclusions": [
      "Pick up services from Safaga Port & return (at the cruise exit door)",
      "All transfers by an air-conditioned vehicle",
      "Accommodation for a night at 5* Hotel, Sonesta St. George Luxor Hotel.",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Bottled water on board the vehicle during your tour",
      "Lunch meals at local restaurant",
      "Shopping tours in Luxor",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "day-tour-to-alexandria-city"
    ]
  },
  {
    "id": "la-day-tour-to-alexandria-city",
    "slug": "day-tour-to-alexandria-city",
    "title": "Day Tour to Alexandria City",
    "category": "Shore Excursions",
    "destination": "Alexandria Port",
    "duration": "6 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicles",
      "Private English speaking Guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant",
      "All Service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicles",
      "Private English speaking Guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch meal at local restaurant",
      "All Service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-snorkeling-trip-excursion-from-safaga-port",
    "slug": "snorkeling-trip-excursion-from-safaga-port",
    "title": "Snorkeling Trip & Excursion from Safaga Port",
    "category": "Shore Excursions",
    "destination": "Red Sea / Mediterranean",
    "duration": "10 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Safaga Port & return (at the cruise exit door)",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking representative",
      "Snorkeling equipment",
      "Lunch on borad the cruise",
      "Mineral water & soft drinks on board the cruise",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Safaga Port & return (at the cruise exit door)",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking representative",
      "Snorkeling equipment",
      "Lunch on borad the cruise",
      "Mineral water & soft drinks on board the cruise",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-overnight-tour-to-cairo-and-alexandria",
    "slug": "overnight-tour-to-cairo-and-alexandria",
    "title": "Overnight Tour to Cairo and Alexandria",
    "category": "Shore Excursions",
    "destination": "Alexandria Port",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation for a night at 5* hotel Hotel",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at local restaurant in Cairo & Alexandria",
      "Bottled water on board the vehicle during the tour",
      "All Service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Pyramids Tour / Egyptian Museum"
      },
      {
        "title": "Day 02",
        "description": "Alexandria Sights"
      }
    ],
    "inclusions": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation for a night at 5* hotel Hotel",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at local restaurant in Cairo & Alexandria",
      "Bottled water on board the vehicle during the tour",
      "All Service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-day-trip-to-the-pyramids-the-nile",
    "slug": "day-trip-to-the-pyramids-the-nile",
    "title": "Day Trip to the Pyramids & the Nile",
    "category": "Shore Excursions",
    "destination": "Red Sea / Mediterranean",
    "duration": "12 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking tour guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch on Nile Cruise during sailing",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking tour guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch on Nile Cruise during sailing",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-day-tour-to-cairo-from-alexandria-port",
    "slug": "day-tour-to-cairo-from-alexandria-port",
    "title": "Day Tour to Cairo from Alexandria Port",
    "category": "Shore Excursions",
    "destination": "Red Sea / Mediterranean",
    "duration": "12 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Alexandria Port & return (by the cruise exit door)",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at a local restaurant in Cairo",
      "Bottled water on board the vehicle & during the tour",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Alexandria Port & return (by the cruise exit door)",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at a local restaurant in Cairo",
      "Bottled water on board the vehicle & during the tour",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-day-trip-to-pyramids-sakkara",
    "slug": "day-trip-to-pyramids-sakkara",
    "title": "Day Trip to Pyramids & Sakkara",
    "category": "Shore Excursions",
    "destination": "Red Sea / Mediterranean",
    "duration": "12 Hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at a local restaurant in Cairo",
      "Bottled water on board the vehicle during the tour",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Alexandria Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at a local restaurant in Cairo",
      "Bottled water on board the vehicle during the tour",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-cairo-tour-from-alexandria-return-to-portsaid",
    "slug": "cairo-tour-from-alexandria-return-to-portsaid",
    "title": "Cairo Tour from Alexandria Return to PortSaid",
    "category": "Shore Excursions",
    "destination": "Alexandria Port",
    "duration": "2 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Alexandria Port & return to Port Said",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation in Cairo for a night at 5* Hotel",
      "Private English Speaking guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meals at a local restaurant",
      "Bottled water on board the vehicle during the tour",
      "All Service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Alexandria Port/ Pyramids Tour"
      },
      {
        "title": "Day 02",
        "description": "Egyptian Museum/ Salah El Din Citadel/ Port Said Port"
      }
    ],
    "inclusions": [
      "Pick up services from Alexandria Port & return to Port Said",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation in Cairo for a night at 5* Hotel",
      "Private English Speaking guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meals at a local restaurant",
      "Bottled water on board the vehicle during the tour",
      "All Service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-overnight-trip-to-cairo-from-port-said",
    "slug": "overnight-trip-to-cairo-from-port-said",
    "title": "Overnight Trip to Cairo from Port Said",
    "category": "Shore Excursions",
    "destination": "Port Said Port",
    "duration": "2 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Port Said port & return",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation for 1 night at 5* hotel",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All Service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Port Said/ Pyramids Tour"
      },
      {
        "title": "Day 02",
        "description": "Egyptian Museum / Salah Din Citadel/ Port Said"
      }
    ],
    "inclusions": [
      "Pick up services from Port Said port & return",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation for 1 night at 5* hotel",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch at local restaurant in Cairo",
      "Shopping tours in Cairo",
      "All Service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-day-tour-to-giza-pyramids-sakkara",
    "slug": "day-tour-to-giza-pyramids-sakkara",
    "title": "Day Tour to Giza Pyramids & Sakkara",
    "category": "Shore Excursions",
    "destination": "Red Sea / Mediterranean",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up servicesfrom Port Said port & return (by the cruise exit door)",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meal at local restaurant in Giza",
      "Bottled water on board the vehicle during the tour",
      "All service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up servicesfrom Port Said port & return (by the cruise exit door)",
      "All transfers by a private air-conditioned vehicle",
      "Private English Egyptologist guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meal at local restaurant in Giza",
      "Bottled water on board the vehicle during the tour",
      "All service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-2-day-tour-of-cairo-and-alexandria",
    "slug": "2-day-tour-of-cairo-and-alexandria",
    "title": "2 Day Tour of Cairo and Alexandria",
    "category": "Shore Excursions",
    "destination": "Alexandria Port",
    "duration": "2 Day",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Port Said port & return to Alexandria Port",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation for a night at 5* hotel, Mena House Hotel, Cairo",
      "Private English Speaking guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch at local restaurant in Cairo & Alexandria",
      "Shopping tours in Cairo",
      "All Service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Pyramids Tour / Egyptian Museum"
      },
      {
        "title": "Day 02",
        "description": "Alexandria Sights"
      }
    ],
    "inclusions": [
      "Pick up services from Port Said port & return to Alexandria Port",
      "All transfers by a private air-conditioned vehicle",
      "Accommodation for a night at 5* hotel, Mena House Hotel, Cairo",
      "Private English Speaking guide",
      "Entrance fees to mentioned sites",
      "Bottled water on board the vehicle during the tour",
      "Lunch at local restaurant in Cairo & Alexandria",
      "Shopping tours in Cairo",
      "All Service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/ABU-SIMBEL-10.webp",
    "images": [
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-day-tour-to-cairo-and-pyramids-from-port-said",
    "slug": "day-tour-to-cairo-and-pyramids-from-port-said",
    "title": "Day Tour to Cairo and Pyramids from Port Said",
    "category": "Shore Excursions",
    "destination": "Port Said Port",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Port Said & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at local restaurant in Cairo",
      "Bottled water on board the vehicle during the tour",
      "All service charges & taxes"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Port Said & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch meal at local restaurant in Cairo",
      "Bottled water on board the vehicle during the tour",
      "All service charges & taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-day-tour-to-the-pyramids-the-nile",
    "slug": "day-tour-to-the-pyramids-the-nile",
    "title": "Day Tour to the Pyramids & the Nile",
    "category": "Shore Excursions",
    "destination": "Port Said Port",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Port Said & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch on Nile Cruise during sailing",
      "Bottled water on board the vehicle during the tour",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Port Said & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to mentioned sites",
      "Lunch on Nile Cruise during sailing",
      "Bottled water on board the vehicle during the tour",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
    "images": [
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-nebu-nile-cruise",
    "slug": "nebu-nile-cruise",
    "title": "Nebu Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Staterooms (counting suites): 40",
      "4 Supplement-free solo cabins",
      "4 adjoining cabins to stay close to friends and family",
      "Solo Connections — Exclusive onboard events",
      "Exclusive concierge service available on every departure"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-farah-nile-cruise",
    "slug": "farah-nile-cruise",
    "title": "Farah Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Attractive large restaurant in the lower deck",
      "Spacious lounge and unique reception",
      "Mezzanine floor with gift shop, hair dresser and boutiques",
      "Sundeck with large swimming pool along with pool bar",
      "Gymnasium, Steam, Sauna and massage room.",
      "Wireless Internet connection in all the outlets free of charge",
      "Discotheque and daily entertainment",
      "Welcome drinks upon arrival and refreshing towels",
      "Breakfast & lunch buffet and A la carte dinner",
      "Special choices for vegetarians “lunch & dinner”",
      "Central air conditioner with individual control in each cabin",
      "Laundry facilities",
      "Smoke Detector System Panel and sprinkler in each cabin.",
      "Automatic fire alarm",
      "Complete water purification station",
      "Telescope on Sundeck",
      "Sound proof large panoramic windows ( French Balcony )",
      "Private bathroom, hair dryer and bathtub",
      "Jacuzzi in the suites only",
      "LCD TV- Marine Satellite",
      "Mini bar",
      "Private safe box",
      "WI-FI Internet connection all over the ship",
      "Daily bedsheets with different colores.",
      "Daily treatment for all cabins ( fruite basket – cookies – etc. )"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-cairo-pyramids-trip-from-port-sokhna",
    "slug": "cairo-pyramids-trip-from-port-sokhna",
    "title": "Cairo & Pyramids Trip from Port Sokhna",
    "category": "Shore Excursions",
    "destination": "Red Sea / Mediterranean",
    "duration": "12 hours",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour experience....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour experience.",
    "highlights": [
      "Pick up services from Ein-Sokhna Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meal at a local restaurant in Cairo",
      "Bottled water on board the vehicle during the tour",
      "All taxes & service charge"
    ],
    "itinerary": [
      {
        "title": "Full Day Sightseeing Program",
        "description": "Discover the wonders of Egypt with our expertly crafted tour experience."
      }
    ],
    "inclusions": [
      "Pick up services from Ein-Sokhna Port & return",
      "All transfers by a private air-conditioned vehicle",
      "Private English speaking guide",
      "Entrance fees to all the mentioned sites",
      "Lunch meal at a local restaurant in Cairo",
      "Bottled water on board the vehicle during the tour",
      "All taxes & service charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/New-Project-2025-06-24T153559.658-1.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/ABU-SIMBEL-10.webp"
    ],
    "relatedSlugs": [
      "2-days-tour-to-cairo-and-luxor-from-safaga-port",
      "luxor-day-tour-from-safaga-port",
      "two-day-trip-to-luxor-from-safaga-port"
    ]
  },
  {
    "id": "la-ms-amwaj-living-stone",
    "slug": "ms-amwaj-living-stone",
    "title": "MS Amwaj Living Stone",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Main dining room restaurant, Lounge, Lounge bar, Poolside bar",
      "Nightly entertainment program",
      "Sun deck with sun beds and parasol",
      "Swimming pool with open air Jacuzzi",
      "Massage, Steam Bath & Sauna",
      "Daily guided sightseeing excursions",
      "Laundry",
      "Room service",
      "Concierge services",
      "Panoramic Windows",
      "International Dial Telephone",
      "Hairdryer",
      "Mini Bar",
      "Safety Deposit Box",
      "Individual Air Conditioning",
      "LCD/Plasma TV Screen",
      "Bathroom, Bathtub",
      "Linen Changing",
      "Dressing Table",
      "Sitting Area"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-10-day-egypt-and-jordan-travel-package",
    "slug": "10-day-egypt-and-jordan-travel-package",
    "title": "10 Day Egypt and Jordan Travel Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "3 nights at a hotel in Cairo",
      "3 nights at a hotel in Amman",
      "3 nights on a 5-Star Nile cruise ship",
      "Private Air-Conditioned Vehicle",
      "Meet and greet service for all arrivals and departures",
      "Your 10 Day Jordan Egypt Travel Package includes Customer service assistance throughout your stay",
      "Domestic flight tickets – Cairo to Aswan and Luxor to Cairo",
      "All tours mentioned in the itinerary",
      "Entrance fees to all attractions mentioned in the itinerary",
      "English speaking driver for all Jordan tours",
      "English speaking local guide at Petra",
      "English speaking guide for all tours in Egypt",
      "Private English speaking Egyptologist guide with all Cairo tours",
      "All service charges and taxes",
      "Free bottle of drinking water during tours"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Jordan Egypt Travel Package Begins"
      },
      {
        "title": "Day 02",
        "description": "Giza Plateau, Egyptian Museum, Coptic Cairo and Historic Bazaar"
      },
      {
        "title": "Day 03",
        "description": "Flight to Aswan, Nile Cruise Embarkation, and Aswan Sightseeing"
      },
      {
        "title": "Day 04",
        "description": "Kom Ombo, Edfu, and on to Esna"
      },
      {
        "title": "Day 05",
        "description": "Cruise to Luxor and Luxor Sightseeing"
      },
      {
        "title": "Day 06",
        "description": "Nile Cruise Disembarkation and Fly to Cairo"
      },
      {
        "title": "Day 07",
        "description": "Flight from Cairo to Amman - Welcome to Jordan"
      },
      {
        "title": "Day 08",
        "description": "Ancient City of Jerash and Dead Sea Tour"
      },
      {
        "title": "Day 09",
        "description": "Tour of Petra, the Rose Red City Stone"
      },
      {
        "title": "Day 10",
        "description": "Jordan Egypt Travel Package Ends and Final Departure"
      }
    ],
    "inclusions": [
      "3 nights at a hotel in Cairo",
      "3 nights at a hotel in Amman",
      "3 nights on a 5-Star Nile cruise ship",
      "Private Air-Conditioned Vehicle",
      "Meet and greet service for all arrivals and departures",
      "Your 10 Day Jordan Egypt Travel Package includes Customer service assistance throughout your stay",
      "Domestic flight tickets – Cairo to Aswan and Luxor to Cairo",
      "All tours mentioned in the itinerary",
      "Entrance fees to all attractions mentioned in the itinerary",
      "English speaking driver for all Jordan tours",
      "English speaking local guide at Petra",
      "English speaking guide for all tours in Egypt",
      "Private English speaking Egyptologist guide with all Cairo tours",
      "All service charges and taxes",
      "Free bottle of drinking water during tours"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/KOM-OMBO-1-1-1.webp",
    "images": [
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-14-day-egypt-and-jordan-highlights-tour",
    "slug": "14-day-egypt-and-jordan-highlights-tour",
    "title": "14 Day Egypt and Jordan Highlights Tour",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "3 nights in Cairo at Hotel",
      "1 nights in Aswan at Hotel",
      "3 nights on board 5* Nile River cruise ship",
      "3 nights in Sharm El Sheikh at Hotel",
      "3 night in Amman at Hotel",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "13 breakfasts, 6 lunches, 3 dinner",
      "Meet and greet service at airports; stations; ports and etc",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All tours listed in the itinerary",
      "All entrance fees for sites and attractions listed in the Egypt and Jordan Highlights Tour itinerary",
      "Lunch during tours in Cairo",
      "Private English speaking guide in Cairo",
      "English speaking guide on the cruise",
      "English speaking assistant driver in the Dead Sea, Madaba and Nebo",
      "Local English speaking guide in Petra for about 2-3 hours",
      "Domestic Flight ticket from Cairo to Aswan and from Luxor to Sharm El Sheikh",
      "Meals as mentioned in the Egypt and Jordan Highlights Tour itinerary",
      "All service charges and taxes."
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrival in Cairo"
      },
      {
        "title": "Day 02",
        "description": "Tour to the Pyramids"
      },
      {
        "title": "Day 03",
        "description": "Sightseeing Day Tour in Cairo"
      },
      {
        "title": "Day 04",
        "description": "Flight to Aswan and Aswan Sightseeing"
      },
      {
        "title": "Day 05",
        "description": "Abu Simbel Temples and Start of Nile Cruise"
      },
      {
        "title": "day 5. An early start at 03.30am, when you will check",
        "description": "out of your hotel after getting your packed breakfast box."
      },
      {
        "title": "Day 06",
        "description": "Sail to Kom Ombo and Edfu"
      },
      {
        "title": "Day 07",
        "description": "Sightseeing in Luxor"
      },
      {
        "title": "Day 08",
        "description": "Luxor Sightseeing and Sharm El Sheikh"
      },
      {
        "title": "day 8 of your Egypt and Jordan Highlights Tour breakfast will be served on board, before you leave your cruise at 08",
        "description": "00 a.m. You will be taken to visit Karnak and Luxor temples, before transferring to Luxor airport for your flight to Sharm El Sheikh. Most flights travel via Cairo Airport."
      },
      {
        "title": "Day 09",
        "description": "Ras Mohamed National Park Tour"
      },
      {
        "title": "Day 10",
        "description": "Sharm or Monastery of St. Catherine"
      },
      {
        "title": "Day 11",
        "description": "Transfer from Sharm El Sheikh to Amman"
      },
      {
        "title": "Day 12",
        "description": "Madaba and The Dead Sea"
      },
      {
        "title": "Day 13",
        "description": "Petra Tours"
      },
      {
        "title": "Day 14",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "3 nights in Cairo at Hotel",
      "1 nights in Aswan at Hotel",
      "3 nights on board 5* Nile River cruise ship",
      "3 nights in Sharm El Sheikh at Hotel",
      "3 night in Amman at Hotel",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "13 breakfasts, 6 lunches, 3 dinner",
      "Meet and greet service at airports; stations; ports and etc",
      "Customer service assistance throughout your stay",
      "All transfers in private air-conditioned vehicles",
      "All tours listed in the itinerary",
      "All entrance fees for sites and attractions listed in the Egypt and Jordan Highlights Tour itinerary",
      "Lunch during tours in Cairo",
      "Private English speaking guide in Cairo",
      "English speaking guide on the cruise",
      "English speaking assistant driver in the Dead Sea, Madaba and Nebo",
      "Local English speaking guide in Petra for about 2-3 hours",
      "Domestic Flight ticket from Cairo to Aswan and from Luxor to Sharm El Sheikh",
      "Meals as mentioned in the Egypt and Jordan Highlights Tour itinerary",
      "All service charges and taxes."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
    "images": [
      "/images/tours/New-Project-2026-01-27T143742.633-600x540.webp",
      "/images/tours/11-21.webp",
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-ms-salacia-nile-cruise",
    "slug": "ms-salacia-nile-cruise",
    "title": "MS Salacia Nile cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "5 Decks",
      "1 Master Suite: (Approx. 65 Square meters, 5 full Size Windows, Separate Bedroom, Double Bed, Separate Lounge, Dining Area, Bar, Two W.C).",
      "18 Royal Suites (6 with Large Beds and 12 with Twin Beds), Approx. 28 Square meters each with two full Size Windows One Bed Room, Lounge Area and Two W.C.",
      "9 Stateroom Suites (Large Bed), Approx. 21 Square meters, 2 full Size Windows, One Bed Room, Lounge Area, and One W.C.",
      "3 Proper Single Staterooms, Approx. 15 Square meters with one full size window, One room, One Large Single Bed, chair and One W.C."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-6.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-egypt-and-jordan-short-package",
    "slug": "egypt-and-jordan-short-package",
    "title": "Egypt and Jordan Short Package",
    "category": "Egypt Vacation Packages",
    "destination": "Cairo, Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "3 nights in Cairo Hotel with breakfast",
      "3 nights in Amman Jordan Hotel with breakfast",
      "Private Air-Conditioned Vehicle",
      "6 breakfasts, 4 lunches",
      "Meet and greet service and return by our representatives at Airport(s)",
      "Assistance of our personnel during your stay, tours and excursions",
      "Bottled water on board vehicle during Egypt tours",
      "English-speaking Guide in Cairo and Giza in Egypt",
      "English-speaking on the spot Guide in Petra about 3 hours",
      "English-speaking assistant in Madaba, Mt. Nebo and the Dead Sea",
      "All Service charges and taxes included throughout the tours"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrival At Cairo International Airport -"
      },
      {
        "title": "Day 02",
        "description": "Visit Pyramids - Memphis And sakkara - Cairo Overnight."
      },
      {
        "title": "Day 03",
        "description": "Egyptain Museum - Citadel & Khan El Khalili - Islamic & Coptic Cairo"
      },
      {
        "title": "Day 04",
        "description": "Fly Cairo - Amman - Arrival at Amman Airport"
      },
      {
        "title": "Day 05",
        "description": "Madaba - Dead Sea Tours. Amman ON"
      },
      {
        "title": "Day 06",
        "description": "Ancient City of Petra Tours. Amman ON"
      },
      {
        "title": "Day 07",
        "description": "Fly Back Home - Final Departure"
      }
    ],
    "inclusions": [
      "3 nights in Cairo Hotel with breakfast",
      "3 nights in Amman Jordan Hotel with breakfast",
      "Private Air-Conditioned Vehicle",
      "6 breakfasts, 4 lunches",
      "Meet and greet service and return by our representatives at Airport(s)",
      "Assistance of our personnel during your stay, tours and excursions",
      "Bottled water on board vehicle during Egypt tours",
      "English-speaking Guide in Cairo and Giza in Egypt",
      "English-speaking on the spot Guide in Petra about 3 hours",
      "English-speaking assistant in Madaba, Mt. Nebo and the Dead Sea",
      "All Service charges and taxes included throughout the tours"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Luxor-Private-Tour-4.webp",
    "images": [
      "/images/tours/Luxor-Private-Tour-4.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp",
      "/images/tours/New-Project-2026-01-27T143452.563-600x540.webp",
      "/images/tours/KOM-OMBO-1-1-1.webp"
    ],
    "relatedSlugs": [
      "best-of-egypt-in-12-luxury-days",
      "4-day-cairo-and-alexandria-tour-package",
      "4-day-cairo-and-luxor-tour-package"
    ]
  },
  {
    "id": "la-15-day-egypt-and-jordan-tours-cairo-nile-cruise-and-dahab",
    "slug": "15-day-egypt-and-jordan-tours-cairo-nile-cruise-and-dahab",
    "title": "15 Day Egypt and Jordan Tours (Cairo, Nile Cruise and Dahab)",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "2 nights in a hotel in Cairo",
      "2 nights in a hotel in Aswan",
      "3 nights on board the 5-Star Nile cruise ship",
      "3 nights in a hotel in Dahab",
      "3 nights in a hotel in Amman",
      "1 night in a hotel in Petra",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "14 breakfasts, 6 lunches, 3 dinner",
      "Meet and greet service for all arrivals and departures",
      "Customer service assistance throughout your stay",
      "All tours mentioned in the Egypt and Jordan trip itinerary",
      "Entrance fees to all attractions mentioned in the Egypt and Jordan trip itinerary",
      "Private English speaking guide in Cairo",
      "English speaking guide on the cruise",
      "Local English speaking guides in Petra and Jerash for about 2-3 hours",
      "English assistant driver in the Dead Sea, Madaba, Nebo and Ajloun",
      "Domestic Flight ticket",
      "All service charges and taxes"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Welcome to Cairo"
      },
      {
        "title": "Day 02",
        "description": "Embarking on the Pyramids Tour"
      },
      {
        "title": "Day 03",
        "description": "More Tours in Cairo"
      },
      {
        "title": "Day 04",
        "description": "Abu Simbel Temples"
      },
      {
        "title": "Day 05",
        "description": "Aswan Sightseeing"
      },
      {
        "title": "Day 5 of your Egypt and Jordan trip. After you enjoy breakfast, you will head on out to board the 5",
        "description": "Star Nile cruise ship. Enjoy lunch on the ship and then it’s time for some sightseeing. Here, you will experience the High Dam, followed by the Philae Temple. This is of course devoted to Isis and Hathor. Here, you will find the largest Obelisk from historical times, which is in the stone quarries of ancient Egypt, the Unfinished Obelisk. Then it will be dinner back on the cruise and another night in Aswan."
      },
      {
        "title": "Day 06",
        "description": "Travel to Kom Ombo and Edfu"
      },
      {
        "title": "Day 07",
        "description": "A Day of Luxor Sightseeing"
      },
      {
        "title": "day 7 of your Egypt and Jordan trip your journey will begin with breakfast, then a trip to the West Bank along with the Valley of the Kings. Here, you will find the Temple of Queen Hatshepsut at El",
        "description": "Deir El - Bahari as well as the Colossi of Memnon, Back on the ship, it will be time for lunch as you move on to the East Bank to see the Karnak temple complex and Luxor Temple, then it will be time for tea on the ship and a night in Luxor."
      },
      {
        "title": "Day 08",
        "description": "Travel to Dahab"
      },
      {
        "title": "Day 09",
        "description": "Taking a Dahab Holiday"
      },
      {
        "title": "Day 10",
        "description": "The Incredible St. Catherine Monastery"
      },
      {
        "title": "Day 11",
        "description": "A Flight to Amman, Jordan"
      },
      {
        "title": "Day 12",
        "description": "Jerash and Ajloun"
      },
      {
        "title": "Day 13",
        "description": "Visits to Madaba and the Dead Sea"
      },
      {
        "title": "Day 14",
        "description": "Petra Sightseeing"
      },
      {
        "title": "Day 15",
        "description": "Farewell to the Middle East"
      }
    ],
    "inclusions": [
      "2 nights in a hotel in Cairo",
      "2 nights in a hotel in Aswan",
      "3 nights on board the 5-Star Nile cruise ship",
      "3 nights in a hotel in Dahab",
      "3 nights in a hotel in Amman",
      "1 night in a hotel in Petra",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "14 breakfasts, 6 lunches, 3 dinner",
      "Meet and greet service for all arrivals and departures",
      "Customer service assistance throughout your stay",
      "All tours mentioned in the Egypt and Jordan trip itinerary",
      "Entrance fees to all attractions mentioned in the Egypt and Jordan trip itinerary",
      "Private English speaking guide in Cairo",
      "English speaking guide on the cruise",
      "Local English speaking guides in Petra and Jerash for about 2-3 hours",
      "English assistant driver in the Dead Sea, Madaba, Nebo and Ajloun",
      "Domestic Flight ticket",
      "All service charges and taxes"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-12-day-egypt-nile-cruise-and-jordan-tour",
    "slug": "12-day-egypt-nile-cruise-and-jordan-tour",
    "title": "12 Day Egypt Nile Cruise and Jordan Tour",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "May to August",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Discover the wonders of Egypt with our expertly crafted tour package....",
    "overview": "Discover the wonders of Egypt with our expertly crafted tour package.",
    "highlights": [
      "Hotel in Cairo for 3 nights",
      "5-Star Nile cruise ship for 4 nights",
      "Hotel in Amman for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 5 lunches, 4 dinners",
      "Meet and assist at airports; port; stations and etc",
      "All sightseeing tours in Cairo, Aswan, Luxor, Dead Sea, Petra and Amman",
      "Local English guide in Petra for about 02/03 hours.",
      "Local English guide in Jerash for about an hour.",
      "English assistant driver in the Dead Sea, Umm Qais, Ajloun.",
      "Entrance fees and English speaking Egyptologist guide",
      "Domestic flights",
      "All taxes and service charges"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "Arrive Egypt"
      },
      {
        "title": "Day 02",
        "description": "Cairo"
      },
      {
        "title": "Day 03",
        "description": "Luxor Nile Cruise Holiday"
      },
      {
        "title": "Day 04",
        "description": "Luxor"
      },
      {
        "title": "Day 05",
        "description": "Edfu and Kom Ombo"
      },
      {
        "title": "Day 06",
        "description": "Aswan"
      },
      {
        "title": "Day 07",
        "description": "Cairo"
      },
      {
        "title": "Day 08",
        "description": "Amman, Jordan"
      },
      {
        "title": "Day 09",
        "description": "Umm Qais"
      },
      {
        "title": "Day 10",
        "description": "Dead Sea"
      },
      {
        "title": "Day 11",
        "description": "Petra"
      },
      {
        "title": "Day 12",
        "description": "Final Departure"
      }
    ],
    "inclusions": [
      "Hotel in Cairo for 3 nights",
      "5-Star Nile cruise ship for 4 nights",
      "Hotel in Amman for 4 nights",
      "Cruise Boat",
      "Plane",
      "Private Air-Conditioned Vehicle",
      "Horse carriage at Edfu",
      "Taftaf at Valley of the Kings",
      "Motor Boat to Philae island",
      "11 breakfasts, 5 lunches, 4 dinners",
      "Meet and assist at airports; port; stations and etc",
      "All sightseeing tours in Cairo, Aswan, Luxor, Dead Sea, Petra and Amman",
      "Local English guide in Petra for about 02/03 hours.",
      "Local English guide in Jerash for about an hour.",
      "English assistant driver in the Dead Sea, Umm Qais, Ajloun.",
      "Entrance fees and English speaking Egyptologist guide",
      "Domestic flights",
      "All taxes and service charges"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-royal-la-terrasse-nile-cruise",
    "slug": "ms-royal-la-terrasse-nile-cruise",
    "title": "MS Royal La Terrasse Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Large panoramic / ultra violet windows",
      "Private bath with bath tub, hair dryer, ventilator",
      "Colored TV with in house music and video channels",
      "Dedicated movie channel showing 3 films daily",
      "Mini Bar",
      "First aid box",
      "Hair dryer",
      "Individually controlled Air Condition",
      "International telephone in Cabins",
      "Safety Box",
      "Luggage Rack",
      "Doctor available 24 hours around the clock. Appointments or emergency calls half an hour in advance.",
      "Internet and fax availability",
      "Afternoon tea time and cake",
      "Visa and MasterCard accepted",
      "There is a Playing and Reading Area"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-salima-nile-cruise",
    "slug": "salima-nile-cruise",
    "title": "Salima Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-esplanade-nile-cruise",
    "slug": "ms-esplanade-nile-cruise",
    "title": "MS Esplanade Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Swimming pool and Jacuzzi",
      "Spa - steam and sauna with aromatherapy and massage",
      "Swimming pool bar",
      "Restaurant",
      "Lounge bar",
      "Library, table games and business corner",
      "Boutique, gift shop and hairdresser",
      "First-aid clinic with medical service on call",
      "Egyptologist",
      "Laundry and dry cleaning",
      "Large panoramic opening windows",
      "Cabins are fully air conditioned with individual control",
      "LED televisions sets & satellite channels",
      "Tea & coffee making facilities",
      "In-room safe & mini bar",
      "In-house movie program & music system",
      "Internet connection",
      "Telephones with international direct dial",
      "All bathrooms feature bath tubs and hair dryers"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-3-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-farida-nile-cruise",
    "slug": "farida-nile-cruise",
    "title": "Farida Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-al-hambra-nile-cruise",
    "slug": "al-hambra-nile-cruise",
    "title": "Al Hambra Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-blue-shadow-nile-cruise",
    "slug": "blue-shadow-nile-cruise",
    "title": "Blue Shadow Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "54 Standard Cabins: 21.8 m² each",
      "2 Royal Suites: 42.8 m² each",
      "2 Junior Suites: 37.25 m² each"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-alyssa-nile-cruise",
    "slug": "alyssa-nile-cruise",
    "title": "Alyssa Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Large panoramic / ultra violet windows",
      "Private bath with bath tub, hair dryer, ventilator",
      "Colored TV with in house music and video channels",
      "Dedicated movie channel showing 3 films daily",
      "Mini Bar",
      "First aid box",
      "Hair dryer",
      "Individually controlled Air Condition",
      "International telephone in Cabins",
      "Safety Box",
      "Luggage Rack",
      "Doctor available 24 hours around the clock. Appointments or emergency calls half an hour in advance.",
      "Internet and fax availability",
      "Afternoon tea time and cake",
      "Visa and MasterCard accepted",
      "There is a Playing and Reading Area"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sonesta-st-george-i-nile-cruise",
    "slug": "sonesta-st-george-i-nile-cruise",
    "title": "Sonesta St. George I Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Main dining room, sun deck bar, lounge, panoramic lounge, piano bar",
      "Nightly entertainment",
      "Sun deck",
      "Oversize pool with shallow water extension and Jacuzzi",
      "Spa & wellness center with gym, massage services, sauna and steam bath",
      "Daily guided sightseeing excursions",
      "Dry cleaning service",
      "Plasma screen TV, equipped with the latest technology and featuring a live sailing channel",
      "Double-glass panoramic french windows that open to bring in fresh breezes from the Nile",
      "Internet access",
      "Direct-dial telephone",
      "Individual climate control",
      "Electronic door locks",
      "Mini-bar",
      "Safe",
      "Hair dryer",
      "Bathrooms equipped with spa unit; including steam bath, Jacuzzi and water massage"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sonesta-moon-goddess-nile-cruise",
    "slug": "sonesta-moon-goddess-nile-cruise",
    "title": "Sonesta Moon Goddess Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Sliding glass doors opening to private balconies",
      "Cabins are fully air conditioned",
      "Wireless internet access",
      "Private bath/shower with hair dryer",
      "Satellite color TV",
      "Protection and smoke detector in each cabin",
      "Spa center and message",
      "Swimming pool, bar & Sun deck",
      "Safe box in each cabin",
      "Telephone system with international calls.",
      "Doctor on calls on board.",
      "Spacious Gymnasium",
      "Laundry service & housekeeping",
      "In-room Dining available until midnight",
      "Main Dining Room, Lounge, Sun Deck Bar",
      "Nightly Entertainment",
      "Fully-purified Water, filtered and softened before distribution",
      "Fitness and Recreation Areas",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-movenpick-royal-lotus-nile-cruise",
    "slug": "movenpick-royal-lotus-nile-cruise",
    "title": "Movenpick Royal Lotus Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Panoramic windows in each cabin",
      "Cabins are fully air conditioned",
      "Internet access",
      "Private bath/shower with hair dryer",
      "Satellite color TV",
      "Protection and smoke detector in each cabin",
      "Spa center and message",
      "Swimming pool, bar & Sun deck",
      "Safe box in each cabin",
      "Telephone system with international calls.",
      "Doctor on calls on board.",
      "Gymnasium Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-moon-dance-nile-cruise",
    "slug": "moon-dance-nile-cruise",
    "title": "Moon Dance Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-tulip-nile-cruise",
    "slug": "tulip-nile-cruise",
    "title": "Tulip Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-movenpick-royal-lily-nile-cruise",
    "slug": "movenpick-royal-lily-nile-cruise",
    "title": "Movenpick Royal Lily Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Panoramic windows in each cabin",
      "Cabins are fully air conditioned",
      "Internet access",
      "Private bath/shower with hair dryer",
      "Satellite color TV",
      "Protection and smoke detector in each cabin",
      "Spa center and message",
      "Swimming pool, bar & Sun deck",
      "Safe box in each cabin",
      "Telephone system with international calls.",
      "Doctor on calls on board.",
      "Gymnasium Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
    "images": [
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-iberotel-crown-empress-cruise",
    "slug": "iberotel-crown-empress-cruise",
    "title": "Iberotel Crown Empress cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "24 hours reception",
      "Internet service",
      "Laundry service",
      "Large sun deck with swimming pool and pool bar",
      "Steam bath, sauna and massage",
      "Fitness equipments",
      "Gift shop",
      "Beauty saloon",
      "Meeting space",
      "International telephone & fax",
      "Luxurious Lounge",
      "Jacuzzi",
      "The main and upper deck cabins have large panoramic sliding windows.",
      "Cabins are equipped with WC, bath or shower, and hair dryer.",
      "Cabins are fully air-conditioned with individually controlled thermostats",
      "All cabins are equipped with private WC, bath or shower, and hair dryer.",
      "Cabin facilities include TV, closed circuit video, internal telephone and music system.",
      "International satellite TV reception",
      "Internet browsing against charge",
      "Individual safety box in all cabins, at no extra charge.",
      "Mini fridge in all cabins"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-mayflower-nile-cruise",
    "slug": "ms-mayflower-nile-cruise",
    "title": "MS MayFlower Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Swimming pool and Jacuzzi",
      "Spa - steam and sauna with aromatherapy and massage",
      "Swimming pool bar",
      "Restaurant",
      "Lounge bar",
      "Library, table games and business corner",
      "Boutique, gift shop and hairdresser",
      "First-aid clinic with medical service on call",
      "Egyptologist",
      "Laundry and dry cleaning",
      "Large panoramic opening windows",
      "Cabins are fully air conditioned with individual control",
      "LED televisions sets & satellite channels",
      "Tea & coffee making facilities",
      "In-room safe & mini bar",
      "In-house movie program & music system",
      "Internet connection",
      "Telephones with international direct dial",
      "All bathrooms feature bath tubs and hair dryers"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
    "images": [
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-iberotel-crown-emperor-nile-cruise",
    "slug": "iberotel-crown-emperor-nile-cruise",
    "title": "Iberotel Crown Emperor Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "24 hours reception",
      "Internet service",
      "Laundry service",
      "Large sun deck with swimming pool and pool bar",
      "Gift shop",
      "Beauty saloon",
      "Meeting space",
      "International telephone & fax",
      "Disco",
      "Luxurious Lounge",
      "All cabins have large panoramic windows facing the Nile",
      "Cabins are equipped with private W/C, bathtub and hairdryer.",
      "TV, satellite TV reception closed circuit video, internal telephone and music system.",
      "Cabins are fully air conditioned with individually controlled thermostats.",
      "Individual safety box in all cabins, at no extra charge",
      "Mini Fridge in all cabins"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-acamar-nile-cruise",
    "slug": "acamar-nile-cruise",
    "title": "Acamar Nile cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Spacious & stylish guest rooms",
      "Luxury revive bedding",
      "Exclusive in room Technology",
      "Individual climate control",
      "Mini bar",
      "Safety deposit box",
      "Panoramic, sound proof windows",
      "Sprinkler",
      "Direct dial telephone",
      "Luxury bedding-down comforters, custom duvets, cotton rich linens",
      "Bathrobe & sleepers",
      "Bath tub",
      "Hair dryer",
      "Separate tub and shower ."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-al-kahila-nile-cruise",
    "slug": "al-kahila-nile-cruise",
    "title": "Al Kahila Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area & Lounge bar with panoramic view",
      "Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar & Sun deck",
      "Boutique & Jeweler shop on the Mezzanine floor",
      "Message room",
      "Internet corner & Wi Fi with charge.",
      "Laundry & dry cleaning facilities",
      "Golden Plate of Crystal Hygiene Company",
      "Sound proof on all decks & Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board",
      "Hair dryer, satellite color TV, DVD films, telephone, air condition in each cabin.",
      "Closed video circuit, music system.",
      "Fire alarm, protection and smoke detector in each cabin",
      "Large panoramic windows in each cabin to open from ceiling to floor",
      "Individual safes in each cabin"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-steigenberger-minerva-nile-cruise",
    "slug": "steigenberger-minerva-nile-cruise",
    "title": "Steigenberger Minerva Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "24 hours reception",
      "Internet service",
      "Laundry service",
      "Large sun deck with swimming pool and pool bar",
      "Fitness equipments",
      "Gift shop",
      "Beauty saloon",
      "Meeting space",
      "International telephone & fax",
      "Private W/C, shower and hairdryer",
      "Marine Satellite TV with in-house video channels and music system",
      "In-cabin safe for valuables and mini-bar/fridge",
      "Full laundry service is available on request"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-esmeralda-nile-cruise",
    "slug": "esmeralda-nile-cruise",
    "title": "Esmeralda Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "LED T.V.",
      "Direct Dial Telephone Line",
      "Mini Bar",
      "Air Conditioning System with individual Control",
      "Safety Box",
      "Garnet Restaurant",
      "Ruby Bar",
      "Sun Deck",
      "Entertainment",
      "Swimming Pool",
      "SPA",
      "GYM",
      "Salon",
      "Bazaar",
      "Library."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sabena-al-jamila-nile-cruise",
    "slug": "sabena-al-jamila-nile-cruise",
    "title": "Sabena Al Jamila Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area & Lounge bar with panoramic view",
      "Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar & Sun deck",
      "Boutique & Jeweler shop on the Mezzanine floor",
      "Message room",
      "Internet corner & Wi Fi with charge",
      "Laundry & dry cleaning facilities",
      "Golden Plate of Crystal Hygiene Company",
      "Sound proof on all decks & Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board",
      "Hair dryer.",
      "Satellite color TV, DVD films, telephone.",
      "Air condition in each cabin.",
      "Closed video circuit, music system.",
      "Fire alarm, protection and smoke detector in each cabin",
      "Large panoramic windows in each cabin to open from ceiling to floor",
      "Individual safes in each cabin",
      "Cabins are fully air conditioned with individually"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-7.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-7.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-concerto-nile-cruise",
    "slug": "concerto-nile-cruise",
    "title": "Concerto Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Mini bar.",
      "LCD Satellite TV",
      "DVD",
      "Internet",
      "Telephone",
      "International music system",
      "Individually controlled air-conditioning.",
      "Safety deposit box.",
      "Large, openable, panoramic window",
      "Bathroom with bathtub, hair dryer and telephone",
      "Swimming pool",
      "Jacuzzi",
      "Snacks bar",
      "Business centre",
      "Reading area",
      "Restaurant can handle 140 people at one sitting and offers buffet and set menus",
      "Lounge bar and discotheque",
      "Panorama bar",
      "Bazaar",
      "Hair dresser",
      "Clinic",
      "Laundry",
      "Marine satellite (gives TV reception during sailing and docking)",
      "Spa with: sauna; jacuzzi; gym equipment; massage; jet shower."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-mayfair-nile-cruise",
    "slug": "ms-mayfair-nile-cruise",
    "title": "MS Mayfair Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "wimming pool and Jacuzzi",
      "Spa - steam and sauna with aromatherapy and massage",
      "Swimming pool bar",
      "Nile Avenue Restaurant",
      "Bel Air Lounge bar",
      "Library, table games and business corner",
      "Boutique, gift shop and hairdresser",
      "First-aid clinic with medical service on call",
      "Egyptologist",
      "Laundry and dry cleaning",
      "LCD televisions sets & satellite channels",
      "Tea & coffee making facilities",
      "In-room safe & mini bar",
      "In-house movie program & music system",
      "Individually controlled air-conditioned system",
      "Internet connection",
      "Telephones with international direct dial",
      "All bathrooms feature bath tubs and hair dryers",
      "All cabins has French balconies",
      "220V Electricity",
      "Connected cabins are available"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-movenpick-ms-sun-ray-nile-cruise",
    "slug": "movenpick-ms-sun-ray-nile-cruise",
    "title": "Movenpick MS Sun Ray Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Spacious restaurant seated up to 132 guests with luxurious lounge.",
      "Swimming pool, sun deck with recreation area and bar.",
      "Library, reading and playing room.",
      "Jewelry & Gift Shop.",
      "Internet through the USB modem.",
      "Bar & Discotheque.",
      "Laundry & Valet",
      "Individual temperature control.",
      "Private Bath with a bath tub in all cabins & Hair dryer in bathrooms.",
      "Satellite, LCD T.V. & music TV channel.",
      "In House Video channel and Video player .",
      "Safe deposit boxes & international line will be through the reception desk.",
      "Mini bar “stocked on request”.",
      "Non smoking cabins and internal telephone.",
      "Smoke Detector System Panel.",
      "02 Life Jackets in each Cabin.",
      "Escape Map in each cabin.",
      "Reception cocktail .",
      "Daily D.J.",
      "Fancy Dress Galabeya Party.",
      "Oriental Show."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-nile-goddess-nile-cruise",
    "slug": "ms-nile-goddess-nile-cruise",
    "title": "MS Nile Goddess Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Panoramic windows in each cabin",
      "Cabins are fully air conditioned",
      "Wireless internet access",
      "Private bath/shower with hair dryer",
      "Satellite color TV",
      "Protection and smoke detector in each cabin",
      "Spa center and message",
      "Swimming pool, bar & Sun deck",
      "Safe box in each cabin",
      "Telephone system with international calls.",
      "Doctor on calls on board.",
      "Gymnasium",
      "In-room dining available until midnight",
      "Main dining room, lounge and Sun Deck Bar",
      "Elevator on Board",
      "Nightly Entertainment",
      "Fully-equipped Conference Room for up to 12 persons (round tables)",
      "Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-crown-prince-nile-cruise",
    "slug": "crown-prince-nile-cruise",
    "title": "Crown Prince Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-steigenberger-legacy-nile-cruise",
    "slug": "steigenberger-legacy-nile-cruise",
    "title": "Steigenberger Legacy Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "76 cabins, 72 of which are double cabins",
      "4 decks",
      "Restaurant, lounge and bar",
      "Souvenir shop",
      "Conference area",
      "Extensive sun deck",
      "Pool with pool bar",
      "Fitness gym",
      "Beauty salon"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-4.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-4.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-le-fayan-nile-cruise",
    "slug": "le-fayan-nile-cruise",
    "title": "Le Fayan Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Panoramic windows in each cabin",
      "Cabins are fully air conditioned",
      "Wireless internet access",
      "Private bath/shower with hair dryer",
      "Satellite color TV",
      "Protection and smoke detector in each cabin",
      "Spa center and message",
      "Swimming pool, bar & Sun deck",
      "Safe box in each cabin",
      "Telephone system with international calls.",
      "Doctor on calls on board.",
      "Gymnasium",
      "In-room dining available until midnight",
      "Main dining room, lounge and Sun Deck Bar",
      "Elevator on Board",
      "Nightly Entertainment",
      "Fully-equipped Conference Room for up to 12 persons (round tables)",
      "Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-jaz-crown-jewel-nile-cruise",
    "slug": "jaz-crown-jewel-nile-cruise",
    "title": "Jaz Crown Jewel Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-alexander-the-great-nile-cruise",
    "slug": "ms-alexander-the-great-nile-cruise",
    "title": "MS Alexander The Great Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-movenpick-ms-hamees-nile-cruise",
    "slug": "movenpick-ms-hamees-nile-cruise",
    "title": "Movenpick Ms Hamees Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "24/7 Reception",
      "Large all inclusive Restaurant",
      "Daily housekeeping and laundry service",
      "Large and Luxurious Lounge",
      "Gift Shop",
      "Clinic",
      "Recreation Area and Bar",
      "Doctor on call (24/7)",
      "Fully purified water, filtered and softened before distribution",
      "Major credit cards accepted on all Nile Cruises"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
    "images": [
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-princess-sarah-ii-nile-cruise",
    "slug": "princess-sarah-ii-nile-cruise",
    "title": "Princess Sarah II Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Large panoramic / ultra violet windows",
      "Private bath with bath tub, hair dryer",
      "All cabins are air-conditioned with individual controls.",
      "Internet access",
      "Non smoking cabins",
      "Doctor on calls on board.",
      "Colored TV within house music and video channels",
      "Dedicated movie channel showing 3 films daily",
      "Mini Bar & Room service",
      "Telephone system with international calls",
      "Swimming Pool and sundeck",
      "Safe box in each cabin",
      "Gymnasium",
      "Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-nile-style-nile-cruise",
    "slug": "ms-nile-style-nile-cruise",
    "title": "M/S Nile Style Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "') repeat-x;opacity:0.5}.header-content{position:relative;z-index:2;padding:35px 30px;display:flex;justify-content:space-between;align-items:center;background:v...",
    "overview": "') repeat-x;opacity:0.5}.header-content{position:relative;z-index:2;padding:35px 30px;display:flex;justify-content:space-between;align-items:center;background:var(--gradient-hero)}.sidebar-header.farida-booking-header{border-bottom:1px solid rgba(217,181,125,0.28);background:linear-gradient(135deg,#1c325c 0%,#1a4b66 58%,#243b55 100%)}.farida-booking-header .farida-booking-header-content{position:relative;z-index:2;display:block;padding:24px 26px 20px;background:transparent}.farida-booking-heading{display:flex;align-items:center;gap:13px;min-width:0}.farida-booking-icon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;flex:0 0 44px;border:1px solid rgba(217,181,125,0.38);border-radius:12px;background:rgba(217,181,125,0.12);color:#e0bc84;font-size:22px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.08)}.farida-booking-copy{min-width:0}.farida-booking-kicker{display:block;margin:0 0 4px;color:#d9b57d;font-size:10px;font-weight:700;line-height:1.2;letter-spacing:1px;text-transform:uppercase}.farida-booking-header .farida-booking-title{margin:0;color:#ffffff;font-family:'Playfair Display',Georgia,serif;font-size:21px;font-weight:600;line-height:1.2;letter-spacing:-0.15px}.farida-booking-subtitle{display:block;margin:5px 0 0;color:rgba(255,255,255,0.76);font-size:11.5px;font-weight:500;line-height:1.4}.farida-booking-trust{display:flex;align-items:center;gap:7px;margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.11);color:rgba(255,255,255,0.82);font-size:10.5px;font-weight:600;line-height:1.3}.farida-booking-trust i{flex:0 0 auto;color:#d9b57d;font-size:15px}.sidebar-title{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:600;margin:0;color:white;flex:1;text-align:left}.price-display{text-align:right;flex-shrink:0}.price-badge{background:linear-gradient(135deg,#c5955b 0%,#d4a574 100%);color:#1c325c;padding:8px 16px;border-radius:12px;display:inline-block;margin-bottom:6px;font-weight:600;box-shadow:0 3px 12px rgba(197,149,91,0.25);transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.1)}.price-badge:hover{transform:translateY(-1px);box-shadow:0 5px 18px rgba(197,149,91,0.35)}.price-label{font-size:11px;margin-right:6px;text-transform:uppercase;letter-spacing:0.8px;color:#1c325c;opacity:0.8}.price-amount{font-size:20px;font-weight:700;font-family:'Playfair Display',serif;color:#1c325c}.price-note{color:rgba(255,255,255,0.85);font-size:0.75rem;margin:0;font-weight:400;line-height:1.3}.suite-row{background:white;border:1px solid #e0e0e0;border-radius:6px;padding:15px;margin-bottom:15px}.suite-row-header{margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #e0e0e0;font-size:1rem;font-weight:600;color:#2c6f91}.suite-row-content{display:flex;gap:20px;margin-bottom:10px}.select-wrapper{flex:1}.select-wrapper label{font-size:0.9rem;color:#555;margin-bottom:5px;display:block}.select-inner{position:relative}.custom-select{width:100%;padding:8px 12px;border:1px solid #ddd;border-radius:4px;background:white;font-size:0.9rem;appearance:none;-webkit-appearance:none;-moz-appearance:none;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 8px center;background-size:12px;padding-right:30px}.custom-select:focus{outline:none;border-color:#2c6f91;box-shadow:0 0 0 2px rgba(44,111,145,0.1)}.price-wrapper{display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid #e0e0e0}.price-wrapper .price-label{font-size:0.9rem;color:#666}.price-wrapper .price-value{font-size:1.1rem;font-weight:bold;color:#2c6f91}.booking-summary .content{padding:20px}body.modal-open{overflow:hidden;position:fixed;width:100%;top:0;left:0}.popup-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(28,50,92,0.85);backdrop-filter:blur(15px);z-index:10000;animation:fadeIn 0.4s ease;-webkit-overflow-scrolling:touch;overflow-y:auto}.popup-overlay[style*=\"flex\"]{display:flex!important;align-items:flex-start;justify-content:center;padding:20px;min-height:100vh;padding-top:20px}.popup-content{background:var(--pearl-luxury);border-radius:30px;box-shadow:var(--shadow-dramatic);width:100%;max-width:1200px;max-height:none;overflow:visible;position:relative;animation:modalSlideIn 0.5s ease-out;margin:auto;margin-bottom:40px}.popup-header{background:var(--gradient-hero);color:white;padding:0;border-bottom:none;position:relative;overflow:hidden}.popup-header::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:url('data:image/svg+xml, ') repeat-x;opacity:0.3}.popup-header-content{display:flex;align-items:center;padding:30px 40px;position:relative;z-index:2}.popup-modal-icon{width:60px;height:60px;background:var(--gradient-gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:20px;font-size:1.8rem;color:var(--primary-navy);box-shadow:var(--shadow-gold)}.popup-header-text{flex:1}.popup-title{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;margin:0 0 5px 0;color:var(--rich-gold)}.popup-subtitle{margin:0;opacity:0.9;font-size:1rem}.close-popup{background:rgba(255,255,255,0.1);border:2px solid rgba(197,149,91,0.5);color:white;width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;cursor:pointer;transition:all 0.3s ease}.close-popup:hover{background:var(--rich-gold);border-color:var(--rich-gold);transform:rotate(90deg)}.popup-body{padding:40px;background:var(--gradient-elegant)}.suite-card{background:white;border-radius:25px;margin-bottom:25px;box-shadow:var(--shadow-medium);overflow:hidden;border:2px solid transparent;transition:all 0.4s ease;position:relative}.suite-card:hover{border-color:var(--rich-gold);transform:translateY(-5px);box-shadow:var(--shadow-dramatic)}.suite-badge{position:absolute;top:18px;left:0;background:var(--gradient-gold);color:var(--primary-navy);font-size:0.78rem;font-weight:700;padding:7px 18px 7px 14px;border-radius:0 20px 20px 0;display:flex;align-items:center;gap:6px;box-shadow:var(--shadow-gold);z-index:2;letter-spacing:0.2px}.suite-badge i{font-size:0.85rem}.suite-card-content{display:flex;flex-direction:row;align-items:flex-start}.suite-card-img{width:260px;flex-shrink:0;padding:20px;position:relative}.suite-card-img img{width:100%;height:190px;object-fit:cover;border-radius:16px;box-shadow:0 6px 18px rgba(28,50,92,0.12)}.suite-type-chip{position:absolute;bottom:30px;left:30px;background:rgba(28,50,92,0.85);backdrop-filter:blur(4px);color:#fff;font-size:0.72rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;padding:5px 12px;border-radius:20px}.suite-card-body{flex:1;padding:30px 30px 30px 10px}.suite-card-title{font-family:'Playfair Display',serif;color:var(--primary-navy);font-size:1.45rem;font-weight:700;margin:0 0 8px 0}.suite-card-meta{color:var(--warm-gray);margin-bottom:14px;font-size:0.95rem;line-height:1.5}.suite-availability-info{font-weight:600;color:var(--rich-gold);margin-bottom:20px;display:inline-flex;align-items:center;gap:7px;background:var(--light-sand);padding:6px 14px;border-radius:20px;font-size:0.85rem}.suite-availability-info::before{content:'';width:8px;height:8px;border-radius:50%;background:#2e9e5b;flex-shrink:0}.suite-available-count{color:var(--primary-navy);font-weight:700}.suite-text{color:var(--warm-gray)}.suite-room-facilities{margin:20px 0}.suite-facilities-row{display:flex;flex-wrap:wrap;gap:10px}.suite-facility-item{display:flex;align-items:center;padding:7px 14px;background:var(--light-sand);border-radius:20px;font-size:0.85rem;color:var(--charcoal-deep);border:1px solid rgba(197,149,91,0.15);transition:all 0.2s ease}.suite-facility-item:hover{background:var(--cream-elegant);border-color:var(--rich-gold)}.suite-facility-item i{color:var(--rich-gold);margin-right:7px;font-size:1rem;width:auto}.suite-price-section{display:flex;justify-content:space-between;align-items:center;background:var(--light-sand);padding:18px 22px;border-radius:16px;margin-top:24px;cursor:pointer;transition:all 0.3s ease;border:2px solid transparent}.suite-price-section:hover{background:var(--cream-elegant);border-color:var(--rich-gold);transform:translateY(-1px)}.suite-select-button{background:var(--gradient-gold);color:var(--primary-navy);border:none;padding:12px 22px;border-radius:25px;font-size:0.92rem;font-weight:700;cursor:pointer;transition:all 0.3s ease;display:flex;align-items:center;gap:8px;box-shadow:0 3px 10px rgba(197,149,91,0.25)}.suite-select-button:hover{transform:translateY(-2px);box-shadow:var(--shadow-gold)}.suite-price-display{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:var(--primary-navy);text-align:right;white-space:nowrap}.suite-price-display span{font-size:0.8rem;font-weight:500;color:var(--warm-gray);font-family:'Inter',sans-serif}.suite-trust-strip{display:flex;justify-content:space-between;gap:10px;margin-bottom:28px;padding-bottom:22px;border-bottom:1px solid rgba(197,149,91,0.2)}.suite-trust-item{display:flex;align-items:center;gap:8px;flex:1;justify-content:center;font-size:0.82rem;font-weight:600;color:var(--primary-navy)}.suite-trust-item i{color:var(--rich-gold);font-size:1rem}.suite-selection{background:var(--cream-elegant);border-top:2px solid var(--rich-gold);padding:25px;margin-top:20px;border-radius:15px 15px 15px 15px}.suite-input-box{margin-bottom:20px}.suite-form-label{color:var(--primary-navy);font-weight:600;margin-bottom:10px;display:block;font-size:1rem}.suite-form-group{position:relative}.suite-form-control{width:100%;border:2px solid #e9ecef;border-radius:15px;padding:16px 20px;font-size:1rem;transition:all 0.3s ease;background:white;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23c5955b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right 15px center;background-size:16px;padding-right:45px}.suite-form-control:focus{border-color:var(--rich-gold);box-shadow:0 0 0 0.25rem rgba(197,149,91,0.25);outline:none;transform:translateY(-2px)}.suite-booking-summary{background:white;border-radius:20px;margin-top:30px;overflow:hidden;box-shadow:var(--shadow-medium);border:2px solid rgba(197,149,91,0.2)}.suite-summary-header{background:var(--gradient-hero);color:white;padding:20px 30px}.suite-summary-header h4{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:600;margin:0}.suite-summary-content{padding:25px 30px}.suite-summary-info{color:var(--charcoal-deep);font-size:1.1rem;margin-bottom:20px;padding-bottom:15px;border-bottom:1px solid rgba(197,149,91,0.2)}.suite-summary-info span{color:var(--primary-navy);font-weight:700}.suite-total-price{display:flex;justify-content:space-between;align-items:center;background:var(--light-sand);padding:20px;border-radius:15px}.suite-total-price .suite-price-label{color:var(--charcoal-deep);font-size:1.1rem;font-weight:500}.suite-price-amount{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:700;color:var(--primary-navy)}.suite-submit-btn{background:var(--gradient-gold);color:var(--primary-navy);border:none;padding:18px 40px;border-radius:50px;font-weight:700;font-size:1.2rem;width:100%;margin-top:25px;cursor:pointer;transition:all 0.4s ease;box-shadow:var(--shadow-gold);display:flex;align-items:center;justify-content:center;gap:10px}.suite-submit-btn:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 10px 30px rgba(197,149,91,0.5)}.suite-submit-btn:disabled{background:#ccc;cursor:not-allowed;opacity:0.6;transform:none}.fact-sheet-section{background:white;border-radius:20px;padding:40px 35px;margin-bottom:30px;border:1px solid rgba(197,149,91,0.15);box-shadow:0 4px 20px rgba(28,50,92,0.08)}.reviews-title{font-family:'Playfair Display',serif;color:#1c325c;font-size:1.8rem;font-weight:600;margin-bottom:25px;text-align:left;padding-bottom:15px}.fact-sheet-card{background:#f8f9fa;border-radius:16px;padding:24px;border:1px solid rgba(197,149,91,0.1);transition:all 0.3s ease}.fact-sheet-card:hover{border-color:#c5955b;transform:translateY(-2px);box-shadow:0 8px 25px rgba(28,50,92,0.12)}.fact-sheet-link{display:flex;align-items:center;justify-content:flex-start;gap:16px;text-decoration:none;color:#1c325c;font-weight:500;font-size:1.1rem;transition:all 0.3s ease}.fact-sheet-link:hover{color:#c5955b;text-decoration:none}.fact-sheet-link img{width:40px;height:40px;border-radius:10px;background:#c5955b;padding:8px;transition:all 0.3s ease;filter:brightness(1.1)}.fact-sheet-link:hover img{transform:scale(1.05);background:#b8860b}.fact-sheet-link span{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:500}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes modalSlideIn{from{opacity:0;transform:translateY(-30px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}@media (max-width:768px){.form-control[name=\"country\"],.form-control[name=\"nationality\"]{font-size:16px}.header-content{flex-direction:row!important;align-items:center;justify-content:space-between;text-align:left;padding:25px 20px;gap:15px}.sidebar-title{text-align:left;font-size:1.2rem;margin:0;flex:1}.price-display{text-align:right;flex-shrink:0}.price-amount{font-size:18px}.price-badge{padding:8px 14px}.farida-booking-header .farida-booking-header-content{padding:22px 20px 18px}.suite-row-content{flex-direction:column;gap:10px}.popup-overlay{align-items:flex-start!important;padding:10px;padding-top:20px}.popup-content{width:100%;margin:0;border-radius:20px;margin-bottom:30px;min-height:auto}.popup-body{padding:20px}.popup-header-content{padding:20px 25px;flex-direction:column;gap:15px;text-align:center}.popup-modal-icon{margin-right:0}.suite-card-content{flex-direction:column}.suite-card-img{width:100%}.suite-card-img img{height:200px}.suite-card-body{padding:25px 20px}.suite-facilities-row{gap:8px}.suite-facility-item{font-size:0.8rem;padding:6px 12px}.suite-badge{top:12px;font-size:0.72rem;padding:6px 14px 6px 12px}.suite-type-chip{left:30px;bottom:26px;font-size:0.68rem;padding:4px 10px}.suite-trust-strip{flex-wrap:nowrap;gap:6px;margin-bottom:20px;padding-bottom:18px}.suite-trust-item{flex:1 1 0;min-width:0;flex-direction:column;gap:4px;font-size:0.66rem}.suite-trust-item span{white-space:normal;line-height:1.2}.suite-trust-item i{font-size:1rem}.suite-price-section{flex-direction:column;gap:15px;text-align:center}.suite-summary-content{padding:20px}.suite-total-price{flex-direction:column;gap:10px;text-align:center}.popup-title{font-size:1.5rem}.close-popup{position:absolute;top:15px;right:15px}.fact-sheet-section{padding:30px 25px;border-radius:16px}.reviews-title{font-size:1.6rem;text-align:center;margin-bottom:20px}.fact-sheet-card{padding:20px}.fact-sheet-link{justify-content:center;gap:14px}.fact-sheet-link span{font-size:1.1rem;text-align:center}}@media (max-width:480px){.header-content{justify-content:center;gap:20px}.sidebar-title{text-align:center;flex:none}.price-display{text-align:center}.farida-booking-heading{align-items:flex-start;gap:11px}.farida-booking-icon{width:40px;height:40px;flex-basis:40px;border-radius:10px;font-size:20px}.farida-booking-header .farida-booking-title{font-size:19px}.farida-booking-subtitle{font-size:11px}.popup-overlay{padding:0;align-items:flex-start!important;padding-top:0}.popup-content{width:100%;border-radius:0;min-height:100vh;margin:0;margin-bottom:0}.popup-body{padding:15px;padding-bottom:40px}.popup-header-content{padding:15px 20px}.suite-card-body{padding:20px 15px}.suite-trust-item{flex:1 1 100%;justify-content:center}.suite-type-chip{left:20px}.suite-trust-item{font-size:0.6rem;gap:3px}.suite-trust-item i{font-size:0.9rem}.suite-submit-btn{margin-bottom:20px;position:relative;z-index:1}.fact-sheet-section{padding:25px 20px}.reviews-title{font-size:1.4rem}.fact-sheet-card{padding:18px}.fact-sheet-link{flex-direction:column;gap:12px}.fact-sheet-link img{width:36px;height:36px}.fact-sheet-link span{font-size:1rem}}@media (hover:none) and (pointer:coarse){.suite-card:hover{transform:none}.suite-select-button:hover{transform:none}.suite-submit-btn:hover:not(:disabled){transform:none}}@media (max-width:768px){.btn-box{flex-direction:row;align-items:center;display:flex;gap:15px}}@media (max-width:576px){.btn-box{gap:10px}.theme-btn{background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border:2px solid rgba(197,149,91,0.8);color:white!important;padding:12px 20px;border-radius:50px;text-decoration:none!important;font-weight:600;font-size:12px;display:inline-flex;align-items:center;justify-content:center;transition:all 0.3s ease;min-width:120px;cursor:pointer;position:relative;z-index:30;flex:1}}.suite-not-available-section{display:flex;align-items:center;gap:14px;background:#f5f2ee;border:2px dashed #d8d3cb;border-radius:15px;padding:16px 20px;margin-top:20px}.suite-not-available-icon{width:42px;height:42px;border-radius:50%;background:#ece8e2;color:#a39a8a;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}.suite-not-available-text{display:flex;flex-direction:column;gap:2px}.suite-not-available-text strong{color:var(--charcoal-deep);font-size:0.95rem;font-weight:700}.suite-not-available-text span{color:var(--warm-gray);font-size:0.82rem}.suite-card.is-sold-out{opacity:0.82}.suite-card.is-sold-out .suite-card-img img{filter:grayscale(45%)}.suite-card.is-sold-out:hover{transform:none;border-color:transparent}.suite-card.is-sold-out .suite-availability-info{color:#c0392b}.luxury-modal .modal-dialog{max-width:640px;margin:1.75rem auto}.luxury-modal-content{border:none;border-radius:24px;overflow:hidden;box-shadow:var(--shadow-dramatic)}.luxury-modal-header{background:var(--gradient-hero);padding:0;border:none;position:relative;overflow:hidden}.luxury-modal-header::before{content:'';position:absolute;inset:0;background:url('data:image/svg+xml, ') repeat-x;opacity:0.6;pointer-events:none}.modal-header-content{position:relative;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;padding:32px 36px;gap:20px}.modal-header-text{flex:1;min-width:0}.modal-title{font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:700;color:var(--rich-gold);margin:0 0 6px 0;line-height:1.2}.modal-subtitle{color:rgba(255,255,255,0.85);font-size:0.92rem;margin:0;font-weight:400}.luxury-close-btn{background:rgba(255,255,255,0.1);border:2px solid rgba(197,149,91,0.5);color:#fff;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;opacity:1;transition:all 0.3s ease}.luxury-close-btn:hover,.luxury-close-btn:focus-visible{background:var(--rich-gold);border-color:var(--rich-gold);color:var(--primary-navy);transform:rotate(90deg)}.luxury-modal-body{background:var(--gradient-elegant);padding:32px 36px 36px;max-height:80vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.luxury-enquiry-form .form-row{display:flex;gap:16px}.luxury-enquiry-form .form-row .form-group{flex:1;min-width:0}.luxury-enquiry-form .form-group{margin-bottom:18px}.luxury-form-label{display:block;font-size:0.85rem;font-weight:600;color:var(--primary-navy);margin-bottom:8px;letter-spacing:0.2px}.input-container{position:relative}.input-icon{position:absolute;left:18px;top:50%;transform:translateY(-50%);color:var(--rich-gold);font-size:1rem;pointer-events:none;z-index:1}.input-icon.textarea-icon{top:18px;transform:none}.luxury-form-control{width:100%;border:2px solid #e9ecef;border-radius:14px;padding:14px 16px 14px 46px;font-size:16px;font-family:'Inter',sans-serif;color:var(--charcoal-deep);background:#fff;transition:all 0.25s ease}textarea.luxury-form-control.luxury-textarea{padding-top:14px;resize:vertical;min-height:90px}.luxury-form-control::placeholder{color:#a3a3a3}.luxury-form-control:focus{outline:none;border-color:var(--rich-gold);box-shadow:0 0 0 0.2rem rgba(197,149,91,0.2);transform:translateY(-1px)}.luxury-enquiry-form select.form-control{padding:14px 40px 14px 16px;border-radius:14px;font-size:16px;border:2px solid #e9ecef}.quantity-section{display:flex;gap:16px;margin-bottom:20px}.quantity-control.luxury-quantity{flex:1;background:#fff;border:1px solid rgba(197,149,91,0.2);border-radius:14px;padding:14px 16px;display:flex;flex-direction:column;gap:10px}.quantity-label{display:flex;align-items:center;gap:8px;font-size:0.82rem;font-weight:600;color:var(--primary-navy)}.quantity-label i{color:var(--rich-gold);font-size:1rem}.qty-buttons{display:flex;align-items:center;justify-content:space-between;gap:10px}.luxury-qty-btn{width:34px;height:34px;border-radius:50%;border:none;background:var(--light-sand);color:var(--primary-navy);font-size:1.1rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.2s ease}.luxury-qty-btn:hover,.luxury-qty-btn:focus-visible{background:var(--rich-gold);color:#fff}.luxury-qty-input{border:none;background:transparent;text-align:center;font-size:1.05rem;font-weight:700;color:var(--charcoal-deep);width:45px;flex-shrink:0}.luxury-submit-btn{width:100%;background:var(--gradient-gold);color:var(--primary-navy);border:none;padding:17px 20px;border-radius:50px;font-weight:700;font-size:1.05rem;margin-top:6px;cursor:pointer;position:relative;overflow:hidden;box-shadow:var(--shadow-gold);transition:all 0.3s ease}.luxury-submit-btn:hover,.luxury-submit-btn:focus-visible{transform:translateY(-2px);box-shadow:0 10px 28px rgba(197,149,91,0.45)}.btn-text{display:flex;align-items:center;justify-content:center;gap:10px;position:relative;z-index:2}.btn-shine{position:absolute;top:0;left:-75%;width:50%;height:100%;background:linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent);transform:skewX(-20deg);animation:shineSweep 3.5s ease-in-out infinite}@keyframes shineSweep{0%{left:-75%}35%{left:130%}100%{left:130%}}.trust-indicators{display:flex;flex-direction:row!important;flex-wrap:nowrap;justify-content:space-between;gap:12px;margin-top:24px;padding-top:20px;border-top:1px solid rgba(197,149,91,0.2)}.trust-item{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1 1 0;min-width:0;text-align:center;color:var(--warm-gray);font-size:0.75rem;font-weight:500;line-height:1.25}.trust-item span{white-space:normal;word-break:break-word}.trust-item i{color:var(--rich-gold);font-size:1.2rem}@media (max-width:768px){.luxury-modal .modal-dialog{margin:0;max-width:100%;height:100%}.luxury-modal-content{border-radius:0;min-height:100vh}.modal-header-content{padding:22px 20px}.modal-title{font-size:1.3rem}.modal-subtitle{font-size:0.82rem}.luxury-close-btn{width:38px;height:38px;font-size:1rem}.luxury-modal-body{padding:22px 18px 30px;max-height:none}.luxury-enquiry-form .form-row{flex-direction:column;gap:0}.luxury-form-label{font-size:0.82rem;margin-bottom:6px}.luxury-form-control,.luxury-enquiry-form select.form-control{padding:13px 14px 13px 42px;font-size:16px}.input-icon{left:15px;font-size:0.95rem}.quantity-section{flex-direction:column;gap:10px}.quantity-control.luxury-quantity{flex-direction:row;align-items:center;justify-content:space-between;padding:12px 14px}.luxury-submit-btn{font-size:1rem;padding:16px 20px}.trust-indicators{flex-direction:row!important;gap:6px}.trust-item{font-size:0.66rem;gap:4px}.trust-item i{font-size:1.05rem}}@media (max-width:480px){.modal-header-content{padding:18px 16px}.luxury-modal-body{padding:18px 14px 26px}.modal-title{font-size:1.2rem}.quantity-label{font-size:0.78rem}.trust-indicators{flex-direction:row!important;gap:4px}.trust-item{font-size:0.6rem;gap:3px}.trust-item i{font-size:0.95rem}}@media (prefers-reduced-motion:reduce){.btn-shine{animation:none}.luxury-submit-btn,.luxury-close-btn,.luxury-qty-btn,.luxury-form-control{transition:none}} .pricing-on-request{display:flex;align-items:center;gap:13px;padding:17px 18px;border:1px solid rgba(197,149,91,0.26);border-radius:12px;background:linear-gradient(135deg,rgba(28,50,92,0.055),rgba(197,149,91,0.08));color:var(--primary-navy)}.pricing-on-request>i{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;flex:0 0 40px;border-radius:10px;background:var(--gradient-hero);color:var(--rich-gold);font-size:20px}.pricing-on-request div{display:flex;min-width:0;flex-direction:column;gap:3px}.pricing-on-request strong{color:var(--primary-navy);font-size:15px;line-height:1.3}.pricing-on-request span{color:var(--warm-gray);font-size:12px;line-height:1.45}@media (max-width:575px){.pricing-on-request{align-items:flex-start;padding:14px}} @media (max-width:991px){#home .hero-content,#home .hero-title,#home .hero-subtitle,#home .hero-buttons,.category-page-hero--fallback .category-content{animation:none!important;opacity:1!important;visibility:visible!important;transform:none!important}} :root { --lat-cruise-header-bottom: 0px; --lat-cruise-nav-height: 55px; } .lat-cruise-nav { display: block; position: sticky; top: var(--lat-cruise-header-bottom); z-index: 990; padding: 3px 0 4px; margin: 0; background: #fefcf7; border-bottom: 1px solid rgba(197,149,91,.16); font-family: inherit; } .lat-cruise-nav__inner { display: flex; align-items: stretch; padding: 3px; gap: 3px; border: 1px solid rgba(197,149,91,.24); border-radius: 13px; background: linear-gradient(135deg, #f8f6f1 0%, #fefcf7 100%); box-shadow: 0 6px 22px rgba(28,50,92,.06); transition: box-shadow .3s ease, border-color .3s ease; } .lat-cruise-nav.is-stuck .lat-cruise-nav__inner { border-color: rgba(197,149,91,.36); box-shadow: 0 8px 24px rgba(28,50,92,.1); } .lat-cruise-nav .lat-cruise-nav__link { position: relative; display: flex; flex: 1 1 auto; min-width: 0; align-items: center; justify-content: center; gap: 7px; min-height: 40px; padding: 8px 10px; border-radius: 9px; color: var(--primary-navy, #1c325c); font-family: inherit; font-size: 13px; font-weight: 600; line-height: 1.5; white-space: nowrap; text-decoration: none; text-align: center; transition: background-color .3s ease, color .3s ease; } .lat-cruise-nav__link i { flex: 0 0 18px; width: 18px; font-size: 18px; color: var(--rich-gold, #c5955b); line-height: 1; } .lat-cruise-nav__link::after { content: ''; position: absolute; bottom: 2px; left: 34%; right: 34%; height: 2px; border-radius: 2px; background: var(--rich-gold, #c5955b); transform: scaleX(0); transition: transform .3s ease; } .lat-cruise-nav .lat-cruise-nav__link:hover { background: rgba(197,149,91,.09); } .lat-cruise-nav .lat-cruise-nav__link[aria-current=\"location\"] { color: var(--primary-navy, #1c325c); background: rgba(197,149,91,.15); } .lat-cruise-nav__link[aria-current=\"location\"]::after { transform: scaleX(1); } .lat-cruise-nav__link:focus-visible { outline: 2px solid var(--primary-navy, #1c325c); outline-offset: -3px; } .lat-cruise-nav .lat-cruise-nav__enquire { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; gap: 7px; min-height: 40px; margin-left: 7px; padding: 8px 18px; border: 1px solid rgba(197,149,91,.5); border-radius: 9px; background: linear-gradient(135deg, #c5955b 0%, #dbb782 100%); color: var(--primary-navy, #1c325c); font-family: inherit; font-size: 13px; font-weight: 700; line-height: 1.5; text-decoration: none; white-space: nowrap; cursor: pointer; box-shadow: 0 3px 9px rgba(197,149,91,.16); transition: background-color .25s ease, box-shadow .25s ease; } .lat-cruise-nav__enquire i { font-size: 17px; line-height: 1; } .lat-cruise-nav .lat-cruise-nav__enquire:hover { background: #dbb782; color: var(--primary-navy, #1c325c); box-shadow: 0 4px 12px rgba(197,149,91,.28); } .lat-cruise-nav__enquire:focus-visible { outline: 2px solid var(--primary-navy, #1c325c); outline-offset: 2px; } #about, #itinerary, #inclusions, #pricing, #reviews, #lat-cruise-enquiry, #lat-cruise-booking, #formSection { scroll-margin-top: calc(var(--lat-cruise-header-bottom) + var(--lat-cruise-nav-height) + 16px); } @media (min-width: 992px) { .main-container .sidebar { top: calc(var(--lat-cruise-header-bottom) + var(--lat-cruise-nav-height) + 20px) !important; } } @media (max-width: 991.98px) { :root { --lat-cruise-nav-height: 49px; } .lat-cruise-nav { padding: 0; overflow: hidden; } .lat-cruise-nav::before, .lat-cruise-nav::after { position: absolute; top: 0; bottom: 0; z-index: 3; display: flex; align-items: center; width: 34px; color: var(--primary-navy, #1c325c); font-size: 25px; font-weight: 400; line-height: 1; pointer-events: none; opacity: 0; transition: opacity .2s ease; } .lat-cruise-nav::before { content: '‹'; left: 0; justify-content: flex-start; padding-left: 5px; background: linear-gradient(90deg, #fefcf7 48%, rgba(254,252,247,0)); } .lat-cruise-nav::after { content: '›'; right: 0; justify-content: flex-end; padding-right: 5px; background: linear-gradient(270deg, #fefcf7 48%, rgba(254,252,247,0)); } .lat-cruise-nav.has-scroll-left::before, .lat-cruise-nav.has-scroll-right::after { opacity: 1; } .lat-cruise-nav .container { max-width: none; padding: 0; } .lat-cruise-nav__inner { position: relative; gap: 2px; padding: 3px 8px; overflow-x: auto; overflow-y: hidden; overscroll-behavior-x: contain; scrollbar-width: none; -webkit-overflow-scrolling: touch; scroll-snap-type: x proximity; border: 0; border-radius: 0; box-shadow: 0 4px 14px rgba(28,50,92,.07); } .lat-cruise-nav__inner::-webkit-scrollbar { display: none; } .lat-cruise-nav .lat-cruise-nav__link { flex: 0 0 auto; min-height: 42px; padding: 6px 10px; gap: 5px; border-radius: 8px; font-size: 11.5px; scroll-snap-align: center; } .lat-cruise-nav__link i { flex-basis: 15px; width: 15px; font-size: 15px; } .lat-cruise-nav__link::after { bottom: 1px; left: 28%; right: 28%; } .lat-cruise-nav .lat-cruise-nav__enquire { display: none; } .lat-cruise-nav.is-stuck { border-bottom-color: rgba(197,149,91,.38); } .lat-cruise-nav.is-stuck .lat-cruise-nav__inner { border: 0; box-shadow: 0 5px 16px rgba(28,50,92,.11); } body { padding-bottom: calc(52px + env(safe-area-inset-bottom, 0px)); } .fixed-mobile-btn--farida .book-now-btn { background: linear-gradient(135deg, #1c325c 0%, #1a4b66 100%); color: #fff !important; border-color: rgba(197,149,91,.45); box-shadow: 0 4px 16px rgba(28,50,92,.22); } .fixed-mobile-btn--farida .book-now-btn i { color: #e2bd85; } } @media (max-width: 380px) { .lat-cruise-nav .lat-cruise-nav__link { padding-inline: 8px; font-size: 11px; } .lat-cruise-nav__link i { display: none; } } @media (prefers-reduced-motion: reduce) { .lat-cruise-nav__inner, .lat-cruise-nav__link, .lat-cruise-nav__link::after, .lat-cruise-nav__enquire { transition: none !important; } } @media print { .lat-cruise-nav { display: none !important; } } body.lat-cruise-page #home .lat-hero-award-wrap { display:flex; justify-content:center; margin:20px 0 24px; padding:0; } body.lat-cruise-page #home .lat-hero-award { display:inline-flex; align-items:center; gap:14px; box-sizing:border-box; max-width:100%; padding:12px 18px; border:1px solid rgba(224,198,151,.8); border-radius:12px; background:#fffdf8; color:#1c325c; text-align:left; text-decoration:none; box-shadow:0 5px 20px rgba(0,0,0,.15); } body.lat-cruise-page #home .lat-hero-award img { display:block; flex:0 0 64px; width:64px; height:64px; max-width:64px; object-fit:contain; border:0; border-radius:0; padding:0; margin:0; } body.lat-cruise-page #home .lat-hero-award-copy { display:flex; flex-direction:column; gap:3px; min-width:0; } body.lat-cruise-page #home .lat-hero-award-company { color:#566477; font:400 11px/1.4 'Inter',Arial,sans-serif; } body.lat-cruise-page #home .lat-hero-award strong { color:#1c325c; font:700 15px/1.4 'Inter',Arial,sans-serif; } body.lat-cruise-page #home .lat-hero-award-link { color:#35654e; font:600 11px/1.5 'Inter',Arial,sans-serif; } body.lat-cruise-page #home .lat-hero-award:hover { background:#fff; border-color:#c5955b; } body.lat-cruise-page #home .lat-hero-award:focus-visible { outline:3px solid #e6c79c; outline-offset:4px; } @media(max-width:575px) { body.lat-cruise-page #home .lat-hero-award-wrap { margin:16px 0 20px; } body.lat-cruise-page #home .lat-hero-award { gap:10px; padding:10px 13px; border-radius:10px; } body.lat-cruise-page #home .lat-hero-award img { width:52px; height:52px; max-width:52px; flex-basis:52px; } body.lat-cruise-page #home .lat-hero-award strong { font-size:13px; } body.lat-cruise-page #home .lat-hero-award-company { font-size:10px; } } body.lat-cruise-page #home > .lat-hero-award-wrap { position:relative; z-index:3; margin:22px 16px 0; justify-content:flex-end; } body.lat-cruise-page #home .lat-hero-award { padding:8px 11px; gap:10px; border-radius:9px; box-shadow:0 3px 12px rgba(0,0,0,.12); background:#fffdf8; } body.lat-cruise-page #home .lat-hero-award img { width:44px; height:44px; max-width:44px; flex-basis:44px; } body.lat-cruise-page #home .lat-hero-award strong { font-size:12px; line-height:1.35; } body.lat-cruise-page #home .lat-hero-award-company { font-size:10px; line-height:1.35; } body.lat-cruise-page #home .lat-hero-award-copy { gap:3px; } @media(min-width:992px) { body.lat-cruise-page #home { padding-bottom:110px; } body.lat-cruise-page #home > .lat-hero-award-wrap { position:absolute; bottom:22px; right:max(24px,calc((100% - 1240px)/2)); margin:0; } body.lat-cruise-page #home .lat-hero-award { padding:10px 14px; } body.lat-cruise-page #home .lat-hero-award img { width:52px; height:52px; max-width:52px; flex-basis:52px; } body.lat-cruise-page #home .lat-hero-award strong { font-size:13px; } body.lat-cruise-page #home .lat-hero-award-company { font-size:11px; } } @media(max-width:991px) { body.lat-cruise-page #home > .lat-hero-award-wrap { align-self:center; margin-top:18px; } } body.lat-cruise-page #home .lat-hero-award { background:rgba(23,43,73,.94); color:#fff; border:1px solid rgba(224,198,151,.5); border-radius:10px; box-shadow:none; padding:10px 14px; gap:12px; } body.lat-cruise-page #home .lat-hero-award img { background:#fffdf8; border-radius:6px; padding:4px; box-sizing:border-box; } body.lat-cruise-page #home .lat-hero-award-company { color:#e0e6ee; } body.lat-cruise-page #home .lat-hero-award strong { color:#fff; } body.lat-cruise-page #home .lat-hero-award-link { display:inline-flex; align-items:center; gap:7px; color:#e6c79c; font-size:11px; line-height:1.4; } body.lat-cruise-page #home .lat-hero-award:hover { background:#1c325c; border-color:#e6c79c; } body.lat-cruise-page #home .lat-hero-award:hover .lat-hero-award-link { text-decoration:underline; text-underline-offset:3px; } @media(min-width:992px) { body.lat-cruise-page #home > .lat-hero-award-wrap { bottom:20px; } body.lat-cruise-page #home .lat-hero-award img { width:58px; height:58px; max-width:58px; flex-basis:58px; } } @media(max-width:991px) { body.lat-cruise-page #home .lat-hero-award { padding:8px 11px; gap:10px; } body.lat-cruise-page #home .lat-hero-award img { width:48px; height:48px; max-width:48px; flex-basis:48px; } body.lat-cruise-page #home .lat-hero-award-copy { gap:2px; } body.lat-cruise-page #home .lat-hero-award-company { font-size:10px; } body.lat-cruise-page #home .lat-hero-award strong { font-size:12px; } body.lat-cruise-page #home .lat-hero-award-link { font-size:10px; } } .lat-mobile-award-row { display:none; } @media(max-width:991px) { body.lat-cruise-page #home > .lat-hero-award-wrap { display:none!important; } body.lat-cruise-page .lat-mobile-award-row { display:block; position:relative; width:100%; margin:0; padding:0; background:#fffdf8; border-top:1px solid #e3d2b7; border-bottom:1px solid #e5ddd0; box-sizing:border-box; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award { display:flex; align-items:center; gap:12px; width:100%; max-width:600px; box-sizing:border-box; margin:0 auto; padding:12px 18px; background:transparent; border:0; border-radius:0; box-shadow:none; text-decoration:none; color:#1c325c; text-align:left; } body.lat-cruise-page .lat-mobile-award-row img { display:block; width:48px; height:48px; max-width:48px; flex:0 0 48px; object-fit:contain; padding:0; margin:0; border:0; border-radius:0; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-copy { display:grid; flex:1; min-width:0; grid-template-columns:minmax(0,1fr) auto; gap:3px 12px; align-items:center; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-company { grid-column:1; grid-row:1; color:#657184; font:400 10px/1.4 'Inter',Arial,sans-serif; } body.lat-cruise-page .lat-mobile-award-row strong { grid-column:1; grid-row:2; color:#1c325c; font:700 12px/1.4 'Inter',Arial,sans-serif; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-link { grid-column:2; grid-row:1 / 3; display:flex; align-items:center; gap:7px; max-width:88px; color:#795a2e; font:600 10px/1.4 'Inter',Arial,sans-serif; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-link > span { font-size:18px; } body.lat-cruise-page .lat-mobile-award-row a:focus-visible { outline:3px solid #c5955b; outline-offset:-3px; } } @media(max-width:359px) { body.lat-cruise-page .lat-mobile-award-row .lat-hero-award { padding:10px 12px; gap:9px; } body.lat-cruise-page .lat-mobile-award-row img { width:42px; height:42px; max-width:42px; flex-basis:42px; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-copy { column-gap:8px; } body.lat-cruise-page .lat-mobile-award-row strong { font-size:11px; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-link { max-width:70px; } } @media(max-width:991px) { body.lat-cruise-page .lat-mobile-award-row { background:#1c325c; border-top:1px solid #bfa071; border-bottom:1px solid rgba(230,199,156,.35); } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-company { color:#dce3ed; } body.lat-cruise-page .lat-mobile-award-row strong { color:#fff; } body.lat-cruise-page .lat-mobile-award-row .lat-hero-award-link { color:#e6c79c; } body.lat-cruise-page .lat-mobile-award-row img { background:#fffdf8; border-radius:5px; padding:3px; box-sizing:border-box; } } @media(min-width:992px) { body.lat-cruise-page #home.hero-section { display:flex!important; flex-direction:column; justify-content:center!important; align-items:center!important; box-sizing:border-box; min-height:380px; height:auto!important; padding:100px 0!important; } body.lat-cruise-page #home > .container { width:100%; flex:0 0 auto; } body.lat-cruise-page #home .hero-content { position:relative; top:auto!important; bottom:auto!important; margin:0 auto!important; padding:0!important; text-align:center; transform:none!important; animation:none!important; opacity:1!important; } body.lat-cruise-page #home .hero-content, body.lat-cruise-page #home .hero-title { width:100%!important; max-width:none!important; box-sizing:border-box; white-space:normal; text-wrap:wrap; } body.lat-cruise-page #home .hero-title { margin:0 auto!important; text-align:center; } body.lat-cruise-page #home .hero-buttons { position:relative; top:auto; bottom:auto; margin:24px 0 0!important; padding:0!important; width:100%; } body.lat-cruise-page #home .hero-buttons .btn-box { justify-content:center!important; } } body.lat-cruise-page #home .hero-buttons .btn-box { display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:10px; } body.lat-cruise-page #home .hero-buttons .theme-btn { display:inline-flex!important; align-items:center; justify-content:center; flex:0 0 auto!important; width:auto!important; min-width:0!important; min-height:44px; padding:10px 15px!important; gap:8px; border:1px solid #dfc196!important; border-radius:8px!important; background:#e7c897!important; color:#1c3254!important; box-shadow:none!important; font-size:14px!important; line-height:1.4; font-weight:600; text-decoration:none; transform:none!important; margin:0!important; } body.lat-cruise-page #home .hero-buttons .theme-btn::before, body.lat-cruise-page #home .hero-buttons .theme-btn::after { display:none!important; } body.lat-cruise-page #home .hero-buttons .theme-btn i { display:inline-flex; align-items:center; justify-content:center; width:20px!important; height:20px!important; min-width:20px!important; margin:0!important; padding:0!important; background:none!important; color:#1c3254!important; font-size:18px!important; } body.lat-cruise-page #home .hero-buttons .theme-btn:hover { background:#f1d9b3!important; border-color:#1c3254!important; } body.lat-cruise-page #home .hero-buttons .theme-btn:focus-visible { outline:3px solid #e6c79c; outline-offset:4px; } @media(max-width:575px) { body.lat-cruise-page #home .hero-buttons .theme-btn { padding:9px 12px!important; font-size:13px!important; } } @media (max-width: 767px) { body.lat-cruise-page .breadcrumb-section { padding:10px 0!important; } body.lat-cruise-page .breadcrumb-section > .container { padding-inline:16px; } body.lat-cruise-page .breadcrumb { display:block; margin:0; padding:0; font-size:12px; line-height:1.65; } body.lat-cruise-page .breadcrumb .breadcrumb-item { display:inline; padding:0; margin:0; font-size:inherit; line-height:inherit; white-space:normal; overflow-wrap:anywhere; } body.lat-cruise-page .breadcrumb .breadcrumb-item a { font-size:inherit; line-height:inherit; } body.lat-cruise-page .breadcrumb .breadcrumb-item + .breadcrumb-item::before { float:none; display:inline; padding:0; margin:0 5px; font-size:14px; line-height:inherit; top:0; } body.lat-cruise-page .breadcrumb .breadcrumb-icon { font-size:13px; margin-right:4px; } } /* Scoped to the reviews card; Tripadvisor controls the embedded content. */ #reviews .lat-ta-card{background:#fff;border:1px solid #ddc9a8;border-radius:20px;padding:0;overflow:hidden;box-shadow:0 6px 24px rgba(27,51,87,.07);margin:0} #reviews .lat-ta-card .tripadvisor-header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;padding:18px 20px;margin:0;border:0;border-bottom:1px solid #eadfce;background:#fcfaf6} #reviews .lat-ta-card .tripadvisor-brand{display:flex;align-items:center;gap:12px;min-width:0} #reviews .lat-ta-card .tripadvisor-icon{display:grid;place-items:center;flex:0 0 42px;width:42px;height:42px;border-radius:50%;background:#e9f7f0;color:#00765b;font-size:26px;margin:0} #reviews .lat-ta-card .tripadvisor-title{font-size:21px;line-height:1.3;font-weight:700;color:#1b3357;margin:0;padding:0} #reviews .lat-ta-caption{font-size:13px;line-height:1.5;color:#65746f;margin:4px 0 0} #reviews .lat-ta-link{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:9px 14px;border:1px solid #1b3357;border-radius:9px;color:#fff;background:#1b3357;font-size:13px;line-height:1.4;font-weight:600;text-decoration:none;white-space:nowrap} #reviews .lat-ta-link:hover{background:#29476f;border-color:#29476f;color:#fff} #reviews .lat-ta-link:focus-visible{outline:3px solid #b48b51;outline-offset:3px} #reviews .lat-ta-card .tripadvisor-widget{height:auto;min-height:0;max-height:none;box-sizing:border-box;padding:10px;margin:0;background:#fff;border:0;border-radius:0;overflow:visible} #reviews .lat-ta-card .tripadvisor-widget iframe{display:block;width:100%;height:540px;max-width:100%;border:0;border-radius:8px;background:#fff} #reviews .lat-ta-card .widget-placeholder{display:flex;align-items:center;justify-content:center;gap:10px;min-height:540px;padding:20px;color:#65746f;font-size:14px;text-align:center} @media(max-width:767px){ #reviews .lat-ta-card{border-radius:20px} #reviews .lat-ta-card .tripadvisor-header{padding:14px;gap:12px} #reviews .lat-ta-card .tripadvisor-title{font-size:19px} #reviews .lat-ta-caption{font-size:12px} #reviews .lat-ta-link{width:100%;white-space:normal} #reviews .lat-ta-card .tripadvisor-widget{padding:6px;min-height:0} #reviews .lat-ta-card .tripadvisor-widget iframe,#reviews .lat-ta-card .widget-placeholder{height:280px;min-height:0} } #reviews .lat-ta-footer{margin:0;padding:12px 20px;border-top:1px solid #eadfce;background:#fcfaf6;font-size:12px;line-height:1.6;color:#65746f} /* Match the frame to the loaded variant even after rotating/resizing the device. */ #reviews .lat-ta-card .tripadvisor-widget[data-variant=\"summary\"] iframe{height:280px;min-height:0} #reviews .lat-ta-card .tripadvisor-widget[data-variant=\"detail\"] iframe{height:540px;min-height:0} @media(max-width:767px){#reviews .lat-ta-footer{padding:12px 14px}} /* Scoped rules take precedence over the legacy navigation in style.css. */ #lat-site-header, #modernMobileMenu { --lat-navy:#1c325c; --lat-gold:#c5955b; --lat-pale:#ead7b8; font-family:'Inter',Arial,sans-serif; box-sizing:border-box; } #lat-site-header *, #modernMobileMenu * { box-sizing:border-box; } #lat-site-header { position:fixed; inset:0 0 auto; width:100%; z-index:1001; padding:11px 0; min-height:0; transition:none; background:var(--gradient-hero,linear-gradient(135deg,#1c325c 0%,#1a4b66 50%,#2c3e50 100%)); border-bottom:1px solid rgba(197,149,91,.3); box-shadow:0 3px 18px rgba(20,39,69,.12); backdrop-filter:none; -webkit-backdrop-filter:none; } #lat-site-header > .container { display:flex; flex-wrap:nowrap; align-items:center; gap:20px; width:100%; max-width:1320px; padding:0 24px; margin:auto; } #lat-site-header .navbar-brand { flex:none; margin:0; padding:0; line-height:1; transform:none; } #lat-site-header .navbar-brand img { display:block; filter:none; transform:none; object-fit:contain; } #lat-site-header .navbar-brand .d-none.d-lg-block { display:block!important; width:180px!important; height:auto; } #lat-site-header .navbar-brand .d-lg-none { display:none!important; width:44px!important; height:44px!important; } #lat-site-header .lat-desktop-nav { display:flex; flex:1; min-width:0; align-items:center; justify-content:space-between; gap:14px; } #lat-site-header .navbar-nav { display:flex; flex-direction:row; align-items:center; gap:3px; padding:0; margin:0 auto!important; list-style:none; } #lat-site-header .nav-link { display:flex; align-items:center; gap:5px; padding:10px 9px; margin:0; border:0; border-radius:7px; background:transparent; color:#fff!important; font:500 14px/1.4 'Inter',Arial,sans-serif; white-space:nowrap; text-decoration:none; cursor:pointer; transition:background .15s,color .15s; } #lat-site-header .nav-link::after { display:none; } #lat-site-header .nav-link i { margin:0; font-size:15px; } #lat-site-header .nav-link.special-offer { background:#a91d45; color:#fff!important; padding:10px 12px; box-shadow:none; } #lat-site-header .navbar-actions { display:flex; align-items:center; gap:9px; flex:none; } #lat-site-header .action-btn, #lat-site-header .mobile-action-btn, #lat-site-header .mobile-toggle { display:flex; align-items:center; justify-content:center; flex:none; width:44px; height:44px; padding:0; border:1px solid rgba(234,215,184,.3); border-radius:9px; color:#ead7b8!important; background:rgba(255,255,255,.04); font-size:21px; text-decoration:none; cursor:pointer; box-shadow:none; transform:none; } #lat-site-header .btn-tailor { display:flex; align-items:center; gap:6px; min-height:44px; padding:10px 13px; background:linear-gradient(110deg,#c5955b,#ddc294); color:#142745!important; border:0; border-radius:8px; font-size:13px; font-weight:700; line-height:1.4; white-space:nowrap; text-decoration:none; } #lat-site-header .language-toggle { display:flex; align-items:center; gap:5px; min-height:44px; padding:8px; border:1px solid rgba(234,215,184,.25); border-radius:8px; background:transparent; color:#fff!important; font:500 13px/1.4 'Inter',Arial,sans-serif; cursor:pointer; } #lat-site-header .dropdown { position:relative; } #lat-site-header .dropdown-menu { display:none!important; position:absolute; top:100%; left:0; right:auto; margin:6px 0 0; padding:7px; width:215px; min-width:0; max-height:calc(100dvh - 105px); overflow:auto; background:#fffefb; border:1px solid #e9e0d2; border-radius:12px; box-shadow:0 12px 32px rgba(20,39,69,.18); list-style:none; opacity:1; visibility:visible; transform:none; transition:none; } #lat-site-header .dropdown-menu.lat-open { display:block!important; } #lat-site-header .language-dropdown .dropdown-menu { left:auto; right:0; } #lat-site-header .dropdown-item { display:flex; align-items:center; gap:9px; min-height:44px; margin:0; padding:10px 12px; border-radius:6px; color:#1c325c; background:transparent; font-size:14px; line-height:1.4; text-decoration:none; white-space:normal; transform:none; } #lat-site-header .dropdown-item i { color:#8a602f; } #lat-site-header .mobile-actions, #lat-site-header .mobile-toggle { display:none!important; } #lat-site-header .hamburger { display:flex; flex-direction:column; gap:5px; width:21px; height:auto; } #lat-site-header .hamburger span { display:block; position:static; width:21px; height:2px; background:#ead7b8; border-radius:2px; } #lat-site-header a:focus-visible, #lat-site-header button:focus-visible, #modernMobileMenu a:focus-visible, #modernMobileMenu button:focus-visible { outline:2px solid #ddc294; outline-offset:3px; } #lat-site-header.lat-compact { padding:11px 0; } #lat-site-header.lat-compact > .container { gap:14px; } #lat-site-header.lat-compact .navbar-brand .d-none.d-lg-block { display:none!important; } #lat-site-header.lat-compact .navbar-brand .d-lg-none { display:block!important; } #lat-site-header.lat-mobile { padding:11px 0; } #lat-site-header.lat-mobile > .container { padding-left:max(16px,env(safe-area-inset-left)); padding-right:max(16px,env(safe-area-inset-right)); gap:16px; min-height:44px; } #lat-site-header.lat-mobile .navbar-brand .d-none.d-lg-block { display:none!important; } #lat-site-header.lat-mobile .navbar-brand .d-lg-none { display:block!important; } #lat-site-header.lat-mobile .lat-desktop-nav { display:none!important; } #lat-site-header.lat-mobile .mobile-actions { display:flex!important; align-items:center; gap:8px; margin:0 0 0 auto; } #lat-site-header.lat-mobile .mobile-toggle { display:flex!important; } /* A CSS fallback makes the compact header available before initialization. */ @media(max-width:991.98px) { #lat-site-header { padding:11px 0; } #lat-site-header > .container { padding:0 16px; gap:16px; } #lat-site-header .navbar-brand .d-none.d-lg-block, #lat-site-header .lat-desktop-nav { display:none!important; } #lat-site-header .navbar-brand .d-lg-none { display:block!important; } #lat-site-header .mobile-actions { display:flex!important; gap:8px; margin:0 0 0 auto; } #lat-site-header .mobile-toggle { display:flex!important; } } #modernMobileMenu[hidden], #modernMobileMenu [hidden] { display:none!important; } #modernMobileMenu { position:fixed; inset:0; width:100%; height:100vh; height:100dvh; z-index:1100; display:flex; flex-direction:column; background:var(--gradient-hero,linear-gradient(135deg,#1c325c 0%,#1a4b66 50%,#2c3e50 100%)); color:white; overflow:hidden; visibility:visible; opacity:1; transform:none; } #modernMobileMenu .mobile-menu-header { position:relative; flex:none; display:flex; align-items:center; justify-content:space-between; gap:12px; width:100%; padding:calc(12px + env(safe-area-inset-top)) max(18px,env(safe-area-inset-right)) 12px max(18px,env(safe-area-inset-left)); background:var(--gradient-hero,linear-gradient(135deg,#1c325c 0%,#1a4b66 50%,#2c3e50 100%)); border-bottom:1px solid rgba(234,215,184,.2); } #modernMobileMenu .mobile-menu-brand { display:flex; align-items:center; gap:10px; font-size:14px; font-weight:600; line-height:1.4; } #modernMobileMenu .mobile-menu-brand img { width:40px; height:40px; object-fit:contain; } #modernMobileMenu .mobile-close-btn { display:flex; align-items:center; justify-content:center; width:44px; height:44px; flex:none; border:1px solid rgba(234,215,184,.4); border-radius:9px; background:transparent; color:#ead7b8; font-size:24px; cursor:pointer; } #modernMobileMenu .mobile-menu-content { width:100%; max-width:640px; min-height:0; margin:0 auto; padding:18px max(18px,env(safe-area-inset-right)) calc(24px + env(safe-area-inset-bottom)) max(18px,env(safe-area-inset-left)); overflow-y:auto; overscroll-behavior:contain; -webkit-overflow-scrolling:touch; } #modernMobileMenu .mobile-nav-item { margin:0 0 6px; } #modernMobileMenu .mobile-nav-link, #modernMobileMenu .mobile-destinations-toggle, #modernMobileMenu .mobile-language-toggle { display:flex; align-items:center; width:100%; gap:12px; min-height:48px; padding:12px 14px; border:1px solid rgba(255,255,255,.08); border-radius:9px; background:rgba(255,255,255,.035); color:white!important; font:500 15px/1.5 'Inter',Arial,sans-serif; text-align:left; text-decoration:none; cursor:pointer; } #modernMobileMenu .mobile-destinations-toggle, #modernMobileMenu .mobile-language-toggle { justify-content:space-between; } #modernMobileMenu i { color:#ddc294; } #modernMobileMenu .mobile-nav-link > i { width:20px; text-align:center; } #modernMobileMenu button[aria-expanded=\"true\"] .chevron { transform:rotate(180deg); } #modernMobileMenu .mobile-destinations-submenu, #modernMobileMenu .mobile-language-submenu { margin:8px 0 12px 16px; padding-left:10px; border-left:1px solid rgba(234,215,184,.3); } #modernMobileMenu .mobile-submenu-link, #modernMobileMenu .mobile-language-link { display:flex; align-items:center; gap:9px; min-height:44px; padding:10px 12px; color:#f0eee9!important; font-size:14px; line-height:1.5; text-decoration:none; border-radius:6px; } #modernMobileMenu .special-deals { background:#a91d45; border-color:transparent; } #modernMobileMenu .mobile-actions-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:20px; padding-top:18px; border-top:1px solid rgba(234,215,184,.2); } #modernMobileMenu .lat-contact-more { margin-top:10px; padding-top:0; border:0; } #modernMobileMenu .mobile-action-card { display:flex; align-items:center; justify-content:center; gap:8px; min-height:48px; padding:12px; border:1px solid rgba(234,215,184,.25); border-radius:8px; color:#fff; font-size:14px; line-height:1.5; text-decoration:none; } #modernMobileMenu .mobile-enquiry-btn2 { display:block; margin-top:18px; padding:15px 18px; background:linear-gradient(110deg,#c5955b,#ddc294); color:#142745!important; border-radius:9px; font-size:15px; font-weight:700; line-height:1.5; text-align:center; text-decoration:none; } #modernMobileMenu .mobile-enquiry-btn2 i { color:inherit; } @media(hover:hover) { #lat-site-header .nav-link:hover, #lat-site-header .language-toggle:hover { background:rgba(234,215,184,.12); color:#ead7b8!important; } #lat-site-header .dropdown-item:hover { background:#f3eee4; } #modernMobileMenu a:hover, #modernMobileMenu button:hover { background:rgba(234,215,184,.12); } } @media(prefers-reduced-motion:reduce) { #lat-site-header *, #modernMobileMenu * { transition:none!important; animation:none!important; scroll-behavior:auto!important; } } /* Synchronize the existing breadcrumb offset, without adding a second spacer. */ html.lat-header-ready body .breadcrumb-section { margin-top:var(--lat-header-height,70px); } @media(max-width:380px) { #lat-site-header.lat-mobile > .container { gap:8px; padding-left:max(12px,env(safe-area-inset-left)); padding-right:max(12px,env(safe-area-inset-right)); } #lat-site-header.lat-mobile .mobile-actions { gap:4px; } } Home Destinations Egypt Jordan Dubai Morocco Oman Turkey African Safari Multi Country Shore Excursions Travel Deals Tailor-made EN English French German Spanish Italian Portuguese Russian Luxor & Aswan Travel Home Destinations Egypt Jordan Dubai Morocco Oman Turkey African Safari Multi Country Shore Excursions Travel Deals Contact Us Tailor-made Trips Language English French German Spanish Italian Portuguese Russian Call Us Search Viber WhatsApp Plan Your Journey (() => { 'use strict'; const header = document.getElementById('lat-site-header'); const panel = document.getElementById('modernMobileMenu'); if (!header || !panel || header.dataset.initialized) return; header.dataset.initialized = 'true'; const opener = header.querySelector('.mobile-toggle'); const closeButton = panel.querySelector('.mobile-close-btn'); const desktop = header.querySelector('.lat-desktop-nav'); const container = header.querySelector('.container'); const brand = header.querySelector('.navbar-brand'); let locked = null; let previousFocus = null; let background = []; const focusable = () => [...panel.querySelectorAll('a[href],button:not([disabled])')].filter(el => el.getClientRects().length); const closeDropdowns = (except) => header.querySelectorAll('.dropdown-menu').forEach(menu => { if (menu !== except) { menu.classList.remove('lat-open'); menu.previousElementSibling.setAttribute('aria-expanded','false'); } }); function closeMenu(restoreFocus = true) { if (panel.hidden) return; panel.hidden = true; opener.setAttribute('aria-expanded','false'); background.forEach(([element, inert]) => { element.inert = inert; }); background = []; if (locked) { const state = locked; locked = null; Object.entries(state.styles).forEach(([key,value]) => { document.body.style[key] = value; }); const oldBehavior = document.documentElement.style.scrollBehavior; document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(state.x,state.y); document.documentElement.style.scrollBehavior = oldBehavior; } panel.querySelectorAll('button[aria-controls]').forEach(button => { button.setAttribute('aria-expanded','false'); document.getElementById(button.getAttribute('aria-controls')).hidden = true; }); if (restoreFocus && previousFocus?.isConnected) previousFocus.focus({preventScroll:true}); } function openMenu() { if (!panel.hidden) return; closeDropdowns(); previousFocus = document.activeElement; const styles = {}; ['position','top','left','width','overflow','paddingRight'].forEach(key => { styles[key] = document.body.style[key]; }); locked = {x:window.scrollX,y:window.scrollY,styles}; const scrollbar = window.innerWidth-document.documentElement.clientWidth; if (scrollbar > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight)+scrollbar}px`; Object.assign(document.body.style,{position:'fixed',top:`-${locked.y}px`,left:`-${locked.x}px`,width:'100%',overflow:'hidden'}); panel.hidden = false; opener.setAttribute('aria-expanded','true'); // Make only siblings outside the dialog inert, including when the include is nested. let branch = panel; while (branch.parentElement) { for (const sibling of branch.parentElement.children) { if (sibling !== branch && !['SCRIPT','STYLE','LINK'].includes(sibling.tagName)) { background.push([sibling,sibling.inert]); sibling.inert = true; } } if (branch.parentElement === document.body) break; branch = branch.parentElement; } panel.querySelector('.mobile-menu-content').scrollTop = 0; closeButton.focus({preventScroll:true}); } opener.addEventListener('click',openMenu); closeButton.addEventListener('click',() => closeMenu()); panel.querySelectorAll('button[aria-controls]').forEach(button => { button.addEventListener('click',() => { const target = document.getElementById(button.getAttribute('aria-controls')); target.hidden = !target.hidden; button.setAttribute('aria-expanded',String(!target.hidden)); }); }); panel.addEventListener('click',event => { if (event.target.closest('a[href]')) closeMenu(); }); document.addEventListener('keydown',event => { if (!panel.hidden) { if (event.key === 'Escape') { event.preventDefault(); closeMenu(); } if (event.key === 'Tab') { const elements = focusable(), first = elements[0], last = elements.at(-1); if (event.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) { event.preventDefault(); first?.focus(); } } } else if (event.key === 'Escape') { const active = header.querySelector('.dropdown-menu.lat-open'); if (active) { closeDropdowns(); active.previousElementSibling.focus(); } } }); header.querySelectorAll('.dropdown').forEach((group,index) => { const button = group.querySelector('button'); const menu = group.querySelector('.dropdown-menu'); if (!button || !menu) return; menu.id = `lat-header-dropdown-${index}`; button.setAttribute('aria-controls',menu.id); button.addEventListener('click',() => { const open = !menu.classList.contains('lat-open'); closeDropdowns(menu); menu.classList.toggle('lat-open',open); button.setAttribute('aria-expanded',String(open)); }); button.addEventListener('keydown',event => { if (event.key === 'ArrowDown') { event.preventDefault(); closeDropdowns(menu); menu.classList.add('lat-open'); button.setAttribute('aria-expanded','true'); menu.querySelector('a')?.focus(); } }); }); document.addEventListener('click',event => { if (!header.contains(event.target)) closeDropdowns(); }); header.addEventListener('focusout',event => { if (event.relatedTarget && !header.contains(event.relatedTarget)) closeDropdowns(); }); let lastHeight = 0; function measure() { const height = header.getBoundingClientRect().height; if (height !== lastHeight) { lastHeight = height; document.documentElement.style.setProperty('--lat-header-height',`${height}px`); document.dispatchEvent(new CustomEvent('lat:header-resize',{detail:{height}})); } document.documentElement.classList.add('lat-header-ready'); } function layout() { const wasMobile = header.classList.contains('lat-mobile'); header.classList.remove('lat-mobile','lat-compact'); const width = document.documentElement.clientWidth; let mobile = width { const style = getComputedStyle(container); const available = container.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight); const menuWidth = [...desktop.children].reduce((sum,el) => sum + el.getBoundingClientRect().width,0) + parseFloat(getComputedStyle(desktop).columnGap || 0); return brand.getBoundingClientRect().width + parseFloat(style.columnGap || 0) + menuWidth { if (!scheduled) { scheduled = true; requestAnimationFrame(() => { scheduled = false; layout(); }); } }; window.addEventListener('resize',schedule,{passive:true}); window.addEventListener('pageshow',() => { closeMenu(false); schedule(); }); if (document.fonts) document.fonts.ready.then(schedule); if (window.ResizeObserver) new ResizeObserver(measure).observe(header); layout(); })(); (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-WCZCN4R4'); Home Egypt Egypt Nile Cruise Luxor and Aswan Nile Cruises Deluxe Nile Cruises M/S Nile Style Nile Cruise M/S Nile Style Nile Cruise View Gallery Gallery image 1 Gallery image 2 Gallery image 3 Gallery image 4 Gallery image 5 Gallery image 6 Gallery image 7 Gallery image 8 Gallery image 9 Gallery image 10 Gallery image 11 Gallery image 12 Gallery image 13 Gallery image 14 Gallery image 15 Gallery image 16 Gallery image 17 Gallery image 18 Gallery image 19 Luxor & Aswan Travel Travelers’ Choice 2026 View on Tripadvisor ↗ Luxor & Aswan Travel Travelers’ Choice 2026 View on Tripadvisor ↗ Overview Itinerary What's Included Prices & Packages Guest Reviews Enquire About M/S Nile Style Nile Cruise Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Automatic fire alarm",
      "Automatic wake&ndash;up calls",
      "Individually controlled air condition",
      "International telephone calls",
      "Laundry service",
      "LCD Television and satellite channels",
      "Mini bar",
      "Safe box",
      "Swimming pool",
      "Hairdresser",
      "Automatic fire alarm"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833978Royal-Ruby-Nile-Cruise9-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-royal-esadora-nile-cruise",
    "slug": "royal-esadora-nile-cruise",
    "title": "Royal Esadora Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Main restaurant serving buffet food",
      "Air conditioned bar",
      "Lounge with dance floor",
      "Large sun deck with bar and swimming pool",
      "Air conditioned massage room",
      "Boutique, beauty and gift shop",
      "Laundry service",
      "Fitness equipment",
      "Evening entertainment",
      "Internet and fax facilities (when docked - intermittent & chargeable)",
      "French Juliet balcony",
      "Air conditioning",
      "Fridge",
      "Phone",
      "Bathroom with bath and overbath shower",
      "Hairdryer",
      "Safe",
      "Satellite TV when docked"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-princess-sarah-nile-cruise",
    "slug": "princess-sarah-nile-cruise",
    "title": "Princess Sarah Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Large panoramic / ultra violet windows",
      "Private bath with bath tub, hair dryer",
      "All cabins are air-conditioned with individual controls.",
      "Internet access",
      "Non smoking cabins",
      "Doctor on calls on board.",
      "Colored TV within house music and video channels",
      "Dedicated movie channel showing 3 films daily",
      "Mini Bar & Room service",
      "Telephone system with international calls",
      "Swimming Pool and sundeck",
      "Safe box in each cabin",
      "Gymnasium",
      "Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-radamis-ii-nile-cruise",
    "slug": "radamis-ii-nile-cruise",
    "title": "Radamis II Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Individually controlled air condition",
      "International telephone calls",
      "Laundry service",
      "LCD Television and satellite channels",
      "Mini bar",
      "Swimming pool",
      "Wireless Internet access",
      "Panoramic Windows",
      "Bathrooms equipped with full-size bathtub",
      "Barbecue Area on deck"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-royal-princess-nile-cruise",
    "slug": "royal-princess-nile-cruise",
    "title": "Royal Princess Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "All Cabins Panoramic Nile view slide windows .",
      "All Cabins and suites are equipped with LCD TV .",
      "A private bathroom (with bathtub, hairdryer) .",
      "A smoke detector system panel and sprinkler in all cabins. .",
      "An individual control for the central air conditioner..",
      "Complete water purification station.",
      "Private safe box & mini bar",
      "all Transfers by AC Minibus .",
      "Mezzanine floor with gift shop.",
      "Hair dresser and boutiques.",
      "Gymnasium, Steam & Sauna free of charge.",
      "Massage room with different choices with reasonable fees",
      "Wireless Internet connection in all the outlets Free of charge. .",
      "Laundry facilities.",
      "Automatic fire alarm..",
      "Doctor on calls on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-2.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-5.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-tower-prestige-nile-cruise",
    "slug": "tower-prestige-nile-cruise",
    "title": "Tower Prestige Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-radamis-i-nile-cruise",
    "slug": "ms-radamis-i-nile-cruise",
    "title": "MS Radamis I Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-4.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-6.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-medea-nile-cruise",
    "slug": "ms-medea-nile-cruise",
    "title": "MS Medea Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "5 stars",
      "Length 72.35 m",
      "Width 14.30 m",
      "Height 11.60 m",
      "Draft 1.59 m",
      "4 decks +1 sun deck",
      "Water purification system",
      "Fire and sound proof walls and ceilings",
      "Approved by Lloyds Shipping of London",
      "Smoking is allowed on the sundeck only"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-nile-quest-nile-cruise",
    "slug": "nile-quest-nile-cruise",
    "title": "Nile Quest Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Large panoramic / ultra violet windows",
      "Private bath with bath tub, hair dryer",
      "All cabins are air-conditioned with individual controls.",
      "Internet access",
      "Non smoking cabins",
      "Doctor on calls on board.",
      "Colored TV within house music and video channels",
      "Dedicated movie channel showing 3 films daily",
      "Mini Bar & Room service",
      "Telephone system with international calls",
      "Swimming Pool and sundeck",
      "Safe box in each cabin",
      "Gymnasium",
      "Laundry service & housekeeping",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-semramis-ii",
    "slug": "ms-semramis-ii",
    "title": "M/S Semramis II",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Individually controlled air condition",
      "International telephone calls",
      "Laundry service",
      "LCD Television and satellite channels",
      "Mini bar",
      "Swimming pool",
      "Wireless Internet access",
      "Panoramic Windows",
      "Bathrooms equipped with full-size bathtub",
      "Barbecue Area on deck"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-grand-rose-nile-cruise",
    "slug": "grand-rose-nile-cruise",
    "title": "Grand Rose Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-zeina-nile-cruise",
    "slug": "ms-zeina-nile-cruise",
    "title": "MS Zeina Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-nile-dolphin",
    "slug": "ms-nile-dolphin",
    "title": "M/S Nile Dolphin",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Room service",
      "Business center with computers, printers,internet access",
      "Airconditioned gym",
      "Spa facilities: infra sauna with color and aroma therapy, massage",
      "Beauty salon",
      "Doctor on call",
      "Laundry service",
      "All major credit cards accepted"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-9.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-3-1.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-miriam-nile-cruise",
    "slug": "ms-miriam-nile-cruise",
    "title": "MS Miriam Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "5 stars",
      "Length 72 m , width 14.50 m, height 11.55 m, draft 1.52 m",
      "4 decks +1 sun deck",
      "Water purification system",
      "Fire and sound proof walls and ceilings",
      "Approved by Lloyds Shipping of London",
      "Smoking is allowed on the sundeck only"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-luxury-oberoi-philae-nile-cruise",
    "slug": "luxury-oberoi-philae-nile-cruise",
    "title": "Luxury Oberoi Philae Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "4 Nights",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Arrival Aswan - Oberoi Philae Nile Cruise"
      },
      {
        "title": "Day 2",
        "description": "Aswan Sighseeing - Kom Ombo - Sail to Edfu"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple - Sail to Luxor"
      },
      {
        "title": "Day 4",
        "description": "Luxor Nile Cruise Excursions"
      },
      {
        "title": "Day 5",
        "description": "Oberoi Philae Nile Cruise - Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Arrival Luxor - Oberoi Philae Nile Cruise"
      },
      {
        "title": "Day 2",
        "description": "Luxor Nile Cruise Excursions"
      },
      {
        "title": "Day 3",
        "description": "Edfu and Kom Ombo Temples"
      },
      {
        "title": "Day 4",
        "description": "Aswan Nile Cruise Tours"
      },
      {
        "title": "Day 5",
        "description": "Oberoi Philae Nile Cruise - Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Arrival Aswan - Oberoi Philae Nile Cruise"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo Temple - Aswan Sightseeing"
      },
      {
        "title": "Day 3",
        "description": "Sail to Edfu Temple"
      },
      {
        "title": "Day 4",
        "description": "Luxor Nile Cruise Excursions"
      },
      {
        "title": "Day 5",
        "description": "Valley of the Kings - Sail to Dendara Temple"
      },
      {
        "title": "Day 6",
        "description": "Abydos Temple - Sail to Luxor Temple"
      },
      {
        "title": "Day 7",
        "description": "Oberoi Philae Nile Cruise - Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Arrival Luxor - Oberoi Philae Nile Cruise"
      },
      {
        "title": "Day 2",
        "description": "Valley of the Kings - Sail to Dendara Temple"
      },
      {
        "title": "Day 3",
        "description": "Abydos Temple - Sail to Luxor Temple"
      },
      {
        "title": "Day 4",
        "description": "Sail to Edfu Temple"
      },
      {
        "title": "Day 5",
        "description": "Kom Ombo Temple - Sail to Aswan"
      },
      {
        "title": "Day 6",
        "description": "Aswan Nile Cruise Tours"
      },
      {
        "title": "Day 7",
        "description": "Oberoi Philae Nile Cruise - Disembarkation"
      }
    ],
    "inclusions": [
      "24/7 Reception",
      "Private docking areas",
      "Restaurant with varied menus on a daily basis.",
      "Nightly entertainment programme",
      "Sun Deck with Swimming pool and jacuzzi",
      "Personal Care Attendant throughout your holiday.",
      "On-board elevators and access for physically-challenged guests.",
      "Laundry and daily housekeeping service",
      "Internet and games room",
      "Therapy rooms with a private shower and steam room",
      "Gymnasium On board",
      "Library and Cigar Lounge",
      "Egyptologist for all shore excursions",
      "Medical service on call (24/7)",
      "Fully purified water, filtered and softened before distribution",
      "Major credit cards accepted on board Nile Cruises"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sanctuary-sun-boat-iv-luxury-nile-cruise",
    "slug": "sanctuary-sun-boat-iv-luxury-nile-cruise",
    "title": "Sanctuary Sun Boat IV Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "A Warm Welcome in Aswan"
      },
      {
        "title": "Day 02",
        "description": "The Majestic Temples of Philae and Kom Ombo"
      },
      {
        "title": "Day 03",
        "description": "Edfu, Ancient Thebes & Traditional Dancing"
      },
      {
        "title": "Day 04",
        "description": "Valley of the Kings, Singing Statues & Farewell Gala Dinner"
      },
      {
        "title": "Day 05",
        "description": "Your Nile Adventure Ends"
      },
      {
        "title": "Day 01",
        "description": "A Warm Welcome in Luxor"
      },
      {
        "title": "Day 02",
        "description": "Valley of the Kings & Singing Statues on the West Bank"
      },
      {
        "title": "Day 03",
        "description": "Edfu Temple, Kom Ombo & Egyptian Night"
      },
      {
        "title": "Day 04",
        "description": "Philae Temple, Ancient Quarries & Felucca Sailing"
      },
      {
        "title": "Day 05",
        "description": "Your Nile Adventure Ends"
      }
    ],
    "inclusions": [
      "Reception 24 Hours",
      "Daily Housekeeping service",
      "Laundry facilities",
      "Spacious sundeck and Swimming pool",
      "Gymnasium and massage room",
      "Gift shop",
      "Room service",
      "Library and games room",
      "Computers and Internet access",
      "Shaded sun deck with lounge Bar",
      "Spacious dining room",
      "Medical service on call (24/7)",
      "Wireless Internet access available"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/16053833979Royal-Ruby-Nile-Cruise11-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sanctuary-nile-adventurer-luxury-nile-cruise",
    "slug": "sanctuary-nile-adventurer-luxury-nile-cruise",
    "title": "Sanctuary Nile Adventurer Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "A Warm Welcome in Aswan"
      },
      {
        "title": "Day 02",
        "description": "The Majestic Temples of Philae and Kom Ombo"
      },
      {
        "title": "Day 03",
        "description": "Edfu, Ancient Thebes & Traditional Dancing"
      },
      {
        "title": "Day 04",
        "description": "Valley of the Kings, Singing Statues & Farewell Gala Dinner"
      },
      {
        "title": "Day 05",
        "description": "Your Nile Adventure Ends"
      },
      {
        "title": "Day 01",
        "description": "A Warm Welcome in Luxor"
      },
      {
        "title": "Day 02",
        "description": "Valley of the Kings & Singing Statues on the West Bank"
      },
      {
        "title": "Day 03",
        "description": "Edfu Temple, Kom Ombo & Egyptian Night"
      },
      {
        "title": "Day 04",
        "description": "Philae Temple, Ancient Quarries & Felucca Sailing"
      },
      {
        "title": "Day 05",
        "description": "Your Nile Adventure Ends"
      }
    ],
    "inclusions": [
      "Chic and contemporary decor with a Pharaonic and modern Egyptian influence",
      "Choice of three, four and ten night itineraries, led by best Egyptologists",
      "Award-winning chefs",
      "All cabins have a Nile view and are air-conditioned",
      "Recently renovated in 2009"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-5.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339710Royal-Ruby-Nile-Cruise12-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sanctuary-sun-boat-iii-luxury-nile-cruise",
    "slug": "sanctuary-sun-boat-iii-luxury-nile-cruise",
    "title": "Sanctuary Sun Boat III Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "5 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 01",
        "description": "A Warm Welcome in Aswan"
      },
      {
        "title": "Day 02",
        "description": "The Majestic Temples of Philae and Kom Ombo"
      },
      {
        "title": "Day 03",
        "description": "Edfu, Ancient Thebes & Traditional Dancing"
      },
      {
        "title": "Day 04",
        "description": "Valley of the Kings, Singing Statues & Farewell Gala Dinner"
      },
      {
        "title": "Day 05",
        "description": "Your Nile Adventure Ends"
      },
      {
        "title": "Day 01",
        "description": "A Warm Welcome in Luxor"
      },
      {
        "title": "Day 02",
        "description": "Valley of the Kings & Singing Statues on the West Bank"
      },
      {
        "title": "Day 03",
        "description": "Edfu Temple, Kom Ombo & Egyptian Night"
      },
      {
        "title": "Day 04",
        "description": "Philae Temple, Ancient Quarries & Felucca Sailing"
      },
      {
        "title": "Day 05",
        "description": "Your Nile Adventure Ends"
      }
    ],
    "inclusions": [
      "Has several times been voted one of the top 100 most beautiful boats in the world by Condé Nast readers.",
      "Choice of seven and ten night itineraries, led by best Egyptologists.",
      "Award-winning chefs.",
      "Only 18 cabins, allowing for an intimate and personalised Nile cruise.",
      "First boat in over 15 years to cruise from Cairo to Aswan, opening up new sites to guests including Beni Hassan rock tombs."
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070213Nile-Premium-Nile-cruise14-600x540.jpg",
      "/images/tours/160539070214Nile-Premium-Nile-cruise15-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-oberoi-zahra-luxury-nile-cruise",
    "slug": "oberoi-zahra-luxury-nile-cruise",
    "title": "Oberoi Zahra Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": true,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Full-board dining featuring authentic Egyptian & international buffet fare",
      "Licensed Egyptologist shore excursion guidance at all Nile temples",
      "Scenic sailing with sun deck, swimming pool, and river vistas",
      "Direct hotel/airport meet & assist with private air-conditioned transit"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Saturday - Arrival at Aswan"
      },
      {
        "title": "Day 2",
        "description": "Sunday - Sail to Kom Ombo & Edfu"
      },
      {
        "title": "Day 3",
        "description": "Monday - Sail to Luxor & Sightseeing in Luxor"
      },
      {
        "title": "Day 4",
        "description": "Tuesday - Disembarkation, Temple of Karnak & Departure"
      },
      {
        "title": "Day 1",
        "description": "Tuesday - Arrival at Luxor"
      },
      {
        "title": "Day 2",
        "description": "Wednesday - Luxor Sightseeing & Sailing to Esna"
      },
      {
        "title": "Day 3",
        "description": "Thursday - Sail to Edfu & Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Friday - Sail to Aswan"
      },
      {
        "title": "Day 5",
        "description": "Saturday - Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Tuesday - Arrival at Aswan"
      },
      {
        "title": "Day 2",
        "description": "Wednesday - Sound and Light Show & Optional Tour Abu Simbel"
      },
      {
        "title": "Day 3",
        "description": "Thursday - Sail to Kom Ombo & Sail back to Aswan"
      },
      {
        "title": "Day 4",
        "description": "Friday - Sail to Edfu"
      },
      {
        "title": "Day 5",
        "description": "Saturday - Sail to Luxor"
      },
      {
        "title": "Day 6",
        "description": "Sunday - Sightseeing in Luxor & Sail to Quina"
      },
      {
        "title": "Day 7",
        "description": "Monday - Sail back to Luxor & more Sightseeing at Luxor"
      },
      {
        "title": "Day 8",
        "description": "Tuesday - Final Departure"
      },
      {
        "title": "Day 1",
        "description": "Tuesday - Arrival at Luxor"
      },
      {
        "title": "Day 2",
        "description": "Wednesday - Sightseeing at Luxor & Sail to Quina"
      },
      {
        "title": "Day 3",
        "description": "Thursday - Sail back to Luxor & more Sightseeing at Luxor"
      },
      {
        "title": "Day 4",
        "description": "Friday - Sail to Edfu"
      },
      {
        "title": "Day 5",
        "description": "Saturday - Sail to Aswan"
      },
      {
        "title": "Day 6",
        "description": "Sunday - Sail to Kom Ombo & Sightseeing at Aswan"
      },
      {
        "title": "Day 7",
        "description": "Monday - Optional tour to Abu Simbel & Spa Time"
      },
      {
        "title": "Day 8",
        "description": "Tuesday - Departure"
      }
    ],
    "inclusions": [
      "24/7 Reception",
      "Private docking areas",
      "Restaurant with varied menus on a daily basis.",
      "Nightly entertainment programme",
      "Sun Deck with Swimming pool and jacuzzi",
      "Personal Care Attendant throughout your holiday.",
      "On-board elevators and access for physically-challenged guests.",
      "Laundry and daily housekeeping service",
      "Internet and games room",
      "Therapy rooms with a private shower and steam room",
      "Gymnasium On board",
      "Library and Cigar Lounge",
      "Egyptologist for all shore excursions",
      "Medical service on call (24/7)",
      "Fully purified water, filtered and softened before distribution",
      "Major credit cards accepted on board Nile Cruises"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Luxor-_E2_86_92-Aswan-10.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160538339711Royal-Ruby-Nile-Cruise13-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-tosca-luxury-nile-cruise",
    "slug": "ms-tosca-luxury-nile-cruise",
    "title": "MS Tosca Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-8.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070215Nile-Premium-Nile-cruise18-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-sonesta-star-goddess-luxury-nile-cruise",
    "slug": "sonesta-star-goddess-luxury-nile-cruise",
    "title": "Sonesta Star Goddess Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "3 Nights 4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Temples & Tranquility"
      },
      {
        "title": "Day 2",
        "description": "Abu Simbel (Optional) – Kom Ombo Temple"
      },
      {
        "title": "Day 3",
        "description": "Edfu Temple – Luxor East Bank"
      },
      {
        "title": "Day 4",
        "description": "Luxor West Bank – Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "In-suite dining available until midnight",
      "Main dining room, sun deck bar & barbecue lounge",
      "Spa & fitness center, with gym, massage services, sauna and steam bath",
      "Nightly entertainment",
      "Plasma TV with DVD, satellite channels and in-house movie programs",
      "Panoramic windows",
      "Private terrace",
      "Direct-line telephone",
      "International telephone line and Internet access",
      "Individual climate control",
      "Hairdryer",
      "Mini-ba",
      "Safe",
      "Bathrooms equipped with full-size bathtub",
      "Fully-purified water, filtered and softened before distribution",
      "Guided sightseeing excursion",
      "Doctor available on call against charge"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
    "images": [
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-_E2_86_92-Luxor-1.webp",
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/16053833977Royal-Ruby-Nile-Cruise8-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
    ]
  },
  {
    "id": "la-ms-jaz-senator-luxury-nile-cruise",
    "slug": "ms-jaz-senator-luxury-nile-cruise",
    "title": "MS Jaz Senator Luxury Nile Cruise",
    "category": "Nile Cruises",
    "destination": "Luxor & Aswan",
    "duration": "4 Days",
    "price": null,
    "priceNote": "Contact us for custom quote & seasonal rates",
    "featured": false,
    "shortDescription": "Experience the magic of ancient Egypt aboard our Nile cruise vessels....",
    "overview": "Experience the magic of ancient Egypt aboard our Nile cruise vessels.",
    "highlights": [
      "Depart early morning by car or flight (at extra cost)",
      "Visit the awe-inspiring temples of Ramses II and Queen Nefertari",
      "Carved into a sandstone cliff overlooking Lake Nasser"
    ],
    "itinerary": [
      {
        "title": "Day 1",
        "description": "Welcome to Aswan – Philae Temple, High Dam & Unfinished Obelisk"
      },
      {
        "title": "Day 2",
        "description": "Kom Ombo & Edfu Temples – Sailing the Timeless Nile"
      },
      {
        "title": "Day 3",
        "description": "Luxor West Bank – The World&#039;s Greatest Open - Air Museum"
      },
      {
        "title": "Day 4",
        "description": "Luxor East Bank – Karnak & Luxor Temples | Disembarkation"
      },
      {
        "title": "Day 1",
        "description": "Welcome to Luxor – East Bank Exploration"
      },
      {
        "title": "Day 2",
        "description": "Luxor West Bank – Royal Tombs & Temples | Sail to Esna"
      },
      {
        "title": "Day 3",
        "description": "Temples of Horus & Sobek – From Edfu to Kom Ombo"
      },
      {
        "title": "Day 4",
        "description": "Aswan – Nubian Charm & Modern Marvels"
      },
      {
        "title": "Day 5",
        "description": "Farewell & Optional Abu Simbel Visit"
      }
    ],
    "inclusions": [
      "Reception area",
      "Lounge bar & Library located in the main lounge",
      "Restaurant located on the lower deck",
      "Swimming pool, bar on the Sun deck",
      "Boutique and Jeweler shop",
      "Spa center and Massage room",
      "Internet corner located in the Mezzanine deck",
      "Laundry and dry cleaning facilities",
      "Sound proof on all decks",
      "Ultra violet water treatment",
      "Meeting space can be arranged if boat is chartered",
      "Major credit cards are accepted on board"
    ],
    "exclusions": [
      "Monument and tomb entrance tickets (can be included upon request)",
      "Personal expenses and souvenirs",
      "Gratuities / tipping for tour guide and driver",
      "Meals and beverages unless specifically stated in itinerary"
    ],
    "meetingPoint": "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when inquiring.",
    "mainImage": "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
    "images": [
      "/images/tours/160538339712Royal-Ruby-Nile-Cruise10-600x540.jpg",
      "/images/tours/160539070216Nile-Premium-Nile-cruise21-600x540.jpg",
      "/images/tours/Nile-Cruise-_E2_80_93-Aswan-3.webp",
      "/images/tours/160539070218Nile-Premium-Nile-cruise22-600x540.jpg"
    ],
    "relatedSlugs": [
      "royal-ruby-nile-cruise-3-nights-4-days",
      "royal-ruby-nile-cruise-4-nights-5-days",
      "nile-premium-nile-cruise"
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
