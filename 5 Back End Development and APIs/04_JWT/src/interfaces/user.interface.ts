export interface User {
  username: string,
  role: "ADMIN" | "MANAGER" | "USER" | "ROOT"
  email: string
  password: string
}