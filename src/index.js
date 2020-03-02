const express = require('express');
require('./db/mongoose');
const expenditureRouter = require('./routers/expenditure');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(expenditureRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})