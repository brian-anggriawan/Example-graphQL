import { GraphQLNonNull } from 'graphql';
import { playerType, playerInputType } from '../../types/player';
import playerModel from '../../../models/player';

export default {
    type: playerType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(playerInputType)
        }
    },
    resolve(root, params) {
        const model = new playerModel(params.data);
        const newPlayer = playerModel.save();
        
        if (!newPlayer) throw new Error('Cannot create new player');
        
        return newPlayer;
    }
};  