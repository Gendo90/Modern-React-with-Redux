import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID WG7F5urzdwVmHq4SLJUKqoJY7cBH6hHE7vqT3Ol9Nvc"
    }
})
