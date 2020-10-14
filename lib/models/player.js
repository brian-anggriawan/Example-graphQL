import mongoose from 'mongoose';
import bluebird from 'bluebird';
import date from 'graphql-date';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;
const player = new Schema({
    name: String,
    club: String,
    position: String,
    nationality: String,
    createdAt: Date,
    updatedAt: Date
});

export default mongoose.model('players', player);