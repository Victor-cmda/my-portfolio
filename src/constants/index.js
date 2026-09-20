import intelltech from "../assets/brands/intelltech.svg";
import lar from "../assets/brands/lar.png";
import larDigital from "../assets/brands/lar-digital.png";
import softTi from "../assets/brands/soft-ti.png";
import reuter from "../assets/brands/reuter.png";
import korp from "../assets/brands/korp.png";
import itaipu from "../assets/brands/itaipu.png";
import transpnet from "../assets/brands/transpnet.png";

export const CONTACT = {
  address: "Foz do Iguaçu, Brazil",
  email: "victor.somavilla@aol.com",
  github: "https://github.com/Victor-cmda",
  linkedin: "https://www.linkedin.com/in/victorhugosomavilla",
};

export const BRANDS = {
  intelltech: {
    name: "IntellTech",
    logo: intelltech,
    url: "https://intelltech.com/en/home-english/",
  },
  lar: {
    name: "Lar Cooperativa Agroindustrial",
    logo: lar,
    dark: true,
    fit: "cover",
    url: "https://www.lar.ind.br/",
  },
  larDigital: {
    name: "Lar Digital",
    logo: larDigital,
    url: "https://play.google.com/store/apps/details?id=br.ind.lar.lardigital",
  },
  softTi: {
    name: "Soft-TI Informática",
    logo: softTi,
    dark: true,
    url: "https://www.softtiinformatica.com.br/",
  },
  reuter: {
    name: "Reuter Contabilidade",
    logo: reuter,
    url: "https://reutercontabilidade.com.br/",
  },
  korp: {
    name: "Viasoft Korp ERP",
    logo: korp,
    url: "https://www.korp.com.br/",
  },
  itaipu: {
    name: "Itaipu Binacional",
    logo: itaipu,
    url: "https://www.itaipu.gov.br/",
  },
  transpnet: {
    name: "TranspNet Sistemas",
    logo: transpnet,
    url: "https://www.transp.net/",
  },
};

export const EXPERIENCES = [
  {
    year: "Jan 2025 — Present",
    role: "Systems Analyst",
    company: "IntellTech",
    brand: BRANDS.intelltech,
    current: true,
    description:
      "Backend development for monitoring, data collection, and processing applications. I build C#/.NET business logic, APIs, alarm processing, and data exports, and investigate production incidents with support and QA teams.",
    highlights: [
      "Optimize SQL Server and Apache Cassandra queries, asynchronous workflows, parallel processing, and caching.",
      "Maintain integrations through REST APIs, messaging, MQTT, and OPC, with a focus on reliability and maintainability.",
      "Refactored dashboard processing with affine transformations, reducing loading time from 46 minutes to 26 seconds.",
    ],
    positions: [
      { role: "Systems Analyst", period: "Jul 2026 — Present" },
      { role: "Junior Systems Analyst", period: "Jul 2025 — Jul 2026" },
      { role: "Mid-level Software Developer", period: "Jan 2025 — Jul 2025" },
    ],
    technologies: [
      "C# / .NET",
      "Akka.NET",
      "SQL Server",
      "Cassandra",
      "REST APIs",
      "MQTT",
      "OPC",
    ],
  },
  {
    year: "Jan 2024 — Dec 2024",
    role: "Mid-level Software Developer",
    company: "Lar Cooperativa Agroindustrial",
    brand: BRANDS.lar,
    description:
      "Developed the LarDigital back end for operational management, inventory, and reporting. Integrated banking and supplier APIs, optimized SQL queries, and contributed to architecture decisions for production stability and high availability.",
    technologies: ["C#", ".NET", "SQL Server", "REST APIs"],
  },
  {
    year: "Sep 2022 — Jan 2024",
    role: "Junior Software Developer",
    company: "IntellTech",
    brand: BRANDS.intelltech,
    description:
      "Developed distributed applications with C# and Akka.NET. Onboarded clients to the Big Data platform, automated operational workflows with C# and Python, and maintained data-collection services. Built monitoring scripts and automated alerts to improve observability.",
    technologies: ["C#", "Akka.NET", "Python", "Big Data", "React"],
  },
  {
    year: "Jan 2022 — Aug 2022",
    role: "Junior Software Developer",
    company: "Soft-TI Informática",
    brand: BRANDS.softTi,
    description:
      "Developed and maintained web applications with C#, .NET Framework, AngularJS, and SQL Server. Worked on bug fixes, testing, and application performance, progressing from an internship into a junior developer role.",
    positions: [
      { role: "Junior Software Developer", period: "Mar 2022 — Aug 2022" },
      { role: "Software Development Intern", period: "Jan 2022 — Mar 2022" },
    ],
    technologies: ["C#", ".NET Framework", "SQL Server", "AngularJS"],
  },
  {
    year: "Nov 2021 — Jan 2022",
    role: "Junior Software Developer",
    company: "Reuter Contabilidade",
    brand: BRANDS.reuter,
    description:
      "Developed UiPath automations for repetitive business processes. Gathered requirements and analyzed operational workflows to identify opportunities for automation.",
    technologies: ["UiPath", "RPA", "Process automation"],
  },
  {
    year: "Sep 2021 — Nov 2021",
    role: "Junior Software Developer",
    company: "Viasoft Korp ERP",
    brand: BRANDS.korp,
    description:
      "Developed and maintained ERP functionality with Delphi and SQL Server. Fixed defects, optimized relational database queries, and contributed to application stability using Git-based version control.",
    technologies: ["Delphi", "SQL Server", "Git", "ERP"],
  },
  {
    year: "Mar 2021 — Aug 2021",
    role: "IT Intern",
    company: "Itaipu Binacional",
    brand: BRANDS.itaipu,
    description:
      "Supported desktop IT operations and internal technical processes, including operational requests, resource acquisition, and administrative activities in a large corporate environment.",
    technologies: ["IT operations", "Technical support"],
  },
  {
    year: "Nov 2020 — Mar 2021",
    role: "Technical Support Intern",
    company: "TranspNet Sistemas",
    brand: BRANDS.transpnet,
    description:
      "Provided technical support to users, diagnosed software and hardware issues, and helped customers maintain the continuity of their business systems.",
    technologies: ["Technical support", "Troubleshooting"],
  },
];

