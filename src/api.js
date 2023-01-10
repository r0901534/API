const express = require(`express`);
require(`dotenv`).config();

const mongoose = require(`mongoose`);

const cors = require('cors')
const router = require('./routes');
const authRouter = require('./authServer');

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))
app.options('*', cors()) // include before other routes

app.use(express.json());
app.use(router);
app.use(authRouter);

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Succesfully connected to the database!');
        app.listen(process.env.PORT, () => {
            console.log(`Server is up and running on ${process.env.PORT}`);
        });
    })
    .catch((e) => console.log(`Failed to connect to the database. Error ${e}`));
