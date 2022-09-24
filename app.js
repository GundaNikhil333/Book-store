const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)// localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin:3YiMJU9G0WaRxJp1@cluster0.ungqcmh.mongodb.net/test",
    ).then(()=> console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
//3YiMJU9G0WaRxJp1