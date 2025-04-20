export interface Course {
  id: string;
  name: string;
  description: string;
}

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}
