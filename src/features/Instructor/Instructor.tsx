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
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [newInstructor, setNewInstructor] = useState<Omit<Instructor, 'id'>>({
    name: '',
    phone: '',
    email: '',
  });

  const openModal = (instructor?: Instructor) => {
    if (instructor) {
      setIsEditing(true);
      setEditId(instructor.id);
      setNewInstructor({
        name: instructor.name,
        phone: instructor.phone,
        email: instructor.email,
      });
    } else {
      setIsEditing(false);
      setEditId(null);
      setNewInstructor({ name: '', phone: '', email: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setEditId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewInstructor((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing && editId !== null) {
      setInstructors((prev) =>
        prev.map((inst) =>
          inst.id === editId ? { ...inst, ...newInstructor } : inst
        )
      );
    } else {
      setInstructors((prev) => [
        ...prev,
        { id: prev.length + 1, ...newInstructor },
      ]);
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    setInstructors((prev) => prev.filter((inst) => inst.id !== id));
  };

  return (
    <Layout>
      <div className="instructor-page">
        <h2>Instructor Management</h2>
        <button className="add-instructor-btn" onClick={() => openModal()}>
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
                  <button
                    className="action-btn"
                    onClick={() => openModal(instructor)}
                  >
                    Edit
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => handleDelete(instructor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <AddInstructorModal
            newInstructor={newInstructor}
            onClose={closeModal}
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </Layout>
  );
};

export default InstructorPage;
