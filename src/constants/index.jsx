import { BotMessageSquare, Briefcase } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import { FaIndustry, FaLightbulb, FaRobot } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  // { label: "Services", href: "/services" },
  // { label: "Our Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    user: "Andi Prasetyo",
    company: "Stellar Solutions",
    image: user1,
    text: "PT. ABN telah memberikan banyak manfaat bagi kami para purna bakti. Saya sangat mengapresiasi usaha yang dilakukan untuk meningkatkan kesejahteraan kami. Mereka berhasil memberikan kesempatan bagi kami untuk tetap produktif dan berkontribusi kepada masyarakat",
  },
  {
    user: "Rina Sari",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Sebagai mitra usaha, saya sangat puas dengan profesionalisme PT. ABN dalam bidang jasa dan perdagangan. Mereka selalu mengutamakan kepentingan bersama dan menjalin hubungan bisnis yang saling menguntungkan.",
  },
  {
    user: "Budi Santoso",
    company: "Quantum Innovations",
    image: user3,
    text: "Visi dan misi PT. ABN benar-benar terasa dalam upaya mereka memberdayakan para purna bakti. Berkat dukungan dan program yang disediakan, saya merasa lebih produktif dan tetap semangat menjalani masa purna bakti.",
  },
  {
    user: "John Constantine",
    company: "Fusion Dynamics",
    image: user4,
    text: "Pelayanan yang diberikan oleh PT. ABN luar biasa. Produk-produk perdagangan yang mereka sediakan berkualitas tinggi, dan timnya selalu siap membantu kapan saja. Saya sangat merekomendasikan PT. ABN bagi siapa pun yang mencari mitra yang profesional dan tepercaya.",
  },
  {
    user: "Rudi Setiawan",
    company: "Visionary Creations",
    image: user5,
    text: "Kerja sama dengan PT. ABN selalu menyenangkan. Perusahaan ini menunjukkan dedikasi yang tinggi dalam melayani pelanggan dan mendukung para purna bakti. Mereka adalah contoh ideal dalam menjalankan misi sosial sambil tetap mempertahankan kualitas bisnis yang solid.",
  },
  {
    user: "Siti Aisyah",
    company: "Synergy Systems",
    image: user6,
    text: "Saya bangga menjadi bagian dari program-program PT. ABN. Selain membantu kami menjaga kesehatan dan kesejahteraan, PT. ABN juga memberi kesempatan untuk tetap terlibat dan berkontribusi bagi negeri ini. Terima kasih PT. ABN!",
  },
];

export const features = [
  {
    icon: <GoLaw className="text-2xl"/>,
    text: "Kepemilikan dan Dukungan dari P2BBP Kemenkeu",
    description:
      "Didukung penuh oleh Perkumpulan Purna Bakti Kementerian Keuangan, memberikan stabilitas dan dukungan kelembagaan yang kuat.",
  },
  {
    icon: <FaPeopleCarry className="text-2xl"/>,
    text: "Misi Sosial dan Ekonomi",
    description:
      "Berkomitmen pada kesejahteraan purna bakti Kemenkeu, menggabungkan tujuan komersial dengan pemberdayaan komunitas.",
  },
  {
    icon: <Briefcase className="text-2xl"/>,
    text: "Manajemen Profesional",
    description:
      "Memiliki manajemen yang berpengalaman dan kompeten untuk meningkatkan kinerja dan daya saing perusahaan.",
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
    description: "PT. Arta Bakti Nusantara disingkat PT. ABN adalah badan usaha yang didirikan dalam rangka memenuhi amanat Anggaran Dasar/Anggaran Rumah Tangga Perkumpulan Purna Bakti Pegawai Kementerian Keuangan (P2BBP Kemenkeu). PT. ABN berdiri tanggal 6 Maret 2019 berdasarkan Akta Notaris Khanief, SH, MKn Nomor 4 dimana 85% (delapan puluh lima persen) saham dimiliki oleh P2BP Kemenkeu yang saat ini dipimpin oleh Dr. Hadiyanto, SH, LLM. ",
  },
  {
    description: "PT ABN didirikan untuk menjalankan bisnis jasa dan perdagangan, dengan tujuan memperoleh dana bagi pembiayaan kegiatan P2BP Kemenkeu dalam rangka mencapai misinya yaitu mewujudkan kehidupan Purna Bakti Kemenkeu yang sehat lahir batin, semangat, produktif, sejahtera, dan yang berkontribusi bagi negeri dan sesama.",
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
  { href: "/contact", text: "Contact" },
];

export const businessLink = [
  { href: "/services#fine", text: "Fine Gold" },
  { href: "/services#refining", text: "Refining" },
  { href: "/services#trading", text: "Trading" },
];
