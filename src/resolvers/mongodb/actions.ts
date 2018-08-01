import { client } from "../../utils/mongoClient";
import { flattenObject } from "../../utils";
import { getActions } from "eosio-mongodb-queries";
import { isString } from "util";

export const actions = async (_: any, options: any) => {
    if (!client) { throw new Error("MongoClient is not initialized"); }
    // Handles simple data match
    if (options.match && options.match.data) { options.match = flattenObject(options.match); }
    // Handle Regex queries
    if (options.match && isString(options.match)) { options.match = JSON.parse(options.match); }

    const now = Date.now();
    const cursor = await getActions(client, options);
    const result = await cursor.toArray();
    const elapsed = Date.now() - now;
    console.log(JSON.stringify({elapsed, query: "mongodb.actions", options}));
    return result;
};