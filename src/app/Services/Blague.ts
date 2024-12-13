import axios from "axios";

export const fetchAllBlagues = async () => {
  try {
<<<<<<< HEAD
    const response = await axios.get("http://localhost:3000/blague");
=======
    const response = await axios.get(
      "https://malabar-1805984ed8b4.herokuapp.com/blague"
    );
>>>>>>> 6c0b858834dfd9d02f91d8cc8f276061f3033b7d
    return response.data.blagues;
  } catch (error) {
    console.error("Error fetching blagues:", error);
    throw error;
  }
};
