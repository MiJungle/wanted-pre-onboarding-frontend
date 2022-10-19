import axios from 'axios';

export const api = axios.create({
    baseURL: "https://pre-onboarding-selection-task.shop",
});
