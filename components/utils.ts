
import { TeamMember, Project , Service , Machinery, miltestone, clients } from "./types";



export const Milestones : Array<miltestone>  = [
  { year: 2017, description: 'Company incorporated as Utishta Bharata Private Limited (UBPL).' },
  { year: 2018, description: 'Expanded operations in telecom infrastructure across Madhya Pradesh and Bihar.' },
  { year: 2019, description: 'Successfully delivered major OFC laying projects for Tata Projects and Sterlite Technologies.' },
  { year: 2020, description: 'Ventured into civil & electrical construction and pipeline laying projects.' },
  { year: 2021, description: 'Turnover reached ₹8.44 Cr; also initiated skill development projects in response to national call.' },
  { year: 2022, description: 'Focused expansion in Chhattisgarh and Uttar Pradesh; annual turnover ₹6.14 Cr.' },
  { year: 2023, description: 'Delivered 1310+ Km/Mtr in infra projects including JJM and OFC; turnover ₹10.06 Cr.' },
  { year: 2024, description: 'Strengthened client base with L&T, PNC Infratech, Rudra Gas, and Kalpatru Projects.' },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mr. Sandeep Kumar",
    position: "Director – Operations & Execution",
    description:
      "With 10+ years of experience in telecom infrastructure, Mr. Sandeep Kumar has played a pivotal role in UBPL’s rapid expansion. He heads execution, monitoring, and nationwide skill development initiatives. A tough taskmaster and leader by example.",
    experience: "10+ years",
    image: "/founders/1.jpg",
  },
  {
    id: 2,
    name: "Ms. Archana Ranjan",
    position: "Co-founder & Director – Strategy",
    description:
      "An energetic professional with over 10 years in telecom services, Ms. Archana is known for unlocking business opportunities and driving results. Awarded by key partners for excellent execution and leadership.",
    experience: "10+ years",
    image: "/founders/2.jpg",
  },
];


export const services : Service[] = [
  {
    id: 1,
    title: "Telecom Infrastructure",
    description:
      "Planning, implementation, and maintenance of telecom infrastructure including optical fiber cable (OFC) networks.",
    features: ["OFC Laying", "Network Design", "Maintenance", "Execution Partnerships"],
    image: "/Service/telecom.jpg",
  },
  {
    id: 2,
    title: "Civil & Electrical Construction",
    description:
      "Execution of civil and electrical works for public and private sector projects including roads, buildings, and substations.",
    features: ["Buildings & Roads", "Pumping Stations", "Electrical Substations", "Project Supervision"],
    image: "/Service/Civil.jpg",
  },
  {
    id: 3,
    title: "Gas Pipeline",
    description:
      "Installation and maintenance of gas distribution pipelines using MDPE and other materials for domestic and commercial networks.",
    features: ["MDPE Pipelines", "PNG Distribution", "Safety Systems", "Maintenance Contracts"],
    image: "/Service/gas.jpg",
  },
  {
    id: 4,
    title: "Skill Development",
    description:
      "Government-aligned training initiatives across various trades and sectors to empower youth and rural populations.",
    features: ["PMKVY Courses", "Skill Labs", "Placement Focus", "Rural Empowerment"],
    image: "/Service/skill.jpg",
  },
  {
    id: 5,
    title: "Solar Projects",
    description:
      "Installation of solar infrastructure in line with renewable energy goals under state and central government initiatives.",
    features: ["Rooftop Solar", "Power Distribution", "Street Lighting", "Energy Savings"],
    image: "/Service/solar.jpg",
  },
];


export const projects : Project[] = [
  {
    id: 1,
    title: "BharatNet Phase III",
    location: "Kerala",
    duration: "2024–2026",
    client: "GR Infraprojects (L1 Consortium)",
    description:
      "OFC and telecom infrastructure implementation under BharatNet Phase III for Package 16 (Kerala).",
    details:
      "As L1 consortium with GR Infraprojects and BRMT India Pvt Ltd, UBPL is executing OFC laying and digital infrastructure works in rural Kerala.",
    features: ["Fiber Laying", "Digital Infra", "Consortium Project"],
    status: "Ongoing",
    image: "/projects/bharatnet.jpg",
  },
  {
    id: 2,
    title: "Skill Development Program",
    location: "Madhya Pradesh & UP",
    duration: "2021–2023",
    client: "NSDC",
    description:
      "Skill development centers established in multiple districts to train youth under PMKVY.",
    details:
      "UBPL trained over 1500+ youth in rural areas with job-linked training in construction, telecom, and electrical sectors.",
    features: ["1500+ Trainees", "NSDC Certified", "Placement Support"],
    status: "Completed",
    image: "/projects/skill.jpg",
  },
];


export const serviceAreas: string[] = [
  "Madhya Pradesh",
  "Uttar Pradesh",
  "Bihar",
  "Chhattisgarh",
];


export const machineryData : Machinery[] = [
    {
      name: 'HDD Machine',
      owned: 7,
      hired: 10,
      description: 'Horizontal Directional Drilling machines for precise underground cable installation',
      icon: '🚜'
    },
    {
      name: 'JCB',
      owned: 2,
      hired: 20,
      description: 'Excavation and construction equipment for civil work',
      icon: '🚜'
    },
    {
      name: 'Poclain & Breaker',
      owned: 0,
      hired: 5,
      description: 'Heavy-duty excavators with breaker attachments',
      icon: '⚒️'
    },
    {
      name: 'Tippers, Tractor & Tanker',
      owned: 0,
      hired: 10,
      description: 'Transportation and logistics equipment',
      icon: '🚛'
    },
    {
      name: 'Blowing Machine',
      owned: 1,
      hired: 5,
      description: 'Fiber optic cable installation equipment',
      icon: '🔌'
    },
    {
      name: 'Splicing Machine & OTDRs',
      owned: 1,
      hired: 5,
      description: 'Fiber optic testing and splicing equipment',
      icon: '🔧'
    },
    {
      name: 'Trailers & Loaders',
      owned: 3,
      hired: 4,
      description: 'Heavy equipment transportation and material handling',
      icon: '🚚'
    },
    {
      name: 'Pickup 207',
      owned: 2,
      hired: 5,
      description: 'Light transportation vehicles for project coordination',
      icon: '🚗'
    }
  ];



  export const Clients: Array<clients> = [
    {
      name: "Tata Project Limited",
      category: "Telecom Infrastructure",
      logo: "/logos/tata.png",
    },
    {
      name: "Vodafone Idea Ltd",
      category: "Telecom Infrastructure",
      logo: "/logos/vodafone.png",
    },
    {
      name: "Sterlite Technologies Ltd",
      category: "Telecom Infrastructure",
      logo: "/logos/sterlite.png",
    },
    {
      name: "Apco Infratech Pvt Ltd",
      category: "Civil Infrastructure",
      logo: "/logos/apco.png",
    },
    {
      name: "Larsen & Toubro Ltd (L&T)",
      category: "Civil Infrastructure",
      logo: "/logos/lt.png",
    },
    {
      name: "PNC Infratech Limited",
      category: "Civil Infrastructure",
      logo: "/logos/pnc.png",
    },
    {
      name: "Rudra Gas Enterprise Ltd",
      category: "Gas Pipelines",
      logo: "/logos/rudra.png",
    },
  ];