export const PROJECTS = [
  {
    title: "Distributed Data Platform",
    category: "Distributed systems",
    brand: BRANDS.intelltech,
    brandContext: "Engineering at IntellTech",
    headline: "Built for data.\nEngineered for scale.",
    description:
      "Backend engineering for distributed monitoring, data-collection, and processing applications at IntellTech.",
    detail:
      "My work spans C#/.NET services, Akka.NET applications, SQL Server and Cassandra optimization, and integrations using REST APIs, messaging, MQTT, and OPC. Production troubleshooting, asynchronous processing, caching, and refactoring are central to improving reliability and performance.",
    technologies: [
      "C# / .NET",
      "Akka.NET",
      "Cassandra",
      "SQL Server",
      "MQTT",
      "OPC",
    ],
    art: "network",
    className: "project-data",
  },
  {
    title: "LarDigital",
    category: "Backend & integrations",
    brand: BRANDS.larDigital,
    brandContext: "Lar Cooperativa Agroindustrial",
    headline: "Connected services.\nReliable operations.",
    description:
      "Back-end development for LarDigital, supporting cooperative operations, inventory management, and reporting.",
    detail:
      "I implemented business-critical features and integrations with banking and supplier APIs, optimized SQL queries in heavily used services, and contributed to architecture decisions focused on robustness, scalability, and production availability.",
    technologies: ["C#", ".NET", "SQL Server", "REST APIs"],
    art: "dashboard",
    className: "project-lar",
  },
  {
    title: "PDV Solution",
    category: "Desktop & data persistence",
    brandContext: "Point-of-sale application",
    headline: "Every transaction.\nEvery detail.",
    description:
      "A point-of-sale application built with WinUI 3, bringing sales, inventory, and management reporting together.",
    detail:
      "The project combines a native Windows interface with SQL Server and Entity Framework for data persistence, supporting sales, stock control, and management reporting.",
    technologies: ["C#", "WinUI 3", "SQL Server", "Entity Framework"],
    art: "pos",
    className: "project-pos",
  },
  {
    title: "Process Automation",
    category: "Business process automation",
    brand: BRANDS.reuter,
    brandContext: "Engineering at Reuter Contabilidade",
    headline: "Less repetition.\nMore possibility.",
    description:
      "UiPath automation solutions for accounting and administrative processes at Reuter Contabilidade.",
    detail:
      "I gathered requirements, analyzed repetitive business processes, and developed automated routines to reduce manual operational tasks.",
    technologies: ["UiPath", "RPA", "Process automation"],
    art: "workflow",
    className: "project-auto",
  },
];
