import { Request, Response, Router } from "express";
import {payments, paysRepository} from "../repositories/pay-repository";

export const payRouter = Router({})

payRouter.get('',
    (req: Request, res: Response) => {
        res.send(payments)})

payRouter.post('/payment',
    (req: Request, res: Response) => {
    const {CardNumber,
        ExpDate,
        Cvv, Amount} = req.body
        const isValidCard = paysRepository.postPayRouter(CardNumber,
            ExpDate,
            Cvv, Amount
        )
    if (isValidCard) {
        const jsonContent = JSON.stringify(isValidCard)
        res.send(jsonContent)
        res.status(201).send({
            errorsMessages: [{
                message: "Invalid credit card",
                field: "payment could not be made"
            }],
        })
    } else (
        res.sendStatus(400)
    )
})
