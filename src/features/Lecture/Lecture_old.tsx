import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLecturesStart,
  createLectureStart,
  deleteLectureStart,
} from "./slice";
import { selectLectures } from "./selector";
import Layout from "../../components/Layout";
const Lecture = () => {
  const dispatch = useDispatch();
  const lectures = useSelector(selectLectures);

  const [form, setForm] = useState({
    topic: "",
    instructorId: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    dispatch(fetchLecturesStart());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createLectureStart(form));
    setForm({ topic: "", instructorId: "", date: "", time: "" });
  };

  const handleDelete = (id: string) => {
    dispatch(deleteLectureStart(id));
  };

  return (
    <Layout>
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Lecture Management</h2>
        <form
          onSubmit={handleSubmit}
          className="mb-6 space-y-4 bg-gray-100 p-4 rounded"
        >
          <input
            className="w-full p-2 border rounded"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            placeholder="Topic"
            required
          />
          <input
            className="w-full p-2 border rounded"
            name="instructorId"
            value={form.instructorId}
            onChange={handleChange}
            placeholder="Instructor ID"
            required
          />
          <input
            className="w-full p-2 border rounded"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border rounded"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            required
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            Create Lecture
          </button>
        </form>

        <ul className="space-y-3">
          {lectures.map((lecture) => (
            <li
              key={lecture.id}
              className="bg-white shadow p-4 rounded flex justify-between items-center"
            >
              <div>
                <div>
                  <strong>Topic:</strong> {lecture.topic}
                </div>
                <div>
                  <strong>Instructor ID:</strong> {lecture.instructorId}
                </div>
                <div>
                  <strong>Date:</strong> {lecture.date}
                </div>
                <div>
                  <strong>Time:</strong> {lecture.time}
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(lecture.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Lecture;
