import React, { useState, useEffect } from 'react';
import './Course.css';

interface CourseInput {
  id?: number;
  name: string;
  level: string;
  description: string;
}

interface AddCourseModalProps {
  courseToEdit?: CourseInput;
  onSave: (course: CourseInput) => void;
  onClose: () => void;
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({
  courseToEdit,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (courseToEdit) {
      setName(courseToEdit.name);
      setLevel(courseToEdit.level);
      setDescription(courseToEdit.description);
    } else {
      setName('');
      setLevel('');
      setDescription('');
    }
  }, [courseToEdit]);

  const handleSave = () => {
    onSave({
      id: courseToEdit?.id,
      name,
      level,
      description,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{courseToEdit?.id ? 'Edit Course' : 'Add Course'}</h3>

        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Course Level</label>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Course Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="modal-actions">
          <button onClick={handleSave}>
            {courseToEdit?.id ? 'Update' : 'Add'}
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseModal;
