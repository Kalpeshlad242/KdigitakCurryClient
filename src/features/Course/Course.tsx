import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Course.css';
import AddCourseModal from './AddCourseModal';

const Course: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAddCourseModal = () => {
    setIsModalOpen(true);
  };

  const closeAddCourseModal = () => {
    setIsModalOpen(false);
  };

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Introduction to Programming',
      level: 'Beginner',
      description: 'Learn the basics of programming.',
    },
    {
      id: 2,
      name: 'Data Structures',
      level: 'Intermediate',
      description: 'Study advanced data structures and algorithms.',
    },
    {
      id: 3,
      name: 'Algorithms',
      level: 'Intermediate',
      description: 'Deep dive into complex algorithms.',
    },
    {
      id: 4,
      name: 'Web Development',
      level: 'Advance',
      description: 'Master the principles of object-oriented programming.',
    },
  ]);

  // Action handling logic for edit or delete
  const handleActionClick = (courseId: number) => {
    console.log(`Action clicked for course with ID: ${courseId}`);
    // Implement logic for editing or deleting a course here
  };

  return (
    <Layout>
      <div className="course-container">
        <div className="filter-bar">
          <label>Filters</label>
          <select>
            <option>Course</option>
            {/* Add more filtering options here */}
          </select>
        </div>

        <div className="course-header">
          <h2>Courses</h2>
          <button className="add-course" onClick={openAddCourseModal}>Add Course</button>
        </div>

        <table className="course-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Course Name</th>
              <th>Course Level</th>
              <th>Course Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.level}</td>
                <td>{course.description}</td>
                <td>
                  <button 
                    className="action-btn" 
                    onClick={() => handleActionClick(course.id)}>
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && <AddCourseModal onClose={closeAddCourseModal} />}
      </div>
    </Layout>
  );
};

export default Course;
