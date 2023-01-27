import { GraphQLObjectType } from 'graphql'

export const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation type',
    fields: () => ({
        // Here we'll add all existing mutations in modules folder
    })
})