
//const 
const cors = require('cors');
const express = require('express');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { transfersRouter } = require('./routes/transfer.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transfersRouter);
// const express = require('express');

module.exports = { app };