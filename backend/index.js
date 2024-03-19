const express = require('express');
const cors = require('cors');
const workflowRoutes = require('./routes/workflow.routes');
const connection=require("./config/db")

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/workflows', workflowRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to database")
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Error connecting to database")
    console.log(error)
  }
});
