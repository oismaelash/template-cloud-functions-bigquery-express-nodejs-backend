import express, { Router } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import * as ProductController from '@controllers/ProductController'

const app = express()
const router = Router()

app.use(cors({ origin: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

router.post('/', ProductController.createHandler)

export default app
