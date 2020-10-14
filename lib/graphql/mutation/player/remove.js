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
        const removePlayer = playerModel.findByIdAndRemove(params.id).exec();

        if (!removePlayer) throw new Error('Gagal hapus');

        return removePlayer;
    }
};  