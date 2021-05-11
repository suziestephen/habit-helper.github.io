//Use brcypt to hash password 
const bcrypt = require("bcryptjs");

//Create model for user
module.exports = function(sequilize, DataTypes) {
    const User = sequilize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"]
            }
        },
    });


  
    return User;
};