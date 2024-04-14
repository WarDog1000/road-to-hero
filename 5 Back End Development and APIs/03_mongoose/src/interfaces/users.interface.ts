export default interface User {
  username: string
  email: string
  password: string
  comparePassWord: (arg: string) => Promise<boolean>
}