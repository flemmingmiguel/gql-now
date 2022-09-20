import { createServer } from "https://cdn.skypack.dev/@graphql-yoga/common?dts";
export { makeExecutableSchema } from "https://cdn.skypack.dev/@graphql-tools/schema?dts";
import type { GraphQLSchema } from "https://cdn.skypack.dev/graphql?dts";

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
