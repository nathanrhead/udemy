'use strict';

const getAllOrders = async () => {
  const { dbConnectMsSql } = require('../db_connect');
  const { sql, sqlConfig } = dbConnectMsSql();  
  try {
    sql.connect(sqlConfig);
    const result = await sql.query`SELECT TOP (1) * FROM [StagingHub].[dbo].[Orders]`;
    const values = result.recordset;
    const returnArray = []; // The collection of orders is an array.
    if (Array.isArray(values)) {
      values.forEach(value => {
        console.log({value});
        const order = {  // Each order is an object.
          date: '',
          subtotal: 0,
          items: [{ itemNumber: value.OrderNumber }]
        };
        returnArray.push(order);
      });
    }
    return returnArray;
  } catch (err) {
    console.error({err});
  }
};

module.exports = { getAllOrders };
