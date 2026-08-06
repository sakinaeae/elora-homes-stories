import logoLight from "@/assets/Elora_Homes_logo_primary.png.asset.json";
import logoDark from "@/assets/Elora_Homes_logo_reversed.png.asset.json";
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
  logoLight: logoLight.url,
  logoDark: logoDark.url,
  textureBeige: textureBeige.url,
  textureForest: textureForest.url,
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/stays", label: "Stays" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
