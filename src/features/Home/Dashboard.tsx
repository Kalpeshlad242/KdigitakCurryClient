import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchDashboardStatsStart } from "./slice";
import {
  selectDashboardStats,
  selectDashboardLoading,
  selectDashboardError,
} from "./selector";
import Layout from "../../components/Layout";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const COLORS = ["#4F46E5", "#10B981", "#F59E0B"]; // Indigo, Emerald, Amber

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const stats = useAppSelector(selectDashboardStats);
  const loading = useAppSelector(selectDashboardLoading);
  const error = useAppSelector(selectDashboardError);

  useEffect(() => {
    dispatch(fetchDashboardStatsStart());
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading dashboard…</p>;
  // Handle error if necessary
  // if (error)   return <p className="p-4 text-red-600">{error}</p>;

  // Summary data for cards / existing charts
  const summaryData = [
    { name: "Courses", value: stats?.totalCourses ?? 20 },
    { name: "Lectures", value: stats?.totalLectures ?? 50 },
    { name: "Instructors", value: stats?.totalInstructors ?? 100 },
  ];

  // Advanced analytics data (must be provided by your slice)
  const trendData = stats?.monthlyTrends ?? [];

  // Fallback for schedulingConflicts in case it's missing in the stats
  console.log(stats); // Check what `stats` contains
  const schedulingConflicts = stats?.schedulingConflicts ?? [
    { instructor: "John Doe", conflicts: 2 },
    { instructor: "Jane Smith", conflicts: 0 },
    { instructor: "Mark Johnson", conflicts: 1 },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-8">
        {/* Pie & Bar Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={summaryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {summaryData.map((entry, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={summaryData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill={COLORS[0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- Advanced Analytics Section --- */}
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Advanced Analytics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Scheduling Conflicts for Instructors */}
            <div>
              <h3 className="text-xl mb-2">Instructor Scheduling Conflicts</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={schedulingConflicts}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="instructor" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="conflicts" fill={COLORS[1]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Courses Added Trend */}
            <div>
              <h3 className="text-xl mb-2">Courses Added per Month</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="courses"
                    name="Courses Added"
                    stroke={COLORS[0]}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Lectures Conducted Trend */}
            <div>
              <h3 className="text-xl mb-2">Lectures Conducted per Month</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="lectures"
                    name="Lectures Conducted"
                    stroke={COLORS[1]}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
