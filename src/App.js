
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CoursesDropdown from "./CoursesDropdown";
import Course from "./Course";
import "./App.css";

const Home = () => (
  <div>
    <h1>Welcome to Online Courses Platform</h1>
    <p>🚀 Whether you're looking to upskill, start a new career, or simply learn something new — we've got the perfect course for you.</p>
    <p>🌐 Learn at your own pace with lifetime access to all enrolled courses. Our platform is built to help you succeed!</p>
    <h3>💡 Why Choose Us?</h3>
    <ul>
      <li>Expert Instructors from top tech companies and universities</li>
      <li>Hands-on projects and real-world examples</li>
      <li>Earn shareable certificates for your resume & LinkedIn</li>
      <li>24/7 support and a vibrant learner community</li>
    </ul>
    <p>🔥 Ready to start learning? <Link to="/signup">Sign up now</Link> and explore our growing library of courses!</p>
  </div>
);

const Courses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "💻 Web Development Bootcamp",
      description: "Master front-end and back-end development with hands-on projects. Build responsive websites using HTML, CSS, JavaScript, and React."
    },
    {
      id: 2,
      title: "🤖 Introduction to AI",
      description: "Learn how Artificial Intelligence is transforming the world. No coding experience required! Ideal for beginners looking to enter the AI space."
    },
    {
      id: 3,
      title: "📊 Data Science with Python",
      description: "Analyze, visualize, and derive insights from data. Learn Python, Pandas, NumPy, Matplotlib, and more through engaging examples."
    },
    {
      id: 4,
      title: "📱 Mobile App Development with Flutter",
      description: "Build beautiful native apps for both iOS and Android with Google's Flutter framework. Learn UI design, animations, and Firebase integration."
    },
    {
      id: 5,
      title: "🛡️ Cybersecurity Fundamentals",
      description: "Understand security protocols, ethical hacking basics, and how to protect digital information in a connected world."
    }
  ]);

  return (
    <div>
      <h1>📚 Our Most Popular Courses</h1>
      <p>Choose from a wide variety of cutting-edge courses designed for every skill level.</p>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
      <p>👉 More courses coming soon! Stay tuned and keep learning.</p>
    </div>
  );
};

const Services = () => (
  <div>
    <h1>🛠️ Our Services</h1>
    <p>We are more than just an online course provider — we are your learning partner!</p>
    <ul>
      <li>🎓 Personalized learning paths based on your goals</li>
      <li>📈 Career guidance and resume-building support</li>
      <li>🎥 High-quality video lectures and interactive quizzes</li>
      <li>🎁 Exclusive webinars and guest sessions with industry experts</li>
      <li>📚 Downloadable resources and practice assignments</li>
    </ul>
    <p>Ready to get started? <Link to="/courses">Browse our courses</Link> and begin your journey!</p>
  </div>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <div>
      <h1>🔐 Login to Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>New here? <Link to="/signup">Create an account</Link> and start learning today!</p>
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful!");
  };

  return (
    <div>
      <h1>📝 Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in here</Link>.</p>
    </div>
  );
};

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully!");
  };

  return (
    <div>
      <h1>💬 We Value Your Feedback</h1>
      <p>Your feedback helps us grow and improve your learning experience. Thank you!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><CoursesDropdown /></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Online Courses Platform. All rights reserved.</p>
    <p>Made with ❤️ to help you learn, grow, and thrive.</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses-dropdown" element={<CoursesDropdown />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;