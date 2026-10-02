import type { ImageKey } from "./images";

export type DestinationFilter = "India" | "Asia" | "Europe" | "Middle East" | "Adventure" | "Beaches";

export interface Destination {
  id: string;
  name: string;
  region: string;
  description: string;
  image: ImageKey;
  tags: DestinationFilter[];
  article?: string;
}

export const destinations: Destination[] = [
  { id: "goa", name: "Goa", region: "India · West Coast", description: "Palm-fringed beaches, Portuguese-era churches and slow, sunny afternoons by the Arabian Sea.", image: "goa", tags: ["India", "Asia", "Beaches"], article: "goa-travel-guide" },
  { id: "manali", name: "Manali", region: "India · Himachal Pradesh", description: "A Himalayan base for snow, pine forests, river valleys and mountain adventures.", image: "manali", tags: ["India", "Asia", "Adventure"], article: "manali-travel-guide" },
  { id: "jaipur", name: "Jaipur", region: "India · Rajasthan", description: "The Pink City of grand forts, royal palaces and lively bazaars.", image: "jaipur", tags: ["India", "Asia"], article: "jaipur-heritage-guide" },
  { id: "kerala", name: "Kerala", region: "India · South", description: "Quiet backwaters, tea-covered hills and a gentle coastal rhythm.", image: "kerala", tags: ["India", "Asia", "Beaches"], article: "kerala-travel-guide" },
  { id: "mumbai", name: "Mumbai", region: "India · Maharashtra", description: "A restless coastal city of sea-facing promenades, street food and colonial landmarks.", image: "mumbai", tags: ["India", "Asia"], article: "maharashtra-travel-guide" },
  { id: "kashmir", name: "Kashmir", region: "India · North", description: "Mirror-still lakes, shikara rides and meadows ringed by snowy peaks.", image: "kashmir", tags: ["India", "Asia", "Adventure"], article: "top-10-places-to-visit-in-india" },
  { id: "rishikesh", name: "Rishikesh", region: "India · Uttarakhand", description: "Yoga, river rafting and riverside temples where the Ganges leaves the hills.", image: "rishikesh", tags: ["India", "Asia", "Adventure"], article: "top-trekking-destinations-in-india" },
  { id: "udaipur", name: "Udaipur", region: "India · Rajasthan", description: "The romantic city of lakes, with marble palaces glowing at sunset.", image: "udaipur", tags: ["India", "Asia"], article: "top-10-places-to-visit-in-india" },
  { id: "dubai", name: "Dubai", region: "United Arab Emirates", description: "Record-breaking skyscrapers beside old souks, creeks and golden desert dunes.", image: "dubai", tags: ["Middle East", "Asia"], article: "dubai-travel-guide" },
  { id: "paris", name: "Paris", region: "France · Europe", description: "Boulevards, museums, cafés and the timeless silhouette of the Eiffel Tower.", image: "paris", tags: ["Europe"], article: "paris-travel-guide" },
  { id: "bali", name: "Bali", region: "Indonesia · Southeast Asia", description: "Terraced rice fields, temple ceremonies and surf-washed beaches.", image: "bali", tags: ["Asia", "Beaches"], article: "best-places-southeast-asia" },
  { id: "singapore", name: "Singapore", region: "Southeast Asia", description: "A spotless garden city with hawker centres and a striking waterfront skyline.", image: "singapore", tags: ["Asia"], article: "best-places-southeast-asia" },
  { id: "london", name: "London", region: "United Kingdom · Europe", description: "Royal history, world-class museums and riverside walks along the Thames.", image: "london", tags: ["Europe"] },
  { id: "tokyo", name: "Tokyo", region: "Japan · East Asia", description: "Neon districts, quiet shrines and day trips to the slopes of Mount Fuji.", image: "tokyo", tags: ["Asia"] },
];

export const featuredDestinationIds = ["goa", "manali", "jaipur", "kerala", "dubai", "paris"];
export const destinationFilters: ("All" | DestinationFilter)[] = ["All", "India", "Asia", "Europe", "Middle East", "Adventure", "Beaches"];
