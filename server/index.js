const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');
const app = express();
app.use(express.json());
app.use(cors());

const ctrl = require('./controller.js');


app.listen(4040, () => console.log('Server running on 4040'))