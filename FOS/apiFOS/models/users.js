const Sequelize = require('sequelize');
// var sequelize = require('sequelize');

const User = global.sequelize.define('users', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  lastname: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  login: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  password: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'users'
});
// create table with user model
// User.sync() // creer les table uniquement si elle n'existe pas dans la BDD avec sequelize
//   .then(() => console.log('Oh yeah! User table created successfully'))
//   .catch(err => console.log('BTW, did you enter wrong database credentials?'));

// create some helper functions to work on the database
User.createUser = async ({ name, password }) => {
  return await User.create({ name, password });
};
User.getAllUsers = async () => {
  return await User.findAll();
};
User.getUser = async obj => {
  return await User.findOne({
    where: obj,
  });
};
module.exports = User;