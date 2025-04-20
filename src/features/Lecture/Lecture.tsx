import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Lecture.css';
import AddLecture from './AddLecturer'; // Import AddLecture Modal

const Lecture = () => {
  const [lectures, setLectures] = useState([
    {
      id: 1,
      instructorName: 'John Doe',
      courseName: 'Introduction to Programming',
      date: '04/03/2025',
      time: '06:00 pm to 08:00 pm',
      duration: '2 Hours',
    },
    {
      id: 2,
      instructorName: 'Jane Smith',
      courseName: 'Data Structures',
      date: '06/03/2025',
      time: '12:00 pm to 01:30 pm',
      duration: '1 Hour 30 Minutes',
    },
    {
      id: 3,
      instructorName: 'Mark Johnson',
      courseName: 'Algorithms',
      date: '07/03/2025',
      time: '10:00 am to 11:30 am',
      duration: '1 Hour 30 Minutes',
    },
    {
      id: 4,
      instructorName: 'Emily White',
      courseName: 'Web Development',
      date: '08/03/2025',
      time: '04:00 pm to 06:30 pm',
      duration: '2 Hours 30 Minutes',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [filter, setFilter] = useState(''); // Filter state for lecture search

  const openAddLectureModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeAddLectureModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value); // Update filter state
  };

  return (
    <Layout>
      <div className="lecture-container">
        <div className="filter-bar">
          <label>Filter by Course</label>
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All Courses</option>
            <option value="Introduction to Programming">Introduction to Programming</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Algorithms">Algorithms</option>
            <option value="Web Development">Web Development</option>
          </select>
        </div>

        <div className="lecture-header">
          <h2>Lecture</h2>
          <button className="add-lecture" onClick={openAddLectureModal}>Add Lecture</button>
        </div>

        <table className="lecture-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Instructor Name</th>
              <th>Course Name</th>
              <th>Lecture Date</th>
              <th>Lecture Time</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lectures
              .filter((lecture) => (filter ? lecture.courseName === filter : true)) // Apply filter
              .map((lecture, index) => (
                <tr key={lecture.id}>
                  <td>{index + 1}</td>
                  <td>{lecture.instructorName}</td>
                  <td>{lecture.courseName}</td>
                  <td>{lecture.date}</td>
                  <td>{lecture.time}</td>
                  <td>{lecture.duration}</td>
                  <td>
                    <button className="action-btn" onClick={() => alert('Editing ' + lecture.courseName)}>Edit</button>
                    <button className="action-btn" onClick={() => alert('Deleting ' + lecture.courseName)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && <AddLecture onClose={closeAddLectureModal} />} {/* Modal Component */}
    </Layout>
  );
};

export default Lecture;
