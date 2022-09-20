import { createServer } from "@graphql-yoga/common";
export { makeExecutableSchema } from "@graphql-tools/schema";
import type { GraphQLSchema } from "graphql";

interface serverOpts {
  schema: GraphQLSchema;
}

const graphQLServer = (opts: serverOpts) =>
  createServer({
    graphiql: {
      defaultQuery: /* GraphQL */ `
        query {
          greetings
        }
      `,
    },
    schema: opts.schema,
  });

const xql_server = (_req: Request, opts: serverOpts) => {
  return graphQLServer(opts).handleRequest(_req);
};

export { createServer, xql_server };
