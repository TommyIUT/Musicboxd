const sequelize = require('./sequelize');
const { QueryTypes } = require('sequelize');


sequelize.query('SELECT * FROM userbox', {
  type: QueryTypes.SELECT
}).then(results => {
  console.log(results);
}).catch(error => {
  console.log(error);
});


