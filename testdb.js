const sequelize = require('./sequelize');

console.log(process.env);
console.log("--------------------------");
console.log(process.env.DB_DATABASE);
// Tester la connexion à la base de données
sequelize.authenticate()
  .then(() => {
    console.log('La connexion à la base de données a été établie avec succès.');
  })
  .catch((error) => {
    console.error('Impossible de se connecter à la base de données :', error);
  });