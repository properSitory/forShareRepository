/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('years', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dateStart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateEnd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'years'
    });
};
