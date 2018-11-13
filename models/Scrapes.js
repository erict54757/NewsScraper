module.exports = function(sequelize, DataTypes){
    var Scrapes = sequelize.define("Scrapes",{
      
        headline: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1,255]
            }
        },
 
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1,255]
            }
        }

    });

    Scrapes.associate = function(models){
        Scrapes.belongsTo(models.Accounts, {
            foreignKey: "Scrapper_id"
        });
    }

    Scrapes.associate = function(models){
        Scrapes.hasMany(models.Notes, {
            foreignKey: "Scrapes_id"
        })
    }

    return Scrapes;
}