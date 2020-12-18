/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('learners_to_groups', {
    groups_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'groups',
        key: 'id'
      }
    },
    learners_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'learners',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'learners_to_groups'
    });
};
