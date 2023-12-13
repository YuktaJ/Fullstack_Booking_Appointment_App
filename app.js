const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./connections/database');
const User = require("./models/user")
const userRoutes = require('./routes/User');

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(express.json());
app.use(userRoutes)

sequelize.sync().then((res) => {
    app.listen(3000);
    console.log("Connected")
}).catch(err => {
    console.log(err);
});




