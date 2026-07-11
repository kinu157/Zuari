import 'dotenv/config'
import connectDB from './db/index.js'
import { app } from './app.js'

const port = 3000||process.env.PORT


connectDB()
.then(() => {
    app.listen(port, () => {
    console.log(`App listening on port ${port}`)})
})

.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
})

