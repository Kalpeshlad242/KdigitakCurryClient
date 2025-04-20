import React, { useState } from 'react';

interface AddLectureModalProps {
  onClose: () => void;
}

const AddLecture: React.FC<AddLectureModalProps> = ({ onClose }) => {
  const [instructor, setInstructor] = useState('');
  const [course, setCourse] = useState('');
  const [lectureDate, setLectureDate] = useState('');
  const [lectureTime, setLectureTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement submission logic here (e.g., API call)
    console.log({
      instructor,
      course,
      lectureDate,
      lectureTime,
      duration,
    });
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add Lecture</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Instructor*</label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              placeholder="Enter Instructor Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Course*</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="">Select Course</option>
              {/* Add dynamic course options here */}
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Lecture Date*</label>
            <input
              type="date"
              value={lectureDate}
              onChange={(e) => setLectureDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Lecture Time*</label>
            <input
              type="time"
              value={lectureTime}
              onChange={(e) => setLectureTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Duration*</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter Duration"
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="close-btn"
              onClick={onClose}
            >
              Close
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLecture;
