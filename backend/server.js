const { app, server } = require('../backend/socket/socket');
const dotenv = require('dotenv');
const connectToMongoDB = require('./db/connectToMongoDB');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();


app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });


app.get("/", (req, res) => {
    res.send("Your website is live");
});
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
