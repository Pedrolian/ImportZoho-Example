const logger = require('../utility/WinstonLogger');
logger.setPath('../log');

/* 
logger.error("Test err message 3");
logger.warn("Test warn message");
logger.info("Test info message");
 */

const options = {
    from: new Date() - (24 * 60 * 60 * 1000),
    until: new Date(),
    limit: 10,
    start: 0,
    //fields: ['message']
  };
  
  logger.query(options, function (err, results) {
    if (err) {
      throw err;
    }
  
    console.log(results);
  });