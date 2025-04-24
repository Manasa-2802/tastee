import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
