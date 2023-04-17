require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});



(async () => {
    console.log(sequelize.DB_USERNAME);
    console.log(process.env.DB_NAME)
    try {
      await sequelize.authenticate();
      console.log('Connexion à la base de données réussie !');
    } catch (error) {
      console.error('Impossible de se connecter à la base de données :', error);
    }
  })();
  
module.exports = sequelize;