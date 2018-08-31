export const count = `
type Count {
    account_controls: Int
    accounts: Int
    action_traces: Int
    block_states: Int
    blocks: Int
    pub_keys: Int
    transaction_traces: Int
    transactions: Int
}

extend type Query {
    count: Count
}
`;
