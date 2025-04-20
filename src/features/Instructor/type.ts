export interface InstructorLecture {
  id: string;
  courseName: string;
  date: string;
  time: string;
  status: "Attended" | "Not Attended";
}
