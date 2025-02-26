import express, { Router } from 'express'

import { addtocart } from '../controller/cart.controller'

const router = express.Router();

router.post("/add",addtocart);


export default Router;