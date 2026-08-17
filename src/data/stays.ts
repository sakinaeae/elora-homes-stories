import cozyOne from "@/assets/cozy-corner-1.jpg";
import cozyTwo from "@/assets/cozy-corner-2.jpg";
import cozyThree from "@/assets/cozy-corner-3.jpg";
import goldenOne from "@/assets/golden-hour-1.jpg";
import goldenTwo from "@/assets/golden-hour-2.jpg";
import goldenThree from "@/assets/golden-hour-3.jpg";

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
      "Hairdryer",
    ],
    houseRules: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "5 guests maximum"],
    image: cozyOne,
    gallery: [cozyOne, cozyTwo, cozyThree],
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
    image: goldenOne,
    gallery: [goldenOne, goldenTwo, goldenThree],
    listingUrl: "https://www.airbnb.co.in/rooms/1743206239728625139",
  },
];
