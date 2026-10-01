export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  location: string;
  category: "Temples & Tombs" | "Nile & Dahabiyas" | "Cultural Moments" | "Landscapes & Sunsets" | "Cairo & Pyramids";
  caption: string;
  width: number;
  height: number;
  aspectRatio: string;
  featured?: boolean;
}

export const GALLERY_CATEGORIES = [
  "All Moments",
  "Temples & Tombs",
  "Nile & Dahabiyas",
  "Cairo & Pyramids",
  "Landscapes & Sunsets",
  "Cultural Moments"
] as const;

export const GALLERY_DATA: GalleryImage[] = [
  {
    "id": "gallery-1",
    "image": "/images/gallery/IMG-20261001-WA0011.jpg",
    "title": "Secrets of the Valley",
    "location": "Valley of the Kings",
    "category": "Temples & Tombs",
    "caption": "Uncovering the timeless mysteries of ancient royalty with a view that bridges history and the present.",
    "width": 960,
    "height": 1280,
    "aspectRatio": "0.75",
    "featured": true
  },
  {
    "id": "gallery-2",
    "image": "/images/gallery/IMG-20261001-WA0012.jpg",
    "title": "Golden Glow Over Nile",
    "location": "Nile River",
    "category": "Landscapes & Sunsets",
    "caption": "The Egyptian sun dips below the horizon, casting a serene amber light across the gentle currents of the Nile.",
    "width": 621,
    "height": 466,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-3",
    "image": "/images/gallery/IMG-20261001-WA0013.jpg",
    "title": "Golden Dusk on Nile",
    "location": "Nile River Aswan",
    "category": "Landscapes & Sunsets",
    "caption": "The sun dips low behind the desert dunes, casting a warm, ethereal glow over the tranquil waters of the Nile.",
    "width": 960,
    "height": 1280,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-4",
    "image": "/images/gallery/IMG-20261001-WA0014.jpg",
    "title": "Sunset Tea by Nile",
    "location": "Nile River Aswan",
    "category": "Cultural Moments",
    "caption": "Savoring the timeless serenity of an Egyptian golden hour with traditional tea and breathtaking views.",
    "width": 1440,
    "height": 1080,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-5",
    "image": "/images/gallery/IMG-20261001-WA0015.jpg",
    "title": "Ancient Echoes, Modern Journeys",
    "location": "Medinet Habu",
    "category": "Temples & Tombs",
    "caption": "Step into the heart of history where timeless wonders meet the ease of a guided adventure.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": true
  },
  {
    "id": "gallery-6",
    "image": "/images/gallery/IMG-20261001-WA0016.jpg",
    "title": "Desert Spirits Converge",
    "location": "Medinet Habu",
    "category": "Cultural Moments",
    "caption": "Two friends share a timeless smile amidst the ancient, towering sandstone walls of Medinet Habu.",
    "width": 1086,
    "height": 1358,
    "aspectRatio": "0.80",
    "featured": false
  },
  {
    "id": "gallery-7",
    "image": "/images/gallery/IMG-20261001-WA0017.jpg",
    "title": "Eternal Rameses at Abu Simbel",
    "location": "Abu Simbel",
    "category": "Temples & Tombs",
    "caption": "Standing in the awe-inspiring shadow of Ramses II, a timeless masterpiece carved directly into the desert cliffside.",
    "width": 622,
    "height": 828,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-8",
    "image": "/images/gallery/IMG-20261001-WA0018.jpg",
    "title": "Gazing Upon Ancient Wonders",
    "location": "Great Sphinx of Giza",
    "category": "Cairo & Pyramids",
    "caption": "A memorable day of discovery with a local guide before the timeless silhouette of the Great Sphinx.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-9",
    "image": "/images/gallery/IMG-20261001-WA0019.jpg",
    "title": "Memories at Colossi",
    "location": "Luxor West Bank",
    "category": "Temples & Tombs",
    "caption": "Standing before the towering Colossi of Memnon, we share a moment of wonder and connection in the heart of ancient Thebes.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": true
  },
  {
    "id": "gallery-10",
    "image": "/images/gallery/IMG-20261001-WA0020.jpg",
    "title": "Steps Toward Ancient Skies",
    "location": "Saqqara",
    "category": "Temples & Tombs",
    "caption": "Trace the origins of architectural wonder at the breathtaking Step Pyramid of Djoser.",
    "width": 960,
    "height": 1280,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-11",
    "image": "/images/gallery/IMG-20261001-WA0021.jpg",
    "title": "A Winged Nile Escape",
    "location": "Nile River",
    "category": "Nile & Dahabiyas",
    "caption": "Drifting down the timeless Nile, where ancient inspiration meets the promise of an effortless journey.",
    "width": 1280,
    "height": 960,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-12",
    "image": "/images/gallery/IMG-20261001-WA0022.jpg",
    "title": "Traditional Clay Pottery Market",
    "location": "Nile Aswan",
    "category": "Cultural Moments",
    "caption": "A rustic display of handmade terracotta vessels and woven baskets rests in the shade of a vibrant desert market.",
    "width": 1280,
    "height": 960,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-13",
    "image": "/images/gallery/IMG-20261001-WA0023.jpg",
    "title": "Ancient Grandeur of Medinet Habu",
    "location": "Medinet Habu",
    "category": "Temples & Tombs",
    "caption": "The golden, sun-drenched stones of the Medinet Habu temple complex whisper stories of pharaonic power beneath an endless blue sky.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": true
  },
  {
    "id": "gallery-14",
    "image": "/images/gallery/IMG-20261001-WA0024.jpg",
    "title": "Illuminated Qubbet el-Hawa",
    "location": "Nile Aswan",
    "category": "Landscapes & Sunsets",
    "caption": "The ancient tombs of the nobles glow brilliantly against the night sky above the tranquil waters of the Nile in Aswan.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-15",
    "image": "/images/gallery/IMG-20261001-WA0025.jpg",
    "title": "Morning Cruise at Abu Simbel",
    "location": "Abu Simbel",
    "category": "Temples & Tombs",
    "caption": "A serene moment captured on the water before the majestic, ancient facade of the Great Temple of Ramesses II.",
    "width": 1170,
    "height": 883,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-16",
    "image": "/images/gallery/IMG-20261001-WA0026.jpg",
    "title": "Nile Sunset Solitude",
    "location": "Nile River Aswan",
    "category": "Landscapes & Sunsets",
    "caption": "A serene moment captured as the golden Egyptian sun dips below the horizon, casting a warm glow over the timeless waters of the Nile.",
    "width": 1152,
    "height": 768,
    "aspectRatio": "1.50",
    "featured": false
  },
  {
    "id": "gallery-17",
    "image": "/images/gallery/IMG-20261001-WA0027.jpg",
    "title": "Desert Companions in Egypt",
    "location": "Western Desert, Egypt",
    "category": "Cultural Moments",
    "caption": "Shared laughter and warm hospitality amidst the timeless, golden expanses of the Egyptian desert.",
    "width": 1318,
    "height": 1600,
    "aspectRatio": "0.82",
    "featured": true
  },
  {
    "id": "gallery-18",
    "image": "/images/gallery/IMG-20261001-WA0028.jpg",
    "title": "Golden Dunes of Aswan",
    "location": "Nile Aswan",
    "category": "Nile & Dahabiyas",
    "caption": "The tranquil waters of the Nile flow gently past sun-drenched sand dunes in this serene Aswan landscape.",
    "width": 960,
    "height": 1280,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-19",
    "image": "/images/gallery/IMG-20261001-WA0029.jpg",
    "title": "Desert Oasis Adventure",
    "location": "Siwa Oasis",
    "category": "Landscapes & Sunsets",
    "caption": "A traveler embraces the serene beauty of a golden desert oasis while holding a memento of exploration.",
    "width": 1280,
    "height": 960,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-20",
    "image": "/images/gallery/IMG-20261001-WA0030.jpg",
    "title": "Ancient Wonders of Egypt",
    "location": "Valley of the Kings",
    "category": "Temples & Tombs",
    "caption": "A modern emblem of luxury frames the timeless, rugged landscape of the ancient royal necropolis.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-21",
    "image": "/images/gallery/IMG-20261001-WA0031.jpg",
    "title": "Ancient Grandeur of Medinet Habu",
    "location": "Medinet Habu",
    "category": "Temples & Tombs",
    "caption": "The timeless, weathered columns of the Mortuary Temple of Ramesses III stand as a silent testament to the enduring majesty of ancient Egyptian civilization.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": true
  },
  {
    "id": "gallery-22",
    "image": "/images/gallery/IMG-20261001-WA0032.jpg",
    "title": "Desert Serenity in Aswan",
    "location": "Nile Aswan",
    "category": "Nile & Dahabiyas",
    "caption": "A moment of peaceful reflection overlooking the golden dunes and tranquil waters of the Nile.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-23",
    "image": "/images/gallery/IMG-20261001-WA0033.jpg",
    "title": "Camels Before The Great Pyramid",
    "location": "Giza Plateau",
    "category": "Cairo & Pyramids",
    "caption": "A camel rider pauses against the monumental backdrop of the ancient Great Pyramid of Giza.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-24",
    "image": "/images/gallery/IMG-20261001-WA0034.jpg",
    "title": "The Grand Abu Simbel",
    "location": "Abu Simbel",
    "category": "Temples & Tombs",
    "caption": "The colossal statues of Ramses II stand guard at the magnificent rock-cut temples of Abu Simbel along the shores of Lake Nasser.",
    "width": 1280,
    "height": 960,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-25",
    "image": "/images/gallery/IMG-20261001-WA0035.jpg",
    "title": "Ancient Grandeur and Modern Journeys",
    "location": "Medinet Habu",
    "category": "Temples & Tombs",
    "caption": "A storied legacy meets the promise of discovery amidst the towering sandstone columns of the Medinet Habu temple.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": true
  },
  {
    "id": "gallery-26",
    "image": "/images/gallery/IMG-20261001-WA0036.jpg",
    "title": "Colossal Statue of Ramesses II",
    "location": "Mit Rahina Museum",
    "category": "Temples & Tombs",
    "caption": "The majestic, reclining form of Ramesses II rests in silent grandeur at the site of ancient Memphis.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-27",
    "image": "/images/gallery/IMG-20261001-WA0037.jpg",
    "title": "Daily Life in Luxor",
    "location": "Luxor Temple",
    "category": "Cultural Moments",
    "caption": "A local produce vendor pauses by his cart, contrasting with the faded advertisement for a nearby hotel and a stern warning about cleanliness.",
    "width": 1280,
    "height": 960,
    "aspectRatio": "1.33",
    "featured": false
  },
  {
    "id": "gallery-28",
    "image": "/images/gallery/IMG-20261001-WA0038.jpg",
    "title": "Gazing Across the Nile",
    "location": "Nile Aswan",
    "category": "Nile & Dahabiyas",
    "caption": "A local boatman reflects on the timeless beauty of the Nile as he navigates the sun-drenched waters.",
    "width": 1152,
    "height": 768,
    "aspectRatio": "1.50",
    "featured": false
  },
  {
    "id": "gallery-29",
    "image": "/images/gallery/IMG-20261001-WA0039.jpg",
    "title": "Horse Before the Pyramids",
    "location": "Giza Necropolis",
    "category": "Cairo & Pyramids",
    "caption": "A saddled horse stands patiently against the timeless backdrop of the Great Pyramid of Giza.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": true
  },
  {
    "id": "gallery-30",
    "image": "/images/gallery/IMG-20261001-WA0040.jpg",
    "title": "Horse Before The Pyramid",
    "location": "Giza Necropolis",
    "category": "Cairo & Pyramids",
    "caption": "A saddled horse stands against the timeless backdrop of an ancient Egyptian pyramid.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-31",
    "image": "/images/gallery/IMG-20261001-WA0041.jpg",
    "title": "Mortuary Temple of Hatshepsut",
    "location": "Mortuary Temple of Hatshepsut",
    "category": "Temples & Tombs",
    "caption": "A stunning glimpse of ancient majesty at the Mortuary Temple of Hatshepsut.",
    "width": 1024,
    "height": 1280,
    "aspectRatio": "0.80",
    "featured": false
  },
  {
    "id": "gallery-32",
    "image": "/images/gallery/IMG-20261001-WA0042.jpg",
    "title": "Portrait of Nubian Heritage",
    "location": "Aswan",
    "category": "Cultural Moments",
    "caption": "A striking mural captures the soul of the Nile, framed by intricate calligraphy and the timeless gaze of a local elder.",
    "width": 1200,
    "height": 1600,
    "aspectRatio": "0.75",
    "featured": false
  },
  {
    "id": "gallery-33",
    "image": "/images/gallery/IMG-20261001-WA0043.jpg",
    "title": "Grandeur of Abu Simbel",
    "location": "Abu Simbel",
    "category": "Temples & Tombs",
    "caption": "The majestic statues of Ramses II stand as a timeless testament to ancient Egyptian architectural ambition.",
    "width": 622,
    "height": 828,
    "aspectRatio": "0.75",
    "featured": true
  }
];
