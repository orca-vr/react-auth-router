import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL; //"https://connections-api.herokuapp.com";
// baseURL: import.meta.env.VITE_API_URL,

export const setAuthHeader = (token) => {
   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
   axios.defaults.headers.common.Authorization = "";
};

export const serviceSignUp = (user) => axios.post("/auth/signup", user);
export const serviceLogIn = (user) => axios.post("/auth/signin", user);
export const serviceLogOut = () => axios.post("/auth/signout");
export const serviceRefresh = () => axios.get("/auth/refresh");

export const serviceGetToday = () => axios.get("/water/today/2023-12-25");
export const serviceAddContact = (contact) => axios.post("/contacts", { name: contact.name, number: contact.phone });
export const serviceDeleteContact = (id) => axios.delete(`/contacts/${id}`);
export const serviceChangeContact = (contact) => axios.put(`/contacts/${contact.id}`, { name: contact.name, number: contact.phone });
