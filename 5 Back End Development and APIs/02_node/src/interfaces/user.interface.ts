import { Auth } from "./auth.interface"

export interface User extends Auth{
  name: string
  role: "ADMIN" | "MANAGER" | "USER" | "ROOT"
}