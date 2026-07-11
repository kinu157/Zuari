import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())

//registering routes
import contactRouter from "./routes/contact.routes.js";

app.use("/contact", contactRouter);

export { app }