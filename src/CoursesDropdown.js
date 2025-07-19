import React, { useState } from 'react';

function CourseRegistrationPage({ onRegister }) {
  const [selectedCourse, setSelectedCourse] = useState('');
  const courses = [
 
      {
        id: 'agile-methodologies',
        name: 'Agile Methodologies',
        about: 'Learn Agile principles and practices for software development.',
        keywords: 'Agile, Scrum, Kanban, project management',
        duration: '2 months',
        benefits: 'Manage projects using Agile methodologies.',
        advantages: 'Popular in software development for flexibility.'
      },
      {
        id: 'android',
        name: 'Android',
        about: 'Learn to develop Android applications using Java and Kotlin.',
        keywords: 'Android, Java, Kotlin, mobile development, app development',
        duration: '4 months',
        benefits: 'Develop native Android applications.',
        advantages: 'High demand for mobile app developers.'
      },
      {
        id: 'angularjs',
        name: 'Angular JS',
        about: 'Learn to build dynamic web applications using AngularJS.',
        keywords: 'AngularJS, JavaScript, SPA, frontend, web development',
        duration: '3 months',
        benefits: 'Create dynamic single-page applications.',
        advantages: 'MVC structure and strong community support.'
      },
      {
        id: 'augmented-reality',
        name: 'Augmented Reality',
        about: 'Learn to create augmented reality applications.',
        keywords: 'Augmented Reality, AR, Unity, mobile development',
        duration: '4 months',
        benefits: 'Build interactive AR applications.',
        advantages: 'Growing field with applications in gaming and education.'
      },
      {
        id: 'automation-testing',
        name: 'Automation Testing',
        about: 'Learn to automate software testing processes.',
        keywords: 'Automation Testing, Selenium, QA, test automation',
        duration: '2 months',
        benefits: 'Automate test cases and improve reliability.',
        advantages: 'Saves time and reduces manual errors.'
      },
      {
        id: 'big-data',
        name: 'Big Data',
        about: 'Learn to manage and analyze large datasets using big data technologies.',
        keywords: 'Big Data, Hadoop, Spark, data processing',
        duration: '4 months',
        benefits: 'Handle large datasets effectively.',
        advantages: 'Growing field with high demand for professionals.'
      },
      {
        id: 'blockchain',
        name: 'Blockchain',
        about: 'Learn the fundamentals of blockchain technology and its applications.',
        keywords: 'Blockchain, cryptocurrency, smart contracts, decentralized',
        duration: '4 months',
        benefits: 'Understand blockchain technology and its applications.',
        advantages: 'Growing demand in finance and tech industries.'
      },
      {
        id: 'business-analytics',
        name: 'Business Analytics',
        about: 'Learn to analyze business data for decision making.',
        keywords: 'Business Analytics, data analysis, reporting, decision making',
        duration: '4 months',
        benefits: 'Analyze business data for strategic decisions.',
        advantages: 'High demand in business intelligence roles.'
      },
      {
        id: 'business-intelligence',
        name: 'Business Intelligence',
        about: 'Learn to analyze business data for strategic decision making.',
        keywords: 'Business Intelligence, data analysis, reporting, decision making',
        duration: '4 months',
        benefits: 'Analyze business data for strategic decisions.',
        advantages: 'High demand in business intelligence roles.'
      },
      {
        id: 'c-cpp',
        name: 'C & C++',
        about: 'Learn core programming concepts with C and C++ including memory management, pointers, and object-oriented programming.',
        keywords: 'C, C++, low-level, memory, system programming, competitive coding',
        duration: '2 months',
        benefits: 'Learn low-level programming with C and C++.',
        advantages: 'Strong base for system programming and competitive coding.'
      },
      {
        id: 'csharp',
        name: 'C#',
        about: 'Learn C# for Windows applications and game development.',
        keywords: 'C#, .NET, Windows, game development, Unity',
        duration: '2 months',
        benefits: 'Programming with C# for Windows and game development.',
        advantages: 'Used in .NET applications and Unity games.'
      },
      {
        id: 'cloud-architecture',
        name: 'Cloud Architecture',
        about: 'Learn to design and manage cloud-based solutions.',
        keywords: 'Cloud Architecture, AWS, Azure, Google Cloud',
        duration: '4 months',
        benefits: 'Design scalable cloud solutions.',
        advantages: 'In-demand skill in modern IT landscape.'
      },
      {
        id: 'cloud-computing',
        name: 'Cloud Computing',
        about: 'Learn cloud computing concepts and services.',
        keywords: 'Cloud Computing, AWS, Azure, Google Cloud, virtualization',
        duration: '4 months',
        benefits: 'Understand cloud services and deployment models.',
        advantages: 'In-demand skill in modern IT landscape.'
      },
      {
        id: 'Cybersecurity',
        name: 'Cybersecurity',
        about: 'Learn to protect systems and networks from cyber threats.',
        keywords: 'Cybersecurity, network security, ethical hacking, information security',
        duration: '4 months',
        benefits: 'Protect systems and networks from cyber threats.',
        advantages: 'High demand for cybersecurity professionals.'
      },
      {
        id: 'data-analytics',
        name: 'Data Analytics',
        about: 'Learn to analyze and interpret complex data sets.',
        keywords: 'Data Analytics, data visualization, statistics, Python, SQL',
        duration: '4 months',
        benefits: 'Insights from data using various tools.',
        advantages: 'Important for decision making in businesses.'
      },
      {
        id: 'data-engineering',
        name: 'Data Engineering',
        about: 'Learn to design and build systems for collecting, storing, and analyzing data.',
        keywords: 'Data Engineering, ETL, big data, databases',
        duration: '4 months',
        benefits: 'Build robust data pipelines.',
        advantages: 'Essential for big data projects.'
      },
      {
        id: 'data-mining',
        name: 'Data Mining',
        about: 'Learn techniques for discovering patterns in large datasets.',
        keywords: 'Data Mining, data analysis, machine learning',
        duration: '4 months',
        benefits: 'Extract valuable insights from data.',
        advantages: 'Important for data-driven decision making.'
      },
      {
        id: 'data-science',
        name: 'Data Science',
        about: 'Learn data science concepts and tools for data analysis and visualization.',
        keywords: 'Data Science, data analysis, machine learning, Python, R',
        duration: '6 months',
        benefits: 'Work with large datasets and machine learning.',
        advantages: 'In-demand skill in modern tech industry.'
      },
      {
        id: 'data-visualization',
        name: 'Data Visualization',
        about: 'Learn to visualize data using various tools and techniques.',
        keywords: 'Data Visualization, charts, graphs, Tableau, Power BI',
        duration: '2 months',
        benefits: 'Communicate insights through visual representation.',
        advantages: 'Essential for data analysis and reporting.'
      },
      {
        id: 'databases',
        name: 'Database - Oracle, MongoDB, MySQL, MS SQL Server',
        about: 'Learn to manage and query data using various database systems.',
        keywords: 'Oracle, MongoDB, MySQL, MS SQL Server, databases, SQL',
        duration: '3 months',
        benefits: 'Master various relational and NoSQL databases.',
        advantages: 'Manage and query data effectively in any environment.'
      },
      {
        id: 'devops',
        name: 'DevOps',
        about: 'Learn the principles of DevOps and continuous integration/continuous deployment (CI/CD).',
        keywords: 'DevOps, CI/CD, automation, cloud',
        duration: '4 months',
        benefits: 'Automate software development processes.',
        advantages: 'In-demand skill in modern software development.'
      },
      {
        id: 'digital-forensics',
        name: 'Digital Forensics',
        about: 'Learn to investigate cyber crimes and recover data.',
        keywords: 'Digital Forensics, investigation, data recovery, cybersecurity',
        duration: '3 months',
        benefits: 'Investigate cyber crimes and recover lost data.',
        advantages: 'Growing field with high demand for professionals.'
      },
      {
        id: 'ethical-hacking',
        name: 'Ethical Hacking',
        about: 'Learn to identify vulnerabilities in systems and networks.',
        keywords: 'Ethical Hacking, penetration testing, cybersecurity, network security',
        duration: '4 months',
        benefits: 'Identify vulnerabilities and secure systems.',
        advantages: 'High demand for ethical hackers.'
      },
      {
        id: 'flask',
        name: 'Flask',
        about: 'Learn Flask for building web applications in Python.',
        keywords: 'Flask, Python, web framework, micro-framework, RESTful',
        duration: '2 months',
        benefits: 'Lightweight Python web framework.',
        advantages: 'Simple and flexible for quick web apps.'
      },
      {
        id: 'flutter',
        name: 'Flutter',
        about: 'Cross-platform mobile app development framework using Dart.',
        keywords: 'Flutter, Dart, mobile development, cross-platform, UI',
        duration: '3 months',
        benefits: 'Cross-platform mobile development with Dart.',
        advantages: 'Build beautiful apps for both iOS and Android.'
      },
      {
        id: 'frameworks',
        name: 'Framework - Laravel, Django, Vue JS',
        about: 'Learn popular web frameworks for rapid development.',
        keywords: 'Laravel, Django, Vue.js, web frameworks, PHP, Python',
        duration: '4 months',
        benefits: 'Learn popular backend and frontend frameworks.',
        advantages: 'Rapid web development using modern tools.'
      },
      {
        id: 'full-stack-development',
        name: 'Full Stack Development',
        about: 'Master both front-end and back-end web technologies to build complete and responsive web applications.',
        keywords: 'HTML, CSS, JavaScript, Node.js, MongoDB, React, full stack',
        duration: '6 months',
        benefits: 'Covers front-end and back-end web development.',
        advantages: 'Complete web development skills, in-demand in tech industry.'
      },
      {
        id: 'game-development',
        name: 'Game Development',
        about: 'Learn to design and develop video games.',
        keywords: 'Game Development, Unity, Unreal Engine, programming',
        duration: '6 months',
        benefits: 'Create interactive video games.',
        advantages: 'Growing field with high demand for developers.'
      },
      {
        id: 'golang',
        name: 'Go Lang',
        about: 'Learn Go programming language for system-level programming.',
        keywords: 'Go, Golang, concurrency, system programming, cloud',
        duration: '2 months',
        benefits: 'Concurrency-focused programming with Go.',
        advantages: 'Great for scalable backend systems.'
      },
      {
        id: 'graphic-designing',
        name: 'Graphic Designing',
        about: 'Learn the principles of graphic design and visual communication.',
        keywords: 'Graphic Design, Adobe, visual communication, creativity',
        duration: '2 months',
        benefits: 'Create visual content using design tools.',
        advantages: 'High demand in media and advertising.'
      },
      {
        id: 'inplant-training',
        name: 'Inplant Training',
        about: 'Hands-on training in a real-world environment.',
        keywords: 'Inplant training, industrial exposure, practical skills',
        duration: 'Varies',
        benefits: 'Industrial exposure during study.',
        advantages: 'Enhances technical and practical skills.'
      },
      {
        id: 'internet-of-things',
        name: 'Internet of Things (IoT)',
        about: 'Learn to build and manage IoT devices and applications.',
        keywords: 'IoT, sensors, devices, data collection, automation',
        duration: '4 months',
        benefits: 'Understand IoT architecture and protocols.',
        advantages: 'Growing field with applications in various industries.'
      },
      {
        id: 'internet-security',
        name: 'Internet Security',
        about: 'Learn to protect networks and systems from cyber threats.',
        keywords: 'Internet Security, cybersecurity, network security, threats',
        duration: '4 months',
        benefits: 'Understand internet security principles.',
        advantages: 'High demand for cybersecurity professionals.'
      },
      {
        id: 'ipt',
        name: 'IPT',
        about: 'In-plant training for practical exposure.',
        keywords: 'IPT, industrial training, practical skills',
        duration: 'Varies',
        benefits: 'Industrial project training.',
        advantages: 'Hands-on experience in real-time environments.'
      },
      {
        id: 'java',
        name: 'Java',
        about: 'Gain a strong foundation in object-oriented programming using Java. Learn to build scalable applications and understand core Java APIs and concepts.',
        keywords: 'Java, OOP, Android, enterprise applications, backend, JVM',
        duration: '3 months',
        benefits: 'Solid foundation in object-oriented programming using Java.',
        advantages: 'Popular in enterprise applications, Android development, and backend systems.'
      },
      {
        id: 'java script',
        name: 'Java Script',
        about: 'Learn the fundamentals of JavaScript, the programming language of the web. Understand DOM manipulation, event handling, and asynchronous programming.',
        keywords: 'JavaScript, web development, DOM, events, asynchronous, ES6',
        duration: '2 months',
        benefits: 'Master the core concepts of JavaScript for web development.',
        advantages: 'Essential for front-end development, widely used in web applications.'
      },
      {
        id: 'java-selenium-testing',
        name: 'Java - Selenium Testing',
        about: 'Learn automated testing using Selenium with Java.',
        keywords: 'Selenium, Java, automation testing, QA, web testing',
        duration: '2 months',
        benefits: 'Automated testing using Selenium and Java.',
        advantages: 'Boosts QA productivity and accuracy.'
      },
      {
        id: 'kotlin',
        name: 'Kotlin',
        about: 'Modern programming language for Android development.',
        keywords: 'Kotlin, Android, mobile development, JVM, concise',
        duration: '2 months',
        benefits: 'Modern programming language for Android development.',
        advantages: 'Interoperable with Java, concise and safe.'
      },
      {
        id: 'machine-learning',
        name: 'Machine Learning',
        about: 'Learn the fundamentals of machine learning and data analysis.',
        keywords: 'Machine Learning, data analysis, algorithms, Python, AI',
        duration: '6 months',
        benefits: 'Learn to build predictive models from data.',
        advantages: 'Core skill in AI and data science.'
      },
      {
        id: 'manual-testing',
        name: 'Manual Testing',
        about: 'Learn the fundamentals of manual software testing.',
        keywords: 'Manual Testing, QA, testing methodologies, software quality',
        duration: '1 month',
        benefits: 'Basics of manual software testing.',
        advantages: 'Foundation for QA and testing roles.'
      },
      {
        id: 'mean-stack',
        name: 'MEAN Stack',
        about: 'Develop full-stack web applications using MongoDB, Express.js, Angular, and Node.js.',
        keywords: 'MongoDB, Express, Angular, Node.js, MEAN, full stack',
        duration: '5 months',
        benefits: 'Learn MongoDB, Express.js, Angular, and Node.js.',
        advantages: 'Complete JavaScript-based full stack development.'
      },
      {
        id: 'mearn-stack',
        name: 'MEARN Stack',
        about: 'Flexible full-stack development course combining Angular or React with MongoDB, Express, and Node.js.',
        keywords: 'MongoDB, Express, Angular, React, Node.js, MEARN, full stack',
        duration: '5 months',
        benefits: 'Blend of MongoDB, Express.js, Angular/React, and Node.js.',
        advantages: 'Flexible full-stack development using JS-based technologies.'
      },
      {
        id: 'mern-stack',
        name: 'MERN Stack',
        about: 'Build modern full-stack applications using MongoDB, Express.js, React, and Node.js.',
        keywords: 'MongoDB, Express, React, Node.js, MERN, full stack',
        duration: '5 months',
        benefits: 'Learn MongoDB, Express.js, React, and Node.js.',
        advantages: 'Popular stack for modern full-stack applications.'
      },
      {
        id: 'mobile-app-development',
        name: 'Mobile App Development',
        about: 'Learn to develop mobile applications for Android and iOS.',
        keywords: 'Mobile App Development, Android, iOS, cross-platform',
        duration: '4 months',
        benefits: 'Build mobile apps for various platforms.',
        advantages: 'High demand for mobile app developers.'
      },
      {
        id: 'networking',
        name: 'Networking',
        about: 'Learn the fundamentals of computer networking.',
        keywords: 'Networking, TCP/IP, routers, switches, protocols',
        duration: '3 months',
        benefits: 'Understand networking concepts and protocols.',
        advantages: 'Essential for IT and cybersecurity roles.'
      },
      {
        id: 'nodejs',
        name: 'Node JS',
        about: 'Learn to build scalable network applications using Node.js.',
        keywords: 'Node.js, JavaScript, server-side, asynchronous, event-driven',
        duration: '3 months',
        benefits: 'Build scalable network applications using Node.js.',
        advantages: 'JavaScript on the server-side, high performance.'  
      },
      {
        id: 'object-oriented-programming',
        name: 'Object Oriented Programming',
        about: 'Learn the principles of object-oriented programming.',
        keywords: 'OOP, classes, objects, inheritance, polymorphism',
        duration: '2 months',
        benefits: 'Understand OOP concepts and design patterns.',
        advantages: 'Foundation for many programming languages.'
      },
      {
        id: 'php',
        name: 'PHP',
        about: 'Learn server-side scripting with PHP.',
        keywords: 'PHP, web development, server-side, MySQL',
        duration: '3 months',
        benefits: 'Server-side scripting for web applications.',
        advantages: 'Widely used for web development.'
      },
      {
        id: 'power-bi',
        name: 'Power BI',
        about: 'Learn to visualize data using Power BI.',
        keywords: 'Power BI, data visualization, business intelligence, reporting',
        duration: '2 months',
        benefits: 'Create interactive reports and dashboards.',
        advantages: 'Popular tool for business intelligence.'
      },
      {
        id: 'python',
        name: 'Python',
        about: 'Learn Python programming for various applications including web development and data science.',
        keywords: 'Python, programming, data science, web development, automation',
        duration: '4 months',
        benefits: 'Versatile programming language for various domains.',
        advantages: 'Easy to learn and widely used in industry.'
      },
      {
        id: 'react-js',
        name: 'React JS',
        about: 'Learn to build user interfaces using React.js.',
        keywords: 'React.js, JavaScript, UI, frontend development, SPA',
        duration: '3 months',
        benefits: 'Build dynamic user interfaces with React.js.',
        advantages: 'Popular library for frontend development.'
      },
      {
        id: 'react-native',
        name: 'React Native',
        about: 'Learn to build mobile applications using React Native.',
        keywords: 'React Native, mobile development, cross-platform, JavaScript',
        duration: '4 months',
        benefits: 'Build cross-platform mobile apps using React Native.',
        advantages: 'Single codebase for both iOS and Android.'
      },
      {
          id:'r-language', 
          name:'R Language', 
          about:'Learn R programming for statistical computing and graphics.',
          keywords:'R, statistics, data analysis, visualization',
          duration:'3 months',
          benefits:'Statistical computing and data visualization.',
          advantages:'Widely used in data analysis and academic research.'
      },
      {
        id: 'seo-digital-marketing',
        name: 'SEO - Digital Marketing',
        about: 'Learn search engine optimization and digital marketing strategies.',
        keywords: 'SEO, digital marketing, online marketing, analytics',
        duration: '2 months',
        benefits: 'Improve website visibility and traffic.',
        advantages: 'Essential for online businesses.'
      },
      {
        id: 'software-testing',
        name: 'Software Testing',
        about: 'Learn software testing methodologies and tools.',
        keywords: 'Software Testing, QA, testing methodologies, automation',
        duration: '2 months',
        benefits: 'Understand software testing principles.',
        advantages: 'Foundation for QA roles.'
      },
      {
        id: 'swift',
        name: 'Swift',
        about: 'Learn Swift programming for iOS development.',
        keywords: 'Swift, iOS, mobile development, Apple, programming',
        duration: '3 months',
        benefits: 'Modern programming language for iOS development.',
        advantages: 'Fast and safe language for Apple platforms.'
      },
      {
          id:'typescript', 
          name:'TypeScript', 
          about:'Learn TypeScript for building large-scale applications.',
          keywords:'TypeScript, JavaScript, static typing, web development',
          duration:'3 months',
          benefits:'Superset of JavaScript with static typing.',
          advantages:'Improves code quality and maintainability.'
      },
      {
          id:'ui-ux-designing', 
          name:'UI & UX Designing', 
          about:'Learn to design user interfaces and improve user experience.',
          keywords:'UI Design, UX Design, wireframing, prototyping, usability testing',
          duration:'3 months',
          benefits:'Design user-friendly interfaces and improve usability.',
          advantages:'High demand in web and mobile app development.'
      },
      {
          id:'visual-studio-code', 
          name:'Visual Studio Code', 
          about:'Learn to use Visual Studio Code for development.',
          keywords:'Visual Studio Code, IDE, programming, extensions',
          duration:'1 month',
          benefits:'Familiarize with the popular code editor.',
          advantages:'Widely used by developers for various languages.'
      },
      {
        id: 'web-designing',
        name: 'Web Designing - HTML, CSS, JavaScript, Bootstrap',
        about: 'Learn web designing using HTML, CSS, JavaScript, and Bootstrap.',
        keywords: 'HTML, CSS, JavaScript, Bootstrap, web design',
        duration: '3 months',
        benefits: 'Create responsive and interactive web pages.',
        advantages: 'Foundation for web development.'
      },
      {
        id: 'web-development',
        name: 'Web Development',
        about: 'Learn full-stack web development using various technologies.',
        keywords: 'Web Development, HTML, CSS, JavaScript, backend',
        duration: '6 months',
        benefits: 'Build complete web applications.',
        advantages: 'In-demand skill in tech industry.'
      },
      {
        id: 'web-security',
        name: 'Web Security',
        about: 'Learn to secure web applications from vulnerabilities.',
        keywords: 'Web Security, cybersecurity, vulnerabilities, protection',
        duration: '3 months',
        benefits: 'Understand web security principles and practices.',
        advantages: 'Essential for web developers and security professionals.'
      },
      {
        id: 'wordpress',
        name: 'WordPress',
        about: 'Learn to build websites using WordPress.',
        keywords: 'WordPress, CMS, website development, blogging',
        duration: '2 months',
        benefits: 'Create and manage websites easily.',
        advantages: 'Popular CMS for blogs and websites.'
      },
      {
          id:'xamarin', 
          name:'Xamarin', 
          about:'Cross-platform mobile app development using C#.',
          keywords:'Xamarin, C#, mobile development, cross-platform',
          duration:'4 months',
          benefits:'Build cross-platform mobile applications with C#.',
          advantages:'Single codebase for iOS and Android apps.'
      },
      {
          id:'yoga', 
          name:'Yoga', 
          about:'Learn the principles and practices of yoga.',
          keywords:'Yoga, wellness, mindfulness, fitness',
          duration:'2 months',
          benefits:'Improve physical and mental well-being.',
          advantages:'Promotes relaxation and stress relief.'
      },
      {
        id: 'zoology',
        name: 'Zoology',
        about: 'Study of animals and their biology.',
        keywords: 'Zoology, biology, animals, ecology',
        duration: '4 months',
        benefits: 'Understand animal behavior and ecology.',
        advantages: 'Foundation for careers in wildlife conservation.'
      },
      {
        id: 'web-development-advanced',
        name: 'Advanced Web Development',
        about: 'Learn advanced web development techniques and frameworks.',
        keywords: 'Web Development, advanced, frameworks, technologies',
        duration: '4 months',
        benefits: 'Master advanced web development skills.',
        advantages: 'In-demand skill in tech industry.'
      },
      {
          id:'zbrush', 
          name:'ZBrush', 
          about:'Digital sculpting tool for artists.',
          keywords:'ZBrush, digital sculpting, 3D modeling, art',
          duration:'3 months',
          benefits:'Create detailed 3D models and sculptures.',
          advantages:'Widely used in game and film industries.'
      },
      {
          id:'zoology-advanced', 
          name:'Advanced Zoology', 
          about:'In-depth study of animal biology and behavior.',
          keywords:'Zoology, advanced, biology, ecology, research',
          duration:'6 months',
          benefits:'Advanced understanding of animal biology.',
          advantages:'Foundation for research and conservation careers.'
      },
      {
        id: 'web-development-basics',
        name: 'Web Development Basics',
        about: 'Learn the fundamentals of web development.',
        keywords: 'Web Development, HTML, CSS, JavaScript',
        duration: '2 months',
        benefits: 'Foundation for web development skills.',
        advantages: 'Essential for building websites.'
      },
      {
        id: 'web-development-frontend',
        name: 'Frontend Web Development',
        about: 'Learn to build user interfaces using HTML, CSS, and JavaScript.',
        keywords: 'Frontend, web development, HTML, CSS, JavaScript',
        duration: '3 months',
        benefits: 'Create responsive and interactive web pages.',
        advantages: 'Foundation for web development.'
      },
      {
        id: 'web-development-backend',
        name: 'Backend Web Development',
        about: 'Learn server-side programming and database management.',
        keywords: 'Backend, web development, server-side, databases',
        duration: '4 months',
        benefits: 'Build server-side applications and manage databases.',
        advantages: 'Essential for full-stack development.'
      },
      {
          id:'zoology-biology', 
          name:'Zoology Biology', 
          about:'Study of animal biology and behavior.',
          keywords:'Zoology, biology, animals, ecology',
          duration:'4 months',
          benefits:'Understand animal behavior and ecology.',
          advantages:'Foundation for careers in wildlife conservation.'
      },
      {
          id:'zoology-ecology', 
          name:'Zoology Ecology', 
          about:'Study of animal ecology and environment.',
          keywords:'Zoology, ecology, animals, environment',
          duration:'4 months',
          benefits:'Understand animal ecology and environment.',
          advantages:'Foundation for careers in wildlife conservation.'
      },
      {
        id: 'zoology-genetics',
        name: 'Zoology Genetics',
        about: 'Study of genetics in animals.',
        keywords: 'Zoology, genetics, animals, heredity',
        duration: '4 months',
        benefits: 'Understand animal genetics and heredity.',
        advantages: 'Foundation for careers in wildlife conservation.'
      },
    {
        id:'zoology-physiology',
        name:'Zoology Physiology', 
        about:'Study of animal physiology and functions.',
        keywords:'Zoology, physiology, animals, biology',
        duration:'4 months',
        benefits:'Understand animal physiology and functions.',
        advantages:'Foundation for careers in wildlife conservation.'
      },
      {
          id:'zoology-anatomy', 
          name:'Zoology Anatomy', 
          about:'Study of animal anatomy and structure.',
          keywords:'Zoology, anatomy, animals, biology',
          duration:'4 months',
          benefits:'Understand animal anatomy and structure.',
          advantages:'Foundation for careers in wildlife conservation.'
    },
      {
        id: 'zoology-ethology',
        name: 'Zoology Ethology',
        about: 'Study of animal behavior.',
        keywords: 'Zoology, ethology, animals, behavior',
        duration: '4 months',
        benefits: 'Understand animal behavior and ecology.',
        advantages: 'Foundation for careers in wildlife conservation.'
      },
      {
          id:'zoology-conservation', 
          name:'Zoology Conservation', 
          about:'Study of animal conservation and protection.',
          keywords:'Zoology, conservation, animals, ecology',
          duration:'4 months',
          benefits:'Understand animal conservation and protection.',
         advantages:'Foundation for careers in wildlife conservation.'
      },
      {
          id:'zoology-ethology-advanced', 
          name:'Zoology Ethology Advanced', 
          about:'Advanced study of animal behavior.',
          keywords:'Zoology, ethology, animals, behavior, advanced',
          duration:'6 months',
          benefits:'In-depth understanding of animal behavior.',
          advantages:'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-ecology-advanced',
        name: 'Zoology Ecology Advanced',
        about: 'Advanced study of animal ecology and environment.',
        keywords: 'Zoology, ecology, animals, environment, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal ecology.',
        advantages: 'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-genetics-advanced',
        name: 'Zoology Genetics Advanced',
        about: 'Advanced study of genetics in animals.',
        keywords: 'Zoology, genetics, animals, heredity, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal genetics.',
        advantages: 'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-physiology-advanced',
        name: 'Zoology Physiology Advanced',
        about: 'Advanced study of animal physiology and functions.',
        keywords: 'Zoology, physiology, animals, biology, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal physiology.',
        advantages: 'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-anatomy-advanced',
        name: 'Zoology Anatomy Advanced',
        about: 'Advanced study of animal anatomy and structure.',
        keywords: 'Zoology, anatomy, animals, biology, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal anatomy.',
        advantages: 'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-conservation-advanced',
        name: 'Zoology Conservation Advanced',
        about: 'Advanced study of animal conservation and protection.',
        keywords: 'Zoology, conservation, animals, ecology, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal conservation.',
        advantages: 'Foundation for research and conservation careers.'
      },  
      {
        id: 'zoology-ethology-advanced',
        name: 'Zoology Ethology Advanced',
        about: 'Advanced study of animal behavior.',
        keywords: 'Zoology, ethology, animals, behavior, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal behavior.',
        advantages: 'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-ecology-advanced',
        name: 'Zoology Ecology Advanced',
        about: 'Advanced study of animal ecology and environment.',
        keywords: 'Zoology, ecology, animals, environment, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal ecology.',
        advantages: 'Foundation for research and conservation careers.'
      },
      {
          id:'zoology-genetics-advanced', 
          name:'Zoology Genetics Advanced', 
          about:'Advanced study of genetics in animals.',
          keywords:'Zoology, genetics, animals, heredity, advanced',
          duration:'6 months',
          benefits:'In-depth understanding of animal genetics.',
          advantages:'Foundation for research and conservation careers.'
      },
      {
          id:'zoology-physiology-advanced', 
          name:'Zoology Physiology Advanced', 
          about:'Advanced study of animal physiology and functions.',
          keywords:'Zoology, physiology, animals, biology, advanced',
          duration:'6 months',
          benefits:'In-depth understanding of animal physiology.',
          advantages:'Foundation for research and conservation careers.'
      },
      {
          id:'zoology-anatomy-advanced', 
          name:'Zoology Anatomy Advanced', 
          about:'Advanced study of animal anatomy and structure.',
          keywords:'Zoology, anatomy, animals, biology, advanced',
          duration:'6 months',
          benefits:'In-depth understanding of animal anatomy.',
          advantages:'Foundation for research and conservation careers.'
      },  
      
      {
          id:'zoology-conservation-advanced', 
          name:'Zoology Conservation Advanced', 
          about:'Advanced study of animal conservation and protection.',
          keywords:'Zoology, conservation, animals, ecology, advanced',
          duration:'6 months',
          benefits:'In-depth understanding of animal conservation.',
          advantages:'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-ethology-advanced',
        name: 'Zoology Ethology Advanced',
        about: 'Advanced study of animal behavior.',
        keywords: 'Zoology, ethology, animals, behavior, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal behavior.',
        advantages: 'Foundation for research and conservation careers.'
      },
      {
        id: 'zoology-ecology-advanced',
        name: 'Zoology Ecology Advanced',
        about: 'Advanced study of animal ecology and environment.',
        keywords: 'Zoology, ecology, animals, environment, advanced',
        duration: '6 months',
        benefits: 'In-depth understanding of animal ecology.',
        advantages: 'Foundation for research and conservation careers.'
      },  
    ];
    // ... continue this pattern for the remaining courses

  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCourse) {
      onRegister(selectedCourse); // Call onRegister function passed from parent
    } else {
      alert('Please select a course to register!');
    }
  };

  // Get course details based on selected course
  const selectedCourseDetails = courses.find(course => course.id === selectedCourse);

  return (
    <div className="course-registration-container">
      <h2>             Select Your Course : </h2>

      <div className="course-details">
        {selectedCourseDetails ? (
          <>
            <h3>{selectedCourseDetails.name}</h3>
            <p><strong>About:</strong> {selectedCourseDetails.about}</p>
            <p><strong>Keywords:</strong> {selectedCourseDetails.keywords}</p>
            <p><strong>Duration:</strong> {selectedCourseDetails.duration}</p>
            <p><strong>Benefits:</strong> {selectedCourseDetails.benefits}</p>
            <p><strong>Advantages:</strong> {selectedCourseDetails.advantages}</p>
          </>
        ) : (
          <p>Please select a course to view details.</p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="course">Select Course</label>
          <select
            id="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">--Select a Course--</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

      </form>
    </div>
  );
}
export default CourseRegistrationPage;