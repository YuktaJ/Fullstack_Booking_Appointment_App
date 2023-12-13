const Sequelize = require('sequelize').Sequelize;

//connection to the mysql 
const sequelize = new Sequelize('Booking-Appointment', 'root', 'Laxmip@2013', {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;



