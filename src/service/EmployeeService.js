import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8080/api/v1/";

export const getEmployees = () => axios.get(REST_API_BASE_URL+"employees");

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL+"create", employee);