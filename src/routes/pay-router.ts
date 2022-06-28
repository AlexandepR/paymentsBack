import { Request, Response, Router } from "express";
import {paysRepository} from "../repositories/pay-memory-repository";
import {payments} from "../repositories/pay-memory-repository";

export const payRouter = Router({})

payRouter.get('',
    async (req: Request, res: Response) => {
    const foundPayments = await paysRepository.findPays()
        const result= JSON.stringify(foundPayments)
        res.status(201).send(result)})

payRouter.post('/payment',
     (req: Request, res: Response) => {
    const {CardNumber, ExpDate, Cvv, Amount} = req.body
    const isValidCard =  paysRepository.postPayRouter(CardNumber,
            ExpDate,Cvv, Amount)
    if (isValidCard) {
        const jsonContent = JSON.stringify(isValidCard)
        res.send(jsonContent)
        res.status(201).send(jsonContent)
    } else (
        res.status(401).send({
            errorsMessages: [{
                message: "Invalid credit card",
                field: "payment could not be made"
            }],
        })
    )
})
