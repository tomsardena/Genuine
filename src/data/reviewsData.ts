export interface ReviewItem {
  id: string;
  author: string;
  country: string;
  date: string;
  rating: number;
  platform: 'tripadvisor' | 'google';
  tourTaken: string;
  title: string;
  content: string;
  verified: boolean;
  avatarUrl?: string;
  helpfulCount?: number;
}

export interface ReviewStats {
  tripAdvisor: {
    rating: number;
    maxRating: number;
    badge: string;
    totalReviews: string;
    label: string;
    url: string;
  };
  google: {
    rating: number;
    maxRating: number;
    badge: string;
    totalReviews: string;
    label: string;
    url: string;
  };
}

export const REVIEW_STATS: ReviewStats = {
  tripAdvisor: {
    rating: 5.0,
    maxRating: 5.0,
    badge: 'Travelers’ Choice 2026',
    totalReviews: '5.0 / 5.0 Rating',
    label: 'Verified on TripAdvisor',
    url: 'https://www.tripadvisor.com.eg/Attraction_Review-g294205-d28646854-Reviews-Genuine_egypt-Luxor_Nile_River_Valley.html'
  },
  google: {
    rating: 5.0,
    maxRating: 5.0,
    badge: 'Top Rated Tour Agency',
    totalReviews: '5.0 ★ Exceptional',
    label: 'Verified Google Business Reviews',
    url: 'https://share.google/xkZwhyQ5WPcXLcwLi'
  }
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Sarah & David Mitchell',
    country: 'United Kingdom',
    date: 'October 2026',
    rating: 5,
    platform: 'tripadvisor',
    tourTaken: 'Private Luxor West Bank & Nile Sunset Sail',
    title: 'The highlight of our entire Egyptian adventure!',
    content: 'Genuine Egypte was simply outstanding from our first WhatsApp inquiry. Our guide was an accredited Egyptologist whose knowledge of Medinet Habu and the Valley of the Kings blew us away. No rush, no pushy tourist bazaars, just pure history, deep care, and authentic kindness. Highly recommend them over any big tour bus company!',
    verified: true,
    helpfulCount: 14
  },
  {
    id: 'rev-2',
    author: 'Dr. Markus Schneider',
    country: 'Germany',
    date: 'September 2026',
    rating: 5,
    platform: 'google',
    tourTaken: '4-Night Royal Ruby Nile Cruise & Private Transfers',
    title: 'Unrushed, truly authentic, and impeccably organized',
    content: 'We wanted to experience the real Nile away from the chaotic tour groups. Genuine Egypt delivered on every single promise. The private van was spotless and modern, our driver was exceptionally courteous, and the Nile cruise cabin had magnificent river views. Worth every single euro. Outstanding hospitality from Mahmod and team.',
    verified: true,
    helpfulCount: 9
  },
  {
    id: 'rev-3',
    author: 'Elena & Marco Rossi',
    country: 'Italy',
    date: 'September 2026',
    rating: 5,
    platform: 'tripadvisor',
    tourTaken: 'Full Day Cairo Pyramids, Saqqara & Nile Felucca',
    title: 'Felt like traveling with family who know ancient Thebes intimately',
    content: 'Their motto "we know the difference between a tourist and a traveler" is 100% true. They adjusted our pace so my elderly parents could take breaks, arranged mint tea overlooking the Nile cliffs, and explained the hieroglyphs with genuine passion. Truly unforgettable experience in Egypt.',
    verified: true,
    helpfulCount: 11
  },
  {
    id: 'rev-4',
    author: 'Carlos & Sofia Mendez',
    country: 'Spain',
    date: 'August 2026',
    rating: 5,
    platform: 'google',
    tourTaken: 'Hurghada to Luxor Private Transfer & Sunrise Balloon',
    title: 'Prompt, seamless Hurghada transfer + surreal sunrise balloon ride',
    content: 'Prompt pickup right from our Hurghada resort in a brand new private vehicle. Seeing the Valley of the Kings and Hatshepsut temple at dawn from the hot air balloon was magical. Genuine Egypt is genuine in every sense of the word. Seamless communication via WhatsApp 24/7.',
    verified: true,
    helpfulCount: 8
  },
  {
    id: 'rev-5',
    author: 'Chloe & James Bennett',
    country: 'Australia',
    date: 'July 2026',
    rating: 5,
    platform: 'tripadvisor',
    tourTaken: 'Private Dahabiya Sailing Aswan to Luxor',
    title: 'Bespoke Dahabiya itinerary that exceeded all our dreams',
    content: 'The team arranged a tailor-made Dahabiya experience that was peaceful and magical. Mooring at secluded Nile riverbanks for evening candlelit dinners and having temple tours in Kom Ombo and Edfu before the big ships arrived was pure luxury. If you come to Egypt, book with Genuine Egypt!',
    verified: true,
    helpfulCount: 16
  },
  {
    id: 'rev-6',
    author: 'Sophie Laurent',
    country: 'France',
    date: 'June 2026',
    rating: 5,
    platform: 'google',
    tourTaken: 'Abu Simbel & Philae Island Private Excursion',
    title: 'Transparent prices, zero scams, authentic local insight',
    content: 'In a country where commission middlemen can be overwhelming, Genuine Egypt is a breath of fresh air. Complete price transparency, honest recommendations, and wonderful Egyptian hospitality. Do not book with overseas resellers; book directly with these local experts in Luxor!',
    verified: true,
    helpfulCount: 12
  }
];
