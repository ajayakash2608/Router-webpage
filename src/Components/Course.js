import React, { useState } from 'react';
import '../css/Course.css';
import VerticalNavBar from './VerticalNavBar';

const coursesData = {
  "Programming Languages": ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Swift', 'Kotlin'],
  "Full Stack Development": ['MERN Stack', 'MEAN Stack', 'Django + React', 'Flask + Vue.js', 'PHP + Laravel'],
  "Data Science": ['Data Analysis with Python', 'Machine Learning with R', 'Deep Learning', 'Big Data with Hadoop', 'Data Visualization'],
  "Cyber Security": ['Ethical Hacking', 'Penetration Testing', 'Network Security', 'Web Application Security', 'IoT Security'],
  "Others": ['Blockchain Basics', 'Game Development with Unity', 'IoT Development', 'Agile Project Management', 'Software Testing']
};

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programming Languages");

  return (
    <div className="course-page">
      <VerticalNavBar setSelectedCategory={setSelectedCategory} />
      <div className="course-content">
        <div className="course-container">
          {coursesData[selectedCategory].map((course, index) => (
            <div key={index} className="course-box">
              <h3>{course}</h3>
              <p>This is a description for the {course} course.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
