import { GraphQLNonNull, GraphQLID } from 'graphql';
import { playerType } from '../../types/player';
import playerModel from '../../../models/player';

export default {
    type: playerType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return playerModel.findById(params.id).exec();
    }
};  