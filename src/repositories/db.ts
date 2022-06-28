// import {MongoClient} from 'mongodb';
// import {PaymentsType} from "./pay-db-repository";
//
//
//
//
// const mongoUri =
//     // process.env.mongoURI || 'mongodb://0.0.0.0:27017';
//     process.env.mongoURI || 'mongodb+srv://testPayment:uc1vjQ0P0MfuyI8J@cluster0.pvwlb2a.mongodb.net/?retryWrites=true&w=majority';
//
// export const client = new MongoClient(mongoUri)
//
// export async function runDb() {
//     try {
//         await client.connect();
//         await client.db("payments").command({ ping: 1})
//         console.log("Connected successfully to mongo server")
//     } catch {
//         console.log("Can't connect to db")
//         await client.close();
//     }
// }