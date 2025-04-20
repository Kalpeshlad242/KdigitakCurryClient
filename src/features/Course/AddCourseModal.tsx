import React from 'react';
import './AddCourseModal.css';

// Define the type for the props
interface AddCourseModalProps {
  onClose: () => void;  // Explicitly define the type of the onClose function
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add New Course</h2>
        <form>
          <div className="form-group">
            <label>Course Name*</label>
            <input type="text" placeholder="Enter Course Name" required />
          </div>
          <div className="form-group">
            <label>Course Level*</label>
            <select required>
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="form-group">
            <label>Course Description*</label>
            <textarea placeholder="Enter Course Description" required />
          </div>
          <div className="form-group">
            <label>Course Photo*</label>
            <input type="file" required />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onClose}>Close</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
