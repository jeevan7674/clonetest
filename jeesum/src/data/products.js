import headphones from "@/assets/headphones.jpg"
import leatherBag from "@/assets/leather-bag.jpg"
import smartSpeaker from "@/assets/smart-speaker.jpg"
import cottonTshirt from "@/assets/cotton-tshirt.jpg"
import dinnerSet from "@/assets/dinner-set.jpg"
import skincareSet from "@/assets/skincare-set.jpg"
import yogaMat from "@/assets/yoga-mat.jpg"
import waterBottle from "@/assets/water-bottle.jpg"
import wallClock from "@/assets/wall-clock.jpg"
import cameraLens from "@/assets/camera-lens.jpg"
import silkScarf from "@/assets/silk-scarf.jpg"
import faceSerum from "@/assets/face-serum.jpg"

export const products = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    category: "Electronics",
    image: headphones,
    description:
      "High-fidelity wireless headphones with active noise cancellation",
    specifications: {
      Connectivity: "Bluetooth 5.0",
      "Battery Life": "30 hours",
      "Driver Size": "40mm",
      Weight: "250g",
      "Noise Cancellation": "Active ANC"
    }
  },
  {
    id: "2",
    name: "Designer Leather Bag",
    price: 189.99,
    category: "Fashion",
    image: leatherBag,
    description: "Handcrafted genuine leather shoulder bag",
    specifications: {
      Material: "Genuine Leather",
      Dimensions: "35 x 28 x 12 cm",
      Closure: "Magnetic Snap",
      Strap: "Adjustable",
      Color: "Cognac Brown"
    }
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    price: 129.99,
    category: "Electronics",
    image: smartSpeaker,
    description: "Voice-activated smart speaker with premium sound",
    specifications: {
      "Voice Assistant": "Multi-platform",
      Audio: "360° Sound",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "AC Adapter",
      Dimensions: "10 x 10 x 15 cm"
    }
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    price: 39.99,
    category: "Fashion",
    image: cottonTshirt,
    description: "Eco-friendly organic cotton tee in classic fit",
    specifications: {
      Material: "100% Organic Cotton",
      Fit: "Classic Regular",
      Care: "Machine Washable",
      Origin: "Fair Trade Certified",
      "Available Sizes": "S, M, L, XL"
    }
  },
  {
    id: "5",
    name: "Ceramic Dinner Set",
    price: 149.99,
    category: "Home",
    image: dinnerSet,
    description: "Elegant 16-piece ceramic dinnerware set",
    specifications: {
      Material: "High-Quality Ceramic",
      Pieces: "16-piece set",
      Service: "Serves 4",
      "Dishwasher Safe": "Yes",
      "Microwave Safe": "Yes"
    }
  },
  {
    id: "6",
    name: "Luxury Skincare Set",
    price: 89.99,
    category: "Beauty",
    image: skincareSet,
    description: "Complete skincare routine with natural ingredients",
    specifications: {
      Includes: "5-piece set",
      "Skin Type": "All skin types",
      "Key Ingredients": "Hyaluronic Acid, Vitamin E",
      "Cruelty-Free": "Yes",
      Vegan: "Yes"
    }
  },
  {
    id: "7",
    name: "Yoga Mat Premium",
    price: 59.99,
    category: "Sports",
    image: yogaMat,
    description: "Non-slip eco-friendly yoga mat with carrying strap",
    specifications: {
      Material: "TPE Eco-Friendly",
      Thickness: "6mm",
      Dimensions: "183 x 61 cm",
      Weight: "900g",
      "Non-Slip": "Double-sided texture"
    }
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    category: "Sports",
    image: waterBottle,
    description: "Insulated water bottle keeps drinks cold for 24 hours",
    specifications: {
      Material: "Stainless Steel",
      Capacity: "750ml",
      Insulation: "Double-wall vacuum",
      "BPA-Free": "Yes",
      "Leak-Proof": "Yes"
    }
  },
  {
    id: "9",
    name: "Minimalist Wall Clock",
    price: 79.99,
    category: "Home",
    image: wallClock,
    description: "Modern Scandinavian-inspired wall clock",
    specifications: {
      Material: "Walnut Wood",
      Diameter: "30cm",
      Movement: "Silent Quartz",
      Battery: "AA (included)",
      Style: "Scandinavian Modern"
    }
  },
  {
    id: "10",
    name: "Professional Camera Lens",
    price: 599.99,
    category: "Electronics",
    image: cameraLens,
    description: "50mm f/1.8 prime lens for professional photography",
    specifications: {
      "Focal Length": "50mm",
      Aperture: "f/1.8",
      Mount: "Universal",
      Weight: "340g",
      Focus: "Auto & Manual"
    }
  },
  {
    id: "11",
    name: "Silk Scarf Collection",
    price: 69.99,
    category: "Fashion",
    image: silkScarf,
    description: "Pure silk scarf with hand-painted floral design",
    specifications: {
      Material: "100% Pure Silk",
      Dimensions: "90 x 90 cm",
      Design: "Hand-painted",
      Care: "Dry Clean Only",
      Origin: "Artisan Made"
    }
  },
  {
    id: "12",
    name: "Natural Face Serum",
    price: 49.99,
    category: "Beauty",
    image: faceSerum,
    description: "Vitamin C brightening serum with hyaluronic acid",
    specifications: {
      Volume: "30ml",
      "Key Ingredients": "Vitamin C, Hyaluronic Acid",
      "Skin Type": "All types",
      Application: "Morning & Night",
      Natural: "98% Natural Ingredients"
    }
  }
]

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Sports"
]
