require('dotenv').config({path: '../../../.env'});

const Logger = require('import_Zoho/utility/WinstonLogger.js');
Logger.setPath('../../../log');

const ZohoClass = require('import_Zoho/class/Zoho');
const Zoho = new ZohoClass();

console.time("App");

// Search example
Zoho.GetId("ImportacaoTeste", '116652000037332317', { surpress: false })
.then(data => {

  Logger.info(`Return:`);
  console.log(data['116652000037332317']);
  console.timeEnd("App");

})
.catch(error => {
  Logger.error(error);
});
