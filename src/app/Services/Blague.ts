import axios from "axios";

export const fetchAllBlagues = async () => {
  try {
    const response = await axios.get(
      "https://malabar-a2097f13b22e.herokuapp.com/blague"
    );
    return response.data.blagues;
  } catch (error) {
    console.error("Error fetching blagues:", error);
    throw error;
  }
};
