import React from "react";
import CoursesDropdown from "./CoursesDropdown";

const CoursesPage = () => {
  const courses = [
    "Python", "Java", "Full Stack Development", "UI & UX", "C & C++", "PHP", 
    "Web Designing - HTML, CSS, JavaScript, Bootstrap", "MEAN Stack", "MERN Stack", 
    "MEARN Stack", "Android", "Kotlin", "Flutter", "Database - Oracle, MongoDB, MySQL, MS SQL Server", 
    "Visual Studio Code", "Objective C", "Swift", "Go Lang", "Framework - Laravel, Django, Vue JS", 
    "Machine Learning", "React JS", "Node JS", "Angular JS", "TypeScript", "Flask", 
    "C#", "R Language", "Data Science", "Internship Training", "Inplant Training", 
    "Data Analytics", "IPT", "Graphic Designing", "Power BI", "PHP", 
    "Web Development", "Software Testing", "Java - Selenium Testing", "Automation Testing", 
    "Manual Testing", "React Native", "SEO - Digital Marketing"
  ];

  return (
    <div className="courses-page">
      <h1>Courses to Learn</h1>
      <CoursesDropdown courses={courses} />
      <div className="course-list">
        <h2>All Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursesPage;