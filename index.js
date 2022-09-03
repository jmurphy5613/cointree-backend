const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

const db = require('./models');

const jobRouter = require('./routes/job');
app.use('/job', jobRouter);


db.sequelize.sync().then(
    app.listen(process.env.PORT, () => {
        console.log('LISTEN');
    })
);