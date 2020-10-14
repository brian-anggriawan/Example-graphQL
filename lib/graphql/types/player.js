import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLID } from 'graphql';
import GraphQLDate from 'graphql-date';

export const playerType = new GraphQLObjectType({
    name: 'player',
    description: 'player type',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        club: {
            type: GraphQLString
        },
        position: {
            type: GraphQLString
        },
        nationality: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLDate
        },
        updatedAt: {
            type: GraphQLDate
        }
    })
});

export const playerInputType =  new GraphQLInputObjectType({
    name: 'playerInput',
    description: 'player input type',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        club: {
            type: GraphQLString
        },
        position: {
            type: GraphQLString
        },
        nationality: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLDate
        },
        updatedAt: {
            type: GraphQLDate
        }
    })
});