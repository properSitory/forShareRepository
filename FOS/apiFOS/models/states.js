/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('states', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contracttype: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dateStart: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateEnd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    employer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    jobname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    trainingsFinish: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    comment: {
      type: "LONGTEXT",
      allowNull: true
    },
    learners_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'learners',
        key: 'id'
      },
      unique: "fk_states_learners1"
    },
    groups_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'id'
      },
      unique: "fk_states_groups1"
    }
  }, {
    sequelize,
    tableName: 'states'
    });
};
