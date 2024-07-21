export const baseUrl = 'https://730efdf3-a2ac-4dcb-ae55-ee393857599b.mock.pstmn.io';
export const createToken = (login: string, password: string) => `Basic ${window.btoa(login + ':' + password)}`;