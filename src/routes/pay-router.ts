import { Request, Response, Router } from "express";
import {paysRepository} from "../repositories/pay-repository";

export const payRouter = Router({})

payRouter.post('/',
    (req: Request, res: Response) => {
    const {CardNumber, ExpDate, Cvv, Amount} = req.body
        const isValidCard = paysRepository.postPayRouter(CardNumber, ExpDate, Cvv, Amount)
    if (isValidCard) {
        res.status(201).send(isValidCard)
    } else (
        res.sendStatus(400)
    )
})
