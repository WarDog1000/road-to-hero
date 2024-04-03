import { Response } from "express";

const handleError = (res: Response, status: number, text: string) => {
    res.status(status).json({
        message: text
    })
}

export { handleError }