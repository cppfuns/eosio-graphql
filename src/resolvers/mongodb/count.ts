import { MongoClient } from "mongodb";
import * as queries from "bcskill-eosio-mongodb-queries";
// import { flattenObject } from "../../utils";
// import { isString } from "util";

const getCountResolver = ({
  mongoClient,
}: {
  mongoClient: MongoClient,
}) => async (_: any, options: any) => {
    const now = Date.now();
    const account_controls = await queries.count(mongoClient, "account_controls");
    const accounts = await queries.count(mongoClient, "accounts");
    const action_traces = await queries.count(mongoClient, "action_traces");
    const block_states = await queries.count(mongoClient, "block_states");
    const blocks = await queries.count(mongoClient, "blocks");
    const pub_keys = await queries.count(mongoClient, "pub_keys");
    const transaction_traces = await queries.count(mongoClient, "transaction_traces");
    const transactions = await queries.count(mongoClient, "transactions");

    const elapsed = Date.now() - now;
    console.log(JSON.stringify({elapsed, query: "mongodb.count", options}));
    return {
        account_controls,
        accounts,
        action_traces,
        block_states,
        blocks,
        pub_keys,
        transaction_traces,
        transactions,
    };
};

export default getCountResolver;
