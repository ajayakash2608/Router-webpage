import React from 'react';
import '../css/Careers.css';

const Careers = () => {
  return (
    <div className="careers-container mt-5">
      <h2 className="careers-title">Explore Exciting Career Opportunities with Us</h2>
      <p className="careers-intro">
        At [Your Company Name], we believe that our most valuable asset is our people. We are committed to creating a work environment that nurtures growth, fosters innovation, and rewards excellence. Our mission is to provide top-notch educational and professional services, and we recognize that achieving this goal relies heavily on the talent and dedication of our team members. We are continuously seeking passionate individuals who are eager to contribute to our dynamic organization.
      </p>
      <h3 className="careers-subtitle">Why Choose a Career with Us?</h3>
      <ul className="careers-list">
        <li><strong>Innovative and Inclusive Work Environment:</strong> Our company thrives on innovation and creativity. We encourage our team members to think outside the box, share their ideas, and work on groundbreaking projects. We value diversity and are committed to creating an inclusive workplace where every employee feels valued and respected. Our culture promotes collaboration and teamwork, ensuring that everyone’s voice is heard.</li>
        <li><strong>Career Development and Growth:</strong> We invest in the growth and development of our employees. We offer a range of training programs, workshops, and mentorship opportunities to help you enhance your skills and advance your career. Whether you are looking to gain new technical skills, develop leadership abilities, or explore different career paths, we provide the resources and support you need to succeed.</li>
        <li><strong>Work-Life Balance:</strong> We understand the importance of balancing professional responsibilities with personal life. Our flexible working arrangements and supportive policies are designed to help you manage your work and personal commitments effectively. We believe that a healthy work-life balance leads to increased productivity and overall job satisfaction.</li>
        <li><strong>Competitive Benefits Package:</strong> We offer a comprehensive benefits package to ensure that our employees are well-supported and rewarded for their hard work. Our benefits include competitive salaries, health and wellness programs, retirement plans, and various other perks. We are dedicated to providing a work environment that promotes both professional and personal well-being.</li>
        <li><strong>Opportunity to Make a Difference:</strong> Working with us means contributing to a mission that makes a positive impact on the lives of individuals. Our work is centered around improving educational outcomes and providing valuable career opportunities. As part of our team, you will have the chance to be involved in projects that make a real difference in the world.</li>
      </ul>
      <h3 className="careers-subtitle">Current Openings</h3>
      <ul className="careers-list">
        <li><strong>Software Developer:</strong> Join our development team and work on innovative technology solutions. This role requires strong programming skills, experience with modern development frameworks, and a passion for creating high-quality software. You will be involved in all stages of the development lifecycle, from design to deployment.</li>
        <li><strong>UI/UX Designer:</strong> As a UI/UX Designer, you will play a key role in creating intuitive and visually appealing user interfaces. This role requires expertise in design tools, a keen eye for detail, and a strong understanding of user experience principles. You will work closely with our development team to bring your designs to life.</li>
        <li><strong>Project Manager:</strong> Our Project Managers are responsible for overseeing and coordinating projects from start to finish. This role involves managing project timelines, resources, and budgets, as well as communicating with stakeholders and ensuring project deliverables meet quality standards. Strong organizational and leadership skills are essential for this position.</li>
      </ul>
      <p className="careers-contact">
        If you are interested in any of the positions listed above or if you would like to learn more about career opportunities with us, please send your resume and cover letter to <a href="mailto:careers@ourcompany.com" className="careers-link">careers@ourcompany.com</a>. We look forward to receiving your application and exploring the possibility of you joining our team.
      </p>
      <p className="careers-footer">
        At E-Leanring web, we are dedicated to fostering a supportive and rewarding work environment. We look forward to welcoming new team members who share our passion for excellence and innovation. Join us and be part of a team that is making a difference every day.
      </p>
    </div>
  );
};

export default Careers;
