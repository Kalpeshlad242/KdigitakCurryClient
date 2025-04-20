import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorLectures } from "./slice";
import { selectInstructorLectures } from "./selector";
import { InstructorLecture } from "./type";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Instructor = () => {
  const dispatch = useDispatch();
  const lectures = useSelector(selectInstructorLectures);

  useEffect(() => {
    dispatch(fetchInstructorLectures());
  }, [dispatch]);

  return (
    <div>
      <h2>My Lectures</h2>
      <ul>
      {lectures.map((lecture: InstructorLecture) => (
  <li key={lecture.id}>
    {lecture.courseName} - {lecture.date} - {lecture.status}
  </li>
))}

      </ul>
      <ToastContainer />

    </div>
  );
};

export default Instructor;
