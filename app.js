import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/config.js';

import studentsRoutes from './routes/studentsRoutes.js';

dotenv.config();

connectDB(); //establish connection with Database

const app = express();
app.use(express.json());

app.use('/students', studentsRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});