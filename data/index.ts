export type Project = {
  id: number;
  title: string;
  des: string;
  detailedDescription: string;
  features: string[];
  img: string;
  iconLists: string[];
  link: string;
  github?: string;
  year: number;
  myRole?: string[]; // Made myRole optional
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 5,
    title: " ' I believe in translating imagination into interactive reality through Design and Code ' ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/bgg1.jpeg",
    spareImg: "/grid.svg",
  },{
id: 1,
title: [
  "I’m an undergraduate IT student with a strong passion for solving real-world problems through technology. For me, development is not just about writing code — it’s about shaping digital experiences that truly connect with people.",
  "I believe the best solutions don’t just function; they should feel effortless, intuitive, and meaningful to use. My approach blends creativity and logic. I enjoy structuring clean, scalable systems while making sure every interaction is guided by thoughtful design.",
  "From small features to full-scale applications, I aim to deliver solutions that balance user experience, performance, and long-term adaptability. At the heart of my work is one simple belief: technology should make life easier, not harder. That’s the impact I want to create — building tools that solve problems, improve interactions, and leave a positive mark on the people who use them."
],
description: "Hi, This is Hiba !!",
className: "lg:col-span-2 md:col-span-4 md:row-span-2 lg:min-h-[30vh]",
imgClassName: "w-full h-full",
titleClassName: "justify-end text-xs lg:text-sm font-normal",
descriptionClassName: "text-[30px] text-poppins",
img: "",
spareImg: "",
  },
  {
    id: 2,
    title: "My Tech Stack",
    description: "",
    className: "lg:col-span-3 md:col-span-5 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    stack: [
      {
        category: "Programming Languages",
        items: [
          { name: "C", logo: "/c.svg" },
          { name: "Java", logo: "/java.png" }
        ],
      },
      {
        category: "Web Development",
        items: [
          { name: "Next.js", logo: "/next.svg" },
          { name: "React", logo: "/react.png" },
          { name: "HTML", logo: "/html.png" },
          { name: "PHP", logo: "/php.svg" },
          { name: "CSS", logo: "/css.png" },
          { name: "JavaScript", logo: "/js.png" },
          { name: "TypeScript", logo: "/ts.png" },
          { name: "Node js", logo: "/node.png" },
          { name: "Bootstrap", logo: "/boot.png" }
        ],
      },
      {
        category: "Database",
        items: [
          { name: "MongoDB", logo: "/mongo.svg" },
          { name: "MySQL", logo: "/mysql.svg" }
        ],
      },
      {
        category: "Developer Tools",
        items: [
          { name: "Git", logo: "/git.svg" },
          { name: "Postman", logo: "/post.png" },
          { name: "Figma", logo: "/figma.png" }
          
        ],
      },
    ],
    img: "",
    spareImg: "",
  },
  
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Scholarshare",
    des: "A platform for academic researchers to publish and access research efficiently.",
    detailedDescription:
      "ScholarShare presents a comprehensive and modern solution for academic researchers, reviewers, and administrators to publish and access research efficiently. The platform aims to streamline the entire research workflow—from paper submission to peer review and publication—within a secure, role-based environment. Key functionalities include research paper management, reviewer assignment, plagiarism detection, feedback handling, and administrative oversights.",
    features: [
      "Researcher Dashboard: View submissions, track approval status, and monitor activity.",
      "Profile Management System: Update personal information, research interests, and control public profile visibility.",
      "Research Paper Management: Upload, index, edit, and remove papers with metadata tagging, version control, and file naming conventions.",
      "Search & Filter: Elasticsearch-based full-text search engine with keyword, author name, and tag filtering.",
      "Review & Rating System: Leave reviews and rate papers to enhance engagement and academic feedback.",
      "Admin Panel: Review, approve/reject papers, manage user roles, and monitor system activity.",
      "Plagiarism Detection: Ensures academic integrity through automated similarity checks.",
      "Email Notifications: Keeps users informed about verification, paper status, and new relevant publications.",
      "Role-Based Access Control: Different permissions for Admins, Researchers, and Users.",
      "Citation Generator: Automatically formats citations (APA, MLA, Chicago, etc.) for uploaded papers.",
      "Cloud Storage: Secure document storage using Google Cloud.",
      "Responsive Design: Optimized for various screen sizes and devices.",
    ],
    img: "/project1.png",
    iconLists: ["/next.svg", "/mongo.svg", "/jwt.svg", "/elas.svg", "/git.svg"],
    link: "https://scholarshare21-mflp-git-main-lisorthmans-projects.vercel.app.com",
    github: "https://github.com/username/scholarshare",
    year: 2025,
    myRole: [
      "Coordinated tasks among team members and managed project timelines.",
      "Arranged meetings with mentors and supervisors for project alignment.",
      "Led development of the Admin Dashboard, Paper Review and Approval System, Plagiarism Checking, Researcher Management, and Overall Monitoring.",
      "Designed features using UML diagrams and Figma wireframes for efficient operation.",
      "Ensured platform security and verified research paper authenticity through plagiarism checks.",
      "Managed researcher roles and access with role-based access control.",
      "Set up a structured approval process for research papers.",
      "Integrated plagiarism checks and optimized administrative workflows.",
      "Ensured system integrity across front-end, back-end, and database components for peak performance.",
    ],
  },
  {
    id: 2,
    title: "Heavenwear",
    des: "An e-commerce platform for clothing, offering a seamless shopping experience.",
    detailedDescription:
      "Heavenwear is a dynamic e-commerce platform designed for clothing retail, providing users with a seamless shopping experience. Built with PHP Blade and MySQL, it features a robust product catalog, secure payment processing, user account management, and a responsive design optimized for all devices. The platform emphasizes user engagement through intuitive navigation, advanced search capabilities, and personalized recommendations.",
    features: [
      "Product Catalog: Browse a wide range of clothing with detailed descriptions and images.",
      "Advanced Search & Filter: Search by category, size, color, or price with MySQL-powered queries.",
      "Shopping Cart: Add, remove, or update items with real-time cart updates.",
      "Secure Checkout: Integrated payment gateway for safe transactions.",
      "User Accounts: Register, log in, and manage order history and preferences.",
      "Order Tracking: Real-time updates on order status and delivery.",
      "Wishlist: Save favorite items for future purchases.",
      "Responsive Design: Optimized for mobile, tablet, and desktop devices.",
      "Admin Dashboard: Manage products, orders, and user accounts efficiently.",
    ],
    img: "/project2.png",
    iconLists: ["/php.svg", "/mysql.svg"],
    link: "",
    github: "https://github.com/hibarhm/laravel_project_ecom.git",
    year: 2024,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
