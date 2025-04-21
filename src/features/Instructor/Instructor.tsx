// src/pages/Instructor/Instructor.tsx

import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Instructor.css';
import AddInstructorModal from './AddInstructorModal';

interface Instructor {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const InstructorPage: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane.smith@example.com' },
    { id: 3, name: 'Mark Johnson', phone: '555-123-4567', email: 'mark.johnson@example.com' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newInstructor, setNewInstructor] = useState<Omit<Instructor, 'id'>>({
    name: '',
    phone: '',
    email: '',
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewInstructor((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setInstructors((prev) => [
      ...prev,
      { id: prev.length + 1, ...newInstructor },
    ]);

    setNewInstructor({ name: '', phone: '', email: '' });
    closeModal();
  };

  return (
    <Layout>
      <div className="instructor-page">
        <h2>Instructor Management</h2>
        <button className="add-instructor-btn" onClick={openModal}>
          Add Instructor
        </button>

        <table className="instructor-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Instructor Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={instructor.id}>
                <td>{index + 1}</td>
                <td>{instructor.name}</td>
                <td>{instructor.phone}</td>
                <td>{instructor.email}</td>
                <td>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <AddInstructorModal
          newInstructor={newInstructor}
          onClose={closeModal}  // ✅ fix here
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
        )}
      </div>
    </Layout>
  );
};

export default InstructorPage;
