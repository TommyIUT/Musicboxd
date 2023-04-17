require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});


(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connexion à la base de données réussie !');
    } catch (error) {
      console.error('Impossible de se connecter à la base de données :', error);
    }
  })();
  
  