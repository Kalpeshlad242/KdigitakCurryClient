import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./Course.css";
import AddCourseModal from "./AddCourseModal";

interface Course {
  id: number;
  name: string;
  level: string;
  description: string;
}

interface CourseInput {
  id?: number;
  name: string;
  level: string;
  description: string;
}

const Course: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      name: "Introduction to Programming",
      level: "Beginner",
      description: "Learn the basics of programming.",
    },
    {
      id: 2,
      name: "Data Structures",
      level: "Intermediate",
      description: "Study advanced data structures and algorithms.",
    },
    {
      id: 3,
      name: "Algorithms",
      level: "Intermediate",
      description: "Deep dive into complex algorithms.",
    },
    {
      id: 4,
      name: "Web Development",
      level: "Advanced",
      description: "Master the principles of object‑oriented programming.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseInput>();

  const openAddCourseModal = (course?: Course) => {
    if (course) {
      // Editing: pass its values
      setSelectedCourse({
        id: course.id,
        name: course.name,
        level: course.level,
        description: course.description,
      });
    } else {
      // Adding new: clear fields
      setSelectedCourse({ name: "", level: "", description: "" });
    }
    setIsModalOpen(true);
  };

  const closeAddCourseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(undefined);
  };

  const handleSaveCourse = (input: CourseInput) => {
    if (input.id != null) {
      // update existing
      setCourses(
        courses.map((c) =>
          c.id === input.id ? ({ ...c, ...input } as Course) : c,
        ),
      );
    } else {
      // add new
      const newCourse: Course = {
        ...input,
        id: Date.now(),
      } as Course;
      setCourses([...courses, newCourse]);
    }
    closeAddCourseModal();
  };

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <Layout>
      <div className="course-container">
        <div className="course-header">
          <h2>Courses</h2>
          <button className="add-course" onClick={() => openAddCourseModal()}>
            Add Course
          </button>
        </div>

        <table className="course-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Course Name</th>
              <th>Course Level</th>
              <th>Course Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={course.id}>
                <td>{idx + 1}</td>
                <td>{course.name}</td>
                <td>{course.level}</td>
                <td>{course.description}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openAddCourseModal(course)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <AddCourseModal
            courseToEdit={selectedCourse}
            onSave={handleSaveCourse}
            onClose={closeAddCourseModal}
          />
        )}
      </div>
    </Layout>
  );
};

export default Course;
