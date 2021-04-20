import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'

import router from './router.js'

const PORT = 5000
const DB_USER = 'mongodb+srv://user:user@cluster0.myssl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp () {
  try {
    await mongoose.connect(DB_USER, {
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
