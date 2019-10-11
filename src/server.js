const knex = require('knex')
const app = require('./app');

const { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
})

app.set('db', db) //set a property called db with the knex instance as the value

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})
