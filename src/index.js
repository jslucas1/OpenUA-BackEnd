// Express is an npm package that is used to launch the web server
const express = require('express');
// Require mongoose file so that the app can connect to the database
require('./db/mongoose');
// Require the expenditure file in the router folder so that the app has access to the routes for the app
const expenditureRouter = require('./routers/expenditure');

// Creates app using express method
const app = express();
// App is created on port 3000
const port = process.env.PORT || 3000;

// Allows server to recognize JSON objects that are sent to it, used for PUT and POST requests
app.use(express.json());

// App is allowed to use the expenditure route
 app.use(expenditureRouter);

// App listens on port 3000 for connections
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})