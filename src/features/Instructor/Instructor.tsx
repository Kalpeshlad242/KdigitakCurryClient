import React from 'react';
import './InstructorList.css';
import Layout from '../../components/Layout';

const instructors = [
  {
    id: 1,
    name: 'John Doe',
    phone: '(123) 456-7890',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '(987) 654-3210',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Mark Johnson',
    phone: '(565) 123-4567',
    email: 'mark.johnson@example.com',
  },
  {
    id: 4,
    name: 'Emily White',
    phone: '(333) 987-6543',
    email: 'emily.white@example.com',
  },
];

const InstructorList = () => {
  return (
    <Layout>
      <div className="instructor-container">
        <div className="filter-bar">
          <div className="filter-group">
            <label htmlFor="filter">Filters</label>
            <select id="filter" className="filter-select">
              <option value="">Instructor</option>
            </select>
          </div>
          <button className="add-btn">Add Instructor</button>
        </div>

        <div className="table-wrapper">
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
              {instructors.map((inst, index) => (
                <tr key={inst.id}>
                  <td>{index + 1}</td>
                  <td>{inst.name}</td>
                  <td>{inst.phone}</td>
                  <td>{inst.email}</td>
                  <td className="action-cell">⋯</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default InstructorList;
