import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.mjs'
import connectCloudinary from './config/cloudinary.mjs'
import userRouter from './routes/userRoute.mjs'
import productRouter from './routes/productRoute.mjs'
import cartRouter from './routes/cartRoute.mjs'
import orderRouter from './routes/orderRoute.mjs'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

export default app;
