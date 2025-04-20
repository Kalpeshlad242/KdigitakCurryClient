export interface Instructor {
  id: string;
  name: string;
  email: string;
  lectures: string[]; // or any[] or Lecture[] depending on your app
}

export interface InstructorState {
  instructors: Instructor[];
  loading: boolean;
  error: string | null;
}
