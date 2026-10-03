export interface Project {
  id: string;
  title: string;
  typology: "Architecture" | "Interior Design" | "Turnkey Solutions";
  year: string;
  image: string;
  heroImage: string;
  gallery: string[];
  description: string;
  specs: string;
  location?: string;
  area?: string;
  isFeatured?: boolean;
}

// 🚀 THE HELPER FUNCTION
const generateGallery = (folderName: string, imageCount: number) => {
  return Array.from({ length: imageCount }, (_, i) => `/interior-projects/${folderName}/${i + 1}.jpg`);
};

// 📂 YOUR MASTER PROJECT LIST (Ordered exactly as requested)
export const projectsDB: Project[] = [
  
  // 1
  { 
    id: "4bhk-residential-interior-khardi-pune", 
    title: "4BHK Interior Khardi", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/4bhk-residential-interior-khardi-pune/1.jpg", 
    heroImage: "/interior-projects/4bhk-residential-interior-khardi-pune/1.jpg", 
    gallery: generateGallery("4bhk-residential-interior-khardi-pune", 5), // <-- CHANGE '5' TO YOUR ACTUAL IMAGE COUNT
    description: "A comprehensive interior overhaul focusing on spatial fluidity and modern materiality.",
    specs: "RESIDENTIAL // 4BHK",
    location: "Khardi, Pune",
    isFeatured: true // Large grid item
  },

  // 2
  { 
    id: "interiors-at-mundawa", 
    title: "Mundawa Interiors", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/interiors-at-mundawa/1.jpg", 
    heroImage: "/interior-projects/interiors-at-mundawa/1.jpg", 
    gallery: generateGallery("interiors-at-mundawa", 5), 
    description: "Modern residential interior focusing on natural light and raw textures.",
    specs: "RESIDENTIAL // INTERIOR",
    location: "Mundawa, Pune",
    isFeatured: false 
  },

  // 3
  { 
    id: "4bhk-residential-interior-baner-pune", 
    title: "4BHK Interior Baner", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/4bhk-residential-interior-baner-pune/1.jpg", 
    heroImage: "/interior-projects/4bhk-residential-interior-baner-pune/1.jpg", 
    gallery: generateGallery("4bhk-residential-interior-baner-pune", 5), 
    description: "Premium residential design blending warm timber with minimal finishes.",
    specs: "RESIDENTIAL // 4BHK",
    location: "Baner, Pune",
    isFeatured: false 
  },

  // 4
  { 
    id: "interiors-at-lodha-belmond", 
    title: "Lodha Belmond Residence", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/interiors-at-lodha-belmond/1.jpg", 
    heroImage: "/interior-projects/interiors-at-lodha-belmond/1.jpg", 
    gallery: generateGallery("interiors-at-lodha-belmond", 5), 
    description: "High-end apartment interior focusing on bespoke joinery and lighting.",
    specs: "RESIDENTIAL // APARTMENT",
    location: "Pune",
    isFeatured: false 
  },

  // 5
  { 
    id: "bungalow-at-sangli", 
    title: "Sangli Bungalow", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/bungalow-at-sangli/1.jpg", 
    heroImage: "/interior-projects/bungalow-at-sangli/1.jpg", 
    gallery: generateGallery("bungalow-at-sangli", 5), 
    description: "Spacious bungalow interior harmonizing with its architectural envelope.",
    specs: "RESIDENTIAL // BUNGALOW",
    location: "Sangli, MH",
    isFeatured: false 
  },

  // 6
  { 
    id: "bungalow-interiors-at-mumbai", // Matches your folder spelling exactly
    title: "Mumbai Bungalow", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/bungalow-interiors-at-mumbai/1.jpg", 
    heroImage: "/interior-projects/bunglow-interiors-at-mumbai/1.jpg", 
    gallery: generateGallery("bunglow-interiors-at-mumbai", 5), 
    description: "Urban luxury living with custom monolithic stone installations.",
    specs: "RESIDENTIAL // BUNGALOW",
    location: "Mumbai, MH",
    isFeatured: true // Large grid item
  },

  // 7
  { 
    id: "salon-at-ahmedabad", 
    title: "La Nova Salon", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/salon-at-ahmedabad/1.jpg", 
    heroImage: "/interior-projects/salon-at-ahmedabad/1.jpg", 
    gallery: generateGallery("salon-at-ahmedabad", 5), 
    description: "Commercial salon interior blending luxury lighting with ergonomic spatial flow.",
    specs: "COMMERCIAL // SALON",
    location: "Ahmedabad, GJ",
    isFeatured: false 
  },

  // 8
  { 
    id: "interiors-at-amanora", 
    title: "Amanora Interiors", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/interiors-at-amanora/1.jpg", 
    heroImage: "/interior-projects/interiors-at-amanora/1.jpg", 
    gallery: generateGallery("interiors-at-amanora", 5), 
    description: "Contemporary apartment styling emphasizing open floor plans.",
    specs: "RESIDENTIAL // APARTMENT",
    location: "Amanora, Pune",
    isFeatured: false 
  },

  // 9
  { 
    id: "bungalow-residence-interiors", 
    title: "Bungalow Residence", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/bungalow-residence-interiors/1.jpg", 
    heroImage: "/interior-projects/bungalow-residence-interiors/1.jpg", 
    gallery: generateGallery("bungalow-residence-interiors", 5), 
    description: "Curated furniture and warm palettes tailored for family living.",
    specs: "RESIDENTIAL // BUNGALOW",
    location: "Maharashtra",
    isFeatured: false 
  },

  // 10
  { 
    id: "bungalow-residence-interiors-kothrud-pune", 
    title: "Kothrud Bungalow", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/bungalow-residence-interiors-kothrud-pune/1.jpg", 
    heroImage: "/interior-projects/bungalow-residence-interiors-kothrud-pune/1.jpg", 
    gallery: generateGallery("bungalow-residence-interiors-kothrud-pune", 5), 
    description: "Bespoke residential design maximizing spatial efficiency and elegance.",
    specs: "RESIDENTIAL // BUNGALOW",
    location: "Kothrud, Pune",
    isFeatured: false 
  },

  // 11
  { 
    id: "office-interiors-talegaon-pune", 
    title: "Talegaon Office", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/office-interiors-talegaon-pune/1.jpg", 
    heroImage: "/interior-projects/office-interiors-talegaon-pune/1.jpg", 
    gallery: generateGallery("office-interiors-talegaon-pune", 5), 
    description: "Corporate workspace engineered for collaboration and focused productivity.",
    specs: "COMMERCIAL // OFFICE",
    location: "Talegaon, Pune",
    isFeatured: true // Large grid item
  },

  // 12
  { 
    id: "residential-interiors-at-deolali-pune", 
    title: "Deolali Residence", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/residential-interiors-at-deolali-pune/1.jpg", 
    heroImage: "/interior-projects/residential-interiors-at-deolali-pune/1.jpg", 
    gallery: generateGallery("residential-interiors-at-deolali-pune", 5), 
    description: "Seamless integration of traditional elements within a modern framework.",
    specs: "RESIDENTIAL // INTERIOR",
    location: "Deolali, Pune",
    isFeatured: false 
  },

  // 13
  { 
    id: "bungalow-residential-interior-pune", 
    title: "Pune Bungalow", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/bungalow-residential-interior-pune/1.jpg", 
    heroImage: "/interior-projects/bungalow-residential-interior-pune/1.jpg", 
    gallery: generateGallery("bungalow-residential-interior-pune", 5), 
    description: "Expansive luxury interiors with a focus on tactile materiality.",
    specs: "RESIDENTIAL // BUNGALOW",
    location: "Pune, MH",
    isFeatured: false 
  },

  // 14
  { 
    id: "golds-gym-at-satara-road", 
    title: "Gold Gym Satara Road", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/golds-gym-at-satara-road/1.jpg", 
    heroImage: "/interior-projects/golds-gym-at-satara-road/1.jpg", 
    gallery: generateGallery("golds-gym-at-satara-road", 5), 
    description: "High-energy fitness environment utilizing industrial aesthetics and durable materiality.",
    specs: "COMMERCIAL // FITNESS",
    location: "Satara Road, Pune",
    isFeatured: false 
  },

  // 15
  { 
    id: "bagul-resort-mulshi", 
    title: "Bagul Resort", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/bagul-resort-mulshi/1.jpg", 
    heroImage: "/interior-projects/bagul-resort-mulshi/1.jpg", 
    gallery: generateGallery("bagul-resort-mulshi", 5), 
    description: "Hospitality interiors designed to merge luxury with natural textures.",
    specs: "HOSPITALITY // RESORT",
    location: "Mulshi, Pune",
    isFeatured: false 
  },

  // 16
  { 
    id: "mr-rajesh-mehta-residence-interior-nibm", 
    title: "Mehta Residence", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/mr-rajesh-mehta-residence-interior-nibm/1.jpg", 
    heroImage: "/interior-projects/mr-rajesh-mehta-residence-interior-nibm/1.jpg", 
    gallery: generateGallery("mr-rajesh-mehta-residence-interior-nibm", 5), 
    description: "Refined aesthetic approach emphasizing neutral tones and custom art pieces.",
    specs: "RESIDENTIAL // INTERIOR",
    location: "NIBM, Pune",
    isFeatured: true // Large grid item
  },

  // 17
  { 
    id: "katraj-cafe", 
    title: "Katraj Cafe", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/katraj-cafe/1.jpg", 
    heroImage: "/interior-projects/katraj-cafe/1.jpg", 
    gallery: generateGallery("katraj-cafe", 5), 
    description: "Intimate hospitality setting utilizing ambient lighting and raw finishes.",
    specs: "HOSPITALITY // CAFE",
    location: "Katraj, Pune",
    isFeatured: false 
  },

  // 18
  { 
    id: "tru-reality-experience-centre", // Matches folder spelling
    title: "Tru Realty Experience Centre", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/tru-reality-experience-centre/1.jpg", 
    heroImage: "/interior-projects/tru-reality-experience-centre/1.jpg", 
    gallery: generateGallery("tru-reality-experience-centre", 5), 
    description: "Immersive sales environment designed to showcase premium real estate.",
    specs: "COMMERCIAL // EXPERIENCE CENTRE",
    location: "Pune, MH",
    isFeatured: false 
  },

  // 19
  { 
    id: "pub-at-khed-shivapur", 
    title: "Khed Shivapur Pub", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/pub-at-khed-shivapur/1.jpg", 
    heroImage: "/interior-projects/pub-at-khed-shivapur/1.jpg", 
    gallery: generateGallery("pub-at-khed-shivapur", 5), 
    description: "Dynamic nightlife venue combining acoustic engineering with moody aesthetics.",
    specs: "HOSPITALITY // PUB",
    location: "Khed Shivapur, Pune",
    isFeatured: false 
  },

  // 20
  { 
    id: "commercial-office-at-pune", 
    title: "Pune Commercial Office", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/commercial-office-at-pune/1.jpg", 
    heroImage: "/interior-projects/commercial-office-at-pune/1.jpg", 
    gallery: generateGallery("commercial-office-at-pune", 5), 
    description: "Sleek, professional workspace designed for high-performance teams.",
    specs: "COMMERCIAL // OFFICE",
    location: "Pune, MH",
    isFeatured: false 
  },

  // 21
  { 
    id: "green-villa-housing-at-sangwade", 
    title: "Green Villa Sangwade", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/green-villa-housing-at-sangwade/1.jpg", 
    heroImage: "/interior-projects/green-villa-housing-at-sangwade/1.jpg", 
    gallery: generateGallery("green-villa-housing-at-sangwade", 5), 
    description: "Sustainable interior strategies paired with biophilic design elements.",
    specs: "RESIDENTIAL // VILLA",
    location: "Sangwade, MH",
    isFeatured: true // Large grid item
  },

  // 22
  { 
    id: "lobby-at-westend", 
    title: "Westend Lobby", 
    typology: "Interior Design", 
    year: "2024",
    image: "/interior-projects/lobby-at-westend/1.jpg", 
    heroImage: "/interior-projects/lobby-at-westend/1.jpg", 
    gallery: generateGallery("lobby-at-westend", 5), 
    description: "A high-traffic commercial lobby combining striking geometry with elegant materials.",
    specs: "COMMERCIAL // LOBBY",
    location: "Pune, MH",
    isFeatured: false 
  },

  // 23
  { 
    id: "mrs-mote-residence-interiors", 
    title: "Mote Residence", 
    typology: "Interior Design", 
    year: "2025",
    image: "/interior-projects/mrs-mote-residence-interiors/1.jpg", 
    heroImage: "/interior-projects/mrs-mote-residence-interiors/1.jpg", 
    gallery: generateGallery("mrs-mote-residence-interiors", 5), 
    description: "Refined family living space emphasizing comfort and timeless aesthetics.",
    specs: "RESIDENTIAL // INTERIOR",
    location: "Pune, MH",
    isFeatured: false 
  }
];