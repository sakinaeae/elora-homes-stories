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
  airbnbGallery?: string[];
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

const cozyCornerAirbnbImages = [
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/10d47901-4668-4433-93f1-1eba8743dbf4.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/138488ea-a415-4f78-8460-c3d7e293b986.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/141070f5-7cdf-4705-b53a-5601ce454504.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/17304a15-c418-42a2-b535-b27035507f5c.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/1bc63ffa-3b13-4f31-ad8e-984b012445d9.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/1e1cfbd2-02dd-42a1-85be-1c5022f4f706.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/22b770ab-82f2-4f56-bab6-17516fd1a5e6.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/32d4d948-6546-4d6b-accd-86fb60654215.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/3c4feee6-b66d-4499-abf8-5f77151def4d.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/3c8dc34e-34da-4c1e-af1f-26157414a251.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/503da35b-e96c-4ce6-96e2-b0e324624921.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/58216a17-7e7d-4d27-8af2-5b641cd9db2b.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/58fef8c6-1b08-4fec-a554-5d9f87fc0495.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/5ce3c68c-297e-459d-9554-997ec4be42b2.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/5f402573-a134-4303-ad6f-8200c8b9a406.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/845b3b1b-b2e9-4df4-8e2d-f94cead6317e.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/ae020db8-1ac5-4f17-977c-677eecff3ccb.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/b5b30ae6-07ed-47c5-ab0b-db226619285b.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/ba1943b4-00ff-4fd4-aad8-b763b18388aa.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/bbcbec4c-b8bc-4529-b7d4-46abb4dadf39.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/c0588a68-35ed-431a-8bdf-a4dc7d8ab850.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/c5927f94-2b60-4e41-a127-d25bf249b400.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/d0581af9-b654-4bca-be20-960d99c4b49c.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/e6d12cf5-2950-4b0f-9d8f-a623816da6d9.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1744953051018087350/original/f8cccd06-0a11-4947-b918-6f59bef7689f.jpeg",
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

const goldenHourAirbnbImages = [
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/00e26afc-9c8e-4e0d-8c9a-8ae84115639b.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/093359b0-f75f-434a-b690-17f503d14629.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/0cec702a-4278-4f1c-a37b-c10d391f7ef5.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/12a55a9c-0e12-4520-b04c-7e5a68440ea6.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/13f92976-3e92-417c-8e91-1efba993775f.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/1c839591-e65b-48c9-b77e-05cc714533a0.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/1ce4a372-7a9c-4f49-a46b-7e7457545e92.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/233ec66d-472f-4fe2-8837-e466b552c682.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/251adb6c-e2cf-4c4f-976b-9da9cf0228bf.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/353fac4c-a2b4-4558-ace7-5b254654d708.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/37a763bb-0cd4-4ba6-9f30-f17ef1fa3ab1.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/4731a152-5036-4467-abcb-20c770346c8a.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/60f4bca2-092a-4353-84f0-6b96122ebabf.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/7322e9bb-9433-4c89-9c6c-a918983fcc59.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/803a4471-8c4b-47b5-a4cd-b3d052ac8966.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/816d1e7e-62e4-4141-b78c-4d98798b17a4.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/88759a3f-a883-4464-8a47-fb4816a7373c.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/a5e65472-ddff-45bf-8b0e-770b695b2ca3.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/d487580e-e0e6-48e6-9ad5-e2005d7a365f.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/dfd59c11-8fc5-4754-8851-3490088f6c27.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/eae5e89f-4f20-4394-978c-355fe570d525.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/f1914bb9-cd23-4787-a544-9e5e5308293c.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1743206239728625139/original/f3286147-41f5-44e9-8fc3-3ac9f539d8c5.jpeg",
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
    airbnbGallery: cozyCornerAirbnbImages,
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
    airbnbGallery: goldenHourAirbnbImages,
    listingUrl: "https://www.airbnb.co.in/rooms/1743206239728625139",
  },
];
