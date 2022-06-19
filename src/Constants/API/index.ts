export const host = process.env.REACT_APP_API_URL;

export const API_AUTH = host + "/auth";
export const API_LOGIN = host + "/login";
export const API_SEND_EMAIL_REG = host + "/register-send-email";

export const API_REGIONS = host + "/regions";

export const API_PROGRESS = (id: number | string) => host + "/progress/" + id;

export const API_SUPPORT = host + "/support";

const API_COURCES = host + "/courses";
export const API_COURCES_ALL = API_COURCES + "/all";
export const API_COURCE = (id?: string) => API_COURCES + "/" + id;
export const API_COURCE_USER_ALL = API_COURCES + "/p/all";
export const API_COURCE_USER = (id: string) => API_COURCES + "/p/" + id;
export const API_COURCE_PLAY = `${API_COURCES}`;

// Payments
export const API_PAYMENTS = host + "/payment";
export const API_PAYMENTS_TRANSACTIONS = API_PAYMENTS + "/all";

// TXI
export const hostTXI = process.env.REACT_APP_TXI_URL;
export const API_REGISTRATION = hostTXI + "/txi/register";
export const API_CONFIRM_EMAIL_SEND = hostTXI + "/confirm-email-send";
export const API_CONFIRM_EMAIL = hostTXI + "/confirm-email";
export const API_RESET_PASSWORD_SEND = hostTXI + "/reset-password-send";
export const API_RESET_PASSWORD = hostTXI + "/reset-password";
