import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const header = req.headers
  const userAgent = header["user-agent"]
  const aceptLang = header["accept-language"]
  const allow = header["allow"]
  console.log(userAgent)
  console.log(aceptLang)
  console.log(allow)

  next()

}

export { logMiddleware }