import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Course.css';
import AddCourseModal from './AddCourseModal';

const Course: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      level: 'Advanced',
      description: 'Master the principles of object-oriented programming.',
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const openAddCourseModal = () => {
    setIsModalOpen(true);
  };

  const closeAddCourseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditCourse = (course: any) => {
    // Open the Edit modal with the course data (could be handled with another modal)
    console.log('Editing course:', course);
    // Implement the logic to handle course editing
  };

  const handleDeleteCourse = (courseId: number) => {
    setCourses(courses.filter((course) => course.id !== courseId));
    console.log(`Deleted course with ID: ${courseId}`);
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
          <button className="add-course" onClick={openAddCourseModal}>
            Add Course
          </button>
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
                    className="edit-btn"
                    onClick={() => handleEditCourse(course)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    Delete
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
