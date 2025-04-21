import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLecturesStart, toggleAttendanceStatus } from './slice';
import { selectLectures, selectLectureFilters } from './selector';
import { Lecture } from './commonTypes';
import Layout from '../../components/Layout';
import './LectureList.css';

const LectureList: React.FC = () => {
  const dummyLectures: Lecture[] = [
    {
      id: '1',
      courseName: 'Introduction to Programming',
      lectureDate: '2025-03-04',
      lectureTime: '06:00 pm to 08:00 pm',
      attendanceStatus: 'Not Attended',
    },
    {
      id: '2',
      courseName: 'Data Structures',
      lectureDate: '2025-03-08',
      lectureTime: '12:00 pm to 01:30 pm',
      attendanceStatus: 'Attended',
    },
    {
      id: '3',
      courseName: 'Algorithms',
      lectureDate: '2025-03-07',
      lectureTime: '10:00 am to 11:30 am',
      attendanceStatus: 'Not Attended',
    },
    {
      id: '4',
      courseName: 'Web Development',
      lectureDate: '2025-03-08',
      lectureTime: '04:00 pm to 06:30 pm',
      attendanceStatus: 'Attended',
    },
  ];

  const dispatch = useDispatch();
  const lectures: Lecture[] = dummyLectures;
  const filters = useSelector(selectLectureFilters);
  const [filteredLectures, setFilteredLectures] = useState<Lecture[]>(lectures);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchLecturesStart());
  }, [dispatch]);

  useEffect(() => {
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
    console.log(`Toggling ${id} to ${status}`);
    dispatch(toggleAttendanceStatus({ id, status }));
    setOpenDropdownId(null);
  };

  return (
    <Layout>
      <div className="lecture-container">
        <div className="filters-box">Filters</div>

        <table className="lecture-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Course Name</th>
              <th>Lecture Date</th>
              <th>Lecture Time</th>
              <th>Attendance Status</th>
              <th>Action</th>
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
                  <span className={`status-badge ${lecture.attendanceStatus === 'Attended' ? 'attended' : 'not-attended'}`}>
                    {lecture.attendanceStatus}
                  </span>
                </td>
                <td className="action-cell">
                  <div className="dropdown-container">
                    <button
                      onClick={() => setOpenDropdownId(openDropdownId === lecture.id ? null : lecture.id)}
                      className="action-button"
                    >
                      &#x22EE;
                    </button>
                    {openDropdownId === lecture.id && (
                      <div className="dropdown-menu">
                        <div onClick={() => handleAttendanceToggle(lecture.id, 'Attended')}>Attended</div>
                        <div onClick={() => handleAttendanceToggle(lecture.id, 'Not Attended')}>Not Attended</div>
                      </div>
                    )}
                  </div>
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
