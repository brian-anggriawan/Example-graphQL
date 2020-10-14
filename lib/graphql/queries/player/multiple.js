import { GraphQLList } from 'graphql';
import { playerType } from '../../types/player';
import playerModel from '../../../models/player';

export default {
    type: new GraphQLList(playerType),
    resolve(root, params) {
        return playerModel.find().exec();
    }
};  