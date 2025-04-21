import axios from "axios"; // or any HTTP client you're using

// Define the API call to fetch lectures
export const api = {
  fetchLectures: async (): Promise<any> => {
    try {
      const response = await axios.get("/api/lectures"); // Replace with actual API endpoint
      return response; // Ensure the response contains the expected data
    } catch (error) {
      throw new Error("Failed to fetch lectures"); // Throw a specific error if the API call fails
    }
  },
};
