// import { client} from "./db";
//
// export type PaymentsType = {
//     RequestId: number, Amount: number
// }
// export type CardsType = {
//     CardNumber: string, ExpDate: string, Cvv: string
// }
// export let __payments: PaymentsType[] = [{RequestId: 0,  Amount: 100  }]
// export let __cards: CardsType[] = [{CardNumber: '0000 0000 0000 0000', ExpDate: '04/2022', Cvv: '123'}]
//
// export const paysRepository = {
//     async findPays(): Promise<PaymentsType[]> {
//         return client.db("payments").collection<PaymentsType>("payment").find({}).toArray()},
//     // async postPayRouter(CardNumber: string, ExpDate: string, Cvv: string, Amount: number
//     // ): Promise<PaymentsType | false> {
//     //     let card: CardsType | null = await client.db("cards").collection<CardsType>("card").findOne({CardNumber: CardNumber, ExpDate: ExpDate,Cvv: Cvv})
//     //     // const result = await client.db("cards").collection<CardsType>("card").findOne({CardNumber: CardNumber
//     //         // , ExpDate: ExpDate,Cvv: Cvv
//     //     // })
//     //     // const card = cards.find(c => c.CardNumber === CardNumber)
//     //     if (card)
//     //     // if (card && card.ExpDate === ExpDate && card.Cvv === Cvv)
//     //     {
//     //         const newPay = {
//     //             RequestId: +(new Date()),
//     //             Amount: Amount
//     //         }
//     //         const result = await client.db("payments").collection<PaymentsType>("payment").insertOne(newPay)
//     //         // result.insertedId
//     //         // __payments.push(newPay)
//     //         return newPay
//     //     } else {
//     //         return false
//     //     }
//     // },
//     async postPayRouter(CardNumber: string, ExpDate: string, Cvv: string, Amount: number
//     ): Promise<PaymentsType | false> {
//         let card: CardsType | null = await client.db("cards").collection<CardsType>("card").findOne({CardNumber: CardNumber, ExpDate: ExpDate,Cvv: Cvv})
//         // const result = await client.db("cards").collection<CardsType>("card").findOne({CardNumber: CardNumber
//         // , ExpDate: ExpDate,Cvv: Cvv
//         // })
//         // const card = cards.find(c => c.CardNumber === CardNumber)
//         if (card)
//
//         {
//             const newPay = {
//                 RequestId: +(new Date()),
//                 Amount: Amount
//             }
//             const result = await client.db("payments").collection<PaymentsType>("payment").insertOne(newPay)
//             // result.insertedId
//             // __payments.push(newPay)
//             return newPay
//         } else {
//             return false
//         }
//     },
// }