module.exports = function(sequelize, DataTypes) {
    var Notes = sequelize.define("Notes",{
        note: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1,255]
            }
        },
    });

    Notes.associate = function(models){
        Notes.belongsTo(models.Accounts, {foreignKey: "User_id"});
    }

     Notes.associate = function(models){
        Notes.belongsTo(models.Scrapes, {foreignKey: "Scrapes_id"});
    }

    return Notes;
}