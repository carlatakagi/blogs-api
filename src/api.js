const express = require('express');

// ...

const app = express();

const routes = require('./router');
const errorHandler = require('./middlewares/error');

app.use(express.json());

app.use(routes);
// ...
app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
