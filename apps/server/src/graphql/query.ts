import { GraphQLObjectType } from 'graphql'

export const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Query type',
    fields: () => ({
        // Here we'll add all existing queries in modules folder
    })
})