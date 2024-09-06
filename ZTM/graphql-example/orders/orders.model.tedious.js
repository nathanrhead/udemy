// const orders = [
//   {
//     date: '2005-0505',
//     subtotal: 90.22,
//     items: [
//       {
//         product: {
//           id: 'redshoe',
//           description: 'Old Red Shoe',
//           price: 45.11
//         },
//         quantity: 2
//       }
//     ]
//   }
// ];

'use strict';

const getAllOrders = () => {
  const result = []; // Orders is an array.
  const Request = require('tedious').Request;
  const { dbConnectTedious } = require('../db_connect');
  // const TYPES = require('tedious').TYPES;
  const { Connection, config } = dbConnectTedious();
  const connection = new Connection(config);  
  const request = new Request('SELECT TOP (10) [OrderNumber] FROM [StagingHub].[dbo].[Orders]', (err, rowCount) => { 
    if (err) console.log({err});
    else console.log({result, rowCount});
  });

  request.on('row', function(columns) {    
    columns.forEach(function(column) {  
      if (column.value === null) {  
        console.log('NULL');  
      } else {
        const order = {  // Each order is an object.
          date: '',
          subtotal: 0,
          items: [{ itemNumber: result }]
        };
        result.push(order);
        }  
    });
  });

  // Close the connection after the final event emitted by the request, after the callback passes.
  request.on('requestCompleted', () => {
    connection.close();
  });

  // Connect to the DB.
  connection.on('connect', (err) => {  
    // If no error, then good to proceed.
    if (!err) {
      console.log('Connected to the DB.');
      connection.execSql(request);
    } else console.log({err});
  });
  connection.connect();

  console.log({result});
};

module.exports = { getAllOrders };
