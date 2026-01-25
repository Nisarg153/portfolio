import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  //k8s,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  {
    title: "Cloud Engineer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  {
    name: "AWS",
    icon: redux,
  },
  {
    name: "Azure",
    icon: tailwind,
  },
  {
    name: "Jenkins",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "k8s",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical support advisor",
    company_name: "IntouchCX",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2025 - Currrent",
    points: [
      "Take full ownership of customer issues by delivering end-to-end technical support, ensuring accurate resolution while consistently exceeding customer expectations.",
      "Communicate technical concepts effectively through phone and written channels, adapting communication style to suit different customer skill levels and situations.",
      "Troubleshoot and resolve issues across smartphones, tablets, PCs, and macOS/Windows environments while efficiently navigating multiple support tools and systems in real time.",
      "Use analytical thinking and flexibility to diagnose complex technical problems in fast-paced environments, maintaining professionalism and composure under pressure.",
      "Demonstrate a strong performance mindset with a commitment to continuous learning, openness to feedback, self-management, and proactive improvement in service delivery.",
      "Helped customer to book an appointment for replacement and the repair for the devices."
    ],
  },
  {
    title: "Cloud/DevOps Engineer Intern",
    company_name: "Bizinc",
    //icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - May 2024",
    points: [
      "Designed and automated CI/CD pipelines using Azure DevOps, Docker, GitHub, and ACA, reducing deployment time by 80% and enabling rapid, multi-environment delivery through scalable infrastructure with Terraform.",
      "Improved reliability and performance by implementing configuration management and monitoring tools, reducing system downtime by 40%, enhancing app speed by 25% via Azure Communication Services & CDN, and enforcing Azure AD RBAC policies that cut access errors by 90%.",
      "Modernized legacy systems by migrating them to cloud-native platforms, improving delivery timelines by 30% and maintaining compliance through infrastructure-as-code and automation best practices.",
      "Technologies: Azure DevOps, Docker, GitHub, ACA, Terraform, Bash, YAML, CDN, PM2"
    ],
  },
  {
    title: "Cloud Developer",
    company_name: "Demaze Tehnologies",
    //icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - May 2022",
    points: [
      "Developed a serverless e-commerce platform with AWS Amplify, Cognito, Lambda, API Gateway, and DynamoDB, achieving 99.99% uptime and ensuring secure user/order processing with Node.js microservices.",
      "Improved performance and security by optimizing API Gateway for 100+ transactions/min, implementing multi-factor authentication, and automating CI/CD workflows via GitHub and Amplify, cutting manual effort by 90%.",
      "Enhanced user experience through an accessible and responsive front-end using HTML, CSS, JavaScript, increasing user retention by 25%.",
      "Technologies: AWS Amplify, Cognito, Lambda, API Gateway, DynamoDB, Node.js, JavaScript, GitHub"
    ],
  },
  // 
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
];

const projects = [
  {
    name: "Netflix Clone app deployment using Kubernetes and DevSecOps",
    // description:
    //   "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "IaC",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/Nisarg153/Netflix_Clone_Using_Kubernetes_DevSecOps_Project.git",
  },
  {
    name: "Terraform AWS Multi-Environment Web Application",
    // description:
    //   "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "terraform",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Nisarg153/terraform-aws-multi-env-webapp.git",
  },
  {
    name: "Argocd Maven Java Application Deployment",
    // description:
    //   "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "CI/CD",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Jenkins",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Nisarg153/java-maven-sonar-argocd-helm-k8s.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
