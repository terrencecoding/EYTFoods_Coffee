import express from "express";
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";
import checkoutRoutes from "./routes/checkout.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/cart", require("./routes/cart"));
// app.use("/api/checkout", require("./routes/checkout"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
