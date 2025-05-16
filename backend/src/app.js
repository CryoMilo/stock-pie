const express = require("express");
const stockRoutes = require("./routes/stockRoutes");

const app = express();
app.use(express.json());

app.use("/api/stock", stockRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is running at Port ", PORT));
