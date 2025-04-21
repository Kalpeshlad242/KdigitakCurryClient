import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchCoursesStart,
  createCourseStart,
  updateCourseStart,
  deleteCourseStart,
} from "./slice";
import {
  selectCourses,
  selectCourseLoading,
  selectCourseError,
} from "./selector";
import { Course } from "./type";
import Layout from "../../components/Layout";
const CourseComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const courses = useAppSelector(selectCourses);
  const loading = useAppSelector(selectCourseLoading);
  const error = useAppSelector(selectCourseError);

  const [editing, setEditing] = useState<Course | null>(null);
  const [form, setForm] = useState<Omit<Course, "id">>({
    name: "",
    level: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, [dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      dispatch(updateCourseStart({ id: editing.id, ...form }));
      setEditing(null);
    } else {
      dispatch(createCourseStart(form));
    }
    setForm({ name: "", level: "", description: "", imageUrl: "" });
  };

  const startEdit = (c: Course) => {
    setEditing(c);
    setForm({
      name: c.name,
      level: c.level,
      description: c.description,
      imageUrl: c.imageUrl,
    });
  };

  return (
    <Layout>
      <div className="p-4 space-y-6">
        <h2 className="text-2xl font-bold">
          {editing ? "Edit Course" : "Add Course"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 max-w-md"
        >
          {/* form fields */}
        </form>

        <h2 className="text-2xl font-bold">Courses</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <ul className="space-y-4">
          {courses.map((c: Course) => (
            <li key={c.id} className="border p-4 rounded shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p>
                    <strong>{c.name}</strong> ({c.level})
                  </p>
                  <p>{c.description}</p>
                  {c.imageUrl && (
                    <img
                      src={c.imageUrl}
                      alt={c.name}
                      className="mt-2 h-24 rounded"
                    />
                  )}
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => startEdit(c)}
                    className="text-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteCourseStart(c.id))}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CourseComponent;
