export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Tours & Excursions', href: '/tours' },
  { label: 'Nile Cruises', href: '/nile-cruises' },
  { label: 'Cairo & Giza', href: '/cairo-giza-tours' },
  { label: 'Luxor & Valley', href: '/luxor-upper-egypt' },
  { label: 'Transfers', href: '/private-transfers' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_SECTIONS = [
  {
    title: 'Featured Experiences',
    links: [
      { label: 'Royal Ruby Nile Cruise (4 Nights)', href: '/booking/royal-ruby-nile-cruise-4-nights-5-days/' },
      { label: 'Nile Premium Cruise Program', href: '/booking/nile-premium-nile-cruise-5-days-04-nights-program-every-monday/' },
      { label: 'Giza Pyramids & Sphinx Half Day', href: '/booking/giza-pyramids-and-the-sphinx-half-day-tour/' },
      { label: 'Sunrise Hot Air Balloon in Luxor', href: '/booking/sunrise-hot-air-balloon-ride-in-luxor/' },
      { label: 'Abu Simbel UNESCO Excursion', href: '/booking/day-trip-to-abu-simbel-unesco-world-heritage-site-from-aswan/' },
      { label: 'Dendera & Abydos Temples Tour', href: '/booking/from-luxor-to-dendera-abydos-full-day-tour-in-egypt/' }
    ]
  },
  {
    title: 'Tour Categories',
    links: [
      { label: 'All Tours & Excursions', href: '/tours' },
      { label: 'Nile River Cruises', href: '/nile-cruises' },
      { label: 'Cairo & Giza Excursions', href: '/cairo-giza-tours' },
      { label: 'Luxor & Upper Egypt Tours', href: '/luxor-upper-egypt' },
      { label: 'Private Airport & City Transfers', href: '/private-transfers' },
      { label: 'Hot Air Balloon Adventures', href: '/hot-air-balloon' }
    ]
  },
  {
    title: 'Destinations',
    links: [
      { label: 'Luxor & The West Bank', href: '/destinations/luxor' },
      { label: 'The River Nile (Luxor–Aswan)', href: '/destinations/nile-river' },
      { label: 'Cairo & Giza Plateau', href: '/destinations/cairo-giza' },
      { label: 'Aswan & Abu Simbel', href: '/destinations/aswan-abu-simbel' },
      { label: 'Alexandria & Mediterranean', href: '/destinations/alexandria' },
      { label: 'Hurghada & Red Sea', href: '/destinations/hurghada' }
    ]
  },
  {
    title: 'Company & Travel Info',
    links: [
      { label: 'About Genuine Egypte', href: '/about' },
      { label: 'Contact Us & Luxor Office', href: '/contact' },
      { label: 'Travel FAQs & Practical Tips', href: '/faqs' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' }
    ]
  }
];
