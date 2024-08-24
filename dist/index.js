import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import userRoutes from './routes/UserRoutes.js';
import cors from 'cors';
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
await connectDB();
app.use('/users', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map