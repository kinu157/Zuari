import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true
}))


//registering routes
import contactRouter from "./routes/contact.routes.js";

app.use("/api/contact", contactRouter);

export { app }