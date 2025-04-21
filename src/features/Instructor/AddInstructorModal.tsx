// src/pages/Instructor/AddInstructorModal.tsx

import React from "react";
import "./Instructor.css";

interface AddInstructorModalProps {
  newInstructor: {
    name: string;
    phone: string;
    email: string;
  };
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AddInstructorModal: React.FC<AddInstructorModalProps> = ({
  newInstructor,
  onClose,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Instructor</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Instructor Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newInstructor.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={newInstructor.phone}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newInstructor.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">
              Add Instructor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInstructorModal;
