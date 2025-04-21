// src/features/Home/type.ts
export interface MonthlyTrend {
  month: string;
  courses: number;
  lectures: number;
}

export interface DashboardStats {
  
  monthlyTrends: MonthlyTrend[];  
  totalCourses: number;
  totalLectures: number;
  totalInstructors: number;
  schedulingConflicts: { instructor: string; conflicts: number }[]; // Add this line// Added field
}

