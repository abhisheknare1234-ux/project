import hero from "@/assets/hero.jpg";
import goa from "@/assets/goa.jpg";
import manali from "@/assets/manali.jpg";
import jaipur from "@/assets/jaipur.jpg";
import kerala from "@/assets/kerala.jpg";
import dubai from "@/assets/dubai.jpg";
import paris from "@/assets/paris.jpg";
import mumbai from "@/assets/mumbai.jpg";
import kashmir from "@/assets/kashmir.jpg";
import rishikesh from "@/assets/rishikesh.jpg";
import udaipur from "@/assets/udaipur.jpg";
import bali from "@/assets/bali.jpg";
import singapore from "@/assets/singapore.jpg";
import london from "@/assets/london.jpg";
import tokyo from "@/assets/tokyo.jpg";
import maharashtra from "@/assets/maharashtra.jpg";
import packing from "@/assets/packing.jpg";
import solo from "@/assets/solo.jpg";
import trekking from "@/assets/trekking.jpg";

export const img = {
  hero, goa, manali, jaipur, kerala, dubai, paris, mumbai, kashmir, rishikesh,
  udaipur, bali, singapore, london, tokyo, maharashtra, packing, solo, trekking,
};

export const alt: Record<keyof typeof img, string> = {
  hero: "Hiker standing on a grassy Himalayan ridge above a misty valley at sunrise",
  goa: "Golden sandy beach in Goa with palm trees and wooden fishing boats",
  manali: "Snow-capped Himalayan peaks above pine forests and a river in Manali",
  jaipur: "Historic pink sandstone Hawa Mahal in Jaipur during daylight",
  kerala: "Traditional houseboat floating through Kerala backwaters lined with palms",
  dubai: "Dubai skyline with Burj Khalifa glowing at dusk",
  paris: "Eiffel Tower framed by classic Parisian apartment buildings",
  mumbai: "Marine Drive seafront curving along Mumbai's skyline at sunset",
  kashmir: "Shikara boats on Dal Lake with snowy Himalayan mountains in Kashmir",
  rishikesh: "Suspension bridge over the green Ganges river in Rishikesh",
  udaipur: "City Palace of Udaipur reflected in Lake Pichola at sunset",
  bali: "Misty Bali rice terraces with palm trees and a small temple",
  singapore: "Marina Bay Sands and Singapore skyline reflected at blue hour",
  london: "Houses of Parliament and Big Ben beside the River Thames in London",
  tokyo: "Red pagoda with cherry blossoms and Mount Fuji in the distance",
  maharashtra: "Moss-covered hill fort in the Western Ghats with monsoon waterfalls",
  packing: "Neatly packed travel backpack with passport, camera and map",
  solo: "Solo backpacker walking down a colourful cobbled old-town street",
  trekking: "Trekkers on a Himalayan trail lined with prayer flags",
};

export type ImageKey = keyof typeof img;
