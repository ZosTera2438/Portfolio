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
    title: "Web Developer",
    icon: webd,
  },
  {
    title: "REST API",
    icon: app,
  },
  {
    title: "Backend Developer",
    icon: back,
  },
  {
    title: "Frontend Developer",
    icon: front,
  },
];

const projects = [
  {
    name: "Yuvaan",
    description: "I developed a website for a cultural fest Yuvaan, North India’s largest film and literature festival",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: yuvaan,
    demo_link: "https://yuvaan2023.netlify.app/",
    source_code_link: "https://github.com/ZosTera2438/YuvaanWebsite",
  },
  {
    name: "Deltech MUN",
    description: "Built a website from scratch to maintain the society's online presence, and built an authentication portal for online registration",
    tags: [
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: deltech,
    demo_link: "https://deltechmun.in/",
    source_code_link: "https://github.com/ZosTera2438/deltech-website",
  },
];

export { services, projects };
