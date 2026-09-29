const fs = require("fs");
const raw = JSON.parse(fs.readFileSync("all_tours_detailed.json", "utf8"));

function clean(str) {
  if (!str) return "";
  return str
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "'")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const cleanedTours = raw.map((t, idx) => {
  const title = clean(t.title);
  let duration = t.duration;
  if (!duration || duration === "Flexible" || duration.includes("e.newh")) {
    const lower = (t.slug + " " + title).toLowerCase();
    if (lower.includes("3 nights") || lower.includes("3-nights")) duration = "3 Nights / 4 Days";
    else if (lower.includes("4 nights") || lower.includes("4-nights")) duration = "4 Nights / 5 Days";
    else if (lower.includes("7 nights") || lower.includes("7-nights") || lower.includes("8 days") || lower.includes("8-days")) duration = "7 Nights / 8 Days";
    else if (lower.includes("half-day") || lower.includes("half day")) duration = "Half Day (4–6 hours)";
    else if (lower.includes("full-day") || lower.includes("full day")) duration = "Full Day (8–9 hours)";
    else if (lower.includes("transfer") && lower.includes("airport")) duration = "Approx. 45–60 mins";
    else if (lower.includes("transfer") && lower.includes("aswan") && lower.includes("luxor")) duration = "Approx. 4–5 hours";
    else if (lower.includes("transfer") && lower.includes("hurghada")) duration = "Approx. 4–5 hours";
    else duration = "Flexible";
  }

  // Highlights fallback if empty
  let highlights = t.highlights.map(clean).filter(Boolean);
  if (highlights.length === 0) {
    if (t.category === "Nile Cruises") {
      highlights = [
        "Full board accommodation with gourmet Egyptian & international buffet dining",
        "Guided excursions to Kom Ombo, Edfu, Karnak, Luxor Temple, and Philae",
        "Licensed private Egyptologist guide for all shore excursions",
        "Sun deck with swimming pool, lounge bar, and panoramic Nile vistas"
      ];
    } else if (t.category === "Private Transfers") {
      highlights = [
        "Modern private air-conditioned vehicle with professional licensed driver",
        "Door-to-door service with flexible pickup time from hotel or airport",
        "All toll fees, fuel, and luggage assistance included",
        "Complimentary bottled water during the ride"
      ];
    } else if (t.category === "Hot Air Balloon") {
      highlights = [
        "Breathtaking sunrise flight over Luxor West Bank and Valley of the Kings",
        "Pre-flight safety briefing by certified commercial balloon pilot",
        "Includes motorboat Nile crossing and hotel pickup/drop-off",
        "Commemorative flight certificate included"
      ];
    } else {
      highlights = [
        "Private tour led by a certified licensed Egyptologist guide",
        "Comfortable travel in private modern air-conditioned vehicle",
        "Flexible, unhurried pace customized to your interests",
        "Hotel pickup and drop-off included"
      ];
    }
  }

  // Inclusions fallback if empty
  let inclusions = t.inclusions.map(clean).filter(Boolean);
  if (inclusions.length === 0) {
    if (t.category === "Nile Cruises") {
      inclusions = [
        "Luxury cruise cabin accommodation (full board: breakfast, lunch, dinner)",
        "Licensed English-speaking (or multilingual) Egyptologist guide",
        "All sightseeing tours and shore excursions mentioned in the program",
        "Meet and assist upon arrival and departure",
        "All service charges and local government taxes"
      ];
    } else if (t.category === "Private Transfers") {
      inclusions = [
        "Private transportation in a clean, modern air-conditioned vehicle",
        "Experienced professional driver with full licensing",
        "Airport meet & greet with name signage (for airport pickups)",
        "Fuel surcharges, highway tolls, and parking fees",
        "Complimentary chilled bottled water"
      ];
    } else {
      inclusions = [
        "Private guided tour with certified licensed Egyptologist",
        "Private door-to-door transportation in modern air-conditioned vehicle",
        "Hotel pickup and return transfer",
        "Complimentary bottled water during the tour",
        "All local taxes and service charges"
      ];
    }
  }

  // Exclusions fallback if empty
  let exclusions = t.exclusions.map(clean).filter(Boolean);
  if (exclusions.length === 0) {
    if (t.category === "Nile Cruises") {
      exclusions = [
        "Monument entrance fees (can be added upon request)",
        "Beverages and drinks from the ship lounge bar",
        "Optional tours (Abu Simbel excursion, Hot Air Balloon ride)",
        "Gratuities / tipping for ship crew and guide",
        "Personal expenses (laundry, telephone calls, spa)"
      ];
    } else if (t.category === "Private Transfers") {
      exclusions = [
        "Gratuities for the driver (customary in Egypt)",
        "Monument or temple entrance fees en route (unless pre-booked)",
        "Personal food and drinks"
      ];
    } else {
      exclusions = [
        "Monument entrance tickets (unless specified as all-inclusive)",
        "Personal expenses and optional activities",
        "Gratuities for tour guide and driver",
        "Food and drinks unless explicitly stated in itinerary"
      ];
    }
  }

  // Itinerary cleanup
  let itinerary = t.itinerary.map(it => ({
    title: clean(it.title),
    description: clean(it.description)
  })).filter(it => it.title || it.description);

  if (itinerary.length === 0) {
    if (t.category === "Private Transfers") {
      itinerary = [{
        title: "Private Door-to-Door Journey",
        description: `Your professional driver meets you at your designated pickup location (hotel lobby or airport terminal with name sign). Enjoy a smooth, air-conditioned ride directly to your destination with scenic views and requested comfort stops along the way.`
      }];
    } else if (t.category === "Hot Air Balloon") {
      itinerary = [{
        title: "Early Morning Sunrise Ascent",
        description: `Early morning pickup from your hotel, crossing the Nile River to the West Bank launch site. Watch balloons inflate, board the basket, and drift peacefully for 45–50 minutes over the Valley of the Kings, Temple of Hatshepsut, and Colossi of Memnon during sunrise.`
      }];
    } else {
      itinerary = [{
        title: "Sightseeing Program",
        description: t.overview || `Explore Egypt's historic monuments with your private Egyptologist guide, experiencing ancient architecture, hieroglyphics, and timeless culture at an unhurried pace.`
      }];
    }
  }

  // Short overview
  let overview = clean(t.overview);
  if (!overview || overview.length < 40) {
    if (t.category === "Nile Cruises") {
      overview = `Experience the timeless wonder of Egypt aboard a luxury Nile cruise between Luxor and Aswan. Discover ancient pharaonic temples, sail through majestic river landscapes, and relax with five-star hospitality, guided shore excursions, and world-class Egyptian cuisine.`;
    } else if (t.category === "Private Transfers") {
      overview = `Travel with complete peace of mind across Egypt with Genuine Egypte's private transfer service. Enjoy clean, modern air-conditioned vehicles, punctual professional drivers, and door-to-door convenience between airports, hotels, and historic cities.`;
    } else {
      overview = `Discover the genuine heart of Egypt with this private excursion curated by Genuine Egypte's team of licensed Egyptologists. Designed for travelers who appreciate depth, authenticity, and an unhurried pace.`;
    }
  }

  // Meeting point
  let meetingPoint = clean(t.meetingPoint);
  if (!meetingPoint || meetingPoint.length < 10) {
    meetingPoint = "Pickup and drop-off included at your hotel, Nile cruise ship, or airport. Please specify your location when booking.";
  }

  // Images
  const localImages = (t.localImages && t.localImages.length > 0)
    ? t.localImages
    : ["/images/tours/placeholder.webp"];

  return {
    id: t.id,
    slug: t.slug,
    title,
    category: t.category,
    destination: t.destination,
    duration,
    price: null,
    priceNote: "Contact us for custom quote & seasonal rates",
    featured: idx < 6 || t.slug.includes("royal-ruby") || t.slug.includes("giza-pyramids") || t.slug.includes("hot-air-balloon") || t.slug.includes("abu-simbel"),
    shortDescription: overview.slice(0, 160) + "...",
    overview,
    highlights,
    itinerary,
    inclusions,
    exclusions,
    meetingPoint,
    mainImage: localImages[0],
    images: localImages,
    relatedSlugs: []
  };
});

// Link related tours
cleanedTours.forEach(tour => {
  const sameCat = cleanedTours.filter(other => other.slug !== tour.slug && other.category === tour.category).map(o => o.slug);
  const sameDest = cleanedTours.filter(other => other.slug !== tour.slug && other.destination === tour.destination).map(o => o.slug);
  const candidates = [...new Set([...sameCat, ...sameDest])];
  tour.relatedSlugs = candidates.slice(0, 3);
});

const tsCode = `// Structured tour data for Genuine Egypte
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

export const TOURS_DATA: TourItem[] = ${JSON.stringify(cleanedTours, null, 2)};

export function getAllTours(): TourItem[] {
  return TOURS_DATA;
}

export function getTourBySlug(slug: string): TourItem | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase().replace(/^\\/+|\\/+$/g, "");
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
`;

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync("src/data/tours.ts", tsCode);
console.log(`Generated src/data/tours.ts with ${cleanedTours.length} tours!`);
