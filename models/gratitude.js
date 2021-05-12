module.exports = (sequelize, DataTypes) => {
    
    const Gratitude = sequelize.define('Gratitude', {
       

    gratefulFor: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
    }, 
    
  },

  dayOf: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      len: [1],
  },  
},

},
  
  
  {timestamps: false});
  
    return Gratitude;
  };
  
  
    
   
  