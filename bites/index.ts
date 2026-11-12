import express from "express";
import restaurantRoutes from "./routes/restaurants";
import cuisineRoutes from "./routes/cuisines";
import { errorHandler } from "./middlewares/errorHandler";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/restaurants", restaurantRoutes);
app.use("/cuisines", cuisineRoutes);

app.use(errorHandler);
app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.error("Error starting server:", error);
  });