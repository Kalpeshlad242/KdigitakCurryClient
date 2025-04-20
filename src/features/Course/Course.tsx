import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesStart } from "./slice";
import {
  selectCourses,
  selectCourseLoading,
  selectCourseError,
} from "./selector";

const Course: React.FC = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const loading = useSelector(selectCourseLoading);
  const error = useSelector(selectCourseError);

  useEffect(() => {
    dispatch(fetchCoursesStart());
  }, [dispatch]);

  return (
    <div>
      <h2>Available Courses</h2>
      {loading && <p>Loading courses...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong>: {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
