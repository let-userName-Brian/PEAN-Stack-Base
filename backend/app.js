const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
//const Pool = require('pg').Pool;

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//DB connection string
// const Pool = new Pool({
//   password: "root",
//   user: "root",
//   host: "postgres",
//   port: 5432,
//   database: "root"
// });

//routes    
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

