import React, { useState, useEffect } from 'react';
import './Lecture.css';

interface AddLectureProps {
  lectureToEdit?: any; // Accept lecture data to be edited
  onSave: (lecture: any) => void;
  onClose: () => void;
}

const AddLecture: React.FC<AddLectureProps> = ({ lectureToEdit, onSave, onClose }) => {
  const [instructorName, setInstructorName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  // Pre-fill fields if editing an existing lecture
  useEffect(() => {
    if (lectureToEdit) {
      setInstructorName(lectureToEdit.instructorName);
      setCourseName(lectureToEdit.courseName);
      setDate(lectureToEdit.date);
      setTime(lectureToEdit.time);
      setDuration(lectureToEdit.duration);
    }
  }, [lectureToEdit]);

  const handleSave = () => {
    const lectureData = { id: lectureToEdit?.id, instructorName, courseName, date, time, duration };
    onSave(lectureData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{lectureToEdit ? 'Edit Lecture' : 'Add Lecture'}</h3>

        <div className="form-group">
          <label>Instructor Name</label>
          <input
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Lecture Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Lecture Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="modal-actions">
          <button onClick={handleSave}>{lectureToEdit ? 'Update' : 'Add'}</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddLecture;
