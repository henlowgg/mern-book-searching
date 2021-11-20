const express = require('express');
const path = require('path');
// will have to import Apollo Server from apollo-server-express here
const { ApolloServer } = require('apollo-server-express');

// after this line, we can use gql from apollo-server-express
// next will have to import typeDefs and resolvers from schema

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const {authMiddleware} = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:authMiddleware
});
