"use strict";
exports.__esModule = true;
/* eslint-disable prettier/prettier */
var graphql_1 = require("@nestjs/graphql");
var path_1 = require("path");
var definitionFactory = new graphql_1.GraphQLDefinitionsFactory();
definitionFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: (0, path_1.join)(process.cwd(), 'src/schema/graphql.ts'),
    outputAs: 'class'
});
