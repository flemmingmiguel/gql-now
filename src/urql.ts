import {
  createClient,
  dedupExchange,
  fetchExchange,
  gql,
} from "https://cdn.skypack.dev/@urql/core?dts";
import { cacheExchange } from "https://cdn.skypack.dev/@urql/exchange-graphcache?dts";
import { executeExchange } from "https://cdn.skypack.dev/@urql/exchange-execute?dts";

import type { GraphQLSchema } from "https://cdn.skypack.dev/graphql?dts";

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
