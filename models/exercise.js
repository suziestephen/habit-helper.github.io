module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
    
      exercise: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
      },  
    },

    dayOf: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1],
    },  
  },

  },
  
  {timestamps: false});
  
    return Exercise;
  };
  
  
    
   
  