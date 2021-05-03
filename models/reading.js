module.exports = (sequelize, DataTypes) => {
    const Entries = sequelize.define('Entries', {
    
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
 
  
  },
  
  {timestamps: false});
  
    return Entries;
  };
  
  
    
   
  