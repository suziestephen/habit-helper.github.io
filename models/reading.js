module.exports = (sequelize, DataTypes) => {
    const Reading = sequelize.define('Reading', {
      
      userId: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          len: [1],
          min: 1,
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

      dayOf: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [1],
      },  
    },
 
  
  },
  
  {timestamps: false});
  
    return Reading;
  };
  
  
    
   
  