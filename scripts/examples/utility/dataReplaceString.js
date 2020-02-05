// Parse examples
const DataReplace = require('import_Zoho/utility/DataReplaceString.js');

const test = DataReplace.replace({ "id": "00T1Q00003vNfrqUAC", "description": "ABC" }, `((Subject:equals:$_id)AND(Contact_Name.name:equals:$_description))`);
console.log(test);
