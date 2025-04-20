import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLecturesStart } from "./slice";
import { selectLectures, selectLectureLoading, selectLectureError } from "./selector";
import { Lecture } from "./type";

const LectureComponent: React.FC = () => {
  const dispatch = useDispatch();
  const lectures = useSelector(selectLectures);
  const loading = useSelector(selectLectureLoading);
  const error = useSelector(selectLectureError);

  useEffect(() => {
    dispatch(fetchLecturesStart());
  }, [dispatch]);

  if (loading) return <p>Loading lectures...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Lectures</h2>
      <ul className="space-y-2">
        {lectures.map((lecture: Lecture) => (
          <li key={lecture.id} className="border p-3 rounded shadow">
            <p><strong>Course:</strong> {lecture.courseName}</p>
            <p><strong>Date:</strong> {lecture.date}</p>
            <p><strong>Status:</strong> {lecture.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LectureComponent;
