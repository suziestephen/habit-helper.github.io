module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History', {
    
      habit: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
       
      book: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
        },
      },

      pages: {
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
      gratefulFor: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
      },  
    },
  },
  
  {timestamps: false});
  
    return History;
  };
  
  
    
   
  