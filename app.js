import cors from 'cors'
import morgan from 'morgan';
import 'express-async-errors';
import express from 'express';
import bodyParser from "body-parser";

import { routes } from './src/routes/index.js';

const app = express();
const port = 3000;
const corsOptions = {
   origin:'*', 
   credentials:true, //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(morgan('combined')); // using morgan for logs
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send("I will work with Supabase for registration data.");
});

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});