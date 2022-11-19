/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Muhammad Sajjad",
  logo_name: "M Sajjad",
  nickname: "M / Sajjad",
  full_name: "Muhammad Sajjad",
  subTitle: "Software Engineer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1QB4hfqiXd5r0ciSpobp-lxXstT0Rm-yW/view?usp=sharing",
  mail: "mailto:sajjadkhan42601@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/muhammadsajjad5240",
  linkedin: "https://www.linkedin.com/in/muhammad-sajjad-4b8712175/",
  gmail: "sajjadkhan42601@gmail.com",
  gitlab: "https://gitlab.com/muhammadsajjad5240",
  facebook: "https://www.facebook.com/profile.php?id=100006126345550",
  twitter: "https://twitter.com/Sajjad1466",
  instagram: "https://www.instagram.com/muhammadsajjad1466/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces and Back end for your web",
        "⚡ Building responsive website front end using ReactJS,VueJs and Nuxt.JS",
        "⚡ Creating application backend in Node & Express",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#8D5FF3",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#3386FB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Nuxt.js",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#439743",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Govt College University Faisalabad",
      subtitle: "Bachelor in Computer Science",
      logo_path: "university.png",
      alt_name: "SSEC",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have completed BS in Computer Science.",
        "⚡ I have studied core subjects like Programmin, Web Development, Data Structures, DBMS, Networking, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learn under my Computer Science course. ",
      ],
      website_link: "https://gcuf.edu.pk/",
    },
    {
      title: "Govt Municipal Graduate College",
      subtitle: "Intermediate in Computer Science",
      logo_path: "college.png",
      alt_name: "ICS",
      duration: "2013 - 2015",
      descriptions: [
        "⚡ I have studied core subjects like Computer Science, Programming etc.",
      ],
      website_link: "https://gmdc.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "MERN Stack Developer",
          company: "Wampdo",
          company_url: "https://www.wampdo.com/",
          logo_path: "wampdo-logo.png",
          duration: "OCT 2019 - JAN 2022",
          location: "Faisalabad, Punjab",
          description: `Work on payroll management system as a Full Stack Developer in Javascript,Node.js,Express.js and React.js.
            I worked on the Dashboard project which helps users track their activities.`,
          color: "#0071C5",
        },
        {
          title: "MERN Stack Developer",
          company: "Ranksol",
          company_url: "https://ranksol.com/",
          logo_path: "logo-2-180x52.png",
          duration: "Jan 2020 - June 2020",
          location: "Faisalabad, Punjab",
          description: `Work as a MERN stack developer..
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          We primarily used PERN and MERN Stack. 60% of my work was doing backend development and the remaining 40% was Front end-related tasks.
          `,
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "Genius Mind Zone",
          company_url: "https://geniusmindzone.com/",
          logo_path: "genius mind zone.png",
          duration: "Jun 2020 - Sep 2022",
          location: "Faisalabad Punjab",
          description: `Work as a Full Stack Developer. Work on different projects just like ERP system, LMS, Flight Search Engine etc. Also train other developers to work in different projects.
          I also manage project using SCRUM technologies like JIRA,Bitbucket etc.
          `,
          color: "#ee3c26",
        },
        {
          title: "Software Engineer",
          company: "TechRydes",
          company_url: "https://www.techrydes.com/",
          logo_path: "techrydes-logo.png",
          duration: "Sep 2022 - Continue",
          location: "Lahore Punjab",
          description: `Working as a Software Engineer. Work on different projects just like Teeny Coders etc. Also train other developers to work in different projects.
          I also manage project using SCRUM technologies like Github etc.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Lead",
          company: "Bauddhik-Geeks",
          company_url: "https://bauddhikgeeks.tech/",
          logo_path: "bauddhikgeeks.png",
          duration: "Sep 2021 - Present",
          location: "Work From Home",
          description:
            "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
          color: "#FBBD18",
        },
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create ReactJs,VueJS and NodeJs Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Alaska ERP",
      // url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "A point of sale system for Pharmaceutical industry, where pharamacy employess can deal with any kind of pharmacy business just like Product management, Goods Receipt Note, Pucrchase order, Sale Order. Employess can also get reports of different activities such as product report, cutomer reports etc.        ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Vue.js",
          iconifyClass: "uim:vuejs",
          color: '#439743'
        },
        {
          name: "Nuxt.js",
          iconifyClass: "logos:nuxt",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "Dugsi",
      // url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
      description:
        "Online quran learning application for childrens. Student can practice of exercise, give quizzes, assignments etc. Every student show his/her activities on dashboard.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Vue.js",
          iconifyClass: "uim:vuejs",
          color: '#439743'
        },
        {
          name: "Nuxt.js",
          iconifyClass: "logos:nuxt",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
      ],
    },
    {
      id: "13",
      name: "Utility Mechanic",
      // url: "https://github.com/harikanani/e-commerce-frontend",
      description:
        "An online platform for people where they can take service of different kind of peoples such as plumber, electrician, carpanter etc. People visit website and choose best worker.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "expressJS",
          iconifyClass: "logos-expressjs",
        },
      ],
    },
    {
      id: "2",
      name: "Payroll Managment System",
      // url: "https://github.com/harikanani/node-blockchain",
      description:
        "Payroll management system where we can add projects, assign projects to employess, calculate salaries and other activities.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "expressJS",
          iconifyClass: "logos-expressjs",
        },
      ],
    },
    {
      id: "3",
      name: "Flight Search Engine",
      // url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "Online platform for air line ticket booking. Peoples can search quires about flights of different countires and book flights. Departure, Arrival time and teminal information also give to users.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Vue.js",
          iconifyClass: "uim:vuejs",
          color: '#439743'
        },
        {
          name: "Nuxt.js",
          iconifyClass: "logos:nuxt",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
      ],
    },
    {
      id: "4",
      name: "PerdatorPlay",
      // url: "https://github.com/harikanani/personal-portfolio",
      description:
        "Web application where game players can play game tournaments and win prizes",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Vue.js",
          iconifyClass: "uim:vuejs",
          color: '#439743'
        },
        {
          name: "Nuxt.js",
          iconifyClass: "logos:nuxt",
        },
      ],
    },
    {
      id: "3",
      name: "Teeny Coders",
      // url: "https://github.com/harikanani/Bloggify",
      description: "Online platform for childrens where they can learn programming skills. Teachers train children through online claases. Teacher also take quizzes,assignments of children. At the end of course childrens also get certifcates.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Vue.js",
          iconifyClass: "uim:vuejs",
          color: '#439743'
        },
        {
          name: "Nuxt.js",
          iconifyClass: "logos:nuxt",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "Online Real Estate",
      // url: "https://github.com/harikanani/stargazers",
      description: "Online Real Estate platform where anyone can sell,buy houses,shops and other properties. Users can search properties by applying different filters such as total budget, bedroms, area etc.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Vue.js",
          iconifyClass: "uim:vuejs",
          color: '#439743'
        },
        {
          name: "Nuxt.js",
          iconifyClass: "logos:nuxt",
        },
      ],
    },
    {
      id: "5",
      name: "Point of Sale",
      // url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "Point of sale for shops where peoples can shop products online or by onsite. Admin can add different roles and assign permissions of different modules, get reports of differnt products etc.",
      languages: [

        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "expressJS",
          iconifyClass: "logos-expressjs",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
