import 'dotenv/config'

export const config = {
  PORT: process.env.PORT,
  SOCKET: process.env.SOCKET,
  LOGS: ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"',
  DB_URI: process.env.DB_URI
}