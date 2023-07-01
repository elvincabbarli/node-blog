import express from "express";
import postRoutes from './routes/postsRoute.js'
import userRoutes from './routes/usersRoute.js'
import authRoutes from './routes/authRoute.js'
const app = express()
import cors from 'cors'
import cookieParser from "cookie-parser";

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.get('/' , (req,res) => {
    res.json('Hey')
})


app.listen(8000, () => {
    console.log('DB connected')
})



