'use strict';

require('dotenv').config();

// Start the web server.
require('./server.js').start(process.env.PORT || 3001);
