import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.mjs'
import connectCloudinary from './config/cloudinary.mjs'
import userRouter from './routes/userRoute.mjs'
import productRouter from './routes/productRoute.mjs'
import cartRouter from './routes/cartRoute.mjs'
import orderRouter from './routes/orderRoute.mjs'

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
const allowedOrigins = [
  'https://e-commerce-website-n90ikoi8d-e-commerce-websites-projects.vercel.app',
  'https://e-commerce-website-five-silk.vercel.app',
  'https://e-commerce-website-u9cv.vercel.app'
]

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}))

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

export default app;
