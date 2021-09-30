const express = require('express');
require('dotenv').config();
const app = require('./server');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;

mongoose
.connect(process.env.DATABASE)
.then(()=> console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error: ", err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));