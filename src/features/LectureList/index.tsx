// src/features/LectureList/index.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLecturesStart } from './slice'; // Action creator for starting the fetch
import { selectLectures, selectLectureFilters } from './selector'; // Selectors for fetching lectures and filters
import { Lecture } from './commonTypes'; // Import the correct type
import Layout from '../../components/Layout';
import './LectureList.css';  // Import the CSS file

const LectureList: React.FC = () => {
  const dummyLectures: Lecture[] = [
    {
      id: '1',
      courseName: 'Mathematics 101',
      lectureDate: '2025-04-21',
      lectureTime: '10:00 AM',
      attendanceStatus: 'Attended',
    },
    {
      id: '2',
      courseName: 'Physics 202',
      lectureDate: '2025-04-22',
      lectureTime: '02:00 PM',
      attendanceStatus: 'Not Attended',
    },
    {
      id: '3',
      courseName: 'Computer Science 301',
      lectureDate: '2025-04-23',
      lectureTime: '09:00 AM',
      attendanceStatus: 'Attended',
    },
    {
      id: '4',
      courseName: 'Chemistry 101',
      lectureDate: '2025-04-24',
      lectureTime: '11:00 AM',
      attendanceStatus: 'Not Attended',
    },
    {
      id: '5',
      courseName: 'Biology 201',
      lectureDate: '2025-04-25',
      lectureTime: '01:00 PM',
      attendanceStatus: 'Attended',
    },
    {
      id: '6',
      courseName: 'Literature 101',
      lectureDate: '2025-04-26',
      lectureTime: '03:00 PM',
      attendanceStatus: 'Not Attended',
    },
  ];
  const dispatch = useDispatch();
  const lectures: Lecture[] = dummyLectures;
  const filters = useSelector(selectLectureFilters);
  const [filteredLectures, setFilteredLectures] = useState<Lecture[]>(lectures);

  useEffect(() => {
    dispatch(fetchLecturesStart()); // Trigger the action that starts fetching lectures
  }, [dispatch]);

  useEffect(() => {
    // Filter the lectures based on the selected filters
    const filtered = lectures.filter((lec) => {
      return (
        (!filters.courseName || lec.courseName.toLowerCase().includes(filters.courseName.toLowerCase())) &&
        (!filters.lectureDate || lec.lectureDate === filters.lectureDate) &&
        (!filters.attendanceStatus || lec.attendanceStatus === filters.attendanceStatus)
      );
    });
    setFilteredLectures(filtered);
  }, [lectures, filters]);

  const handleAttendanceToggle = (id: string, status: 'Attended' | 'Not Attended') => {
    // Handle attendance toggle logic here
    console.log(`Toggling attendance for lecture with ID: ${id}`);
  };

  return (
    <Layout>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Attendance Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLectures.map((lecture, index) => (
              <tr key={lecture.id}>
                <td>{index + 1}</td>
                <td>{lecture.courseName}</td>
                <td>{lecture.lectureDate}</td>
                <td>{lecture.lectureTime}</td>
                <td>
                  <span
                    className={`status-${lecture.attendanceStatus === 'Attended' ? 'attended' : 'not-attended'}`}
                  >
                    {lecture.attendanceStatus}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleAttendanceToggle(lecture.id, lecture.attendanceStatus)}
                    className="button"
                  >
                    Toggle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default LectureList;
