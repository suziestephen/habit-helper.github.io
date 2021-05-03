module.exports = (sequelize, DataTypes) => {
    
    const Habits = sequelize.define('Habits', {
      
      habitName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },  
    
  },
  
  
  {timestamps: false});
  
    return Habits;
  };
  
  
    
   
  