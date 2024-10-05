import { BotMessageSquare, Briefcase } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import { FaIndustry, FaLightbulb, FaRobot } from "react-icons/fa";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Services", href: "/services" },
  { label: "Our Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    user: "Andi Prasetyo",
    company: "Stellar Solutions",
    image: user1,
    text: "MTG-GOLD memberikan layanan yang luar biasa dalam pemurnian emas. Prosesnya cepat, efisien, dan hasilnya selalu memuaskan. Timnya sangat profesional dan selalu siap membantu!",
  },
  {
    user: "Rina Sari",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Saya telah bekerja sama dengan MTG-GOLD selama beberapa tahun dan tidak pernah kecewa. Mereka selalu menyediakan harga yang kompetitif untuk trading emas dan proses fine gold sangat transparan. Sangat direkomendasikan!",
  },
  {
    user: "Budi Santoso",
    company: "Quantum Innovations",
    image: user3,
    text: "MTG-GOLD adalah pilihan terbaik untuk semua kebutuhan pemrosesan emas. Kualitas layanan dan keandalan mereka luar biasa. Mereka benar-benar memahami industri dan selalu memberikan saran terbaik",
  },
  {
    user: "John Constantine",
    company: "Fusion Dynamics",
    image: user4,
    text: "Pengalaman saya dengan MTG-GOLD sangat positif. Mereka tidak hanya melakukan refining dengan baik, tetapi juga memberikan dukungan penuh selama proses trading. Tim yang profesional dan berpengalaman!",
  },
  {
    user: "Rudi Setiawan",
    company: "Visionary Creations",
    image: user5,
    text: "Saya sangat terkesan dengan proses fine gold yang ditawarkan oleh MTG-GOLD. Hasil akhirnya sangat memuaskan dan harga yang ditawarkan sangat adil. Saya pasti akan kembali!",
  },
  {
    user: "Siti Aisyah",
    company: "Synergy Systems",
    image: user6,
    text: "MTG-GOLD telah menjadi mitra terpercaya saya dalam bisnis emas. Layanan mereka selalu cepat dan responsif, serta kualitas pemurnian emas mereka tidak ada duanya. Sangat merekomendasikan kepada siapa pun yang mencari layanan di industri ini!",
  },
];

export const features = [
  {
    icon: <FaLightbulb/>,
    text: "Innovate Plan & Strategy",
    description:
      "We plan to build and strategy to always win in all parties in the gold business industry.",
  },
  {
    icon: <Briefcase/>,
    text: "Professional Peoples",
    description:
      "Human expertise is a valuable asset, professional and effective work makes companies and clients always grow exponentially.",
  },
  {
    icon: <MdOutlinePrecisionManufacturing className="text-2xl"/>,
    text: "Hi-Tech Process Machine",
    description:
      "Our modern gold processing machines make the product have high value in terms of quality and market trading",
  },
 
];

export const checklistItems = [
  {
    title: "Realizing real movement",
  },
  {
    title: "building the economy of the family, people, nation and state",
  },
  {
    title: "For the sake of the rise of the global economy",
  },
];

export const background = [
  {
    description: "PT. MTG Mulia Indonesia (MTG) started a business in mining, trading and gold refining in eastern Indonesia, especially the Papua region, Nabire because as we all know Papua is an Indonesian region that has the potential to be the biggest gold producer.",
  },
  {
    description: "Our refining factory is in Tangerang and our Gold Dores Logistic Centers are in Banda Aceh, Pangkalan Bun, Manado, Halmahera, and Nabire.",
  },
];

export const pricingOptions = [
  {
    title: "Fine Gold",
    description: "Fine Gold Processing",
    image:"https://mtg.gold/img/service/serv_1.png",
    id:"fine"
  },
  {
    title: "Refining",
    description: "Processing for high quality gold products",
    image:"https://mtg.gold/img/service/serv_2.png",
    id:"refining",
  },
  {
    title: "Trading",
    description: "Creating strategic for gold market need",
    image:"https://mtg.gold/img/service/serv_3.png",
    id:"trading"
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Gold Investment" },
  { href: "#", text: "Fine Gold" },
  { href: "#", text: "Gold Refining" },
  { href: "#", text: "Coin Gold Trading" },
  { href: "#", text: "Gold Crypto" },
];

export const communityLinks = [
  { href: "/", text: "Home" },
  { href: "/profile", text: "Profile" },
  { href: "/services", text: "Services" },
  { href: "/products", text: "Products" },
  { href: "/job-opportunity", text: "Jobs" },
  { href: "/contact", text: "Contact" },
];

export const businessLink = [
  { href: "/services#fine", text: "Fine Gold" },
  { href: "/services#refining", text: "Refining" },
  { href: "/services#trading", text: "Trading" },
];
