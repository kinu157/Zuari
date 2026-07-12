import { axios } from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/contact",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export const createContact = async (contactData) => {
    try {
        const response = await api.post("/", contactData);
        return response.data;
    } catch (error) {
        console.error("Error creating contact:", error);
        throw error;
    }
}