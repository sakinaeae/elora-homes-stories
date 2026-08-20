import textureBeige from "@/assets/Elora_Homes_textures_2.png.asset.json";
import textureForest from "@/assets/Elora_Homes_textures_3.png.asset.json";

export const brand = {
  name: "Elora Homes",
  tagline: "Spaces Styled for Every Story.",
  email: "elorahomesinn@gmail.com",
  phone: "9916120726",
  phoneHref: "+919916120726",
  instagram: "@elorahomesinn",
  instagramUrl: "https://instagram.com/elorahomesinn",
  website: "elorahomesinn.com",
  city: "Bengaluru, India",
  logo: "/elora-homes-official-logo.png",
  textureBeige: textureBeige.url,
  textureForest: textureForest.url,
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/stays", label: "Stays" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Enquire" },
] as const;
