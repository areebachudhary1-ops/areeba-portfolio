/* Areeba Asghar portfolio defaults. Edit content here or through Admin Panel. */
const DEFAULT_DATA = {
  personal: {
    name: "Areeba Asghar",
    title: "Software Engineering Graduate • Web & App Developer • UI/UX Designer",
    roles: ["Software Engineering Graduate", "Web & App Developer", "UI/UX Designer", "AI & Tech Enthusiast"],
    tagline: "Building useful digital experiences through software, design, and emerging technology.",
    shortIntro: "I am a Software Engineering graduate from the University of Mianwali. I enjoy building web and mobile applications, designing intuitive user interfaces, and exploring practical AI solutions. My experience includes Figma-based mobile app screen design during my internship at OkraSoft, along with academic software projects and hands-on work with frontend and backend technologies.",
    aboutHeading: "A software engineer with a passion for building and designing.",
    aboutSubtext: "My education, projects, internship experience, and the technologies I am continuing to explore.",
    aboutLead: "I am a BS Software Engineering graduate from the University of Mianwali, interested in web development, mobile applications, UI/UX design, and AI-powered technology.",
    aboutParagraphs: [
      "My degree gave me a foundation in software engineering, programming, object-oriented concepts, requirements engineering, human-computer interaction, and software testing. I enjoy turning ideas into practical applications and learning how thoughtful design can make technology easier to use.",
      "During my internship at OkraSoft, I worked on mobile application screen designs in Figma. This experience strengthened my interest in UI/UX design and the connection between visual interfaces and application development.",
      "My academic projects include a LinkedIn clone built with HTML, CSS, JavaScript, PHP, and SQL using XAMPP; a Food Ordering App Software Requirements Specification; an HCI-based evaluation of the MCB Bank website; and a C++ Age Calculator.",
      "My Final Year Project is NeuroCast, an AI-based epileptic seizure forecasting research system. The project explores self-supervised graph transformers and brain connectivity using EEG datasets. I am interested in continuing to develop my skills in AI agents, Android development, and full-stack software engineering."
    ],
    focusChips: ["Web Development", "Mobile App Development", "UI/UX Design", "Artificial Intelligence"],
    brandStatement: "I enjoy combining engineering thinking with user-focused design to create digital products that are useful, clear, and accessible.",
    photo: ""
  },
  skills: {
    "Graphic Design": [
      { name: "Visual Design", description: "Creating clear, balanced visual layouts for digital experiences." },
      { name: "Figma", description: "Designing mobile application screens, flows, and interface concepts." }
    ],
    "Branding": [
      { name: "Visual Consistency", description: "Maintaining consistent typography, colour, spacing, and interface patterns." }
    ],
    "UI/UX": [
      { name: "UI/UX Design", description: "Designing user-friendly interfaces and application screen flows." },
      { name: "Wireframing & Prototyping", description: "Exploring and communicating interface ideas in Figma." }
    ],
    "Software Development": [
      { name: "HTML & CSS", description: "Building and styling responsive web pages." },
      { name: "JavaScript", description: "Adding interactive behaviour to web interfaces." },
      { name: "PHP & SQL", description: "Developing server-side features and working with relational data." },
      { name: "C++ & Java", description: "Programming fundamentals and object-oriented programming." },
      { name: "WordPress", description: "Creating and managing website content." },
      { name: "Android Development", description: "Learning native Android development with Kotlin and XML." }
    ],
    "AI": [
      { name: "AI & Machine Learning", description: "Exploring AI applications and model-based software solutions." },
      { name: "Python", description: "Developing Python skills for AI and backend development." }
    ],
    "Professional Skills": [
      { name: "Problem Solving", description: "Breaking down technical problems into manageable steps." },
      { name: "Communication", description: "Sharing ideas clearly and collaborating with others." },
      { name: "Teamwork", description: "Contributing to collaborative academic and development projects." },
      { name: "Requirements Engineering", description: "Documenting functional requirements, use cases, and system flows." }
    ]
  },
  projectCategories: ["UI/UX & Applications", "Web Development", "AI & Software", "Software Engineering"],
  projects: [
    { id: "neurocast", category: "AI & Software", title: "NeuroCast — AI-Based Epileptic Seizure Forecasting", description: "Final Year Project exploring self-supervised graph transformers and brain connectivity for seizure prediction using EEG datasets including CHB-MIT and TUH EEG Seizure Corpus. Research-focused and not intended for clinical diagnosis.", role: "Software Engineering & AI Project", tools: ["Python", "PyTorch", "FastAPI", "React", "Tailwind CSS", "MongoDB / Firebase", "Plotly / D3.js"], images: [], featured: true },
    { id: "linkedin-clone", category: "Web Development", title: "LinkedIn Clone", description: "Academic web application project using HTML, CSS, JavaScript, PHP, and SQL, developed and tested locally with XAMPP.", role: "Web Developer", tools: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP", "GitHub"], images: [], featured: true },
    { id: "food-ordering-srs", category: "Software Engineering", title: "Food Ordering App — SRS", description: "Software Requirements Specification project covering functional requirements, use cases, data flow diagrams, and UI design. Worked as team lead.", role: "Team Lead & Requirements Analyst", tools: ["Software Requirements Engineering", "Use Case Diagrams", "DFDs", "UI Design"], images: [], featured: true },
    { id: "mcb-evaluation", category: "Software Engineering", title: "MCB Bank Website Evaluation", description: "Human-Computer Interaction coursework evaluating the MCB Bank website, completed as a team lead.", role: "Team Lead", tools: ["HCI", "Usability Evaluation"], images: [], featured: false },
    { id: "age-calculator", category: "Software Engineering", title: "Age Calculator", description: "A C++ programming project that calculates age based on user-provided date information.", role: "C++ Developer", tools: ["C++", "Dev-C++"], images: [], featured: false },
    { id: "figma-mobile-ui", category: "UI/UX & Applications", title: "Mobile App UI Designs — OkraSoft Internship", description: "A collection of mobile application screen designs created in Figma during the OkraSoft internship.", role: "UI/UX Design Intern", tools: ["Figma"], images: [], featured: true },
    { id: "university-dashboard", category: "UI/UX & Applications", title: "University Student Dashboard Concept", description: "A Figma dashboard concept covering attendance, assignments, results, classes, courses, and exam information.", role: "UI/UX Designer", tools: ["Figma"], images: [], featured: false }
  ],
  experience: [
    {
      id: "exp-okrasoft",
      organization: "OkraSoft",
      position: "Intern — UI/UX Design",
      duration: "Internship",
      tag: "Internship",
      description: "Designed screens for several mobile application concepts in Figma, developing practical experience with interface layout and visual consistency.",
      skills: ["Figma", "UI/UX Design", "Mobile App Screen Design"],
      images: []
    }
  ],
  community: {
    name: "University & Technology Activities",
    summary: "Participated in academic and technology-related activities, including an industrial visit to Devsinc Islamabad and exploring opportunities in technology and leadership communities.",
    tags: ["Technology Learning", "Professional Development", "Teamwork"],
    items: []
  },
  contact: { email: "", linkedin: "", behance: "", instagram: "", github: "", extraLinks: [] },
  meta: { footerNote: "© 2026 Areeba Asghar. All rights reserved." }
};
if (typeof window !== "undefined") window.DEFAULT_DATA = DEFAULT_DATA;
