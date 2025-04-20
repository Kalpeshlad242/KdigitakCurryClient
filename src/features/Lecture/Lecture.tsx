import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Lecture.css';

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
      duration: '1 Hours 30 Minutes',
    },
    {
      id: 3,
      instructorName: 'Mark Johnson',
      courseName: 'Algorithms',
      date: '07/03/2025',
      time: '10:00 am to 11:30 am',
      duration: '1 Hours 30 Minutes',
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

  return (
    <Layout>
      <div className="lecture-container">
        <div className="filter-bar">
          <label>Filters</label>
          <select>
            <option>Lecture</option>
            {/* Add more filters if needed */}
          </select>
        </div>

        <div className="lecture-header">
          <h2>Lecture</h2>
          <button className="add-lecture">Add Lecture</button>
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
            {lectures.map((lecture, index) => (
              <tr key={lecture.id}>
                <td>{index + 1}</td>
                <td>{lecture.instructorName}</td>
                <td>{lecture.courseName}</td>
                <td>{lecture.date}</td>
                <td>{lecture.time}</td>
                <td>{lecture.duration}</td>
                <td>
                  <button className="action-btn">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Lecture;
