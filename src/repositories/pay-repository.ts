export let cards = [
    {CardNumber: '0000 0000 0000 0000', ExpDate: '04/2022', Cvv: '123'}
]
export let payments = [
    {RequestId: 0,  Amount: 100  }
]


export const paysRepository = {
    postPayRouter(CardNumber: string,
                  ExpDate: string,
                  Cvv: string, Amount: number
    ) {
        const card = cards.find(c => c.CardNumber === CardNumber)
            if (card
                &&
                card.ExpDate === ExpDate &&
                card.Cvv === Cvv
            )
        {
            const newPay = {
                RequestId: +(new Date()),
                Amount: Amount
            }
            payments.push(newPay)
            return newPay
            } else {
                return false
            }
        }
}