import axios from "axios";

export const fetchAllBlagues = async () => {
  try {
    const response = await axios.get("http://localhost:3000/blague");
    return response.data.blagues;
  } catch (error) {
    console.error("Error fetching blagues:", error);
    throw error;
  }
};
