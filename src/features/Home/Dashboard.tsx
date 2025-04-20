// src/features/Home/components/Dashboard.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchDashboardStatsStart } from './slice';
import {
  selectDashboardStats,
  selectDashboardLoading,
  selectDashboardError,
} from './selector';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const stats = useAppSelector(selectDashboardStats);
  const loading = useAppSelector(selectDashboardLoading);
  const error = useAppSelector(selectDashboardError);

  useEffect(() => {
    dispatch(fetchDashboardStatsStart());
  }, [dispatch]);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="text-lg">Total Courses</p>
          <p className="text-3xl font-semibold">{stats?.totalCourses ?? 0}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="text-lg">Total Lectures</p>
          <p className="text-3xl font-semibold">{stats?.totalLectures ?? 0}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <p className="text-lg">Total Instructors</p>
          <p className="text-3xl font-semibold">{stats?.totalInstructors ?? 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
