// src/features/Instructor/components/Instructor.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchInstructorsStart,
  createInstructorStart,
  updateInstructorStart,
  deleteInstructorStart,
} from "./slice";
import { selectInstructors, selectInstructorLoading, selectInstructorError } from 
"./selector";
import { Instructor } from "./type";
import Layout from '../../components/Layout';

const InstructorComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const instructors = useAppSelector(selectInstructors);
  const loading = useAppSelector(selectInstructorLoading);
  const error = useAppSelector(selectInstructorError);

  const [editing, setEditing] = useState<Instructor | null>(null);
  const [form, setForm] = useState<Omit<Instructor, "id">>({ name: "", email: "", lectures: [] });

  useEffect(() => {
    dispatch(fetchInstructorsStart());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      dispatch(updateInstructorStart({ id: editing.id, ...form }));
      setEditing(null);
    } else {
      dispatch(createInstructorStart(form));
    }
    setForm({ name: "", email: "", lectures: [] });
  };

  const startEdit = (i: Instructor) => {
    setEditing(i);
    setForm({ name: i.name, email: i.email, lectures: i.lectures });
  };

  return (<Layout>
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">{editing ? "Edit Instructor" : "Add Instructor"}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded" disabled={loading}>
          {editing ? "Update" : "Create"}
        </button>
      </form>

      <h2 className="text-2xl font-bold">Instructors</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <ul className="space-y-4">
        {instructors.map((i: Instructor) => (
          <li key={i.id} className="border p-4 rounded shadow">
            <div className="flex justify-between items-start">
              <div>
                <p><strong>{i.name}</strong></p>
                <p>{i.email}</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => startEdit(i)} className="text-yellow-600">Edit</button>
                <button onClick={() => dispatch(deleteInstructorStart(i.id))} className="text-red-600">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div></Layout>
  );
};

export default InstructorComponent;
