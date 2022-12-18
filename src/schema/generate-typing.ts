/* eslint-disable prettier/prettier */
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionFactory = new GraphQLDefinitionsFactory();
definitionFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/schema/graphql.ts'),
    outputAs: 'class'
});