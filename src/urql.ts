import { createClient, dedupExchange, fetchExchange, gql } from "@urql/core";
// export { createClient, gql } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import { executeExchange } from "@urql/exchange-execute";

import type { GraphQLSchema } from "graphql";

const urql_client = (url = "/api/graphql", schema: GraphQLSchema) =>
  createClient({
    url: url,
    exchanges: [
      dedupExchange,
      // Replace the default cacheExchange with the new one
      cacheExchange({}),
      // fetchExchange,
      executeExchange({
        schema,
      }),
    ],
  });

export { gql, urql_client };
