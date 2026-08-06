import stayOne from "@/assets/stay-one.jpg";
import stayTwo from "@/assets/stay-two.jpg";

export type Stay = {
  slug: string;
  name: string;
  location: string;
  description: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  image: string;
  listingUrl: string;
};

export const stays: Stay[] = [
  {
    slug: "the-garden-residence",
    name: "The Garden Residence",
    location: "Bengaluru",
    description:
      "A light-filled apartment where mornings arrive slowly. Linen, oak and quiet green — arranged for long stays and slower conversations.",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Fast Wi-Fi", "Full kitchen", "Workspace", "Free parking", "Self check-in"],
    image: stayOne,
    listingUrl: "https://www.airbnb.co.in/rooms/1744953051018087350",
  },
  {
    slug: "the-forest-suite",
    name: "The Forest Suite",
    location: "Bengaluru",
    description:
      "A king suite framed by treetops and a private balcony. Pressed cotton, brass detail, and the city held comfortably at arm's length.",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Fast Wi-Fi", "Balcony", "Kitchenette", "Free parking", "Self check-in"],
    image: stayTwo,
    listingUrl: "https://www.airbnb.co.in/rooms/1743206239728625139",
  },
];
