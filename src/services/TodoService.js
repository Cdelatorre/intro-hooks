import http from "./BaseService";

export const listTodos = () => http.get('/todos');