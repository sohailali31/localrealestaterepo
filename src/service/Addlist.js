import axios from "axios";

// ✅ Use Vite environment variable for API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Upload file
export const addData = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/files/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error uploading data:", error);
    throw error;
  }
};

// Fetch all data
export const fetchRecords = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files/all`);
    return response;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};

// Delete record by ID
export const deleteRecordsById = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/files/delete/${id}`);
    return response;
  } catch (error) {
    console.error("Error while deleting file:", error);
    throw error;
  }
};
