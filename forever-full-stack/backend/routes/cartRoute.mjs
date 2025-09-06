import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.mjs'
import authUser from '../middleware/auth.mjs'

const cartRouter = express.Router()

cartRouter.post('/get',authUser, getUserCart)
cartRouter.post('/add',authUser, addToCart)
cartRouter.post('/update',authUser, updateCart)

export default cartRouter
