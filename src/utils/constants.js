import {
  webd,
  back,
  front,
  app,
  yuvaan,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: webd,
  },
  {
    title: "App Developer",
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
    description: "I was Frontend Web Developer at Yuvaan, North India’s largest film and literature festival",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: yuvaan,
    demo_link: "https://yuvaan2023.netlify.app/",
    source_code_link: "https://github.com/ZosTera2438/YuvaanWebsite",
  },
];

export { services, projects };
