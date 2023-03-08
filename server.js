import express from 'express';
import cors from 'cors';
import mailRouter from './routes/mailRoutes.js';


const PORT = 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/mail', mailRouter)


app.listen(PORT, ()=> console.log(`App has been started at PORT = ${PORT}`))