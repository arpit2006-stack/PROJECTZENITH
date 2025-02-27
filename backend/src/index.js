import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";

import inventoryRoutes from './routes/inventory.routes.js'
import cartRouter from "./routes/cart.routes.js";

import bodyParser from "body-parser";

const app = express();


app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true, 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Use authentication routes
app.use("/api/auth", authRoutes);


app.use("/api/admin",inventoryRoutes);


 
app.use("/api/cart", cartRouter);


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
