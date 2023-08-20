import axios from "axios";

export default axios.create({
    baseURL: "https://league-app-backend-930340512a03.herokuapp.com/api",
    headers: {
        "Content-type": "application/json",
    },
});

//
