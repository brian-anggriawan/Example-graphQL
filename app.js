import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

import schema from './lib/graphql';

mongoose.connect('mongodb://localhost:27017/football', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error connect database');
}).once('open', () => {
    console.log('Success connect database');
});



const app = express();
const port = 2312;

app.get('/', (req, res) => {
    res.status(200).json({
        code: 'OK',
        message: 'Home server graphQL'
    });
});

app.use('/graphql',graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})));


app.listen(port, ()=> {
    console.log('Server graphql berjalan di port:', port);
});