module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
    
      userId: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          len: [1],
          min: 1,
        },
      },

      exercise: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
      },  
    },

    located: {
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
  
  
    
   
  