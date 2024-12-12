import axios from "axios";

export const fetchAllBlagues = async () => {
  try {
    const response = await axios.get(
      "https://malabar-1805984ed8b4.herokuapp.com/blague"
    );
    return response.data.blagues;
  } catch (error) {
    console.error("Error fetching blagues:", error);
    throw error;
  }
};
