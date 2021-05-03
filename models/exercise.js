module.exports = (sequelize, DataTypes) => {
    const Entries = sequelize.define('Entries', {
    
 
      habitName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },  

      exercise: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
      },  
    },
  },
  
  {timestamps: false});
  
    return Entries;
  };
  
  
    
   
  