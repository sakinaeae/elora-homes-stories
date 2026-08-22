export type Stay = {
  slug: string;
  name: string;
  subtitle: string;
  location: string;
  description: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  sleeping: string[];
  amenities: string[];
  houseRules: string[];
  image: string;
  gallery: string[];
  listingUrl: string;
};

const cozyCornerImages = [
  "/cozy-corner/IMG_2873.jpeg",
  "/cozy-corner/IMG_2904.jpeg",
  "/cozy-corner/IMG_3035.jpeg",
  "/cozy-corner/IMG_3041.jpeg",
  "/cozy-corner/IMG_3057.jpeg",
  "/cozy-corner/IMG_3066.jpeg",
  "/cozy-corner/IMG_3108.jpeg",
  "/cozy-corner/IMG_3132.jpeg",
  "/cozy-corner/IMG_3146.jpeg",
  "/cozy-corner/IMG_3211.jpeg",
];

const goldenHourImages = [
  "/golden-hour/IMG_2828.JPG",
  "/golden-hour/IMG_2949.jpeg",
  "/golden-hour/IMG_2957.jpeg",
  "/golden-hour/IMG_2976.jpeg",
  "/golden-hour/IMG_3010.jpeg",
  "/golden-hour/IMG_3011.jpeg",
  "/golden-hour/IMG_3013.jpeg",
  "/golden-hour/IMG_3035.jpeg",
  "/golden-hour/IMG_3080.jpeg",
  "/golden-hour/IMG_3155.jpeg",
  "/golden-hour/IMG_3157.jpeg",
  "/golden-hour/IMG_3211.jpeg",
];

export const stays: Stay[] = [
  {
    slug: "the-cozy-corner",
    name: "The Cozy Corner",
    subtitle: "1BHK in Arekere",
    location: "Arekere, Bengaluru",
    description:
      "An entire one-bedroom home wrapped in warm tones — made for movie nights, slow coffee mornings and late conversations. The kind of place you quietly extend your stay in.",
    guests: 5,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    sleeping: ["Bedroom — 1 queen bed", "Living room — 1 sofa"],
    amenities: [
      "Wifi",
      "Kitchen",
      "Free parking on premises",
      "Lift",
      "Washing machine",
      "Bath",
    ],
    houseRules: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "5 guests maximum"],
    image: cozyCornerImages[0]!,
    gallery: cozyCornerImages,
    listingUrl: "https://www.airbnb.co.in/rooms/1744953051018087350",
  },
  {
    slug: "the-golden-hour",
    name: "The Golden Hour",
    subtitle: "2BHK in Arekere",
    location: "Arekere, Bengaluru",
    description:
      "A two-bedroom home curated in earthy tones and warm light. Every stay has a story — this one is designed for gathering, resting and reconnecting in the city.",
    guests: 6,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    sleeping: ["Bedroom 1 — 1 queen bed", "Bedroom 2 — 1 queen bed", "Living room — 1 sofa"],
    amenities: [
      "Wifi",
      "Kitchen",
      "Dedicated workspace",
      "Free parking on premises",
      "TV",
      "Lift",
      "Washing machine",
    ],
    houseRules: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "6 guests maximum"],
    image: goldenHourImages[0]!,
    gallery: goldenHourImages,
    listingUrl: "https://www.airbnb.co.in/rooms/1743206239728625139",
  },
];
