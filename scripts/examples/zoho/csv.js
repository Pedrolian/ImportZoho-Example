require('dotenv').config({path: '../../../.env'});

// Mass Insert
const ReplaceKey = require('import_Zoho/utility/ReplaceKey.js');
const Logger = require('import_Zoho/utility/WinstonLogger.js');
Logger.setPath('../../../log');

const ZohoClass = require('import_Zoho/class/Zoho');
const Zoho = new ZohoClass();

const CsvClass = require('import_Zoho/class/CSV');
const csv = new CsvClass('../../../data/Example_Users.csv', { "separator": ",", "whitelist": ["first_name","last_name"] });
csv.ParseFile()
.then(csv_parsed => {

  csv_parsed = csv_parsed.slice(0,1);
  let zoho_insert_array = ReplaceKey.exchange(csv_parsed,  { "first_name": "Name" });

  zoho_insert_array = zoho_insert_array.map(row => {
    row.Name = row.Name.slice(0,20);
    return row;
  });

  Zoho.Insert("ImportacaoTeste", zoho_insert_array)
  .then((response_data) => {
    Logger.warn(`--------------`);
    Logger.warn(`Done.`);
    Logger.warn(`Success: ${response_data.success.length}`);
    Logger.warn(`Error: ${response_data.error.length}`);
    Logger.warn(`--------------`);
    console.timeEnd("App");
  })

});
