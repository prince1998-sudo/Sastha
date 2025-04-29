import { 
  users, type User, type InsertUser,
  programs, type Program, type InsertProgram,
  articles, type Article, type InsertArticle,
  galleryImages, type GalleryImage, type InsertGalleryImage,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";

// Define the storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Programs methods
  getAllPrograms(): Promise<Program[]>;
  getProgramBySlug(slug: string): Promise<Program | undefined>;
  getFeaturedPrograms(limit?: number): Promise<Program[]>;
  createProgram(program: InsertProgram): Promise<Program>;
  
  // Articles methods
  getAllArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getLatestArticles(limit?: number): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  
  // Gallery methods
  getAllGalleryImages(): Promise<GalleryImage[]>;
  getFeaturedGalleryImages(limit?: number): Promise<GalleryImage[]>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  
  // Contact methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private programs: Map<number, Program>;
  private articles: Map<number, Article>;
  private galleryImages: Map<number, GalleryImage>;
  private contactMessages: Map<number, ContactMessage>;
  
  private userIdCounter: number;
  private programIdCounter: number;
  private articleIdCounter: number;
  private galleryIdCounter: number;
  private contactIdCounter: number;

  constructor() {
    this.users = new Map();
    this.programs = new Map();
    this.articles = new Map();
    this.galleryImages = new Map();
    this.contactMessages = new Map();
    
    this.userIdCounter = 1;
    this.programIdCounter = 1;
    this.articleIdCounter = 1;
    this.galleryIdCounter = 1;
    this.contactIdCounter = 1;
    
    // Initialize with sample data
    this.initData();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id, role: "user" };
    this.users.set(id, user);
    return user;
  }
  
  // Programs methods
  async getAllPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }
  
  async getProgramBySlug(slug: string): Promise<Program | undefined> {
    return Array.from(this.programs.values()).find(
      (program) => program.slug === slug
    );
  }
  
  async getFeaturedPrograms(limit = 4): Promise<Program[]> {
    return Array.from(this.programs.values())
      .filter(program => program.featured)
      .slice(0, limit);
  }
  
  async createProgram(insertProgram: InsertProgram): Promise<Program> {
    const id = this.programIdCounter++;
    const program: Program = { ...insertProgram, id };
    this.programs.set(id, program);
    return program;
  }
  
  // Articles methods
  async getAllArticles(): Promise<Article[]> {
    return Array.from(this.articles.values())
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }
  
  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(
      (article) => article.slug === slug
    );
  }
  
  async getLatestArticles(limit = 3): Promise<Article[]> {
    return Array.from(this.articles.values())
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, limit);
  }
  
  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.articleIdCounter++;
    const article: Article = { ...insertArticle, id };
    this.articles.set(id, article);
    return article;
  }
  
  // Gallery methods
  async getAllGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values());
  }
  
  async getFeaturedGalleryImages(limit = 8): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values())
      .filter(image => image.featured)
      .slice(0, limit);
  }
  
  async createGalleryImage(insertImage: InsertGalleryImage): Promise<GalleryImage> {
    const id = this.galleryIdCounter++;
    const image: GalleryImage = { ...insertImage, id };
    this.galleryImages.set(id, image);
    return image;
  }
  
  // Contact methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactIdCounter++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date(), 
      read: false 
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  // Initialize with sample data
  private initData() {
    // Add programs
    const educationProgram: InsertProgram = {
      title: "Educational Support",
      slug: "educational-support",
      shortDescription: "Providing stationary, books, and educational materials to underprivileged students to ensure equal learning opportunities.",
      fullDescription: "Our Educational Support program aims to bridge the gap in educational resources by providing essential learning materials to students from underprivileged backgrounds. Through this initiative, we distribute notebooks, textbooks, stationery items, and educational aids to schools and communities where access to these resources is limited. We also organize educational workshops and mentoring sessions to inspire and guide students in their academic journey. By ensuring that all children have the tools they need to learn effectively, we are working towards a future where quality education is accessible to everyone, regardless of their socioeconomic background.",
      imageUrl: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      category: "Education",
      tagColor: "blue",
      featured: true
    };
    
    const farmingProgram: InsertProgram = {
      title: "Farming Assistance",
      slug: "farming-assistance",
      shortDescription: "Supporting farmers with quality seeds, training on modern farming techniques, and sustainable agricultural practices.",
      fullDescription: "Our Farming Assistance program is designed to support agricultural communities by providing them with resources and knowledge to enhance productivity and sustainability. We distribute high-quality seeds, organic fertilizers, and basic farming tools to small-scale farmers who often struggle with limited resources. Additionally, we conduct training sessions on modern farming techniques, water conservation methods, crop rotation, and sustainable agricultural practices. Our agricultural experts work closely with farming communities to address specific challenges they face, from soil health management to adapting to changing climate conditions. Through this comprehensive approach, we aim to improve crop yields, increase farmer incomes, and promote environmentally friendly farming practices that will sustain both people and the planet.",
      imageUrl: "https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg",
      category: "Agriculture",
      tagColor: "green",
      featured: true
    };
    
    const disasterProgram: InsertProgram = {
      title: "Emergency Response",
      slug: "emergency-response",
      shortDescription: "Providing immediate assistance during natural disasters with food, shelter, and essential supplies to affected communities.",
      fullDescription: "When disaster strikes, immediate response can make all the difference. Our Emergency Response program mobilizes quickly to provide crucial support to communities affected by natural disasters such as floods, earthquakes, hurricanes, and droughts. We deliver emergency food supplies, clean water, temporary shelter materials, blankets, and hygiene kits to those displaced or impacted by these events. Our trained volunteers work alongside local authorities to ensure aid reaches those most in need, especially vulnerable populations like children, the elderly, and those with disabilities. Beyond immediate relief, we also assist communities in the recovery phase, helping them rebuild infrastructure and restore livelihoods. Our disaster preparedness initiatives further aim to equip communities with the knowledge and resources to better withstand future calamities, building resilience in high-risk areas.",
      imageUrl: "https://images.pexels.com/photos/6647121/pexels-photo-6647121.jpeg",
      category: "Disaster Relief",
      tagColor: "amber",
      featured: true
    };
    
    const medicalProgram: InsertProgram = {
      title: "Healthcare Assistance",
      slug: "healthcare-assistance",
      shortDescription: "Facilitating medical care for underprivileged individuals through medical camps, medicine distribution, and healthcare education.",
      fullDescription: "Our Healthcare Assistance program addresses the critical need for accessible medical services in underserved communities. We organize regular medical camps where volunteer healthcare professionals provide free consultations, basic treatments, and health screenings to those who cannot afford or access regular healthcare. These camps focus on preventive care, early detection of common illnesses, and management of chronic conditions. We also distribute essential medicines and medical supplies to those in need, particularly focusing on vulnerable groups like children, pregnant women, and the elderly. Additionally, our health education workshops raise awareness about hygiene practices, nutrition, maternal and child health, and disease prevention. By combining direct medical assistance with educational initiatives, we aim to improve both immediate health outcomes and long-term community wellbeing through better health practices and awareness.",
      imageUrl: "https://images.pexels.com/photos/6823517/pexels-photo-6823517.jpeg",
      category: "Medical",
      tagColor: "red",
      featured: true
    };
    
    this.createProgram(educationProgram);
    this.createProgram(farmingProgram);
    this.createProgram(disasterProgram);
    this.createProgram(medicalProgram);
    
    // Add articles
    const article1: InsertArticle = {
      title: "School Supplies Drive Benefits 500 Students",
      slug: "school-supplies-drive",
      content: "Our recent education initiative provided essential school supplies to 500 underprivileged students across five local communities. The drive, which took place over three weeks, collected notebooks, pens, pencils, rulers, and backpacks from generous donors throughout the region.\n\nThe distribution event was held at Central Community Center, where volunteers organized supplies into personalized packages based on each student's grade level and needs. Teachers from participating schools were present to help coordinate the distribution and ensure that students received age-appropriate materials.\n\n\"Many of these children come from families that struggle to afford basic necessities, let alone educational supplies,\" said Maria Johnson, our Education Program Coordinator. \"By providing these materials, we're removing one barrier to education and giving these students the tools they need to succeed academically.\"\n\nParents expressed gratitude for the initiative, with many noting that the supplies would make a significant difference in their children's educational experience. \"My daughter was so excited about her new backpack and notebooks,\" shared parent Thomas Rivera. \"It's a relief to know she'll have everything she needs for the school year.\"\n\nThe success of this drive was made possible by the generous contributions of individual donors, local businesses, and our dedicated volunteers. We plan to expand the initiative next year to reach even more students in need.",
      summary: "Our recent education initiative provided essential school supplies to 500 underprivileged students across five local communities.",
      imageUrl: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg",
      category: "Education",
      publishDate: new Date("2023-05-15"),
      featured: true
    };
    
    const article2: InsertArticle = {
      title: "Sustainable Farming Workshop For Rural Farmers",
      slug: "sustainable-farming-workshop",
      content: "Over 100 farmers participated in our three-day workshop learning sustainable farming techniques and water conservation methods. The workshop, held at the Agricultural Research Center, brought together agricultural experts and experienced farmers to share knowledge on improving crop yields while preserving the environment.\n\nThe sessions covered various topics including soil health management, organic pest control, water-efficient irrigation systems, and crop rotation strategies. Participants had the opportunity to engage in hands-on demonstrations and field visits to see sustainable farming practices in action.\n\n\"The techniques we learned will help us reduce our reliance on chemical fertilizers and pesticides, which is better for our health and our land,\" said Miguel Santos, a local farmer who attended the workshop. \"I'm particularly interested in implementing the drip irrigation system we were shown, as water scarcity has been a challenge in recent years.\"\n\nIn addition to training, each participating farmer received a starter kit containing organic seeds, basic tools, and informational materials to help them apply what they learned on their own farms.\n\n\"Our goal is not just to teach these methods but to create a network of farmers who can continue to support each other and share their experiences,\" explained David Chen, our Agricultural Program Director. \"Sustainable farming is as much about community building as it is about agricultural techniques.\"\n\nFollow-up sessions are planned for the coming months to track progress and address any challenges farmers encounter as they implement these new methods.",
      summary: "Over 100 farmers participated in our three-day workshop learning sustainable farming techniques and water conservation methods.",
      imageUrl: "https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg",
      category: "Agriculture",
      publishDate: new Date("2023-05-03"),
      featured: true
    };
    
    const article3: InsertArticle = {
      title: "Emergency Response Team Aids Flood Victims",
      slug: "emergency-response-flood-aid",
      content: "Our volunteers provided immediate assistance to 250 families affected by recent floods, delivering food, clean water, and medical supplies. The emergency response was mobilized within hours of the flooding, which devastated several riverside communities following unprecedented rainfall.\n\nTeams of trained volunteers were dispatched to the hardest-hit areas, where they established temporary relief centers. These centers served as distribution points for essential supplies and provided basic medical care for those with minor injuries or health concerns.\n\n\"The speed of response was crucial in this situation,\" noted Sarah Patel, our Disaster Relief Coordinator. \"Many families lost everything – their homes, belongings, and access to clean water and food. Our priority was to meet these immediate needs while coordinating with local authorities on longer-term solutions.\"\n\nThe aid packages distributed included non-perishable food items, bottled water, hygiene kits, blankets, and first aid supplies. For families with infants, additional items such as diapers and baby formula were provided.\n\nLocal resident James Wilson, whose home was severely damaged in the floods, expressed his gratitude: \"When the waters rose, we had to leave with just the clothes on our backs. The support from the relief team has been a lifeline for my family. It's not just the supplies – it's knowing that people care and are here to help.\"\n\nAs the immediate crisis stabilizes, our team is now focusing on the recovery phase, including assisting with cleanup efforts and connecting affected families with resources for rebuilding their homes and livelihoods.",
      summary: "Our volunteers provided immediate assistance to 250 families affected by recent floods, delivering food, clean water, and medical supplies.",
      imageUrl: "https://images.pexels.com/photos/6646871/pexels-photo-6646871.jpeg",
      category: "Disaster Relief",
      publishDate: new Date("2023-04-27"),
      featured: true
    };
    
    this.createArticle(article1);
    this.createArticle(article2);
    this.createArticle(article3);
    
    // Add gallery images
    const galleryImage1: InsertGalleryImage = {
      title: "Food Distribution",
      description: "Food distribution during community outreach program",
      imageUrl: "https://images.pexels.com/photos/7354752/pexels-photo-7354752.jpeg",
      category: "Disaster Relief",
      featured: true
    };
    
    const galleryImage2: InsertGalleryImage = {
      title: "Educational Supplies",
      description: "Distributing educational materials to students",
      imageUrl: "https://images.pexels.com/photos/8942838/pexels-photo-8942838.jpeg",
      category: "Education",
      featured: true
    };
    
    const galleryImage3: InsertGalleryImage = {
      title: "Farming Techniques",
      description: "Teaching sustainable farming techniques to local farmers",
      imageUrl: "https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg",
      category: "Agriculture",
      featured: true
    };
    
    const galleryImage4: InsertGalleryImage = {
      title: "Disaster Relief",
      description: "Providing emergency relief after natural disaster",
      imageUrl: "https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg",
      category: "Disaster Relief",
      featured: true
    };
    
    const galleryImage5: InsertGalleryImage = {
      title: "Volunteer Team",
      description: "Volunteer team organizing supplies for distribution",
      imageUrl: "https://images.pexels.com/photos/6647029/pexels-photo-6647029.jpeg",
      category: "Volunteers",
      featured: true
    };
    
    const galleryImage6: InsertGalleryImage = {
      title: "Education Program",
      description: "Education support program for underprivileged children",
      imageUrl: "https://images.pexels.com/photos/8942917/pexels-photo-8942917.jpeg",
      category: "Education",
      featured: true
    };
    
    const galleryImage7: InsertGalleryImage = {
      title: "Farming Techniques",
      description: "Farmers learning about crop rotation techniques",
      imageUrl: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
      category: "Agriculture",
      featured: true
    };
    
    const galleryImage8: InsertGalleryImage = {
      title: "Medical Camp",
      description: "Medical camp providing healthcare assistance to local community",
      imageUrl: "https://images.pexels.com/photos/6647200/pexels-photo-6647200.jpeg",
      category: "Medical",
      featured: true
    };
    
    this.createGalleryImage(galleryImage1);
    this.createGalleryImage(galleryImage2);
    this.createGalleryImage(galleryImage3);
    this.createGalleryImage(galleryImage4);
    this.createGalleryImage(galleryImage5);
    this.createGalleryImage(galleryImage6);
    this.createGalleryImage(galleryImage7);
    this.createGalleryImage(galleryImage8);
  }
}

export const storage = new MemStorage();
