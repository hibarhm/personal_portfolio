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
  myRole: string[];
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md-row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
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
    myRole: [
      "Led development with PHP and MySQL for product and user management.",
      "Designed a responsive front-end interface using modern CSS frameworks.",
      "Implemented secure payment processing and user authentication systems.",
      "Optimized database queries for fast product search and filtering.",
      "Coordinated feature development and testing for a seamless user experience.",
      "Managed project timelines and collaborated with designers for UI/UX.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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