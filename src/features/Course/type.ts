export interface Course {
  id: string;
  name: string;
  level: string;
  description: string;
  imageUrl: string;
}

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}
