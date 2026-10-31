export type Category = 
  | 'All'
  | 'Sarees' 
  | 'Denim' 
  | 'Kurtas & Tops' 
  | 'Bags' 
  | 'Jewellery' 
  | 'Limited Edition';

export type CraftTechnique = 
  | 'All'
  | 'Sujini'
  | 'Madhubani'
  | 'Khatwa'
  | 'Gota-patti'
  | 'Mirror work'
  | 'Hand painting'
  | 'Applique';

export type PriceTier = 'all' | 'everyday' | 'heritage';

export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: 'Sarees' | 'Denim' | 'Kurtas & Tops' | 'Bags' | 'Jewellery' | 'Limited Edition';
  craftTechnique: 'Sujini' | 'Madhubani' | 'Khatwa' | 'Gota-patti' | 'Mirror work' | 'Hand painting' | 'Applique';
  price: number;
  originalPrice?: number;
  tier: 'everyday' | 'heritage';
  artisanGroupId: string;
  artisanGroupName: string;
  artisanLocation: string;
  description: string;
  craftStory: string;
  timeToMake: string;
  artisansInvolved: number;
  images: string[];
  sizes: string[];
  fabric: string;
  careInstructions: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Craft {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  originRegion: string;
  status: 'Endangered' | 'Reviving' | 'Thriving';
  shortDescription: string;
  fullHistory: string;
  stepProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  toolsUsed: string[];
  heroImage: string;
  culturalSignificance: string;
  productCount: number;
}

export interface ArtisanGroup {
  id: string;
  name: string;
  hindiName: string;
  leadArtisanName: string;
  leadArtisanHindiName: string;
  photo: string;
  village: string;
  district: string;
  state: string;
  craftSpecialty: string;
  yearsOfExperience: number;
  womenSupported: number;
  quote: string;
  bio: string;
  achievements: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface CustomOrderRequest {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  productType: string;
  craftTechnique: string;
  primaryColor: string;
  measurementsOrSize: string;
  occasion: string;
  budgetRange: string;
  notes: string;
  referenceFileUrl?: string;
}

export type Language = 'en' | 'hi';
