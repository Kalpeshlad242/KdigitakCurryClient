export interface Lecture {
  id: string;
  courseId: string;
  instructorId: string;
  date: string;
  status: string;
  courseName:string;
}

export interface LectureState {
  lectures: Lecture[];
  loading: boolean;
  error: string | null;
}
