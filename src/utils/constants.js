import {
  webd,
  back,
  front,
  deltech,
  app,
  yuvaan,
} from "../assets";

const services = [
  {
    title: "Quantum Computing",
    icon: back,
  },
  {
    title: "Database Developer",
    icon: app,
  },
  {
    title: "REST API Developer",
    icon: front,
  },
  {
    title: "UI/UX Developer",
    icon: webd,
  },
];

const projects = [
  {
    name: "Yuvaan'23",
    description: "Developed animated Web UI with seamless navigation to orchestrate Yuvaan, India’s biggest Youth LitFest.",
    image: yuvaan,
    demo_link: "https://yuvaan2023.netlify.app/",
    source_code_link: "https://github.com/ZosTera2438/YuvaanWebsite",
  },
  {
    name: "DelTech MUN & Debsoc",
    description: "Architeched a Web platform to orchestrate North India’s largest Model United Conference 2023.",
    image: deltech,
    demo_link: "https://deltechmun.in/",
    source_code_link: "https://github.com/ZosTera2438/deltech-website",
  },
];

export { services, projects };
