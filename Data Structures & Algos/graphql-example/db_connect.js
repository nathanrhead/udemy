'use strict';
require('dotenv').config();

// Connection to Mcrosoft SQL Server DB via the npm package Tedious; no async, only works with callbacks.
function dbConnectTedious() {
  const Connection = require('tedious').Connection;  
  const config = {  
      server: process.env.HOST,
      authentication: {
          type: 'default',
          options: {
              userName: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD
          }
      },
      options: {
          // If you are on Microsoft Azure, you need encryption:
          // encrypt: true,
          trustServerCertificate: true, // For self-signed certificates or locally hosted servers.
          database: process.env.DB_NAME
      }
  };  
  return { Connection, config };
}

// Connection to Microsoft SQL Server DB via the npm package node-mssql, which has async-and-await functionality.
function dbConnectMsSql() {
  const sql = require('mssql')
  const sqlConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.HOST,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // For self-signed certificates or locally hosted servers.
    }
  }
  return { sql, sqlConfig };
}

module.exports = {
  dbConnectTedious,
  dbConnectMsSql,
}
