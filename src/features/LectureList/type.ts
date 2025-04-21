export interface Lecture {
  id: string;
  courseName: string;
  lectureDate: string;
  lectureTime: string;
  attendanceStatus: 'Attended' | 'Not Attended';
}
