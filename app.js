import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/config.js';

import studentsRoutes from './routes/studentsRoutes.js';

dotenv.config();

connectDB(); //establish connection with Database

const app = express();
app.use(express.json());

app.use('/students', studentsRoutes);
//.......app.use('/some-other-routes-heres', some-other-routes, some other controlerss like Teachers, Admin etc...);.................


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});