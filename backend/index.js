const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const workflowRoutes = require('./routes/workflowRoutes');
const connection=require("./config/db")

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
