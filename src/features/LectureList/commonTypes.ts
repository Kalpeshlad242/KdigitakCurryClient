// src/features/commonTypes.ts

// Define the Lecture type
export interface Lecture {
    id: string;
    courseName: string;
    lectureDate: string;
    lectureTime: string;
    attendanceStatus: 'Attended' | 'Not Attended';
  }
  
  // Define any other common types here (e.g., filters)
  export interface Filters {
    courseName: string;
    lectureDate: string;
    attendanceStatus: string;
  }
  