export interface SiteContact {
  companyName: string;
  legalName: string;
  tagline: string;
  philosophy: string;
  address: string;
  city: string;
  country: string;
  phones: string[];
  primaryPhone: string;
  whatsappNumber: string;
  whatsappLink: string;
  emails: string[];
  primaryEmail: string;
  salesEmail: string;
  workingHours: string;
  experienceYears: number;
  facebookUrl: string;
  tripAdvisorUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const SITE_SETTINGS: SiteContact = {
  companyName: 'Genuine Egypte',
  legalName: 'Genuine Egypte Travel Agency & Art House',
  tagline: 'Best Travel Agency in Egypt – Excursions, Nile Cruises & Private Tours',
  philosophy: 'We know the difference between a tourist and a traveler. We reject rushed, mass-tour itineraries to show you the real Egypt, our living culture, and timeless monuments with licensed Egyptologists.',
  address: '44 Khaled Ibn Al Waleed Street',
  city: 'Luxor',
  country: 'Egypt',
  phones: ['+20 1033801083', '+20 1022721263'],
  primaryPhone: '+20 1033801083',
  whatsappNumber: '+201033801083',
  whatsappLink: 'https://wa.me/201033801083',
  emails: ['info@genuineegypte.com', 'sales@genuineegypte.com'],
  primaryEmail: 'info@genuineegypte.com',
  salesEmail: 'sales@genuineegypte.com',
  workingHours: '24/7 Traveler Assistance & Concierge Service',
  experienceYears: 15,
  facebookUrl: 'https://www.facebook.com/genuineegypttours',
  tripAdvisorUrl: 'https://www.tripadvisor.com',
  coordinates: {
    lat: 25.6872,
    lng: 32.6396
  }
};

/**
 * Builds a WhatsApp inquiry link prefilled with tour details and custom parameters
 */
export function buildWhatsAppInquiryUrl(params: {
  tourTitle?: string;
  tourSlug?: string;
  date?: string;
  travelers?: number | string;
  notes?: string;
}): string {
  const parts: string[] = ['Hello Genuine Egypte, I am inquiring about travel with your agency.'];
  
  if (params.tourTitle) {
    parts.push(`\n*Tour:* ${params.tourTitle}`);
  }
  if (params.tourSlug) {
    parts.push(`*Reference:* https://genuineegypte.com/booking/${params.tourSlug}/`);
  }
  if (params.date) {
    parts.push(`*Preferred Date:* ${params.date}`);
  }
  if (params.travelers) {
    parts.push(`*Number of Travelers:* ${params.travelers}`);
  }
  if (params.notes && params.notes.trim()) {
    parts.push(`*Notes/Questions:* ${params.notes.trim()}`);
  }
  
  parts.push('\nPlease let me know your availability and seasonal pricing. Thank you!');
  
  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/201033801083?text=${text}`;
}

/**
 * Builds a mailto link prefilled with tour details and inquiry notes
 */
export function buildMailtoInquiryUrl(params: {
  tourTitle?: string;
  tourSlug?: string;
  date?: string;
  travelers?: number | string;
  name?: string;
  notes?: string;
}): string {
  const subject = encodeURIComponent(
    params.tourTitle
      ? `Tour Inquiry: ${params.tourTitle} - Genuine Egypte`
      : `General Travel Inquiry - Genuine Egypte`
  );

  const bodyParts = [
    `Dear Genuine Egypte Team,`,
    ``,
    `I would like to inquire about booking/availability with your agency.`
  ];

  if (params.tourTitle) bodyParts.push(`Tour: ${params.tourTitle}`);
  if (params.tourSlug) bodyParts.push(`Tour Link: https://genuineegypte.com/booking/${params.tourSlug}/`);
  if (params.date) bodyParts.push(`Preferred Date: ${params.date}`);
  if (params.travelers) bodyParts.push(`Number of Travelers: ${params.travelers}`);
  if (params.name) bodyParts.push(`Lead Traveler: ${params.name}`);
  if (params.notes) {
    bodyParts.push(``);
    bodyParts.push(`Questions / Special Requests:`);
    bodyParts.push(params.notes);
  }

  bodyParts.push(``);
  bodyParts.push(`I look forward to hearing from your team.`);

  const body = encodeURIComponent(bodyParts.join('\n'));
  return `mailto:info@genuineegypte.com?subject=${subject}&body=${body}`;
}
