import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'

import postRouter from './routes/post.js'
import authRouter from './routes/auth.js'

dotenv.config()
const PORT = process.env.PORT || 5000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_CONNECT = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.myssl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', postRouter)
app.use('/auth', authRouter)

async function startApp () {
  try {
    await mongoose.connect(DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    app.listen(PORT, () => {
      console.log('Server started on port: ' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

startApp()
