import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardStatsStart } from "./slice";
import {
  selectDashboardStats,
  selectDashboardLoading,
  selectDashboardError,
} from "./selector";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector(selectDashboardStats);
  const loading = useSelector(selectDashboardLoading);
  const error = useSelector(selectDashboardError);

  useEffect(() => {
    dispatch(fetchDashboardStatsStart());
  }, [dispatch]);

  if (loading) return <p>Loading Dashboard...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded shadow">
          <p className="text-xl font-semibold">Courses</p>
          <p>{stats?.totalCourses}</p>
        </div>
        <div className="p-4 bg-green-100 rounded shadow">
          <p className="text-xl font-semibold">Lectures</p>
          <p>{stats?.totalLectures}</p>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow">
          <p className="text-xl font-semibold">Instructors</p>
          <p>{stats?.totalInstructors}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
