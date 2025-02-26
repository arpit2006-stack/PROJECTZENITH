import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
<<<<<<< HEAD
import inventoryRoutes from './routes/inventory.routes.js'
=======
import cartRouter from "./routes/cart.routes.js";
>>>>>>> 28f9dc83b227a34ef974c776a1498daafb580ac4
import bodyParser from "body-parser";

const app = express();

// ✅ Enable CORS for frontend (http://localhost:5173)
app.use(cors({
    origin: "http://localhost:5173", // Allow only frontend requests
    credentials: true, // Allow cookies, authorization headers
}));

// ✅ Parse JSON requests
app.use(bodyParser.json());

// ✅ Use authentication routes
app.use("/api/auth", authRoutes);

<<<<<<< HEAD
app.use("/api/admin",inventoryRoutes);
=======

// use add to cart 
// app.use("/api/cart", cartRouter);

>>>>>>> 28f9dc83b227a34ef974c776a1498daafb580ac4

// ✅ Error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    const StatusCode = err.statusCode || 500;
    res.status(StatusCode).json({ message: err.message });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
    connectDB();
});
