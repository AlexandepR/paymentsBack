import cors from 'cors';
import bodyParser from "body-parser";
import express from 'express'
import {payRouter} from "./routes/pay-router";

const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 3010

app.use('/', payRouter)

// const startApp = async () => {
//     await runDb()
// }
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// startApp()