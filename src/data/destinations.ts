export interface Destination {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTimeToVisit: string;
  mustSeeAttractions: string[];
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'luxor',
    name: 'Luxor & The Nile Valley',
    slug: 'luxor',
    tagline: 'The World’s Greatest Open-Air Museum',
    description: 'Home to one-third of the world’s ancient antiquities. From the monumental columns of Karnak and the serene Luxor Temple to the subterranean royal tombs of the Valley of the Kings, Hatshepsut Temple, and sunrise hot air balloon flights.',
    image: '/images/tours/genuine-egypte-19.webp',
    highlights: [
      'Valley of the Kings & King Tutankhamun’s Tomb',
      'Karnak Temple Complex & Hypostyle Hall',
      'Sunrise Hot Air Balloon flights over the West Bank',
      'Mortuary Temple of Queen Hatshepsut at Deir el-Bahari',
      'Luxor Temple illuminated at dusk'
    ],
    bestTimeToVisit: 'October through April for pleasant desert sunshine and comfortable exploration temperatures.',
    mustSeeAttractions: [
      'Karnak Temple',
      'Luxor Temple',
      'Valley of the Kings',
      'Valley of the Queens',
      'Temple of Hatshepsut',
      'Colossi of Memnon',
      'Dendera & Abydos Temples'
    ]
  },
  {
    id: 'nile-river',
    name: 'The River Nile & Cruises',
    slug: 'nile-river',
    tagline: 'The Lifeline of Egypt from Luxor to Aswan',
    description: 'Sailing the majestic River Nile is the classic way to experience Upper Egypt. Relax on luxury ships like the Royal Ruby and Nile Premium while docking right at the monumental temples of Kom Ombo, Edfu, and Esna.',
    image: '/images/tours/160538339712Royal-Ruby-Nile-Cruise10.jpg',
    highlights: [
      'Luxurious 3-night, 4-night, and 7-night cruise itineraries',
      'Temple of Horus at Edfu, the best-preserved temple in Egypt',
      'Double Temple of Kom Ombo dedicated to Sobek and Horus',
      'Passing through the historic Esna Lock',
      'Sun deck relaxation with changing riverbanks of palms and dunes'
    ],
    bestTimeToVisit: 'November to March for the most temperate river cruising weather.',
    mustSeeAttractions: [
      'Royal Ruby Nile Cruise',
      'Nile Premium Cruise',
      'Edfu Temple',
      'Kom Ombo Temple',
      'Esna Lock',
      'Aswan High Dam & Lake Nasser'
    ]
  },
  {
    id: 'cairo-giza',
    name: 'Cairo & Giza',
    slug: 'cairo-giza',
    tagline: 'The City of a Thousand Minarets & The Great Pyramids',
    description: 'Egypt’s vibrant capital pairs 4,500-year-old wonders with medieval Islamic heritage, Coptic enclaves, and world-class museums. Marvel at the Great Pyramid of Giza, the enigmatic Sphinx, ancient Saqqara, and the extraordinary Cave Church.',
    image: '/images/tours/genuine-egypte-3.webp',
    highlights: [
      'The Great Pyramids of Khufu, Khafre, and Menkaure at Giza',
      'The Great Sphinx and Valley Temple',
      'Step Pyramid of Djoser at Saqqara and Dahshur Bent Pyramid',
      'Saint Samaan Cave Church & the Garbage City artisans',
      'Old Coptic Cairo and the Hanging Church'
    ],
    bestTimeToVisit: 'Year-round, with October to May being optimal for outdoor monument walking.',
    mustSeeAttractions: [
      'Giza Plateau',
      'The Great Sphinx',
      'Saqqara Necropolis',
      'Dahshur Pyramids',
      'Cave Church of St. Simon',
      'Coptic Cairo',
      'Khan el-Khalili Bazaar'
    ]
  },
  {
    id: 'aswan-abu-simbel',
    name: 'Aswan & Abu Simbel',
    slug: 'aswan-abu-simbel',
    tagline: 'Nubian Culture, Island Sanctuaries & Colossal Temples',
    description: 'Egypt’s tranquil southern frontier, where dark granite boulders jut into cobalt waters and colourful Nubian villages line the riverbanks. South across the desert stands the colossi of Ramesses II and Nefertari at Abu Simbel.',
    image: '/images/tours/ABU-SIMBEL-10.webp',
    highlights: [
      'The Sun Temples of Abu Simbel on the shores of Lake Nasser',
      'Island Temple of Isis at Philae, rescued from Nile floodwaters',
      'Felucca sailboat rides around Elephantine Island at sunset',
      'The Unfinished Obelisk in the northern granite quarries',
      'Vibrant Nubian culture, music, and hospitality'
    ],
    bestTimeToVisit: 'October to April. Early morning visits to Abu Simbel allow sunrise viewings before the desert warms.',
    mustSeeAttractions: [
      'Abu Simbel Great Temple of Ramesses II',
      'Philae Temple of Isis',
      'Aswan High Dam',
      'Unfinished Obelisk',
      'Nubian Village',
      'Elephantine Island'
    ]
  },
  {
    id: 'alexandria',
    name: 'Alexandria',
    slug: 'alexandria',
    tagline: 'The Pearl of the Mediterranean',
    description: 'Founded by Alexander the Great in 331 BC, Alexandria is steeped in Greco-Roman history and cool Mediterranean sea breezes. Visit the dramatic Citadel of Qaitbay, the Catacombs of Kom El Shoqafa, and the modern Bibliotheca Alexandrina.',
    image: '/images/tours/genuine-egypte-13.webp',
    highlights: [
      'Citadel of Qaitbay standing on the site of the ancient Lighthouse (Pharos)',
      'Subterranean Catacombs of Kom El Shoqafa combining Egyptian & Roman art',
      'Bibliotheca Alexandrina, the monumental revival of the ancient Library',
      'Fresh Mediterranean seafood dining along the Corniche'
    ],
    bestTimeToVisit: 'Spring and Autumn, or summer for refreshing coastal weather compared to inland Egypt.',
    mustSeeAttractions: [
      'Citadel of Qaitbay',
      'Catacombs of Kom El Shoqafa',
      'Pompey’s Pillar',
      'Bibliotheca Alexandrina',
      'Alexandria Corniche'
    ]
  },
  {
    id: 'hurghada',
    name: 'Hurghada & Red Sea',
    slug: 'hurghada',
    tagline: 'The Red Sea Riviera & Gateway to Upper Egypt',
    description: 'A paradise of turquoise waters and vibrant coral reefs on the Red Sea coast, connected by convenient private overland transfers to Luxor, Aswan, and the Nile.',
    image: '/images/tours/genuine-egypte-27.webp',
    highlights: [
      'Direct private highway transfers between Hurghada resorts and Luxor/Aswan',
      'Pristine Red Sea coral reefs and marine life',
      'Smooth transit for cruise passengers combining beach relaxation with Nile culture'
    ],
    bestTimeToVisit: 'Year-round beach weather with pleasant winter sun.',
    mustSeeAttractions: [
      'Giftun Islands',
      'Hurghada Marina',
      'Desert Safari & Bedouin camps',
      'Direct transfers to Luxor & Nile cruises'
    ]
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS_DATA.find(d => d.slug === slug || d.id === slug);
}
